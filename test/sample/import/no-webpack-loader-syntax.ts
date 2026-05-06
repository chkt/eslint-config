import { sideFx } from './dependencies/foo.js!sideFx';


export function fn(v:number) : number {
	sideFx(); // eslint-disable-line @typescript-eslint/no-unsafe-call

	return v;
}
