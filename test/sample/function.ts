export function noDupeArgsBad(a:number, b:number, a:number) : number {
	return a + b;
}

export function noFuncAssignGood(fn?:() => void) : () => void {
	let foo:() => void = () => undefined;

	if (fn !== undefined) foo = fn;

	return foo;
}

export function noFuncAssignBad(fn:() => void) : () => void {
	function foo() : void { return undefined; }

	foo = fn;

	return foo;
}

export function noInnerDeclarationsGood(v:boolean) : (w:number) => number {
	if (v) {
		const foo = (w:number) : number => w;

		return foo;
	}
	else return () => 1;
}

export function noInnerDeclarationsBad(v:boolean) : (w:number) => number {
	if (v) {
		function foo(w:number) : number { return w };

		return foo;
	}
	else return () => 1;
}

export function arrowBodyStyleGood() : () => number {
	return () : number => 1;
}

export function arrowBodyStyleBad() : () => number {
	return () : number => { return 1 };
}

export function adjacentOverloadSignaturesBad(a:number) : number;
export function adjacentOverloadSignaturesBadOther() : void;

export function consistentReturnBad(v:boolean) : number | undefined {
	if (v) return 0;
}

export function defaultParamLastGood(a:number = 1, b?:number) : number {
	return a + (b ?? 0);
}

export function defaultParamLastBad(a:number = 1, b:number) : number {
	return a + b;
}

export function funcNamesBad(value:boolean, sideFx:(v:() => number) => void) : () => number {
	const foo = value ?
		function foo() { return 1; } :
		function bar() { return 0; };

	sideFx(foo);

	return foo;
}

export function funcStyleGood(sideFx:(v:() => number) => void) : () => number {
	const foo = () : number => 1;

	sideFx(foo);

	return foo;
}

export function funcStyleBad(sideFx:(v:() => number) => void) : () => number {
	const foo = function() : number { return 1; };

	sideFx(foo);

	return foo;
}

export function noCallerBad() : string {
	return arguments.callee.name;
}

export function noExtraBindBad() : () => string {
	return (function() : string { return 'foo'; }).bind(null);
}

export function noExtraBindUgly() : { foo() : number } {
	function foo() : number {
		return 1;
	}

	return {
		foo : foo.bind(foo)
	};
}

export function noEmptyFunctionBad() : void {}

export function noParamReassignBad(a:number) : number {
	a **= a;

	return a;
}

export function noUselessCallBad(fn:() => number) : number {
	return fn.call(null);
}

export function noUselessReturnBad() : void {
	return;
}

export function preferArrowCallbackGood(fn:(callback:() => number) => number, v:number) : number {
	function cb() : number { return v; }

	return fn(cb);
}

export function preferArrowCallbackBad(fn:(callback:() => number) => number, v:number) : number {
	return fn(function() { return v });
}

export function preferRestParamsBad() : unknown[] {
	return Array.from(arguments);
}

export function preferSpreadBad(fn:(...v:unknown[]) => number, ...args:unknown[]) : number {
	return fn.apply(null, args);
}

export function preferReadonlyParameterTypesGood(v:number[]) : number[] {
	return v;
}

export function unifiedSignaturesGood(a:number) : number;
export function unifiedSignaturesGood(b:string) : number;
export function unifiedSignaturesGood(v:number | string) : number {
	return Number(v);
}

export function unifiedSignaturesBad(v:number) : number;
export function unifiedSignaturesBad(v:string) : number;
export function unifiedSignaturesBad(v:number | string) : number {
	return Number(v);
}
