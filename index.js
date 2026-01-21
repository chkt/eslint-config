import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import importPlugin from "eslint-plugin-import";


export default [
	eslint.configs.recommended,
	...tseslint.configs.recommendedTypeChecked,
	importPlugin.flatConfigs.recommended,
	importPlugin.flatConfigs.typescript,
	{
		// plugins : {
		// 	'import' : importPlugin
		// }
	}, {
		rules : {
			/**
			 * es-lint problems
			 */
			'array-callback-return' : 'error',
			// handled by ts
			'constructor-super' : 'off',
			// default for-direction
			// handled by ts
			'getter-return' : 'off',
			// default no-async-promise-executor
			'no-await-in-loop' : 'warn',
			// handled by ts
			'no-class-assign' : 'off',
			// default no-compare-neg-zero
			'no-cond-assign' : [ 'error', 'always' ],
			// handled by ts
			'no-const-assign' : 'off',
			// default no-constant-binary-expression
			// default no-constant-condition
			'no-constructor-return' : 'error',
			// default no-control-regex
			// default no-debugger
			// handled by ts
			'no-dupe-args' : 'off',
			// handled by ts
			'no-dupe-class-members' : 'off',
			// default no-dupe-else-if
			// handled by ts
			'no-dupe-keys' : 'off',
			// default no-duplicate-case
			// default no-duplicate-imports
			// default no-empty-character-class
			// default no-empty-pattern
			// default no-ex-assign
			// default no-fallthrough
			// handled by ts
			'no-func-assign' : 'off',
			// handled by ts
			'no-import-assign' : 'off',
			'no-inner-declarations' : [ 'error', 'functions', {
				blockScopedFunctions : 'disallow'
			}],
			// unwanted - only works for string literals
			// using prefer-regex-literals
			'no-invalid-regexp' : 'off',
			'no-irregular-whitespace' : [ 'error', {
				skipStrings : true,
				skipComments : true,
				skipRegExps : true,
				skipTemplates : true,
				skipJSXText : true
			} ],
			// default no-loss-of-precision
			// default no-misleading-character-class
			// handled by ts
			'no-new-native-nonconstructor' : 'off',
			// handled by ts
			'no-obj-calls' : 'off',
			'no-promise-executor-return' : [ 'error', {
				allowVoid : true
			}],
			// default no-prototype-builtins
			// default no-self-assign
			'no-self-compare' : 'error',
			// handled by ts
			'no-setter-return' : 'off',
			// default no-sparse-arrays
			'no-template-curly-in-string' : 'warn',
			// handled by ts
			'no-this-before-super' : 'off',
			'no-unassigned-vars' : 'error',
			// handled by ts
			'no-undef' : 'off',
			// default no-unexpected-multiline
			'no-unmodified-loop-condition' : 'warn',
			// handled by ts
			'no-unreachable' : 'error',
			'no-unreachable-loop' : 'error',
			// default no-unsafe-finally
			// handled by ts
			'no-unsafe-negation' : 'off',
			// handled by ts
			'no-unsafe-optional-chaining' : 'off',
			// using @typescript-eslint
			'no-unused-private-class-members' : 'off',
			// using @typescript-eslint
			'no-unused-vars': 'off',
			// using @typescript-eslint
			'no-use-before-define': 'off',
			'no-useless-assignment' : 'error',
			// default no-useless-backreference
			'require-atomic-updates' : 'error',
			'use-isnan' : [ 'error', {
				enforceForSwitchCase : true,
				enforceForIndexOf : true
			}],
			// handled by ts
			'valid-typeof' : 'off',
			/**
			 * eslint suggestions
			 */
			'accessor-pairs' : 'warn',
			'arrow-body-style' : [ 'error', 'as-needed', {
				requireReturnForObjectLiteral : false
			}],
			// using no-var
			'block-scoped-var' : 'off',
			// handled by @typescript-eslint/naming-convention
			'camelcase' : 'off',
			// handled by @typescript-eslint/naming-convention
			'capitalized-comments' : 'off',
			// using @typescript-eslint
			'class-methods-use-this': 'off',
			// unwanted - not enforcing complexity rules
			'complexity' : 'off',
			// handled by ts: noImplicitReturns
			'consistent-return' : 'off',
			// handled by @typescript-eslint/no-this-alias
			'consistent-this' : 'off',
			'curly' : [ 'error', 'multi-line' ],
			// using @typescript-eslint/switch-exhaustiveness-check
			'default-case' : 'off',
			'default-case-last' : 'error',
			// using @typescript-eslint
			'default-param-last' : 'off',
			// using @typescript-eslint
			'dot-notation': 'off',
			'eqeqeq' : [ 'error', 'always' ],
			// unwanted - encumbers functional code
			// using func-names
			'func-name-matching' : 'off',
			'func-names' : [ 'error', 'never' ],
			'func-style' : [ 'error', 'declaration', {
				allowArrowFunctions : true
			}],
			'grouped-accessor-pairs' : [ 'error', 'getBeforeSet' ],
			'guard-for-in' : 'error',
			// unwanted - not enforcing naming rules
			'id-denylist' : 'off',
			// unwanted - not enforcing naming rules
			'id-length' : 'off',
			// handled by @typescript-eslint/naming-convention
			'id-match' : 'off',
			// unwanted - not enforcing initialization rules
			'init-declarations': 'off',
			'logical-assignment-operators' : [ 'error', 'always', {
				enforceForIfStatements : true
			}],
			// unwanted - not enforcing class limits
			'max-classes-per-file' : 'off',
			'max-depth' : [ 'warn', 3 ],
			// unwanted - not enforcing complexity rules
			'max-lines' : 'off',
			// unwanted - not enforcing complexity rules
			'max-lines-per-function' : 'off',
			// unwanted - not enforcing complexity rules
			'max-nested-callbacks' : 'off',
			// unwanted - not enforcing complexity rules
			'max-params': 'off',
			// unwanted - not enforcing complexity rules
			'max-statements' : 'off',
			// handled by @typescript-eslint/naming-convention
			'new-cap' : 'off',
			'no-alert' : 'error',
			'no-array-constructor': 'error',
			'no-bitwise' : 'error',
			'no-caller' : 'error',
			// default no-case-declarations
			'no-console' : 'error',
			// unwanted - disallows function flattening
			'no-continue' : 'off',
			// handled by ts
			'no-delete-var' : 'off',
			'no-div-regex' : 'warn',
			// unwanted - disallows logic symmetry
			'no-else-return' : 'off',
			// default no-empty
			// using @typescript-eslint
			'no-empty-function': 'off',
			// default no-empty-static-block
			// using eqeqeq
			'no-eq-null' : 'off',
			// handled by ts
			'no-eval' : 'error',
			// handled by ts
			'no-extend-native' : 'off',
			'no-extra-bind' : 'error',
			// using @typescript-eslint/strict-boolean-expressions
			'no-extra-boolean-cast' : 'off',
			// using no-labels
			'no-extra-label' : 'off',
			// handled by ts
			'no-global-assign' : 'off',
			'no-implicit-coercion' : [ 'error', {
				boolean : true,
				number : true,
				string : true,
				disallowTemplateShorthand : true
			}],
			'no-implicit-globals' : 'error',
			// using @typescript-eslint
			'no-implied-eval' : 'off',
			'no-inline-comments' : 'warn',
			// handled by ts
			'no-invalid-this': 'off',
			// handled by ts
			'no-iterator' : 'off',
			// using no-labels
			'no-label-var' : 'off',
			'no-labels' : 'error',
			'no-lone-blocks' : 'error',
			'no-lonely-if' : 'error',
			// using no-var
			'no-loop-func' : 'off',
			// using @typescript-eslint
			'no-magic-numbers': 'off',
			'no-multi-assign' : 'error',
			'no-multi-str' : 'error',
			// unwanted - disallows priority paths
			'no-negated-condition' : 'off',
			'no-nested-ternary' : 'error',
			'no-new' : 'error',
			// using @typescript-eslint/no-implied-eval
			'no-new-func' : 'off',
			'no-new-wrappers' : 'error',
			// handled by ts
			'no-nonoctal-decimal-escape' : 'off',
			'no-object-constructor' : 'error',
			// handled by ts
			'no-octal' : 'off',
			// handled by ts
			'no-octal-escape' : 'off',
			'no-param-reassign' : 'warn',
			'no-plusplus' : 'error',
			// handled by ts
			'no-proto' : 'off',
			// handled by ts
			'no-redeclare' : 'off',
			// default no-regex-spaces
			// using @typescript-eslint/naming-convention
			'no-restricted-exports' : 'off',
			// handled by ts
			'no-restricted-globals' : 'off',
			// default no-restricted-imports
			// using naming convention
			'no-restricted-properties' : 'off',
			// default no-restricted-syntax
			'no-restricted-syntax' : ['error', {
				selector : 'ExportNamedDeclaration:not([declaration]):not([source])',
				message : 'No compound exports. Only named exports and default.'
			}, {
				selector : 'ExportNamedDeclaration[specifiers] ExportSpecifier[exportKind=type]',
				message : 'No compound type exports. Drop \'type\' specifier.'
			}, {
				selector : 'ImportDeclaration[specifiers] ImportSpecifier[importKind=type]',
				message : 'No compound type imports. Drop \'type\' specifier or use \'import type {…}\''
			}],
			'no-return-assign' : 'error',
			'no-script-url' : 'error',
			'no-sequences' : 'error',
			// using @typescript-eslint
			'no-shadow': 'off',
			// using no-shadow
			'no-shadow-restricted-names' : 'off',
			// unwanted - using ternary
			'no-ternary' : 'off',
			// using @typescript-eslint/only-throw-error
			'no-throw-literal': 'off',
			'no-undef-init' : 'error',
			// unwanted - handling undefined becomes painful
			// using no-shadow
			'no-undefined' : 'off',
			// handled by @typescript-eslint/naming-convention
			'no-underscore-dangle' : 'off',
			'no-unneeded-ternary' : 'error',
			// using @typescript-eslint
			'no-unused-expressions': 'off',
			// using no-labels
			'no-unused-labels' : 'off',
			'no-useless-call' : 'error',
			// default no-useless-catch
			'no-useless-computed-key' : 'error',
			'no-useless-concat' : 'error',
			// using @typescript-eslint
			'no-useless-constructor': 'off',
			// default no-useless-escape
			'no-useless-rename' : 'error',
			'no-useless-return' : 'error',
			'no-var' : 'error',
			// unwanted - using void
			'no-void' : 'off',
			// unwanted - dependent on convention
			'no-warning-comments' : 'off',
			// handled by ts
			'no-with' : 'off',
			'object-shorthand' : 'error',
			// unwanted - overly restrictive
			'one-var' : 'off',
			'operator-assignment' : 'error',
			'prefer-arrow-callback' : 'error',
			'prefer-const' : [ 'error', {
				destructuring : 'all',
				ignoreReadBeforeAssign : true
			}],
			// using @typescript-eslint
			'prefer-destructuring': 'off',
			'prefer-exponentiation-operator' : 'warn',
			// unwanted - poor destructuring support in typescript
			'prefer-named-capture-group' : 'off',
			'prefer-numeric-literals' : 'warn',
			// requires es2022 support
			'prefer-object-has-own' : 'warn',
			// requires es2018 support
			'prefer-object-spread' : 'warn',
			// using @typescript-eslint
			'prefer-promise-reject-errors': 'off',
			'prefer-regex-literals' : 'error',
			'prefer-rest-params' : 'error',
			'prefer-spread' : 'warn',
			'prefer-template' : 'error',
			'preserve-caught-error' : 'warn',
			'radix' : 'error',
			// using '@typescript-eslint/promise-function-async
			'require-await': 'off',
			// unwanted - disallows performant parsing of guaranteed ascii
			'require-unicode-regexp' : 'off',
			// default require-yield
			// using import/order
			'sort-imports' : 'off',
			// unwanted - only allows alphabetical order
			'sort-keys' : 'off',
			// unwanted - only allows alphabetical order
			'sort-vars' : 'off',
			// handled by ts
			'strict' : 'off',
			'symbol-description' : 'warn',
			// using no-var
			'vars-on-top' : 'off',
			'yoda': [ 'error', 'never' ],
			/**
			 * eslint layout & formatting
			 */
			'unicode-bom' : ['error', 'never'],
			// 	}
			// }, {
			// 	rules: {
			// handled by ts
			'@typescript-eslint/adjacent-overload-signatures': "off",
			'@typescript-eslint/array-type': ['error', {
				default: 'array',
				readonly: 'array'
			}],
			'@typescript-eslint/await-thenable' : 'error',
			'@typescript-eslint/ban-ts-comment': 'error',
			'@typescript-eslint/ban-tslint-comment': 'error',
			'@typescript-eslint/class-literal-property-style': ['error', 'fields'],
			'@typescript-eslint/class-methods-use-this': 'warn',
			'@typescript-eslint/consistent-generic-constructors': ['error', 'type-annotation'],
			'@typescript-eslint/consistent-indexed-object-style': ['warn', 'record'],
			// handled by ts: noImplicitReturns
			'@typescript-eslint/consistent-return': 'off',
			'@typescript-eslint/consistent-type-assertions': ['warn', {
				assertionStyle: 'as',
				objectLiteralTypeAssertions: 'allow-as-parameter',
				arrayLiteralTypeAssertions : 'allow-as-parameter'
			}],
			'@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
			// using no-restricted-syntax
			'@typescript-eslint/consistent-type-exports' : 'off',
			// using no-restricted-syntax
			'@typescript-eslint/consistent-type-imports' : 'off',
			'@typescript-eslint/default-param-last': 'error',
			'@typescript-eslint/dot-notation': ['error', {
				allowKeywords: true,
				allowPrivateClassPropertyAccess: false,
				allowProtectedClassPropertyAccess: false,
				allowIndexSignaturePropertyAccess: false,
			}],
			'@typescript-eslint/explicit-function-return-type': ['error', {
				allowExpressions: true,
				allowTypedFunctionExpressions: true,
				allowHigherOrderFunctions: false,
				allowDirectConstAssertionInArrowFunctions: true,
				allowConciseArrowFunctionExpressionsStartingWithVoid: true,
				allowFunctionsWithoutTypeParameters: false,
				allowIIFEs: false
			}],
			'@typescript-eslint/explicit-member-accessibility': ['error', {
				accessibility: 'no-public'
			}],
			// unwanted - all requirements already enforced by either ts or other rules
			'@typescript-eslint/explicit-module-boundary-types' : 'off',
			// unwanted - not enforcing initialization rules
			'@typescript-eslint/init-declarations': 'off',
			// unwanted - not enforcing complexity rules
			'@typescript-eslint/max-params': 'off',
			// unwanted - not enforcing lexical ordering
			'@typescript-eslint/member-ordering': 'off',
			// potentially unwanted - disallows explicitly assigning callbacks to properties
			'@typescript-eslint/method-signature-style': ['warn', 'method'],
			'@typescript-eslint/naming-convention': [
				'error',
				{
					selector: 'default',
					format: ['strictCamelCase'],
					leadingUnderscore: 'forbid',
					trailingUnderscore: 'forbid'
				},
				{selector: 'variable', modifiers: ['const'], format: ['strictCamelCase', 'UPPER_CASE']},
				{selector: ['class', 'interface', 'typeParameter'], format: ['StrictPascalCase']},
				{selector: ['enum'], format: ['StrictPascalCase']},
				{selector: ['function', 'typeAlias'], format: ['StrictPascalCase', 'strictCamelCase']},
				{selector: 'parameter', format: ['strictCamelCase'], leadingUnderscore: 'allow' }
			],
			// unwanted - disallowing 'new Array<T>()' syntax
			// unwanted - not flagging new Array(...args) syntax
			'@typescript-eslint/no-array-constructor': 'off',
			// default no-array-delete
			// default no-base-to-string
			// using @typescript-eslint/no-nonnull-assertion
			'@typescript-eslint/no-confusing-non-null-assertion': 'off',
			// potentially unwanted - disallows 'return void reject(...)' in Promises
			'@typescript-eslint/no-confusing-void-expression': ['error', {
				ignoreArrowShorthand: true,
				ignoreVoidOperator: true,
				ignoreVoidReturningFunctions: false
			}],
			'@typescript-eslint/no-deprecated': 'warn',
			// handled by ts
			'@typescript-eslint/no-dupe-class-members': 'off',
			// default no-duplicate-enum-values
			// default no-duplicate-type-constituents
			'@typescript-eslint/no-dynamic-delete': 'error',
			'@typescript-eslint/no-empty-function': ['error', {
				allow: [
					'private-constructors',
					'protected-constructors',
					'decoratedFunctions',
					'overrideMethods'
				]
			}],
			// default no-empty-interface
			// default no-empty-object-type
			// default no-explicit-any
			// using @typescript-eslint/no-non-null-assertion
			'@typescript-eslint/no-extra-non-null-assertion' : 'off',
			'@typescript-eslint/no-extraneous-class': 'error',
			// default no-floating-promises
			// default no-for-in-array
			'@typescript-eslint/no-implied-eval' : 'error',
			// using no-restricted-syntax
			'no-import-type-side-effects': 'off',
			'@typescript-eslint/no-inferrable-types': ['error', {
				ignoreParameters: true,
				ignoreProperties: true
			}],
			// handled by ts
			'@typescript-eslint/no-invalid-this': 'off',
			'@typescript-eslint/no-invalid-void-type': ['error', {
				allowInGenericTypeArguments: true,
				allowAsThisParameter: false
			}],
			// using no-var
			'@typescript-eslint/no-loop-func': 'off',
			'@typescript-eslint/no-magic-numbers': ['warn', {
				ignore: [-1, 0, 1, '-1n', '0n', '1n' ],
				ignoreArrayIndexes: true,
				ignoreDefaultValues: false,
				ignoreClassFieldInitialValues: false,
				enforceConst: true,
				detectObjects: true,
				ignoreEnums: true,
				ignoreNumericLiteralTypes: true,
				ignoreReadonlyClassProperties: true,
				ignoreTypeIndexes: true,
			}],
			// using @typescript-eslint/no-confusing-void-expression
			'@typescript-eslint/no-meaningless-void-operator' : 'off',
			// default no-misused-new
			// default no-misused-promises
			'@typescript-eslint/no-misused-spread' : 'error',
			'@typescript-eslint/no-mixed-enums': 'error',
			// default no-namespace
			// using no-non-null-assertion
			'@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'off',
			// using no-non-null-assertion
			'@typescript-eslint/no-non-null-asserted-optional-chain' : 'off',
			'@typescript-eslint/no-non-null-assertion': 'error',
			// potentially unwanted - disallows wrapping promise yielding functions
			// handled by ts
			'@typescript-eslint/no-redeclare': 'off',
			// default no-redundant-type-constituents
			// default no-require-imports
			// default no-restricted-imports
			// default no-restricted-types
			// Bug: Flags const enum members with same name as variables
			'@typescript-eslint/no-shadow': ['error', {
				builtinGlobals: true,
				hoist: 'all',
				ignoreOnInitialization: false,
				ignoreTypeValueShadow: true,
				ignoreFunctionTypeParameterNameValueShadow: false,
			}],
			'@typescript-eslint/no-this-alias' : 'error',
			'@typescript-eslint/no-unnecessary-boolean-literal-compare' : 'error',
			'@typescript-eslint/no-unnecessary-condition': ['error', {
				allowConstantLoopConditions: true,
				checkTypePredicates: true
			}],
			'@typescript-eslint/no-unnecessary-parameter-property-assignment': 'error',
			// using @typescript-eslint/prefer-literal-enum-member
			'@typescript-eslint/no-unnecessary-qualifier': 'off',
			'@typescript-eslint/no-unnecessary-template-expression': 'error',
			'@typescript-eslint/no-unnecessary-type-arguments': 'error',
			// default no-unnecessary-type-assertion
			// default no-unnecessary-type-constraint
			'@typescript-eslint/no-unnecessary-type-conversion' : 'error',
			// Bug: developers warn of unexpected behaviour
			'@typescript-eslint/no-unnecessary-type-parameters': 'warn',
			// default no-unsafe-argument
			// default no-unsafe-assignment
			// default no-unsafe-call
			// default no-unsafe-declaration-merging
			// default no-unsafe-enum-comparison
			// default no-unsafe-function-type
			// default no-unsafe-member-access
			// default no-unsafe-return
			'@typescript-eslint/no-unsafe-type-assertion' : 'error',
			// default no-unsafe-unary-minus
			'@typescript-eslint/no-unused-expressions': ['error', {
				allowShortCircuit: false,
				allowTernary: false,
				allowTaggedTemplates: false,
				enforceForJSX: true
			}],
			'@typescript-eslint/no-unused-private-class-members' : 'error',
			'@typescript-eslint/no-unused-vars': ['error', {
				vars: 'all',
				args: 'all',
				argsIgnorePattern: '^_',
				caughtErrors: 'all',
				destructuredArrayIgnorePattern: '^_',
				ignoreRestSiblings: true,
				ignoreClassWithStaticInitBlock: false,
				ignoreUsingDeclarations : false,
				reportUsedIgnorePattern: false
			}],
			'@typescript-eslint/no-use-before-define': ['error', {
				functions: false,
				classes: true,
				variables: true,
				allowNamedExports: false,
				enums: true,
				typedefs: false,
				ignoreTypeReferences: true
			}],

			'@typescript-eslint/no-useless-constructor': 'error',
			'@typescript-eslint/no-useless-default-assignment' : 'error',
			// using no-restricted-syntax
			'@typescript-eslint/no-useless-empty-export' : 'off',
			// default no-wrapper-object-types
			// unwanted - using no-non-null-assertion
			'@typescript-eslint/non-nullable-type-assertion-style': 'off',
			'@typescript-eslint/only-throw-error': 'error',
			'@typescript-eslint/parameter-properties': ['error', {
				prefer: 'parameter-property'
			}],
			// default prefer-as-const
			'@typescript-eslint/prefer-destructuring': ['error', {
				array: true,
				object: true
			}, {
				enforceForRenamedProperties: true,
				enforceForDeclarationWithTypeAnnotation: true
			}],
			'@typescript-eslint/prefer-enum-initializers' : 'off',
			'@typescript-eslint/prefer-find': 'error',
			'@typescript-eslint/prefer-for-of': 'error',
			'@typescript-eslint/prefer-function-type': 'error',
			'@typescript-eslint/prefer-includes': 'error',
			'@typescript-eslint/prefer-literal-enum-member': 'error',
			// default prefer-namespace-keyword
			'@typescript-eslint/prefer-nullish-coalescing': 'error',
			'@typescript-eslint/prefer-optional-chain': 'error',
			'@typescript-eslint/prefer-promise-reject-errors': 'error',
			'@typescript-eslint/prefer-readonly': 'error',
			// unwanted - mutable parameters have uses
			'@typescript-eslint/prefer-readonly-parameter-types': 'off',
			'@typescript-eslint/prefer-reduce-type-parameter': 'error',
			'@typescript-eslint/prefer-regexp-exec': 'warn',
			'@typescript-eslint/prefer-return-this-type': 'error',
			'@typescript-eslint/prefer-string-starts-ends-with': 'error',
			// using no-floating-promises, no-misused-promises
			'@typescript-eslint/promise-function-async': 'warn',
			'@typescript-eslint/related-getter-setter-pairs': 'error',
			'@typescript-eslint/require-array-sort-compare': 'error',
			// using '@typescript-eslint/promise-function-async
			'@typescript-eslint/require-await': 'off',
			'@typescript-eslint/restrict-plus-operands': ['error', {
				allowAny: false,
				allowBoolean: false,
				allowNullish: false,
				allowNumberAndString: false,
				allowRegExp: false,
				skipCompoundAssignments: false
			}],
			'@typescript-eslint/restrict-template-expressions': ['error', {
				allowNumber: false,
				allowBoolean: false,
				allowAny: false,
				allowNullish: false,
				allowRegExp: false,
				allowNever: false,
				allowArray: false,

			}],
			'@typescript-eslint/return-await': ['error', 'in-try-catch'],
			'@typescript-eslint/strict-boolean-expressions': ['error', {
				allowAny: false,
				allowNullableBoolean: false,
				allowNullableEnum: false,
				allowNullableNumber: false,
				allowNullableObject: false,
				allowNullableString: false,
				allowNumber: false,
				allowString: false,
			}],
			'@typescript-eslint/strict-void-return' : 'error',
			'@typescript-eslint/switch-exhaustiveness-check' : [ 'error', {
				allowDefaultCaseForExhaustiveSwitch : false,
				requireDefaultForNonUnion : true,
				considerDefaultExhaustiveForUnions : true
			}],
			// default triple-slash-reference
			'@typescript-eslint/unbound-method': ['error', {
				ignoreStatic: true
			}],
			'@typescript-eslint/unified-signatures': ['error', {
				ignoreDifferentlyNamedParameters: true
			}],
			'@typescript-eslint/use-unknown-in-catch-callback-variable': 'error',
		}
	}, {
		rules : {
			/**
			 * import helpful warnings
			 */
			// handled by ts
			'import/export' : 'off',
			// using @typescript-eslint/no-deprecated
			'import/no-deprecated' : 'off',
			'import/no-empty-named-blocks' : 'error',
			// default no-extraneous-dependencies
			'import/no-mutable-exports' : 'error',
			// default no-named-as-default
			// handled by ts
			'import/no-named-as-default-member' : 'off',
			'import/no-unused-modules' : [ 'warn', {
				missingExports : true,
				// Bug: unusedExports breaks config parsing
				// unusedExports : true,
				ignoreUnusedTypeExports : false,
			}],
			/**
			 * import module systems
			 */
			// using no-require-imports
			'import/no-amd' : 'error',
			// using no-require-imports
			'import/no-commonjs' : 'error',
			// using no-commonjs
			'import/no-import-module-exports' : 'off',
			// unwanted - don't want to block nodejs
			'import/no-nodejs-modules' : 'off',
			// using no-unused-modules
			'import/unambiguous' : 'off',
			/**
			 * import static analysis
			 */
			// handled by ts
			'import/default' : 'off',
			'import/enforce-node-protocol-usage' : [ 'error', 'always' ],
			// default named
			// handled by ts
			'import/namespace' : 'off',
			'import/no-absolute-path' : 'error',
			'import/no-cycle' : [ 'warn', {
				ignoreExternal : true,
				allowUnsafeDynamicCyclicDependency : false,
				disableScc : false
			}],
			// using no-commonjs
			'import/no-dynamic-require' : 'off',
			// unwanted - expects all reachable module code to only be nested one level deep
			'import/no-internal-modules' : 'off',
			// unwanted - expects all reachable module code to either be siblings or workspaced
			'import/no-relative-packages' : 'off',
			// unwanted - expects all reachable module code to only ever be in descendent modules
			'import/no-relative-parent-imports' : 'off',
			'import/no-self-import' : 'error',
			// handled by ts
			'import/no-unresolved' : 'off',
			'import/no-useless-path-segments' : [ 'error', {
				noUselessIndex : true
			}],
			'import/no-webpack-loader-syntax' : 'error',
			/**
			 * import style guide
			 */
			// unwanted - not enforcing type imports
			'import/consistent-type-specifier-style' : 'off',
			// default dynamic-import-chunkname
			// unwanted - forcing exports be defined last not always practical
			'import/exports-last' : 'off',
			'import/extensions' : ['error', 'ignorePackages'],
			'import/first' : 'error',
			// unwanted - increases verbosity of code without clear benefit
			'import/group-exports' : 'off',
			// unwanted - not enforcing complexity rules
			'import/max-dependencies' : 'off',
			'import/newline-after-import' : ['error', {
				count : 2,
				exactCount : true,
				considerComments : true
			}],
			// default no-anonymous-default-export
			// default no-default-export
			// default no-duplicates
			// default no-named-default
			// default no-named-export
			// handled by ts
			'import/no-namespace' : 'off',
			// using @typescript-eslint/no-unused-vars
			'import/no-unassigned-import' : 'off',
			'import/order' : ['error', {
				alphabetize : { order : 'asc' },
				named : true
			}]
			// default prefer-default-export
		}
	}
];
