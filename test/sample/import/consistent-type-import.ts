import { TypeDefinition as TypeDefinitionBad } from './dependencies/definitionsOnly.d.ts';
import { type SomeType as SomeTypeBad } from './dependencies/dependencies.ts';


export function fn() : SomeTypeBad {
	return 1;
}

export function fn2() : TypeDefinitionBad {
	return 1;
}
