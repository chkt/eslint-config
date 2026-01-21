export function noIrregularWhitespaceGood() : number {
	/* eslint-disable @typescript-eslint/no-unused-vars */
	const str = ' ';
	// irregular whitespace allowed in comments
	const expr = /^ */;
	const tmpl = `${ Math.random().toFixed(1) } ${ Math.random().toFixed(1) }`;
	const jsx = `<div> </div>`;
	/* eslint-enable @typescript-eslint/no-unused-vars */

	return 1;
}

export function noIrregularWhitespaceBad() : number {
	return 1;
}

export function noUnexpectedMultilineBad(fn:(v:number) => void) : void {
	return void fn
	(1);
}

export function curlyGood(v:string[]) : number {
	for (const item of v) {
		if (item === '') return 0;
	}

	return 1;
}

export function curlyBad(v:string[]) : number {
	for (const item of v) {
		if (item === '')
			return 0;
	}

	return 1;
}

export function maxDepthBad(v:object[]) : void {
	for (const value of v) {
		if ('foo' in value) {
			const { foo : fooVal } = value;

			if (typeof fooVal === 'number') {
				if (Number.isFinite(fooVal)) {
					if (Number.isNaN(fooVal)) {
						value.foo = 0;
					}
					else value.foo = 1;
				}
			}
		}
	}
}
