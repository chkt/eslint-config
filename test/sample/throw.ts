export function noExAssignBad(fn:() => number, sideFx:(v:unknown) => void) : void {
	try {
		fn();
	}
	catch (err) {
		err = 1;

		sideFx(err);
	}
}

export function noUnsafeFinallyGood(fn:() => number) : number {
	let res:number;

	try {
		res = fn();
	}
	catch {
		return 0;
	}
	finally {
		res = 1;
	}

	return res;
}

export function noUnsafeFinallyBad(fn:() => number) : number {
	try {
		return fn();
	}
	catch {
		return 0;
	}
	finally {
		return 1;
	}
}

export function noThrowLiteralGood() : void {
	throw new Error('foo');
}

export function noThrowLiteralBad() : void {
	throw 'foo';
}

export function noUselessCatchGood(fn:() => void, sideFx:(v:unknown) => void) : void {
	try {
		fn();
	}
	catch(err) {
		sideFx(err);

		throw err;
	}
}

export function noUselessCatchBad(fn:() => void) : void {
	try {
		fn();
	}
	catch (err) {
		throw err;
	}
}

export function preserveCaughtErrorGood(fn:() => number, sideFx:(v:unknown) => void) : number {
	try {
		return fn();
	}
	catch(err) {
		sideFx(err);

		return 0;
	}
}

export function preserveCaughtErrorBad(fn:() => void, sideFx:(v:unknown) => void) : void {
	try {
		fn();
	}
	catch (err) {
		sideFx(err);

		throw new Error('foo');
	}
}
