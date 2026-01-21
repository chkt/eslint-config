export function noDupeElseIfBad(v:number) : boolean {
	if (v === 1) return true;
	else if (v === 0) return false;
	else if (v === 1) return false;
	else return true;
}

export function noDuplicateCaseBad(v:number) : boolean {
	switch (v) {
		case 1 : return true;
		case 0 : return false;
		case 1 : return false;
		default : return true;
	}
}

export function noFallthroughGood(v:number, a:() => boolean, b:() => boolean) : boolean {
	let res = false;

	switch (v) {
		case 1 :
			res ||= a();
			// fallthrough
		default : res ||= b();
	}

	return res;
}

export function noFallthroughBad(v:number, a:() => boolean, b:() => boolean) : boolean {
	let res = false;

	switch (v) {
		case 1 : res ||= a();
		default : res ||= b();
	}

	return res;
}

export function defaultCaseGood(v:number) : boolean {
	switch (v) {
		case 0 : return true;
		// no default
	}

	return false;
}

export function defaultCaseBad(v:number) : boolean {
	switch (v) {
		case 0 : return true;
	}

	return false;
}

export function defaultCaseLastBad(v:number) : boolean {
	switch(v) {
		default : return false;
		case 0 : return true;
	}
}

export function noCaseDeclarationsGood(value:number, sideFx:(v:number) => void) : number {
	switch (value) {
		case 1: {
			const x = 1;

			sideFx(x);

			break;
		}
		default : return 0;
	}

	return 1;
}

export function noCaseDeclarationsBad(value:number, sideFx:(v:number) => void) : number {
	switch (value) {
		case 1:
			const x = 1;

			sideFx(x);

			break;
		default : return 0;
	}

	return 1;
}

export function noLonelyIfBad(v:unknown) : boolean {
	if (typeof v === 'string') return true;
	else {
		if (typeof v === 'number') return false;
	}

	return false;
}

export function noNestedTernaryBad(v:unknown) : string {
	return typeof v === 'string' ? 'a' : (typeof v === 'number' ? 'b' : 'c');
}

export function noUnneededTernaryBad(v:boolean) : boolean {
	return v ? true : false;
}

export function noUnnecessaryConditionBad(v:number[]) : boolean {
	if (v !== null) return true;
	else return false;
}

export function switchExhaustiveCheckGoodEnum() : number {
	enum Foo {
		bar,
		baz
	}

	function qux(foo:Foo) : number {
		switch (foo) {
			case Foo.bar: return 0;
			case Foo.baz: return 1;
		}
	}

	return qux(Foo.bar);
}

export function switchExhaustiveCheckBadEnum() : number {
	enum Foo {
		bar,
		baz
	}

	function qux(foo:Foo) : number {
		switch (foo) {
			case Foo.bar: return 0;
			case Foo.baz: return 1;
			default : return -1;
		}
	}

	return qux(Foo.bar);
}

export function switchExhaustiveCheckGoodUnionExhaustive(v:'foo' | 'bar') : number {
	switch(v) {
		case 'foo' : return 0;
		case 'bar' : return 1;
	}
}

export function switchExhaustiveCheckGoodUnionDefault(v:'foo' | 'bar') : number {
	switch(v) {
		case 'foo' : return 0;
		default : return 1;
	}
}

export function switchExhaustiveCheckBadUnion(v:'foo' | 'bar') : number {
	switch(v) {
		case 'foo' : return 0;
	}

	return 1;
}
