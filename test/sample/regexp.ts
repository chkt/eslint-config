export function noControlRegexBad() : RegExp {
	return /\x00*/;
}

export function noEmptyCharacterClassBad() : RegExp {
	return /[]/;
}

export function noInvalidRegexBad() : RegExp {
	return RegExp('[');
}

export function noInvalidRegexpUgly(v:boolean) : RegExp {
	const expr = v ? '[' : '.*';

	return RegExp(expr);
}

export function noMisleadingCharacterClassBad() : RegExp {
	return /[Á]️/u;
}

export function noUselessBackreferenceBad() : RegExp {
	return /^(?:(a)|\1b)$/;
}

export function noDivRegexpBad() : RegExp {
	return /=foo/;
}

export function noRegexSpacesBad() : RegExp {
	return /   /;
}

export function preferRegexLiteralGood(v:string) : RegExp {
	return new RegExp(`^${ v }$`);
}

export function preferRegexLiteralBad() : RegExp {
	return new RegExp('.*');
}

export function preferRegexExecBad(v:string) : RegExpMatchArray | null {
	const expr = /^.*$/;

	return v.match(expr);
}
