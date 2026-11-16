// SEO helper tests. Run: npx tsx --test tests/seo.test.ts
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { NextRequest } from 'next/server';
import {
  SITE_URL,
  absoluteUrl,
  buildBreadcrumbJsonLd,
  buildPageMetadata,
  canonicalPath,
  decodeEntities,
  plainTextExcerpt,
  resolveSiteUrl,
} from '../lib/seo';
import { postPath, servicePath, toInternalHref } from '../lib/internal-href';
import { proxy } from '../proxy';

test('site URL defaults to production and rejects CMS / staging / non-https hosts', () => {
  assert.equal(SITE_URL, 'https://grehasoft.com');
  assert.equal(resolveSiteUrl(undefined), 'https://grehasoft.com');
  assert.equal(resolveSiteUrl('  '), 'https://grehasoft.com');
  assert.equal(resolveSiteUrl('https://grehasoft.com/'), 'https://grehasoft.com');
  assert.equal(resolveSiteUrl('https://cms.grehasoft.com'), 'https://grehasoft.com');
  assert.equal(resolveSiteUrl('https://aquamarine-herring-959948.hostingersite.com'), 'https://grehasoft.com');
  assert.equal(resolveSiteUrl('http://grehasoft.com'), 'https://grehasoft.com');
  assert.equal(resolveSiteUrl('not a url'), 'https://grehasoft.com');
});

test('canonical paths are lowercase, query-free and without trailing slashes', () => {
  assert.equal(canonicalPath('/SEO/'), '/seo');
  assert.equal(canonicalPath('/seo?utm_source=x#top'), '/seo');
  assert.equal(canonicalPath('//portfolio//HaleHolidays/'), '/portfolio/haleholidays');
  assert.equal(canonicalPath(''), '/');
  assert.equal(absoluteUrl('/'), 'https://grehasoft.com/');
  assert.equal(absoluteUrl('/Blogs/SEO/Post/?a=1'), 'https://grehasoft.com/blogs/seo/post');
});

test('page metadata keeps Yoast text but never Yoast/CMS URLs', () => {
  const yoast = {
    title: 'Yoast Title',
    description: 'Yoast description',
    og_title: 'OG Title',
    og_url: 'https://cms.grehasoft.com/portfolio/haleholidays/',
    canonical: 'https://cms.grehasoft.com/portfolio/haleholidays/',
    og_image: [{ url: 'https://cms.grehasoft.com/wp-content/uploads/a.jpg', width: 1200, height: 630 }],
  };
  const m = buildPageMetadata({ path: '/portfolio/haleholidays', yoast });
  assert.equal(m.title, 'Yoast Title');
  assert.equal(m.description, 'Yoast description');
  assert.equal(m.alternates?.canonical, 'https://grehasoft.com/portfolio/haleholidays');
  const og = m.openGraph as any;
  assert.equal(og.url, 'https://grehasoft.com/portfolio/haleholidays');
  assert.equal(og.type, 'website');
  assert.equal(og.title, 'OG Title');
  assert.equal(og.description, 'Yoast description');
  assert.deepEqual(og.images, [{ url: 'https://cms.grehasoft.com/wp-content/uploads/a.jpg', width: 1200, height: 630 }]);
  const tw = m.twitter as any;
  assert.equal(tw.card, 'summary_large_image');
  assert.equal(tw.title, 'OG Title');
  assert.deepEqual(tw.images, ['https://cms.grehasoft.com/wp-content/uploads/a.jpg']);
  assert.equal('robots' in m, false, 'robots stay owned by the layouts');
});

test('page metadata falls back without inventing text', () => {
  const m = buildPageMetadata({ path: '/services' });
  assert.equal(m.title, undefined);
  assert.equal(m.description, undefined);
  assert.equal(m.alternates?.canonical, 'https://grehasoft.com/services');
  const f = buildPageMetadata({ path: '/x', yoast: { title: '  ' }, fallbackTitle: 'Fallback', fallbackDescription: 'Desc' });
  assert.equal(f.title, 'Fallback');
  assert.equal(f.description, 'Desc');

  const o = buildPageMetadata({ path: '/privacy', fallbackTitle: 'Privacy Policy | Grehasoft', fallbackOgTitle: 'Privacy Policy' });
  assert.equal(o.title, 'Privacy Policy | Grehasoft');
  assert.equal((o.openGraph as any).title, 'Privacy Policy');
  assert.equal((o.twitter as any).title, 'Privacy Policy');
  const y = buildPageMetadata({ path: '/x', yoast: { og_title: 'Yoast OG' }, fallbackOgTitle: 'Fallback OG' });
  assert.equal((y.openGraph as any).title, 'Yoast OG', 'Yoast wins over the fallback');
});

test('articles carry article Open Graph fields', () => {
  const m = buildPageMetadata({ path: '/blogs/seo/a', type: 'article', publishedTime: '2024-08-26T06:35:48Z', modifiedTime: '2024-08-27T00:00:00Z' });
  const og = m.openGraph as any;
  assert.equal(og.type, 'article');
  assert.equal(og.publishedTime, '2024-08-26T06:35:48Z');
  assert.equal(og.modifiedTime, '2024-08-27T00:00:00Z');
  assert.equal((buildPageMetadata({ path: '/a', publishedTime: 'x' }).openGraph as any).publishedTime, undefined);
});

test('BreadcrumbList has positions, decoded names and production URLs; duplicates collapse', () => {
  const ld = buildBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Home', path: '/' },
    { name: 'Branding &amp; Design', path: '/Branding-And-Graphic-Design/' },
  ]);
  assert.equal(ld['@type'], 'BreadcrumbList');
  assert.deepEqual(ld.itemListElement, [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://grehasoft.com/' },
    { '@type': 'ListItem', position: 2, name: 'Branding & Design', item: 'https://grehasoft.com/branding-and-graphic-design' },
  ]);
});

test('text helpers', () => {
  assert.equal(decodeEntities('A &amp; B &#8211; C &#x2019; &unknown;'), 'A & B – C ’ &unknown;');
  assert.equal(plainTextExcerpt('<p>Short <b>text</b></p>'), 'Short text');
  const long = plainTextExcerpt(`<p>${'word '.repeat(60)}</p>`, 50);
  assert.ok(long.length <= 50 && long.endsWith('…'), long);
});

test('frontend paths for posts and services', () => {
  const post = { slug: 'my-post', _embedded: { 'wp:term': [[{ taxonomy: 'category', slug: 'app' }, { taxonomy: 'category', slug: 'news' }]] } };
  assert.equal(postPath(post), '/blogs/app/my-post');
  assert.equal(postPath({ slug: 'x' }), '/blogs/uncategorized/x');
  assert.equal(servicePath('', '/website-design/', 'website-design'), '/website-design');
  assert.equal(toInternalHref('/seo1'), '/seo');
  assert.equal(toInternalHref('https://grehasoft.com/branding-and-design1/'), '/branding-and-graphic-design');
});

test('proxy lowercases mixed-case paths with a 308 and keeps the query string', () => {
  const run = (path: string) => proxy(new NextRequest(`https://grehasoft.com${path}`));

  const r = run('/SEO?utm_source=Ads&b=Y');
  assert.equal(r.status, 308);
  assert.equal(r.headers.get('location'), 'https://grehasoft.com/seo?utm_source=Ads&b=Y');

  assert.equal(run('/Blogs/SEO/Post').headers.get('location'), 'https://grehasoft.com/blogs/seo/post');
  // Percent-escapes are left alone (their hex digits are not "uppercase letters").
  assert.equal(run('/caf%C3%A9').headers.get('location'), null);
  // Lowercase paths pass through.
  for (const p of ['/', '/seo', '/seo?Q=1']) assert.equal(run(p).headers.get('location'), null, p);
});
