import { sideFx } from './dependencies/dependencies.ts';
import { notDefault } from './dependencies/dependencies.ts';


export function fn(v:number) : string {
	sideFx();

	return `${ notDefault }:${ v.toFixed(0) }`;
}
