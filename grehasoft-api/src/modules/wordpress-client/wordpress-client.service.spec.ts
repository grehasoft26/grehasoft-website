import { describe, it, beforeEach, afterEach } from 'node:test';
import * as assert from 'node:assert/strict';
import { HttpException, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CacheService } from './cache.service';
import { WordPressClientService } from './wordpress-client.service';

const BASE = 'https://cms.example.test';
const CLIENTS = '/wp-json/wp/v2/clients?per_page=100&orderby=menu_order&order=asc';

type Route = { status?: number; body: unknown; totalPages?: string | null };

const makeClients = (from: number, to: number) =>
  Array.from({ length: to - from + 1 }, (_, i) => ({ id: 1000 + from + i, menu_order: from + i }));

describe('WordPressClientService.fetchAllPagesWP', () => {
  const realFetch = globalThis.fetch;
  let routes: Map<string, Route>;
  let requested: string[];
  let active: number;
  let maxActive: number;
  let service: WordPressClientService;

  // Serves canned responses by exact URL and records request order and concurrency.
  const install = (map: Record<string, Route>) => {
    routes = new Map(Object.entries(map).map(([path, route]) => [`${BASE}${path}`, route]));
  };

  beforeEach(() => {
    Logger.overrideLogger(false);
    requested = [];
    active = 0;
    maxActive = 0;
    globalThis.fetch = (async (url: string) => {
      requested.push(url);
      active++;
      maxActive = Math.max(maxActive, active);
      await new Promise((r) => setTimeout(r, 5));
      active--;
      const route = routes.get(url);
      if (!route) return new Response('{"code":"not_found"}', { status: 404 });
      const headers = new Headers({ 'Content-Type': 'application/json' });
      if (route.totalPages !== undefined && route.totalPages !== null) headers.set('X-WP-TotalPages', route.totalPages);
      return new Response(JSON.stringify(route.body), { status: route.status ?? 200, headers });
    }) as typeof fetch;

    const config = { get: (key: string) => (key === 'wordpress.baseUrl' ? BASE : key === 'wordpress.requestDelayMs' ? 1 : undefined) };
    service = new WordPressClientService(config as unknown as ConfigService, new CacheService());
  });

  afterEach(() => {
    globalThis.fetch = realFetch;
  });

  it('returns a single page when X-WP-TotalPages is 1', async () => {
    install({ [CLIENTS]: { body: makeClients(1, 40), totalPages: '1' } });

    const result = await service.fetchAllPagesWP(CLIENTS);

    assert.equal(result.length, 40);
    assert.deepEqual(requested, [`${BASE}${CLIENTS}`]);
  });

  it('fetches all 141 clients across two pages, keeping the original query', async () => {
    install({
      [CLIENTS]: { body: makeClients(1, 100), totalPages: '2' },
      [`${CLIENTS}&page=2`]: { body: makeClients(101, 141), totalPages: '2' },
    });

    const result = await service.fetchAllPagesWP<{ id: number; menu_order: number }>(CLIENTS);

    assert.equal(result.length, 141);
    assert.deepEqual(requested, [`${BASE}${CLIENTS}`, `${BASE}${CLIENTS}&page=2`]);
    assert.ok(requested.every((u) => u.includes('per_page=100&orderby=menu_order&order=asc')));
  });

  it('preserves page order (menu_order 1..141) and fetches pages sequentially', async () => {
    install({
      [CLIENTS]: { body: makeClients(1, 100), totalPages: '3' },
      [`${CLIENTS}&page=2`]: { body: makeClients(101, 120), totalPages: '3' },
      [`${CLIENTS}&page=3`]: { body: makeClients(121, 141), totalPages: '3' },
    });

    const result = await service.fetchAllPagesWP<{ menu_order: number }>(CLIENTS);

    assert.deepEqual(result.map((c) => c.menu_order), Array.from({ length: 141 }, (_, i) => i + 1));
    assert.equal(maxActive, 1);
  });

  it('removes items repeated across pages by id, keeping the first occurrence', async () => {
    const page1 = makeClients(1, 100);
    const page2 = [{ ...page1[99], menu_order: 999 }, ...makeClients(101, 141)];
    install({
      [CLIENTS]: { body: page1, totalPages: '2' },
      [`${CLIENTS}&page=2`]: { body: page2, totalPages: '2' },
    });

    const result = await service.fetchAllPagesWP<{ id: number; menu_order: number }>(CLIENTS);

    assert.equal(result.length, 141);
    assert.equal(new Set(result.map((c) => c.id)).size, 141);
    assert.equal(result[99].menu_order, 100);
  });

  for (const [label, totalPages] of [
    ['missing', null],
    ['non-numeric', 'abc'],
    ['zero', '0'],
    ['fractional', '1.5'],
  ] as const) {
    it(`keeps the first page when X-WP-TotalPages is ${label}`, async () => {
      install({ [CLIENTS]: { body: makeClients(1, 100), totalPages } });

      const result = await service.fetchAllPagesWP(CLIENTS);

      assert.equal(result.length, 100);
      assert.equal(requested.length, 1);
    });
  }

  it('caps runaway X-WP-TotalPages at 20 pages', async () => {
    const map: Record<string, Route> = { [CLIENTS]: { body: makeClients(1, 1), totalPages: '9999' } };
    for (let p = 2; p <= 20; p++) map[`${CLIENTS}&page=${p}`] = { body: makeClients(p, p), totalPages: '9999' };
    install(map);

    const result = await service.fetchAllPagesWP(CLIENTS);

    assert.equal(requested.length, 20);
    assert.equal(result.length, 20);
  });

  it('throws when the first page request fails', async () => {
    install({ [CLIENTS]: { status: 500, body: { code: 'internal_error' } } });

    await assert.rejects(service.fetchAllPagesWP(CLIENTS), HttpException);
  });

  it('throws instead of returning a partial list when a later page fails, and caches nothing', async () => {
    install({
      [CLIENTS]: { body: makeClients(1, 100), totalPages: '2' },
      [`${CLIENTS}&page=2`]: { status: 500, body: { code: 'internal_error' } },
    });

    await assert.rejects(service.fetchAllPagesWP(CLIENTS), HttpException);

    // A retry after WordPress recovers must refetch, not serve a cached partial list.
    install({
      [CLIENTS]: { body: makeClients(1, 100), totalPages: '2' },
      [`${CLIENTS}&page=2`]: { body: makeClients(101, 141), totalPages: '2' },
    });
    const result = await service.fetchAllPagesWP(CLIENTS);
    assert.equal(result.length, 141);
  });

  it('serves repeat calls from cache and shares concurrent in-flight calls', async () => {
    install({
      [CLIENTS]: { body: makeClients(1, 100), totalPages: '2' },
      [`${CLIENTS}&page=2`]: { body: makeClients(101, 141), totalPages: '2' },
    });

    const [a, b] = await Promise.all([service.fetchAllPagesWP(CLIENTS), service.fetchAllPagesWP(CLIENTS)]);
    const c = await service.fetchAllPagesWP(CLIENTS);

    assert.equal(requested.length, 2);
    assert.equal(a.length, 141);
    assert.equal(b, a);
    assert.equal(c, a);
  });
});
