export const foo = 1;

import { sideFx } from './dependencies/dependencies.ts';

export function fn() : void {
	sideFx();
}
