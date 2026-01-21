export function noTemplateCurlyInStringBad() : string {
	return '${ foo }';
}

export function noMultiStrBad() : string {
	return "foo \
		bar";
}

export function noUselessConcatBad() : string {
	return 'foo' + 'bar';
}

export function noUselessEscapeBad() : string {
	return '\"';
}

export function preferTemplateGood(a:string, b:string) : string {
	return a + b;
}

export function preferTemplateBad(a:string, b:string) : string {
	return a + ':' + b;
}

export function noBaseToStringBad(v:object) : string {
	return v.toString();
}

export function noUnnecessaryTemplateExpressionBad() : string {
	return `${ 'foo' }`;
}

export function preferStringStartsEndsWithBad(v:string) : boolean {
	return v.indexOf('foo') === 0;
}

export function restrictTemplateExpressionsBad(v:number) : string {
	return `foo: ${ v }`;
}
