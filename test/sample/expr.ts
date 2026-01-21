export function noEmptyPatternGood(v:{ foo : { bar : number }}) : number {
	const { foo : { bar }} = v;

	return bar;
}

export function noEmptyPatternBad(v:{ foo : number }) : void {
	const { foo : {} } = v;
}


export function noUnsafeNegationGood(v:unknown) : boolean {
	return !(v instanceof Object);
}

export function noUnsafeNegationBad(v:unknown) : boolean {
	return !v instanceof Object;
}

export function noUnsafeOptionalChainingBad(v?:{ foo() : unknown }) : boolean {
	return {} instanceof v.foo;
}

export function noBitwiseBad(a:number, b:number) : number {
	return a | b;
}

export function noImplicitCoercionBad(v:number) : boolean {
	return !!v;
}

export function noPlusPlus(value:number, sideFx:(v:number) => void) : number {
	sideFx(value++);

	return value;
}

export function noSequencesBad(value:number, sideFx:(v:number) => void) : number {
	return sideFx(value), value;
}

export function noUnusedExpressionsBad(a:number, b:number) : void {
	a + b;
}

export function operatorAssignmentBad(v:number, w:number) : number {
	let a = v;

	a = a + w;

	return a;
}

export function preferDestructingBad(v:{ foo : number }) : number {
	const foo = v.foo;

	return foo;
}

export function noUselessDefaultAssignmentBad({ foo = '' }:{ foo : string }) : string {
	return foo;
}

export function preferNullishCoalescingBad(a?:number, b:number = 1) : number {
	return a || b;  // eslint-disable-line @typescript-eslint/strict-boolean-expressions
}

export function preferOptionalChainGood(v?:{ foo ?: { bar ?: number }}) : number | undefined {
	return v?.foo?.bar;
}

export function preferOptionalChainBad(v?:{ foo ?: { bar ?: number }}) : number | undefined {
	return v && v.foo && v.foo.bar;
}

export function restrictPlusOperandsBad(a:number, b:string) : string {
	return a + b;
}
