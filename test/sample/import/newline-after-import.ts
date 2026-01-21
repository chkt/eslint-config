import { sideFx } from './dependencies/dependencies.ts';

/**
 * @param v
 */
export function fn(v:number) : number {
	sideFx();

	return v;
}
