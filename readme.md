# hast-util-phrasing [![Build][build-badge]][build] [![Coverage][coverage-badge]][coverage] [![Downloads][downloads-badge]][downloads] [![Chat][chat-badge]][chat]

Check if a [node][] is a [**phrasing**][spec] content.

## Installation

[npm][]:

```bash
npm install hast-util-phrasing
```

## Usage

```javascript
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

Check if the given value is a [**phrasing**][spec] content.

###### Parameters

*   `node` (`*`) — Value to check.

###### Returns

`boolean` — Whether `node` passes the test.

## Contribute

See [`contributing.md` in `syntax-tree/hast`][contributing] for ways to get
started.

This organisation has a [Code of Conduct][coc].  By interacting with this
repository, organisation, or community you agree to abide by its terms.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/syntax-tree/hast-util-phrasing.svg

[build]: https://travis-ci.org/syntax-tree/hast-util-phrasing

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/hast-util-phrasing.svg

[coverage]: https://codecov.io/github/syntax-tree/hast-util-phrasing

[downloads-badge]: https://img.shields.io/npm/dm/hast-util-phrasing.svg

[downloads]: https://www.npmjs.com/package/hast-util-phrasing

[chat-badge]: https://img.shields.io/badge/join%20the%20community-on%20spectrum-7b16ff.svg

[chat]: https://spectrum.chat/unified/rehype

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[node]: https://github.com/syntax-tree/hast

[spec]: https://html.spec.whatwg.org/#phrasing-content-2

[contributing]: https://github.com/syntax-tree/hast/blob/master/contributing.md

[coc]: https://github.com/syntax-tree/hast/blob/master/code-of-conduct.md
