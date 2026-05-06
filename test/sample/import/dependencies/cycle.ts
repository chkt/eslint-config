import { fn as aFn } from '../no-cycle.js';


export function fn() : () => unknown {
	return aFn;
}
