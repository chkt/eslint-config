export function noCompareNegZeroBad(v:number) : boolean {
	return v === -0;
}

export function noCondAssignBad(value:number) : boolean {
	if (value = 0) return true; // eslint-disable-line no-constant-condition, @typescript-eslint/strict-boolean-expressions
	else return false;
}

export function noConstAssignGood(v:number) : number {
	let foo = v;

	foo += Math.random();

	return foo;
}

export function noConstAssignBad(v:number) : number {
	const foo = v;

	foo += Math.random();

	return foo;
}

export function noConstantBinaryExpressionGood(v:boolean) : number | false {
	return v && 0;
}

export function noConstantBinaryExpressionBad() : number | false {
	return false && 1;
}

export function noConstantConditionGood(v:boolean) : number {
	return v ? 1 : 0;
}

export function noConstantConditionBad() : number {
	return false ? 1 : 0;
}

export function noSelfAssignGood(v:number, w:number) : [ number, number ] {
	let [ a, b ] = [ v, w ];

	[ a, b ] = [ b, a ];

	return [ a, b ];
}

export function noSelfAssignBad(v:number, w:number) : [ number, number ] {
	let [ a, b ] = [ v, w ];

	[ a, b ] = [ a, b ];

	return [ a, b ];
}

export function noSelfCompareBad(v:number) : boolean {
	return v === v;
}

export function eqeqeqBad(v:number) : boolean {
	return v == 0;
}

export function logicalAssignmentOperatorsBad(v:boolean[]) : boolean {
	let res = false;

	for (const b of v) res = res || b;

	return res;
}

export function noMultiAssignBad(sideFx:(v:number, w:number) => void) : void {
	let b;
	const a = b = 1;

	sideFx(a, b);
}

export function noReturnAssignBad() : number {
	let foo:number;

	return foo = 1;
}

export function yodaBad(v:number) : boolean {
	return 0 === v;
}

export function noUnnecessaryBooleanLiteralCompare(v:boolean) : boolean {
	return v === true;
}

export function noUnnecessaryConditionGood(v?:{ foo ?: { bar ?: number }}) : number {
	if (v?.foo?.bar !== undefined) return v.foo.bar;
	else return 0;
}

export function noUnnecessaryConditionBad(v:number) : number {
	if (v !== undefined) return v;
	else return 0;
}

export function strictBooleanExpressionsBad(v?:boolean) : number {
	if (v) return 0;
	else return 1;
}
