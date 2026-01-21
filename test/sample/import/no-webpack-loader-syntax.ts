import { sideFx } from './dependencies/foo.ts!sideFx';


export function fn(v:number) : number {
	sideFx(); // eslint-disable-line @typescript-eslint/no-unsafe-call

	return v;
}
