export function noEvalBad(v:string) : void {
	eval(v);
}

export function noImpliedEvalBad(v:string) : void {
	setTimeout(v, 0);
}

export function noNewFuncBad() : () => unknown {
	return new Function('', 'return undefined');
}

export function noScriptUrlBad() : string {
	return 'javascript:void(0)';

}

export function noScriptUrlUgly() : string {
	const js = 'javascript';
	const source = 'void(0)';

	return `${ js }:${ source }`;
}
