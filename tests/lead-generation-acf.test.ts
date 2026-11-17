// Lead Generation ACF regression tests: the readers are now exported for the AI Marketing
// mapper, and the Lead Generation output must stay unchanged.
// Run: npx tsx --test tests/lead-generation-acf.test.ts
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { mapLeadGenerationAcf } from '../lib/adapters/lead-generation-acf';
import { leadGenerationContent } from '../lib/content/lead-generation';

const contentJson = JSON.parse(fs.readFileSync('wordpress/content/lead-generation-page-content.json', 'utf8'));

function acf(edit?: (a: any) => void) {
  const copy = structuredClone(contentJson.acf);
  edit?.(copy);
  return copy;
}

function map(input: unknown) {
  const warnings: string[] = [];
  const original = console.warn;
  console.warn = (message: string) => warnings.push(String(message));
  try {
    return { result: mapLeadGenerationAcf(input), warnings };
  } finally {
    console.warn = original;
  }
}

test('Lead Generation import content still maps to the local content exactly', () => {
  const { result, warnings } = map(acf());
  assert.deepEqual(warnings, []);
  assert.deepEqual(result, leadGenerationContent);
});

test('Lead Generation invalid data still falls back with one warning', () => {
  const cases: Array<[string, unknown]> = [
    ['empty array', []],
    ['missing hero', acf((a) => delete a.hero)],
    ['javascript: link', acf((a) => (a.hero.primary_cta.href = 'javascript:alert(1)'))],
    ['protocol-relative link', acf((a) => (a.hero.primary_cta.href = '//evil.example'))],
  ];
  for (const [name, input] of cases) {
    const { result, warnings } = map(input);
    assert.equal(result, null, name);
    assert.equal(warnings.length, 1, name);
  }
});

test('Lead Generation adapter exports only add the readers; the mapper entry is unchanged', () => {
  const source = fs.readFileSync('lib/adapters/lead-generation-acf.ts', 'utf8');
  assert.match(source, /export function mapLeadGenerationAcf\(acf: unknown\): LeadGenerationContent \| null/);
  for (const name of ['isRecord', 'fail', 'group', 'optionalText', 'text', 'href', 'lines', 'parseRichText', 'richText', 'cta', 'paragraphs']) {
    assert.match(source, new RegExp(`^export function ${name}\\(`, 'm'), name);
  }
});
