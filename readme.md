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

### `transparent(node)`

Check if the given value is a [**phrasing**][spec] content.

###### Parameters

`node` (`*`) — Value to check.

###### Returns

`boolean` — Whether `node` passes the test.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[travis-badge]: https://img.shields.io/travis/wooorm/hast-util-phrasing.svg

[travis]: https://travis-ci.org/wooorm/hast-util-phrasing

[codecov-badge]: https://img.shields.io/codecov/c/github/wooorm/hast-util-phrasing.svg

[codecov]: https://codecov.io/github/wooorm/hast-util-phrasing

[npm]: https://docs.npmjs.com/cli/install

[license]: LICENSE

[author]: http://wooorm.com

[node]: https://github.com/wooorm/hast

[spec]: https://html.spec.whatwg.org/#phrasing-content-2
