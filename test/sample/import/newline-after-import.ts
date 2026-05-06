import { sideFx } from './dependencies/dependencies.js';


/**
 * @param v
 */
export function fn(v:number) : number {
	sideFx();

	return v;
}
