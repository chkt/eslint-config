export function forDirectionBad(l:number, sideFx:(v:number) => void) : void {
	for (let i = 0; i < l; i -= 1) sideFx(i);
}

export function noUnmodifiedLoopConditionBad(value:number, sideFx:(v:number) => void) : void {
	while (value !== 0) sideFx(value);
}

export function noUnreachableLoopsGood(v:number) : void {
	let i = v;

	while (i !== 0) {
		i += 1;

		if (i === Number.POSITIVE_INFINITY) break;
	}
}

export function noUnreachableLoopBad(v:number) : void {
	let i = v;

	while (i !== 0) {
		i += 1;

		break;
	}
}

export function guardForInGood(v:Record<string, string>) : string {
	let res = '';

	for (const key in v) {
		if (!Object.hasOwn(v, key)) continue;

		res += v[key];
	}

	return res;
}

export function guardForInBad(v:Record<string, string>) : string {
	let res = '';

	for (const key in v) res += v[key];

	return res;
}


export function noForInArrayBad(v:number[]) : number {
	let res = 0;

	for (const n in v) {
		if (!Object.hasOwn(v, n)) continue;

		res += v[n];
	}

	return res;
}

export function preferForOfBad(v:number[]) : number {
	let res = 0;

	for (let i = 0; i < v.length; i += 1) res += v[i];

	return res;
}
