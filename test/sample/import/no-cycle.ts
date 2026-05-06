import { fn as bFn } from './dependencies/cycle.js';


export function fn() : () => unknown {
	return bFn;
}
