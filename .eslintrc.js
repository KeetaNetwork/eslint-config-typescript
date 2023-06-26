module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: [
		'@typescript-eslint',
		'import',
		'no-type-assertion'
	],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'airbnb-typescript/base'
	],
	overrides: [
		{
			files: ['package.json'],
			parser: 'eslint-plugin-package-json-dependencies',
			plugins: ['package-json-dependencies'],
			parserOptions: {
				extraFileExtensions: ['.json']
			},
			extends: [],
			rules: {
				'package-json-dependencies/controlled-versions': ['error', { 'granularity': 'fixed' }],
				'package-json-dependencies/alphabetically-sorted-dependencies': 'error',
				'@typescript-eslint/quotes': 'off',
				'@typescript-eslint/semi': 'off',
				'@typescript-eslint/no-unused-expressions': 'off'
			}
		},
	],
	rules: {
		'no-type-assertion/no-type-assertion': 'error',
		'@typescript-eslint/consistent-type-imports': 'error',
		'@typescript-eslint/no-inferrable-types': ['error', {
			'ignoreParameters': true
		}],
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/ban-ts-comment': 'off',
		'@typescript-eslint/no-unused-vars': ['error', {
			'argsIgnorePattern': '^_ignore'
		}],
		'@typescript-eslint/indent': ['error', 'tab'],
		'@typescript-eslint/comma-dangle': ['error', 'never'],
		'@typescript-eslint/dot-notation': 'off',
		'@typescript-eslint/keyword-spacing': ['error', {
			'overrides': { 
				'return': { 
					'after': false 
				},
				'throw': { 
					'after': false 
				},
			}
		}],
		'@typescript-eslint/lines-between-class-members': ['error', 'always', {
			'exceptAfterSingleLine': true
		}],
		'@typescript-eslint/naming-convention': 'off',
		'@typescript-eslint/no-loop-func': 'off',
		'@typescript-eslint/object-curly-spacing': ['error', 'always', { 
			'objectsInObjects': false 
		}],
		'@typescript-eslint/return-await': ['error', 'always'],
		'@typescript-eslint/space-before-function-paren': ['error', {
			'anonymous': 'never',
			'named': 'never',
			'asyncArrow': 'always'
		}],
		'@typescript-eslint/no-misused-promises': ['error', {
			'checksVoidReturn': false
		}],
		'@typescript-eslint/no-floating-promises': ['error', {
			'ignoreIIFE': true
		}],
		'curly': 'error',
		'spaced-comment': ['error', 'always', {
			'block': {
				'markers': ['*'],
				'balanced': true
			}
		}],
		'@typescript-eslint/unbound-method': 'error',
		// No spaces/tabs in end of line/empty line
		'no-trailing-spaces': 'error',
		'array-callback-return': 'error',
		'eol-last': ['error', 'always'],
		'space-in-parens': ['error', 'never'],
		'@typescript-eslint/array-type': ['error', {
			'default': 'array'
		}],
		'@typescript-eslint/consistent-indexed-object-style': ['error', 'index-signature'],
		'@typescript-eslint/no-meaningless-void-operator': 'error',
		'@typescript-eslint/no-misused-new': 'error',
		'@typescript-eslint/no-this-alias': 'error',
		'@typescript-eslint/prefer-enum-initializers': 'error',
		'@typescript-eslint/prefer-includes': 'error',
		'@typescript-eslint/prefer-literal-enum-member': 'error',
		'@typescript-eslint/prefer-string-starts-ends-with': 'error',
		'@typescript-eslint/switch-exhaustiveness-check': 'error',
		'@typescript-eslint/no-use-before-define': 'error',
		'@typescript-eslint/no-unused-expressions': 'error',
		'@typescript-eslint/no-throw-literal': 'error',
		'@typescript-eslint/no-duplicate-enum-values': 'error',
		'@typescript-eslint/await-thenable': 'error',
	}
};
