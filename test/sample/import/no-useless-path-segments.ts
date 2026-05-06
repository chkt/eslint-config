import { foo as noUselessPathSegmentGood } from './dependencies/index.js';
import { sideFx as noUselessPathSegmentBad } from '../import/dependencies/dependencies.js';

export function fn(v:number) : number {
	noUselessPathSegmentGood(v);
	noUselessPathSegmentBad();

	return v;
}
