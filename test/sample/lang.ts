export function noDebuggerBad(v:number) : number {
	debugger;

	return v;
}

export function noNewNativeNonconstructorBad(sideFx:(v:unknown) => void) : unknown {
	const sym = new Symbol('foo');  // eslint-disable-line @typescript-eslint/no-unsafe-assignment

	sideFx(sym);

	return sym;
}

export function noUnassignedVarsBad() : void {
	let n;

	return n;
}

export function noUnreachableBad(value:number, sideFx:(v:number) => void) : void {
	return undefined;

	sideFx(value);
}

export function noUnusedVarsBad() : void {
	const foo = 1;
}

export function noUseBeforeDefineBad(sideFx:(v:number) => void) : number {
	sideFx(foo);

	let foo = 1;

	return foo;
}

export function noUselessAssignment() : number {
	let foo = 1;

	foo = 0;

	return foo;
}


export function validTypeofBad(v:unknown) : boolean {
	return typeof v === 'foo';
}

export function noDeleteVarBad(sideFx:(v:number) => void) : void {
	const x = 1;

	sideFx(x);

	delete x;
}

export function noEmptyBad() : void {}

export function noIteratorBad(v:number[]) : unknown {
	return v.__iterator__;
}

export function noLabelsBad(v:number[]) : number[] {
	const res:number[] = [];

	label: for (const n of v) res.push(n);

	return res;
}

export function noLoneBlocksBad(sideFx:(v:number) => void) : void {
	{
		const foo = 1;

		sideFx(foo);
	}
}

export function noNewBad() : void {
	new Array(1);
}

export function noRedeclareBad(sideFx:(v:number) => void) : void {
	let a = 1;

	sideFx(a);

	let a = 0;

	sideFx(a);
}

export function noShadowRestrictedNamesBad(value:number, sideFx:(v:number) => void) : number {
	const undefined = value;

	sideFx(undefined);

	return undefined;
}

export function noUndefInitBad(v:boolean) : boolean | undefined {
	let foo = undefined;

	if (v) foo = v;

	return foo;
}

export function noUselessRenameBad(v:{ foo : number }) : number {
	const { foo : foo } = v;

	return foo;
}

export function noVar(v:boolean) : number {
	var res = v ? 0 : 1;

	return res;
}

export function noWithBad(v:{ foo : number }) : unknown {
	with (v) {
		return foo;
	}
}

export function preferConstBad(value:number, sideFx:(v:number) => void) : number {
	let foo = value;

	sideFx(foo);

	return value;
}

export function* requireYieldBad(v:number) : Generator<never, number, never> {
	return v;
}
