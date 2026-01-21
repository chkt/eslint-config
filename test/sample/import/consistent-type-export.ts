type IndirectCompoundTypeExportBad = boolean;
type IndirectTypeExportBad = boolean;


function indirectFunctionExportBad() : void {
	return undefined;
}

const indirectConstExportBad = 1;


export type { IndirectCompoundTypeExportBad };
export { type IndirectTypeExportBad };
export { indirectConstExportBad, indirectFunctionExportBad };

export function directFunctionExportGood() : void {
	return undefined;
}

export const directConstExportGood = 1;
export default directFunctionExportGood;

export {
	type SomeType as ExternalTypeExportBad,
	notDefault as externalConstExportGood,
	sideFx as externalFunctionExportGood
} from './dependencies/dependencies.ts';
export * as externalAllExportGood from './dependencies/defaultless.ts';
export { TypeDefinition as TypeDefinitionBad } from './dependencies/definitionsOnly.d.ts';
