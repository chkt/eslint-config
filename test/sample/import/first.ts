export const foo = 1;

import { sideFx } from './dependencies/dependencies.js';

export function fn() : void {
	sideFx();
}
