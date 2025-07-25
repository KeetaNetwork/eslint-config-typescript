# eslint-plugin-prefer-bigint-literal

## Installation

Install `eslint-plugin-prefer-bigint-literal`:
```bash
$ npm install eslint-plugin-prefer-bigint-literal --save-dev
```

## Usage

Add `eslint-plugin-prefer-bigint-literal` to the plugins section of your `eslint.config.mjs` configuration file.
```json
{
  "plugins": [
    "prefer-bigint-literal"
  ]
}
```

Then configure the rules you want to use under the rules section.
```json
{
  "rules": {
    "prefer-bigint-literal/prefer-bigint-literal": "error"
  }
}
```


## Rule Details

This rule enforces that bigint constants are always literal values.

## Examples

```js
// Incorrect
var foo = BigInt(1);

// Correct
var foo = 1n;
```

```js
// Incorrect
var foo = BigInt(0x1);

// Correct
var foo = 0x1n;
```

### Reason

This rule is useful for enforcing a consistent style when using bigint constants.
