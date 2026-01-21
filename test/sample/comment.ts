export function noInlineCommentsBad() : number {
	return 1; // returns a number
}

export function banTsCommentGood(v:unknown) : number {
	// @ts-expect-error unknown not number
	return v;
}

export function banTsCommentBad(v:unknown) : number {
	// @ts-ignore
	return v;
}

export function banTslintCommentBad() : void {
	// tslint:disable
}

export function noDeprecated() : number {
	/**
	 * @deprecated
	 */
	function foo() : number {
		return Math.random();
	}

	return foo();
}
