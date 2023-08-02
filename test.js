import assert from 'node:assert/strict'
import test from 'node:test'
import {h} from 'hastscript'
import {u} from 'unist-builder'
import {phrasing} from './index.js'

test('phrasing()', async function (t) {
  await t.test('should expose the public api', async function () {
    assert.deepEqual(Object.keys(await import('./index.js')).sort(), [
      'phrasing'
    ])
  })

  await t.test('should support flow', async function () {
    assert(!phrasing(h('div', 'Alpha')))
  })

  await t.test('should support meta w/ itemProp', async function () {
    assert(phrasing(h('meta', {itemProp: 'bravo'})))
  })

  await t.test('should support meta w/o itemProp', async function () {
    assert(!phrasing(h('meta', {charSet: 'utf8'})))
  })

  await t.test('should support text', async function () {
    assert(phrasing(u('text', 'charlie')))
  })

  await t.test('should support inter-element whitespace', async function () {
    assert(phrasing(u('text', '\n\t')))
  })

  await t.test('should support listed elements (a)', async function () {
    assert(phrasing(h('a', {href: '/'}, 'Delta')))
  })

  await t.test('should support listed elements (b)', async function () {
    assert(phrasing(h('b', {id: 'echo'}, 'Foxtrott')))
  })

  await t.test('should support listed elements (wbr)', async function () {
    assert(phrasing(h('wbr')))
  })

  await t.test('should support embedded content', async function () {
    assert(phrasing(h('svg')))
  })

  await t.test('should support body-ok links', async function () {
    assert(phrasing(h('link', {rel: ['stylesheet'], href: 'index.css'})))
  })
})
