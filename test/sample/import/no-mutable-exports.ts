export let noMutableExports = 1;


export function mutateExport() : void {
	noMutableExports = Math.random();
}
