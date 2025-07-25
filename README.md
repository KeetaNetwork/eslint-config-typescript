# eslint-config-typescript

KeetaNetwork standard typescript ESLint config

## Usage

```bash
$ npm install -SD @keetanetwork/eslint-config-typescript
```

```js
// .eslint.config.mjs
import keetanetworkConfig from '@keetanetwork/eslint-config-typescript';

export default [
	...keetanetworkConfig,
	{
		languageOptions: {
			parserOptions: {
				project: ['tsconfig.json', 'deployment/tsconfig.json']
			}
		}
	}
];
```
