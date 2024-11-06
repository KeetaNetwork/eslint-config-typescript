# eslint-config-typescript

KeetaPay standard typescript ESLint config

## Usage

```bash
$ npm install -SD @keetapay/eslint-config-typescript
```

```js
// eslint.config.mjs
import keetapayConfig from '@keetapay/eslint-config-typescript';

export default [
	...keetapayConfig,
	{
		languageOptions: {
			parserOptions: {
				project: ['tsconfig.json', 'deployment/tsconfig.json']
			}
		}
	}
];
```