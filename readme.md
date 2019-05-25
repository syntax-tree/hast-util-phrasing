# hast-util-phrasing

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[**hast**][hast] utility to check if a [*node*][node] is [*phrasing*][spec]
content.

## Install

[npm][]:

```sh
npm install hast-util-phrasing
```

## Usage

```js
var phrasing = require('.')

// Given flow content:
phrasing({
  type: 'element',
  tagName: 'div',
  children: [{type: 'text', value: 'Alpha'}]
})
// => false

// Given a phrasing element:
phrasing({
  type: 'element',
  tagName: 'meta',
  properties: {itemProp: 'bravo'},
  children: []
})
// => true

// Given a non-phrasing element:
phrasing({
  type: 'element',
  tagName: 'meta',
  properties: {charSet: 'utf8'},
  children: []
})
// => false

// Given text:
phrasing({type: 'text', value: 'Delta'})
// => true
```

## API

### `phrasing(node)`

Check if the given value is [*phrasing*][spec] content.

###### Parameters

*   `node` (`*`) — Value to check, typically [`Node`][node].

###### Returns

`boolean` — Whether `node` passes the test.

## Contribute

See [`contributing.md` in `syntax-tree/.github`][contributing] for ways to get
started.
See [`support.md`][support] for ways to get help.

This project has a [Code of Conduct][coc].
By interacting with this repository, organisation, or community you agree to
abide by its terms.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/syntax-tree/hast-util-phrasing.svg

[build]: https://travis-ci.org/syntax-tree/hast-util-phrasing

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/hast-util-phrasing.svg

[coverage]: https://codecov.io/github/syntax-tree/hast-util-phrasing

[downloads-badge]: https://img.shields.io/npm/dm/hast-util-phrasing.svg

[downloads]: https://www.npmjs.com/package/hast-util-phrasing

[size-badge]: https://img.shields.io/bundlephobia/minzip/hast-util-phrasing.svg

[size]: https://bundlephobia.com/result?p=hast-util-phrasing

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/join%20the%20community-on%20spectrum-7b16ff.svg

[chat]: https://spectrum.chat/unified/syntax-tree

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[contributing]: https://github.com/syntax-tree/.github/blob/master/contributing.md

[support]: https://github.com/syntax-tree/.github/blob/master/support.md

[coc]: https://github.com/syntax-tree/.github/blob/master/code-of-conduct.md

[spec]: https://html.spec.whatwg.org/#phrasing-content-2

[hast]: https://github.com/syntax-tree/hast

[node]: https://github.com/syntax-tree/hast#nodes
