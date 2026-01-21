class ConstructorSuperBase {
	constructor(public foo:number) {}
}

export class ConstructorSuperGood extends ConstructorSuperBase {
	bar : number;

	constructor(foo:number) {
		super(foo);

		this.bar = foo;
	}
}

export class ConstructorSuperBad extends ConstructorSuperBase {
	constructor(public bar:number) {}
}

export class NoClassAssignBad {
	constructor(readonly foo:number) {

	}
}

NoClassAssignBad = 0;

export class NoConstructorReturnGood {
	constructor(public foo:number) {}
}

export class NoConstructorReturnBad {
	constructor(public foo:number) {
		return this;
	}
}

export class NoDupeClassMembersGood {
	constructor(private readonly fooVar:number, private readonly barVar:boolean) {}
	foo() : number { return this.fooVar; }
	bar() : boolean { return this.barVar; }
}

export class NoDupeClassMembersBad {
	constructor(private readonly fooVar:number, private readonly barVar:boolean) {}
	bar() : number { return this.fooVar; }
	bar() : boolean { return this.barVar; }
}

class NoThisBeforeSuperBase {
	constructor(public foo:number) {}
}

export class NoThisBeforeSuperGood extends NoThisBeforeSuperBase {
	bar:number;

	constructor(foo:number) {
		super(foo);

		this.bar = Math.random();
	}
}

export class NoThisBeforeSuperBad extends NoThisBeforeSuperBase {
	bar:number;

	constructor(foo:number) {
		this.bar = Math.random();

		super(foo);
	}
}

export class NoUnusedPrivateClassMembersBad {
	readonly #foo:number;
	private readonly bar:number;

	constructor() {
		this.#foo = Math.random();
		this.bar = Math.random();
	}
}

export class NoEmptyStaticBlockBad {
	static {}

	constructor(public foo:number) {}
}

export class NoUselessConstructorBad {
	private readonly foo:number = 0;

	constructor() {}

	get bar() : number { return this.foo }
}

export class ClassLiteralPropertyStyleGood {
	readonly foo = 1;
}

export class ClassLiteralPropertyStyleBad {
	get foo() : number { return 1; }    // eslint-disable-line @typescript-eslint/class-methods-use-this
}

export class ClassMethodsUseThisBad {
	foo() : number { return 1; }
}

export class NoExtraneousClassBad {
	static foo() : number { return Math.random(); }
}

export class NoUnnecessaryParameterPropertyAssignmentBad {
	constructor(public foo:number) {
		this.foo = foo;
	}
}

export class ParameterPropertiesBad {
	foo:string;

	constructor(foo:string) {
		this.foo = foo;
	}
}

export class PreferReadonlyBad {
	constructor(private foo:number) {}

	get bar() : number { return this.foo; }
}

export class PreferReturnThisTypeBad {
	foo() : PreferReturnThisTypeBad {
		return this;
	}
}

export class RelatedGetterSetterPairsBad {
	private foo:number = 0;

	get bar() : number { return this.foo }
	set bar(v:string) { this.foo = Number(v); }
}
