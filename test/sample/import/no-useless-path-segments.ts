import { sideFx } from '../import/dependencies/dependencies.ts';


export function fn(v:number) : number {
	sideFx();

	return v;
}
