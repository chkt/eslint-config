import { fn as aFn } from '../no-cycle.ts';


export function fn() : () => unknown {
	return aFn;
}
