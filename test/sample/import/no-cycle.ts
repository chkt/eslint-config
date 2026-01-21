import { fn as bFn } from './dependencies/cycle.ts';


export function fn() : () => unknown {
	return bFn;
}
