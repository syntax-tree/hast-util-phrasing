'use strict'

var test = require('tape')
var u = require('unist-builder')
var h = require('hastscript')
var phrasing = require('.')

test('phrasing()', function(t) {
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
