import test from 'tape'
import {u} from 'unist-builder'
import h from 'hastscript'
import {phrasing} from './index.js'

test('phrasing()', (t) => {
  t.notOk(phrasing(h('div', 'Alpha')), 'flow')
  t.ok(phrasing(h('meta', {itemProp: 'bravo'})), 'meta w/ itemProp')
  t.notOk(phrasing(h('meta', {charSet: 'utf8'})), 'meta w/o itemProp')
  t.ok(phrasing(u('text', 'charlie')), 'text')
  t.ok(phrasing(u('text', '\n\t')), 'inter-element white-space')
  t.ok(phrasing(h('a', {href: '/'}, 'Delta')), 'listed elements (a)')
  t.ok(phrasing(h('b', {id: 'echo'}, 'Foxtrott')), 'listed elements (b)')
  t.ok(phrasing(h('wbr')), 'listed elements (wbr)')
  t.ok(phrasing(h('svg')), 'embedded content')
  t.ok(
    phrasing(h('link', {rel: ['stylesheet'], href: 'index.css'})),
    'body-ok links'
  )

  t.end()
})
