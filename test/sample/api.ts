export function noObjCallsBad() : undefined {
	return Math();
}

export function noUndefBad() : unknown {
	return globalFn();
}

export function noAlertBad(v:string) : void {
	alert(v);
}

export function noConsoleBad(v:string) : void {
	console.log(v);
}

export function noExtendNativeBad() : void {
	Object.prototype.foo = 1;
}

export function noExtendNativeUgly() : void {
	Object.assign(Object.prototype, {
		foo : 1
	});
}

export function noGlobalAssignBad() : void {
	undefined = 1;
}

export function noNewWrappersBad() : unknown {
	return new String('foo');
}

export function noRequireImports(sideFx:(v:unknown) => void) : unknown {
	const foo:unknown = require('/foo.ts');

	sideFx(foo);

	return foo;
}
