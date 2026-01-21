export async function noAsyncPromiseExecutorGood() : Promise<void> {
	return new Promise(resolve => {
		resolve(undefined);
	});
}

export async function noAsyncPromiseExecutorBad() : Promise<void> {
	return new Promise(async resolve => {
		resolve(undefined);
	});
}

export async function noAwaitLoopGood(...args:readonly(() => Promise<number>)[]) : Promise<number[]> {
	return Promise.all(args.map(async v => v()));
}

export async function noAwaitInLoopBad(...args:readonly(() => Promise<number>)[]) : Promise<number[]> {
	const res:number[] = [];

	for (const arg of args) {
		res.push(await arg());
	}

	return res;
}

export async function noPromiseExecutorReturnGood() : Promise<void> {
	return new Promise(resolve => void resolve(undefined));
}

export async function noPromiseExecutorReturnBad() : Promise<void> {
	return new Promise(resolve => resolve(undefined));
}

export async function requireAtomicUpdatesBad(fns:(() => Promise<number>)[]) : Promise<number> {
	let res = 0;

	async function add(fn:() => Promise<number>) : Promise<void> {
		res += await fn();
	}

	await Promise.all(fns.map(async v => add(v)));

	return res;
}

export async function rejectPromiseRejectErrorsGood() : Promise<void> {
	return new Promise((_resolve, reject) => {
		reject(new Error('foo'));
	});
}

export async function rejectPromiseRejectErrorsBad() : Promise<void> {
	return new Promise((_resolve, reject) => {
		reject('foo');
	});
}


export async function awaitThenableBad(fn:() => string, sideFx:(v:string) => void) : Promise<string> {
	const foo = await fn();

	sideFx(foo);

	return foo;
}

export function noFloatingPromisesBad() : void {
	async function foo() : Promise<void> {
		return new Promise(resolve =>  void resolve(undefined));
	}

	foo();
}

export async function noMisusedPromisesBad(promise:Promise<void>, sideFx:(v:unknown) => void) : Promise<void> {
	const foo = { ...promise }; // eslint-disable-line @typescript-eslint/no-misused-spread

	sideFx(foo);

	return promise;
}

export function promiseFunctionPromisesBad(v:number) : Promise<number> {
	return Promise.resolve(v);
}

export async function returnAwaitGood() : Promise<string> {
	return Promise.resolve('foo');
}

export async function returnAwaitBad() : Promise<string> {
	try {
		return Promise.resolve('foo');
	}
	catch {
		return Promise.reject(new Error('foo'));
	}
}

export async function useUnknownInCatchCallbackVariableBad() : Promise<string> {
	return Promise
		.reject(new Error('foo'))
		.catch(async _err => Promise.resolve('foo'));
}
