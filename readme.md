# hast-util-phrasing [![Build Status][travis-badge]][travis] [![Coverage Status][codecov-badge]][codecov]

Check if a [node][] is a [**phrasing**][spec] content.

## Installation

[npm][]:

```bash
npm install hast-util-phrasing
```

## Usage

```javascript
// Dependencies:
var phrasing = require('hast-util-phrasing');

// Given flow content:
phrasing({
  type: 'element',
  tagName: 'div',
  children: [{type: 'text', value: 'Alpha'}]
});
//=> false

// Given a phrasing element:
phrasing({
  type: 'element',
  tagName: 'meta',
  properties: {itemProp: 'bravo'},
  children: []
});
//=> true

// Given a non-phrasing element:
phrasing({
  type: 'element',
  tagName: 'meta',
  properties: {charSet: 'utf8'},
  children: []
});
//=> false

// Given text:
phrasing({type: 'text', value: 'Delta'});
//=> true
```

## API

### `phrasing(node)`

Check if the given value is a [**phrasing**][spec] content.

###### Parameters

`node` (`*`) — Value to check.

###### Returns

`boolean` — Whether `node` passes the test.

## Contribute

See [`contribute.md` in `syntax-tree/hast`][contribute] for ways to get
started.

This organisation has a [Code of Conduct][coc].  By interacting with this
repository, organisation, or community you agree to abide by its terms.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[travis-badge]: https://img.shields.io/travis/syntax-tree/hast-util-phrasing.svg

[travis]: https://travis-ci.org/syntax-tree/hast-util-phrasing

[codecov-badge]: https://img.shields.io/codecov/c/github/syntax-tree/hast-util-phrasing.svg

[codecov]: https://codecov.io/github/syntax-tree/hast-util-phrasing

[npm]: https://docs.npmjs.com/cli/install

[license]: LICENSE

[author]: http://wooorm.com

[node]: https://github.com/syntax-tree/hast

[spec]: https://html.spec.whatwg.org/#phrasing-content-2

[contribute]: https://github.com/syntax-tree/hast/blob/master/contributing.md

[coc]: https://github.com/syntax-tree/hast/blob/master/code-of-conduct.md
