/* global module */

module.exports = {
	extends : [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking'
	],
	rules : {
		'array-bracket-newline' : [ 'error', 'consistent' ],
		'array-bracket-spacing' : [ 'error', 'always', {
			singleValue : true,
			objectsInArrays : false,
			arraysInArrays : false
		}],
		'array-element-newline' : [ 'error', {
			ArrayExpression : 'consistent',
			ArrayPattern : 'never'
		}],
		'array-callback-return' : [ 'error', { allowImplicit : false, checkForEach : false }],
		'@typescript-eslint/array-type' : [ 'error', { default : 'array', readonly : 'array' }],
		'arrow-body-style' : [ 'error', 'as-needed', { requireReturnForObjectLiteral : false }],
		'arrow-parens' : [ 'error', 'as-needed' ],
		'arrow-spacing' : [ 'error', { before: true, after: true }],
		'@typescript-eslint/ban-tslint-comment' : 'error',
		// using no-var
		'block-scoped-var' : 'off',
		'block-spacing' : [ 'error', 'always' ],
		'brace-style' : 'off',
		'@typescript-eslint/brace-style' : [ 'error', 'stroustrup', { allowSingleLine: true }],
		// using naming-convention
		'camelcase' : 'off',
		// unwanted - avoiding comments
		'capitalized-comments' : 'off',
		'@typescript-eslint/class-literal-property-style' : [ 'error', 'fields' ],
		'class-methods-use-this' : 'warn',
		'comma-dangle' : 'off',
		'@typescript-eslint/comma-dangle' : [ 'error', {
			arrays : 'never',
			enums : 'never',
			exports : 'never',
			generics : 'never',
			imports : 'never',
			functions : 'never',
			objects : 'never',
			tuples : 'never'
		}],
		'comma-spacing' : [ 'error', { before : false, after : true }],
		'@typescript-eslint/comma-spacing' : [ 'error', { before : false, after : true }],
		'comma-style' : [ 'error', 'last' ],
		// unwanted - not enforcing complexity rules
		'complexity' : 'off',
		'computed-property-spacing' : [ 'error', 'never' ],
		'@typescript-eslint/consistent-indexed-object-style' : [ 'warn', 'record' ],
		// Bug: treatUndefinedAsUnspecified only considers the undefined literal, not expressions evaluating to undefined
		// Bug: triggers for mixes of expressions returning undefined and undefined literals with treatUndefinedAsUnspecified=true
		'consistent-return' : [ 'warn', { treatUndefinedAsUnspecified : true }],
		// using no-this-alias
		'consistent-this' : 'off',
		'@typescript-eslint/consistent-type-assertions' : [ 'warn', {
			assertionStyle : 'as',
			objectLiteralTypeAssertions : 'allow-as-parameter'
		}],
		'@typescript-eslint/consistent-type-definitions' : [ 'error', 'interface' ],
		// '@typescript-eslint/consistent-type-exports' : [ 'error', { fixMixedExportsWithInlineTypeSpecifier : true }],
		// '@typescript-eslint/consistent-type-import' : [ 'error', { prefer : 'type-imports', disallowTypeAnnotations : true }],
		// Bug: flags braces in for-in loop containing if-else clause
		// 'curly' : [ 'error', 'multi' ],
		'default-case' : 'error',
		'default-case-last' : 'error',
		'default-param-last' : 'off',
		'@typescript-eslint/default-param-last' : 'error',
		'dot-location' : [ 'error', 'property' ],
		'dot-notation' : 'off',
		'@typescript-eslint/dot-notation' : [ 'error', {
			allowPrivateClassPropertyAccess : false,
			allowProtectedClassPropertyAccess : false,
			allowIndexSignaturePropertyAccess : false
		}],
		'eol-last' : [ 'error', 'always' ],
		'eqeqeq' : 'error',
		// unwanted
		'func-name-matching' : 'off',
		'@typescript-eslint/explicit-function-return-type' : [ 'error', {
			allowExpressions : true,
			allowTypedFunctionExpressions : true,
			allowHigherOrderFunctions : true,
			allowDirectConstAssertionInArrowFunctions : true,
			allowConciseArrowFunctionExpressionsStartingWithVoid : true
		}],
		'@typescript-eslint/explicit-member-accessibility' : [ 'error', { accessibility : 'no-public' }],
		'@typescript-eslint/explicit-module-boundary-types' : [ 'error', {
			allowArgumentsExplicitlyTypedAsAny : true,
			allowDirectConstAssertionInArrowFunctions : true,
			allowHigherOrderFunctions : true,
			allowTypedFunctionExpressions : false
		}],
		'func-call-spacing' : 'off',
		'@typescript-eslint/func-call-spacing' : [ 'error', 'never' ],
		'func-names' : [ 'error', 'never' ],
		'func-style' : [ 'error', 'declaration', { allowArrowFunctions : true }],
		'function-call-argument-newline' : [ 'error', 'consistent' ],
		'function-paren-newline' : [ 'error', 'multiline' ],
		'generator-star-spacing' : [ 'error', {
			before : false,
			after : true,
			method : { before : true, after : false }
		}],
		'grouped-accessor-pairs' : [ 'error', 'getBeforeSet' ],
		'guard-for-in' : 'error',
		// unwanted - not enforcing naming rules
		'id-denylist' : 'off',
		// unwanted - not enforcing naming rules
		'id-length' : 'off',
		// using naming-convention
		'id-match' : 'off',
		// potentially unwanted - disallows multiline arrow function expressions
		'implicit-arrow-linebreak' : [ 'warn', 'beside' ],
		// considered broken
		'indent' : 'off',
		'@typescript-eslint/indent' : 'off',
		// unwanted
		'init-declarations' : 'off',
		'@typescript-eslint/init-declarations' : 'off',
		'jsx-quotes' : [ 'error', 'prefer-double' ],
		'key-spacing' : [ 'error', { beforeColon : true, afterColon : true, mode : 'strict' }],
		'keyword-spacing' : 'off',
		'@typescript-eslint/keyword-spacing' : [ 'error', { before : true, after : true }],
		// 'line-comment-position': 'off',
		// enforced externally
		'linebreak-style' : 'off',
		// 'lines-around-comment' : 'off',
		'lines-between-class-members' : 'off',
		"@typescript-eslint/lines-between-class-members" : [ 'warn', 'always', {
			exceptAfterSingleLine : false,
			exceptAfterOverload : true
		}],
		// unwanted - only oop relevant
		'max-classes-per-file' : 'off',
		'max-depth' : [ 'warn', 4 ],
		'max-len' : [ 'warn', 120 ],
		// unwanted - not enforcing complexity rules
		'max-lines' : 'off',
		// unwanted - not enforcing complexity rules
		'max-lines-per-function' : 'off',
		// unwanted - not enforcing complexity rules
		'max-nested-callbacks' : 'off',
		// unwanted - not enforcing complexity rules
		'max-params' : 'off',
		// unwanted - not enforcing complexity rules
		'max-statements' : 'off',
		'max-statements-per-line' : [ 'error', { max : 1 }],
		'@typescript-eslint/member-delimiter-style' : [ 'error', {
			multiline: {delimiter : 'semi', requireLast : true},
			singleline: {delimiter : 'semi', requireLast : false},
			multilineDetection : 'brackets'
		}],
		// '@typescript-eslint/member-ordering' : 'off',
		// using unbound-method
		// potentially unwanted - disallows passing callbacks in settings objects
		'@typescript-eslint/method-signature-style' : [ 'warn', 'method' ],
		'multiline-comment-style' : [ 'error', 'separate-lines' ],
		'multiline-ternary' : [ 'error', 'always-multiline' ],
		'@typescript-eslint/naming-convention' : [
			'error',
			{
				selector : 'default',
				format : [ 'strictCamelCase' ],
				leadingUnderscore : 'forbid',
				trailingUnderscore : 'forbid'
			},
			{ selector : 'variable', modifiers : [ 'const', 'global' ], format : [ 'strictCamelCase', 'UPPER_CASE' ]},
			{ selector : 'interface', format : [ 'StrictPascalCase' ]},
			{ selector : 'typeAlias', format : [ 'StrictPascalCase', 'strictCamelCase' ]},
			{ selector : 'typeParameter', format : [ 'StrictPascalCase' ]}
		],
		// unwanted - only oop relevant
		'new-cap' : 'off',
		'new-parens' : [ 'error', 'always' ],
		// 'newline-per-chained-call' : 'off',
		'no-alert' : 'error',
		'no-array-constructor' : 'error',
		'no-await-in-loop' : 'warn',
		'@typescript-eslint/no-base-to-string' : 'error',
		'no-bitwise' : 'error',
		'no-caller' : 'error',
		'@typescript-eslint/no-confusing-non-null-assertion' : 'error',
		// using code ligatures
		'no-confusing-arrow' : 'off',
		// using no-meaningless-void-operator
		// potentially unwanted - disallows returning after rejecting in promise executors
		'@typescript-eslint/no-confusing-void-expression' : [ 'warn', {
			ignoreArrowShorthand : true,
			ignoreVoidOperator : false
		}],
		'no-console' : 'error',
		// unwanted - disallows function flattening
		'no-continue' : 'off',
		'no-constant-condition' : [ 'error', { checkLoops: false }],
		'no-constructor-return' : 'error',
		// using space-infix-ops
		'no-div-regex' : 'off',
		'no-dupe-class-members' : 'off',
		'@typescript-eslint/no-dupe-class-members' : 'error',
		'no-duplicate-imports' : 'off',
		'@typescript-eslint/no-duplicate-imports' : 'error',
		'no-dynamic-delete' : 'off',
		'@typescript-eslint/no-dynamic-delete' : 'error',
		// unwanted - disallows logic symmetry
		'no-else-return' : 'off',
		'no-empty-function' : 'off',
		'@typescript-eslint/no-empty-function' : [ 'error', { allow : [
			'private-constructors',
			'protected-constructors',
			'decoratedFunctions'
		] }],
		'@typescript-eslint/no-empty-interface' : [ 'error', { allowSingleExtends : true }],
		// using eqeqeq
		'no-eq-null': 'off',
		'no-eval' : 'error',
		'@typescript-eslint/no-explicit-any' : [ 'error', { ignoreRestArgs : false }],
		'no-extend-native' : 'error',
		'no-extra-bind' : 'error',
		'no-extra-label' : 'error',
		'no-extra-parens' : 'off',
		'@typescript-eslint/no-extra-parens' : [ 'error', 'all', {
			conditionalAssign : true,
			returnAssign : true,
			nestedBinaryExpressions : false,
			ignoreJSX : 'none',
			enforceForArrowConditionals : true,
			enforceForSequenceExpressions : true,
			enforceForNewInMemberExpressions : true,
			enforceForFunctionPrototypeMethods : true
		}],
		'@typescript-eslint/no-extraneous-class' : 'error',
		'no-floating-decimal' : 'error',
		'no-implicit-coercion' : [ 'error', {
			boolean : true,
			number : true,
			string : true,
			disallowTemplateShorthand : false
		}],
		'no-implicit-globals' : 'error',
		'@typescript-eslint/no-inferrable-types' : [ 'error', { ignoreParameters : true, ignoreProperties : true } ],
		// unwanted - avoiding comments
		'no-inline-comments' : 'off',
		// unwanted - disallows function binding
		'no-invalid-this' : 'off',
		'@typescript-eslint/no-invalid-this' : 'warn',
		'@typescript-eslint/no-invalid-void-type' : 'error',
		'no-iterator' : 'error',
		'no-label-var' : 'error',
		'no-labels' : 'error',
		'no-lone-blocks' : 'error',
		'no-lonely-if' : 'error',
		'no-loop-func ': 'off',
		'@typescript-eslint/no-loop-func' : 'warn',
		'no-magic-numbers' : 'off',
		'@typescript-eslint/no-magic-numbers' : [ 'warn', {
			ignore : [ -1, 0, 1 ],
			ignoreArrayIndexes : true,
			ignoreDefaultValues : false,
			ignoreEnums : true,
			ignoreNumericLiteralTypes : true,
			ignoreReadonlyClassProperties : true,
			enforceConst : true,
			detectObjects : true
		}],
		'@typescript-eslint/no-meaningless-void-operator' : [ 'error', { checkNever : true }],
		'@typescript-eslint/no-misused-promises' : 'error',
		// using no-extra-parens
		'no-mixed-operators' : 'off',
		'no-multi-assign' : 'error',
		'no-multi-spaces' : [ 'error', { ignoreEOLComments : true } ],
		'no-multi-str' : 'error',
		'no-multiple-empty-lines' : [ 'error', { max: 2, maxEOF : 1, maxBOF : 0 }],
		// unwanted - disallows priority paths
		'no-negated-condition' : 'off',
		'no-nested-ternary' : 'error',
		'no-new' : 'error',
		'no-new-func' : 'error',
		'no-new-object' : 'error',
		'no-new-wrappers' : 'error',
		'@typescript-eslint/no-non-null-asserted-nullish-coalescing' : 'error',
		'no-octal' : 'error',
		'no-octal-escape' : 'error',
		'no-param-reassign' : 'warn',
		// '@typescript-eslint/no-parameter-properties' : 'off',
		'no-plusplus' : 'error',
		'no-promise-executor-return' : 'error',
		'no-proto' : 'error',
		'no-redeclare' : 'off',
		// Bug: treats type aliases and functions with same name as redeclarations
		// '@typescript-eslint/no-redeclare' : [ 'error', { builtinGlobals : true, ignoreDeclarationMerge : true } ],
		'@typescript-eslint/no-require-imports' : 'error',
		// 'no-restricted-syntax' : 'off',
		'no-return-assign' : 'error',
		'no-script-url' : 'error',
		'no-self-compare' : 'error',
		'no-sequences' : 'error',
		'no-shadow' : 'off',
		// Bug: Flags enum members with same name as variables
		'@typescript-eslint/no-shadow' : [ 'error', {
			builtinGlobals : true,
			ignoreTypeValueShadow : true,
			ignoreFunctionTypeParameterNameValueShadow : false,
			hoist : 'all'
		}],
		'no-shadow-restricted-names' : 'error',
		// unwanted - using tabs
		'no-tabs' : 'off',
		'no-template-curly-in-string' : 'warn',
		// unwanted - using ternary
		'no-ternary' : 'off',
		'no-throw-literal' : 'off',
		'@typescript-eslint/no-throw-literal' : [ 'error', {
			allowThrowingAny : false,
			allowThrowingUnknown : false
		}],
		'no-trailing-spaces' : 'error',
		// unwanted - using type aliases
		'@typescript-eslint/no-type-alias' : 'off',
		'no-undef-init' : 'warn',
		// unwanted - handling undefined becomes painful
		'no-undefined' : 'off',
		'no-unmodified-loop-condition' : 'warn',
		// using naming-convention
		'no-underscore-dangle' : 'off',
		'@typescript-eslint/no-unnecessary-boolean-literal-compare' : 'error',
		// Bug: seriously incompetent when handling the null-coalescing chain operator ?.
		'@typescript-eslint/no-unnecessary-condition' : [ 'error', { allowConstantLoopConditions : true } ],
		'@typescript-eslint/no-unnecessary-qualifier' : 'error',
		'@typescript-eslint/no-unnecessary-type-arguments' : 'error',
		'no-unneeded-ternary' : 'error',
		'no-unreachable-loop' : 'error',
		'no-unused-expressions' : 'off',
		'@typescript-eslint/no-unused-expressions' : [ 'error', {
			allowShortCircuit : false,
			allowTernary : false,
			allowTaggedTemplates : false,
			enforceForJSX : false
		}],
		'no-unused-private-class-members' : 'error',
		'@typescript-eslint/no-unused-vars' : 'error',
		'no-use-before-define' : 'off',
		'@typescript-eslint/no-use-before-define' : [ 'error', {
			functions : false,
			classes : true,
			variables : true,
			enums : true,
			typedefs : false
		}],
		'no-useless-call' : 'error',
		'no-useless-computed-key' : 'error',
		'no-useless-concat' : 'error',
		'no-useless-constructor' : 'off',
		'@typescript-eslint/no-useless-constructor' : 'error',
		'no-useless-escape' : 'error',
		'no-useless-rename' : 'error',
		'no-useless-return' : 'error',
		'no-var' : 'error',
		// unwanted - using void
		'no-void' : 'off',
		// enforced externally
		'no-warning-comments' : 'off',
		'no-whitespace-before-property' : 'error',
		// using no-non-null-assertion
		'@typescript-eslint/non-nullable-type-assertion-style' : 'off',
		'nonblock-statement-body-position' : [ 'error', 'beside' ],
		'object-curly-newline' : [ 'error', {
			ObjectExpression : { consistent : true },
			ObjectPattern : { consistent : true },
			ImportDeclaration : { multiline : true },
			ExportDeclaration : { multiline : true }
		}],
		'object-curly-spacing' : 'off',
		'@typescript-eslint/object-curly-spacing' : [ 'warn', 'always', {
			arraysInObjects : true,
			objectsInObjects : false
		}],
		'object-property-newline' : [ 'error', { allowAllPropertiesOnSameLine : true }],
		'object-shorthand' : 'warn',
		// 'one-var' : 'off',
		// 'one-var-declaration-per-line' : 'off',
		'operator-assignment' : 'warn',
		'operator-linebreak' : [ 'error', 'after' ],
		'padded-blocks' : [ 'error', 'never' ],
		'padding-line-between-statements' : 'off',
		// Bug: import statements of style 'import ReadOnlyDict = NodeJS.ReadOnlyDict' are not treated as imports
		'@typescript-eslint/padding-line-between-statements' : [
			'warn',
			{ prev : '*', next : '*', blankLine : 'always' },
			{ prev : 'import', next : 'import', blankLine : 'never' },
			{ prev : 'export', next : 'export', blankLine : 'any' },
			{ prev : [ 'interface', 'type' ], next : [ 'interface', 'type' ], blankLine : 'any' },
			{ prev : [ 'const', 'let', 'var' ], next : [ 'const', 'let', 'var' ], blankLine : 'any' },
			{ prev : 'expression', next : 'expression', blankLine : 'any' },
			{ prev : [ 'case', 'default' ], next : [ 'case', 'default' ], blankLine : 'never' }
		],
		'prefer-arrow-callback' : 'error',
		'prefer-const' : [ 'error', { destructuring : 'all', ignoreReadBeforeAssign : true } ],
		// unwanted - disallows int enums
		'@typescript-eslint/prefer-enum-initializers' : 'off',
		// 'prefer-destructuring' : 'off',
		'prefer-exponentiation-operator' : 'warn',
		'@typescript-eslint/prefer-for-of' : 'error',
		'@typescript-eslint/prefer-function-type' : 'error',
		'@typescript-eslint/prefer-includes' : 'error',
		'@typescript-eslint/prefer-literal-enum-member' : 'warn',
		// unwanted - disallows destructuring
		'prefer-named-capture-group' : 'off',
		// unwanted - disallows all Number.parseInt() for very specific purpose
		'prefer-numeric-literals' : 'off',
		'@typescript-eslint/prefer-nullish-coalescing' : 'error',
		// requires es2022 support, currently (202202) no typescript support
		'prefer-object-has-own' : 'off',
		'prefer-object-spread' : 'warn',
		'@typescript-eslint/prefer-optional-chain' : 'error',
		'prefer-promise-reject-errors' : 'error',
		'@typescript-eslint/prefer-readonly' : 'warn',
		// Bug: Flags values that cannot be set readonly
		// '@typescript-eslint/prefer-readonly-parameter-types' : 'error',
		'@typescript-eslint/prefer-reduce-type-parameter' : 'error',
		'@typescript-eslint/prefer-regexp-exec' : 'warn',
		'prefer-regex-literals' : 'error',
		'prefer-rest-params' : 'error',
		'@typescript-eslint/prefer-return-this-type' : 'error',
		'prefer-spread' : 'warn',
		'prefer-template' : 'error',
		'@typescript-eslint/prefer-string-starts-ends-with' : 'error',
		'@typescript-eslint/prefer-ts-expect-error' : 'error',
		// potentially unwanted - disallows wrapping promise yielding functions
		// using no-floating-promises, no-misused-promises
		'@typescript-eslint/promise-function-async' : 'warn',
		'quote-props' : [ 'error', 'as-needed' ],
		'quotes' : 'off',
		'@typescript-eslint/quotes' : [ 'error', 'single', { avoidEscape : true, allowTemplateLiterals : true }],
		'radix' : 'error',
		'@typescript-eslint/require-array-sort-compare' : 'error',
		'require-atomic-updates' : 'error',
		'require-await': 'off',
		// unwanted - disallows casting return values into promises
		'@typescript-eslint/require-await' : 'off',
		// unwanted - disallows performant parsing of guaranteed ascii
		'require-unicode-regexp' : 'off',
		'@typescript-eslint/restrict-plus-operands' : [ 'error', {
			checkCompoundAssignments : true,
			allowAny : false
		}],
		'no-return-await' : 'off',
		'@typescript-eslint/return-await' : [ 'error', 'in-try-catch' ],
		'rest-spread-spacing' : [ 'error', 'never' ],
		'semi' : 'off',
		'@typescript-eslint/semi' : [ 'error', 'always', { omitLastInOneLineBlock : true }],
		'semi-spacing' : [ 'error', { before: false, after: true }],
		'semi-style' : [ 'error', 'last' ],
		'sort-imports' : [ 'error', {
			ignoreCase : false,
			ignoreDeclarationSort : true,
			ignoreMemberSort : false,
			memberSyntaxSortOrder : ['none', 'single', 'all', 'multiple'],
			allowSeparatedGroups : false
		}],
		// 'sort-keys' : 'off',
		// '@typescript-eslint/sort-type-union-intersection-members' : 'off'
		// 'sort-vars' : 'off',
		'space-before-blocks' : [ 'error', 'always' ],
		'space-before-function-paren' : 'off',
		'@typescript-eslint/space-before-function-paren' : [ 'error', {
			anonymous : 'never',
			asyncArrow : 'always',
			named : 'never'
		}],
		'space-in-parens' : [ 'error', 'never' ],
		'space-infix-ops' : 'off',
		'@typescript-eslint/space-infix-ops' : 'error',
		'space-unary-ops' : [ 'error', { words : true, nonwords : false }],
		'spaced-comment' : [ 'error', 'always' ],
		// enforced externally through typescript --strict option
		'strict' : 'off',
		'@typescript-eslint/strict-boolean-expressions' : 'error',
		'switch-colon-spacing' : [ 'error', { before : true, after : true }],
		// Using default-case instead
		'@typescript-eslint/switch-exhaustiveness-check' : 'off',
		'symbol-description' : 'warn',
		'template-curly-spacing' : [ 'error', 'always' ],
		'template-tag-spacing' : [ 'error', 'never' ],
		// Bug: property will not affect map type aliases
		// Bug: parameter will not affect parameters with default
		// '@typescript-eslint/type-annotation-spacing' : [ 'error', {
		// 	before : false,
		// 	after : false,
		// 	overrides : {
		// 		arrow : { before : true, after : true },
		// 		parameter : { before : true, after : true },
		// 		property : { before : true, after : true },
		// 		returnType : { before : true, after : true },
		// 		variable : { before : true, after : true }
		// 	}
		// }],
		// unwanted - disallows type inference
		'@typescript-eslint/typedef' : 'off',
		// potentially unwanted - disallows bindable function arguments
		'@typescript-eslint/unbound-method' : 'warn',
		// enforced externally
		'unicode-bom' : 'off',
		'@typescript-eslint/unified-signatures' : 'warn',
		// using no-var
		'vars-on-top' : 'off',
		'wrap-iife': [ 'error', 'inside', { functionPrototypeMethods : true }],
		// using space-infix-ops
		'wrap-regex' : 'off',
		'yield-star-spacing' : [ 'error', 'after' ],
		'yoda': [ 'error', 'never' ]
	}
};
