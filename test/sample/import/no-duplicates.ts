import { sideFx } from './dependencies/dependencies.js';
import { notDefault } from './dependencies/dependencies.js';


export function fn(v:number) : string {
	sideFx();

	return `${ notDefault }:${ v.toFixed(0) }`;
}
