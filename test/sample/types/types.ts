// adjacent-overload-signatures

export function arrayTypeBad(v:Array<number>) : number[] {
	return v;
}

export function consistentGenericConstructorsGood(sideFx:(v:unknown) => void) : Map<string, string> {
	const map:Map<string, string> = new Map();

	sideFx(map);

	return map;
}

export function consistentGenericConstructorsBad(sideFx:(v:unknown) => void) : Map<string, string> {
	const map = new Map<string, string>();

	sideFx(map);

	return map;
}

export function consistentIndexedObjectStyleGood() : { foo : string, [key:string] : unknown } {
	return { foo : 'foo' };
}

export function consistentIndexedObjectStyleBad() : { [key:string] : unknown } {
	return {};
}

export function consistentTypeAssertionsBad(sideFx:(v:string) => void) : string {
	const foo = <const>'foo';

	sideFx(foo);

	return foo;
}

export function consistentTypeDefinitionsGood<T extends object>(value:T, sideFx:(v:unknown) => void) : T {
	type Foo = { readonly [P in keyof T] : T[P] };

	const foo:Foo = value;

	sideFx(foo);

	return foo;
}

export function consistentTypeDefinitionsBad(sideFx:(v:unknown) => void) : unknown {
	type Foo = {
		foo : number;
	}

	const foo:Foo = { foo : 1 };

	sideFx(foo);

	return foo;
}

export function explicitFunctionReturnTypeGood(v:number) : number {
	return v;
}

export function explicitFunctionReturnTypeBad(v:number) {
	return v;
}

export const explicitFunctionReturnTypeUgly = (v:number) => v;

export class ExplicitMemberAccessibilityGood {
	private readonly foo:number = 1;

	get bar() : number { return this.foo; }
}

export class ExplicitMemberAccessibilityBad {
	public foo:number = 1;
}

export function methodSignatureStyleGood(v:{ foo() : number }) : number {
	return v.foo();
}

export function methodSignatureStyleBad(v:{ foo : () => number }) : number {
	return v.foo();
}

export function methodSignatureStyleUgly(fn:() => number) : number {
	interface Foo {
		foo() : number;
	}

	function foo(v:Foo) : number {
		return v.foo();
	}

	return foo({ foo : fn });
}

export function namingConventionGood(_v:number) : undefined {
	return undefined;
}

export function naming_conventionBad(V:number) : number {
	const Foo = V;

	return Foo;
}

export function noConfusingNonNullAssertionBad(a?:boolean, b:boolean = false) : boolean {
	return a! === b;
}

export function noConfusingVoidExpressionGood(value:string, sideFx:(v:string) => void) : void {
	return void sideFx(value);
}

export function noConfusingVoidExpressionBad(value:string, sideFx:(v:string) => void) : void {
	return sideFx(value);
}

export function noDuplicateTypeConstituentsBad(sideFx:(v:number) => void) : number {
	type Foo = 0 | 0;

	const foo:Foo = 0;

	sideFx(foo);

	return foo;
}

export function noDuplicateTypeConstituentsUgly(sideFx:(v:number) => void) : number {
	type Foo = 0 | 1;
	type Bar = 0 | Foo;

	const foo:Bar = 0;

	sideFx(foo);

	return foo;
}

export function noEmptyInterfaceGood(sideFx:(v:unknown) => void) : unknown {
	interface Foo {
		foo : number;
	}

	interface Bar {
		bar : number;
	}

	interface Baz extends Foo, Bar {}

	const foo:Baz = { foo : 1, bar : 0 };

	sideFx(foo);

	return foo;
}

export function noEmptyInterfaceBad(sideFx:(v:unknown) => void) : unknown {
	interface Foo {}

	const foo:Foo = 'foo';

	sideFx(foo);

	return foo;
}

export function noEmptyObjectTypeBad(sideFx:(v:unknown) => void) : unknown {
	type Foo = {};

	const foo:Foo = 'foo';

	sideFx(foo);

	return foo;
}

export function noExplicitAny(v:number) : any {
	return v;
}

export function noExtraNonNullAssertion(a?:boolean) : boolean {
	return a!!;
}

export function noNonNullAssertedNullishCoalescingBad(v?:{ foo ?: number }) : number {
	return v!.foo ?? 0;
}

export function nonNullAssertedOptionalChain(v?:{ foo ?: number }) : number {
	return v?.foo!;
}

export function noRedundantTypeConstituents(sideFx:(v:string) => void) : string {
	type Foo = string | '';

	const foo:Foo = 'foo';

	sideFx(foo);

	return foo;
}

export function noUnnecessaryTypeArgumentsBad(sideFx:(v:unknown) => void) : unknown {
	interface Foo<T = number> {
		foo : T;
	}

	const foo:Foo<number> = { foo : Math.random() };

	sideFx(foo);

	return foo;
}

export function noUnnecessaryTypeAssertionsBad() : number {
	return (1 + 1) as number;
}

export function noUnnecessaryTypeConstraintsBad(sideFx:(v:unknown) => void) : unknown {
	interface Foo<T extends unknown> {
		foo : T;
	}

	const foo:Foo<number> = { foo : 1 };

	sideFx(foo);

	return foo;
}

export function noUnnecessaryTypeConversionBad() : boolean {
	return Boolean(true);
}

export function noUnnecessaryTypeParametersBad<T, U>(_a:T, b:U) : U {
	return b;
}

export function noUnsafeArgumentBad(v:any) : number {   // eslint-disable-line @typescript-eslint/no-explicit-any
	function foo(a:number) : number {
		return a;
	}

	return foo(v);
}

export function noUnsafeAssignmentBad(value:any, sideFx:(v:unknown) => void) : number { // eslint-disable-line @typescript-eslint/no-explicit-any
	const foo:number = value;

	sideFx(value);

	return foo;
}

export function noUnsafeCallBad(v:any) : void { // eslint-disable-line @typescript-eslint/no-explicit-any
	v();
}

export function noUnsafeDeclarationMergingBad(v:number) : unknown {
	interface Foo {
		bar : number;
	}

	class Foo {
		constructor(public baz:number) {}
	}

	return new Foo(v);
}

export function noUnsafeFunctionTypeBad(sideFx:(v:unknown) => void) : unknown {
	const foo:Function = () => undefined;

	sideFx(foo);

	return foo;
}

export function noUnsafeMemberAccessBad(v:any) : unknown {  // eslint-disable-line @typescript-eslint/no-explicit-any
	return v.foo;
}

export function noUnsafeReturnBad(v:any) : number { // eslint-disable-line @typescript-eslint/no-explicit-any
	return v;
}

export function noUnsafeTypeAssertionBad(value:boolean, sideFx:(v:unknown) => void) : number {
	function foo() : string | number {
		return value ? '1' : 0;
	}

	const bar = foo() as number;

	sideFx(bar);

	return bar;
}

export function noUnsafeUnaryMinusBad(v:string) : number {
	return -v;
}

export function noWrapperObjectTypesBad() : String {
	return 'foo';
}

export function nonNullableTypeAssertionStyleBad(v:number) : number {
	const foo = Math.random() > v ? 1 : undefined;

	return foo as number;
}

export function preferAsConstBad(sideFx:(v:number) => void) : number {
	const foo:2 = 2;

	sideFx(foo);

	return foo;
}

export function preferFunctionTypeBad(fn:{ () : void }) : void {
	fn();
}

export function strictVoidReturnBad(value:number, sideFx:(v:unknown) => void) : () => void {
	const foo:() => void = () => value;

	sideFx(foo);

	return foo;
}
