export function getterReturnBad() : { foo : unknown } {
	return {
		get foo() { Math.random() }
	};
}

export function noDupeKeysBad(foo:number, bar:number) : { foo : number } {
	return {
		foo,
		foo : bar
	};
}

export function noPrototypeBuiltinsGood(v:Readonly<object>) : boolean {
	return Object.hasOwn(v, 'foo');
}

export function noPrototypeBuiltinsBad(v:Readonly<object>) : boolean {
	return v.hasOwnProperty('foo');
}

export function noSetterReturnBad() : { foo : unknown } {
	return {
		get foo() { return 1 },
		set foo(v:number) { return undefined }
	};
}

export function accessorPairsBad(sideFx:(v:number) => void) : { foo : number } {
	return {
		set foo(v:number) { sideFx(v); }
	};
}

export function dotNotationBad(v:{ foo : number }) : number {
	return v['foo'];
}

export function groupedAccessorPairsBad(sideFx:(v:number) => void) : { foo : number } {
	return {
		set foo(v:number) { sideFx(v); },
		get foo() { return 1; }
	}
}

export function noObjectConstructorBad() : object {
	return new Object();
}

export function noProtoBad(v:object) : unknown {
	return v.__proto__;
}

export function noUselessComputedKeyBad() : { foo : 1 } {
	return { ["foo"] : 1 };
}

export function objectShorthandBad(foo:number) : { foo:number } {
	return { foo : foo };
}

export function preferObjectHasOwnBad(v:object) : boolean {
	return Object.prototype.hasOwnProperty.call(v, 'foo');
}

export function preferObjectSpreadBad() : { foo : number } {
	return Object.assign({}, { foo : 1 });
}

export function noDynamicDeleteBad(v:Record<string, unknown>, key:string) : void {
	delete v[key];
}

export function noInvalidThisBad() : unknown {
	return this;
}

export function noMisusedSpreadBad(v:string[]) : object {
	return { ...v };
}

export function noThisAliasBad(this:number, value:number, sideFx:(v:number) => void) : number {
	const self = this;

	sideFx(self);

	return value;
}

export function unboundMethodGood() : unknown {
	const foo = {
		get bar() { return this; }
	}

	return foo.bar;
}

export function unboundMethodBad() : unknown {
	const foo = {
		bar() { return this; }
	}

	return foo.bar;
}
