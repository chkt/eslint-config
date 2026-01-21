import { deprecated, sideFx, notDefault } from './dependencies/dependencies.ts';
import { join } from 'node:path';
import { readFile, open } from 'node:fs';
import { ConfigArray, parser } from 'typescript-eslint/dist/index.js';


export function exportImports() : unknown {
	return {
		readFile,
		open,
		join,
		deprecated,
		sideFx,
		notDefault,
		parser
	}
}

export type TypeExport = ConfigArray;
