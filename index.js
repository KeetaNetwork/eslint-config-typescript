import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin'

import returnParens from 'eslint-plugin-return-parens';

export default tseslint.config(
	{
		plugins: {
			['return-parens']: returnParens,
			['@stylistic']: stylistic
		}
	},
	eslint.configs.recommended,
	...tseslint.configs.strictTypeChecked,
	...tseslint.configs.stylisticTypeChecked,
	{
		rules: {
			/*
			 * This rule (from @typescript-eslint/recommended-type-checked)
			 * has no good alternative syntax, so we disable it
			 */
			"@typescript-eslint/no-for-in-array": 'off',
	
			/*
			 * This rule (from @typescript-eslint/recommended-type-checked)
			 * is not that useful because in most cases an async function is
			 * created to satisfy an interface
			 */
			"@typescript-eslint/require-await": 'off',
	
			/*
			 * This rule does doesn't add value for us because we already
			 * require a comment describing why "@ts-" comments are used
			 * so adding a linting rule just means we double up on it
			 */
			'@typescript-eslint/ban-ts-comment': 'off',
	
			// Not compatible with ESLINT 9.x
			// 'no-type-assertion/no-type-assertion': 'error',
			'@typescript-eslint/consistent-type-imports': 'error',
			'@typescript-eslint/no-inferrable-types': ['error', {
				'ignoreParameters': true
			}],
			'@typescript-eslint/no-unused-vars': ['error', {
				'argsIgnorePattern': '^_ignore'
			}],
			'@typescript-eslint/dot-notation': 'off',
			'@typescript-eslint/naming-convention': 'off',
			'@typescript-eslint/no-loop-func': 'off',
			'@typescript-eslint/return-await': ['error', 'always'],
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
			// No spaces/tabs in end of line/empty line
			'no-trailing-spaces': 'error',
			'array-callback-return': 'error',
			'eol-last': ['error', 'always'],
			'space-in-parens': ['error', 'never'],
			'@typescript-eslint/array-type': ['error', {
				'default': 'array'
			}],
			'@typescript-eslint/consistent-indexed-object-style': ['error', 'index-signature'],
			'@typescript-eslint/prefer-enum-initializers': 'error',
			'@typescript-eslint/prefer-includes': 'error',
			'@typescript-eslint/prefer-string-starts-ends-with': 'error',
			'@typescript-eslint/switch-exhaustiveness-check': 'error',
			'@typescript-eslint/no-use-before-define': 'error',
			'return-parens/return-parens': 'error',
			// Not compatible with ESLINT 9.x
			// '@getify/proper-arrows/this': 'error'
			'@typescript-eslint/consistent-type-definitions': 'off',
			'@typescript-eslint/consistent-type-assertions': ['error', { assertionStyle: 'never' }],
			'@typescript-eslint/no-empty-function': ['error', {
				allow: [
					'arrowFunctions',
					'functions',
					'methods',
				]
			}],
			'@typescript-eslint/switch-exhaustiveness-check': ['error', {
				allowDefaultCaseForExhaustiveSwitch: true,
				considerDefaultExhaustiveForUnions: true,
				requireDefaultForNonUnion: false
			}],
			'@typescript-eslint/no-extraneous-class': ['error', {
				allowStaticOnly: true
			}],
			'@typescript-eslint/no-unnecessary-condition': 'off',
			'@typescript-eslint/prefer-regexp-exec': 'off',
			'@typescript-eslint/no-confusing-void-expression': 'off',
			'@typescript-eslint/restrict-template-expressions': 'off',
			'@typescript-eslint/no-unnecessary-type-arguments': 'off',
			'@typescript-eslint/no-unnecessary-type-parameters': 'off',
			'@typescript-eslint/prefer-promise-reject-errors': ['error', { allowEmptyReject: true }]
		}
	},
	// @stylistic rules
	{
		rules: {
			'@stylistic/comma-dangle': ['error', 'never'],
			'@stylistic/indent': ['error', 'tab'],
			'@stylistic/keyword-spacing': ['error', {
				'overrides': { 
					'return': { 
						'after': false 
					},
					'throw': { 
						'after': false 
					},
				}
			}],
			'@stylistic/lines-between-class-members': ['error', 'always', {
				'exceptAfterSingleLine': true
			}],
			'@stylistic/object-curly-spacing': ['error', 'always', { 
				'objectsInObjects': false 
			}],
			'@stylistic/space-before-function-paren': ['error', {
				'anonymous': 'never',
				'named': 'never',
				'asyncArrow': 'always'
			}],
		}
	},
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
);
