export function arrayCallbackGood(arr:number[]) : number[] {
	return arr.map(v => v);
}

export function arrayCallbackBadArrow(arr:number[], sideFx:(v:number) => void) : unknown[] {
	return arr.map(v => {
		sideFx(v);
	});
}

export function arrayCallbackBadExpr(arr:number[], sideFx:(v:number) => void) : unknown[] {
	return arr.map(function(v) {    // eslint-disable-line prefer-arrow-callback
		sideFx(v);
	});
}

export function arrayCallbackFunctionUgly(arr:number[]) : unknown[] {
	function foo() : void {
		return undefined;
	}

	return arr.map(foo);
}

export function noSparseArraysBad() : number[] {
	return [, 1];
}

export function noSparseArraysUgly() : number[] {
	const res:number[] = [];

	res[1] = 1;

	return res;
}

export function noArrayConstructorGood(length:number) : unknown[] {
	return new Array(length);
}

export function noArrayConstructorBad(...args:number[]) : unknown[] {
	return new Array(...args);
}

export function noArrayDeleteBad(v:number[]) : undefined {
	delete v[1];
}

export function preferFindBad(v:number[]) : number {
	return v.filter(w => w === 0)[0];
}

export function preferIncludesBad(v:number[], n:number) : boolean {
	return v.indexOf(n) !== -1;
}

export function preferReduceTypeParameterBad(v:number[]) : number[] {
	return v.reduce((p, w) => [ ...p, w ], [] as number[]);
}

export function requireArraySortCompareBad(v:number[]) : number[] {
	return v.sort();
}
