// Blog card prop tests. Run: npx tsx --test tests/wp-props.test.ts
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { trimPortfolioRelated, trimPostCards } from '../lib/wp-props';

const post = (featured: any[] | undefined) => ({
  id: 1,
  slug: 'a-post',
  title: { rendered: 'A Post Title' },
  _embedded: { 'wp:featuredmedia': featured },
});

test('blog cards keep the Media Library alt text', () => {
  const [card] = trimPostCards([
    post([{ source_url: 'https://cms.grehasoft.com/wp-content/uploads/a.jpg', alt_text: '  Hand drawing an SEO flowchart  ', media_details: { sizes: {} } }]),
  ]);
  assert.deepEqual(card._embedded['wp:featuredmedia'], [
    { source_url: 'https://cms.grehasoft.com/wp-content/uploads/a.jpg', alt_text: 'Hand drawing an SEO flowchart' },
  ]);
});

test('missing or empty alt text becomes an empty string, never the post title', () => {
  const cards = trimPostCards([
    post([{ source_url: 'https://cms.grehasoft.com/wp-content/uploads/b.jpg', alt_text: '' }]),
    post([{ source_url: 'https://cms.grehasoft.com/wp-content/uploads/c.jpg' }]),
    post([{ source_url: 'https://cms.grehasoft.com/wp-content/uploads/d.jpg', alt_text: null }]),
  ]);
  for (const card of cards) {
    const media = card._embedded['wp:featuredmedia']?.[0] as any;
    assert.equal(media.alt_text, '');
    assert.notEqual(media.alt_text, 'A Post Title');
  }
});

test('posts without a featured image are unchanged', () => {
  const [card] = trimPostCards([post(undefined)]);
  assert.equal(card._embedded['wp:featuredmedia'], undefined);
});

test('other image props do not gain alt_text', () => {
  const [related] = trimPortfolioRelated([post([{ source_url: 'x.jpg', alt_text: 'Alt' }])]);
  assert.deepEqual(related._embedded['wp:featuredmedia'], [{ source_url: 'x.jpg' }]);
});
