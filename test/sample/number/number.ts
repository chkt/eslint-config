export function noLossOfPrecisionBad() : number {
	return 2.0000000000000001;
}

export function useIsnanBad(v:number) : boolean {
	return v === Number.NaN;
}

export function noMagicNumbersGood() : (bigint|number)[] {
	return [ -1, 0, 1, -1n, 0n, 1n ];
}

export function noMagicNumbersBad() : bigint {
	return 2n;
}

export function preferExponentiationBad(a:number, b:number) : number {
	return Math.pow(a, b);
}

export function preferNumericLiteralsGood(v:string) : number {
	return Number.parseInt(v, 2);
}

export function preferNumericLiteralsBad() : number {
	return Number.parseInt('1', 2);
}

export function radixBad(v:string) : number {
	return Number.parseInt(v);
}
