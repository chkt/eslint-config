export function noDuplicateEnumValuesBad() : number {
	enum Foo {
		bar = 0,
		baz = 0
	}

	return Foo.bar;
}

export function noMixedEnumsBad() : number {
	enum Foo {
		bar = 1,
		baz = 'foo'
	}

	return Foo.bar;
}

export function noUnnecessaryQualifierBad() : number {
	enum Foo {
		bar = 0,
		baz = Foo.bar
	}

	return Foo.baz;
}

export function noUnsafeEnumComparisonBad(v:number) : boolean {
	enum Foo {
		bar,
		baz
	}

	return v === Foo.bar;
}

export function preferEnumInitializersGood() : number {
	enum Foo {
		bar,
		baz
	}

	return Foo.baz;
}
