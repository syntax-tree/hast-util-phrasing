import assert from 'node:assert/strict'
import test from 'node:test'
import {u} from 'unist-builder'
import {h} from 'hastscript'
import {phrasing} from './index.js'

test('phrasing()', () => {
  assert.ok(!phrasing(h('div', 'Alpha')), 'flow')
  assert.ok(phrasing(h('meta', {itemProp: 'bravo'})), 'meta w/ itemProp')
  assert.ok(!phrasing(h('meta', {charSet: 'utf8'})), 'meta w/o itemProp')
  assert.ok(phrasing(u('text', 'charlie')), 'text')
  assert.ok(phrasing(u('text', '\n\t')), 'inter-element white-space')
  assert.ok(phrasing(h('a', {href: '/'}, 'Delta')), 'listed elements (a)')
  assert.ok(phrasing(h('b', {id: 'echo'}, 'Foxtrott')), 'listed elements (b)')
  assert.ok(phrasing(h('wbr')), 'listed elements (wbr)')
  assert.ok(phrasing(h('svg')), 'embedded content')
  assert.ok(
    phrasing(h('link', {rel: ['stylesheet'], href: 'index.css'})),
    'body-ok links'
  )
})
