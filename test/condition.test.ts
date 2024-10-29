import { EntityCondition, ListCondition, PrimitiveCondition, ValueCondition } from "../src/condition.types";
import { Primitive } from "../src/utils.types";


//---------------------------------------------------------------------- PrimitiveCondition

function testPrimitiveCondition<V extends Primitive>(v: PrimitiveCondition<V>): void {}

test('PrimitiveCondition should link a primitive to its corresponding operation', () => {
    expect(_ => testPrimitiveCondition<number>(1));
    expect(_ => testPrimitiveCondition<number>({ eq: 1 }));

    expect(_ => testPrimitiveCondition<string>(""));
    expect(_ => testPrimitiveCondition<string>({ eq: "" }));

    expect(_ => testPrimitiveCondition<Date>(new Date()));
    expect(_ => testPrimitiveCondition<Date>({ eq: new Date() }));

    expect(_ => testPrimitiveCondition<boolean>(true));
    expect(_ => testPrimitiveCondition<boolean>({ is: true }));
})

// @ts-expect-error
testPrimitiveCondition<number>({ eq: "" });
// @ts-expect-error
testPrimitiveCondition<number>({ eq: new Date() });
// @ts-expect-error
testPrimitiveCondition<number>({ is: true });
// @ts-expect-error
testPrimitiveCondition<number>({ contains: "" });

// @ts-expect-error
testPrimitiveCondition<Date>({ eq: "" });
// @ts-expect-error
testPrimitiveCondition<Date>({ eq: 0 });
// @ts-expect-error
testPrimitiveCondition<Date>({ is: true });
// @ts-expect-error
testPrimitiveCondition<Date>({ contains: "" });

// @ts-expect-error
testPrimitiveCondition<string>({ eq: 0 });
// @ts-expect-error
testPrimitiveCondition<string>({ lt: 0 });
// @ts-expect-error
testPrimitiveCondition<string>({ is: true });

// @ts-expect-error
testPrimitiveCondition<boolean>({ eq: true });
// @ts-expect-error
testPrimitiveCondition<boolean>({ is: 0 });
// @ts-expect-error
testPrimitiveCondition<boolean>({ is: new Date() });
// @ts-expect-error
testPrimitiveCondition<boolean>({ is: "" });

// @ts-expect-error
testPrimitiveCondition<{}>({ });
// @ts-expect-error
testPrimitiveCondition<{ a: string }>({ a: "" });
// @ts-expect-error
testPrimitiveCondition<any[]>([]);
// @ts-expect-error
testPrimitiveCondition<string[]>([""]);


//---------------------------------------------------------------------- ValueCondition - Primitives

function testValueConditionPrimitive<V>(v: ValueCondition<V>): void {}

test('ValueCondition should be constrained to primitives if primitive is given as argument', () => {
    expect(_ => testValueConditionPrimitive<number>(1));
    expect(_ => testValueConditionPrimitive<number>({ eq: 1 }));

    expect(_ => testValueConditionPrimitive<string>(""));
    expect(_ => testValueConditionPrimitive<string>({ eq: "" }));

    expect(_ => testValueConditionPrimitive<Date>(new Date()));
    expect(_ => testValueConditionPrimitive<Date>({ eq: new Date() }));

    expect(_ => testValueConditionPrimitive<boolean>(true));
    expect(_ => testValueConditionPrimitive<boolean>({ is: true }));
})

// @ts-expect-error
testValueConditionPrimitive<number>({ eq: "" });
// @ts-expect-error
testValueConditionPrimitive<number>({ eq: new Date() });
// @ts-expect-error
testValueConditionPrimitive<number>({ is: true });
// @ts-expect-error
testValueConditionPrimitive<number>({ contains: "" });

// @ts-expect-error
testValueConditionPrimitive<Date>({ eq: "" });
// @ts-expect-error
testValueConditionPrimitive<Date>({ eq: 0 });
// @ts-expect-error
testValueConditionPrimitive<Date>({ is: true });
// @ts-expect-error
testValueConditionPrimitive<Date>({ contains: "" });

// @ts-expect-error
testValueConditionPrimitive<string>({ eq: 0 });
// @ts-expect-error
testValueConditionPrimitive<string>({ lt: 0 });
// @ts-expect-error
testValueConditionPrimitive<string>({ is: true });

// @ts-expect-error
testValueConditionPrimitive<boolean>({ eq: true });
// @ts-expect-error
testValueConditionPrimitive<boolean>({ is: 0 });
// @ts-expect-error
testValueConditionPrimitive<boolean>({ is: new Date() });
// @ts-expect-error
testValueConditionPrimitive<boolean>({ is: "" });


//---------------------------------------------------------------------- ListCondition - Redirects to Primitive ValueCondition

function testPrimitiveListCondition<T>(q: ListCondition<T>): void {}

test('ListCondition should be constrained to primitive operations if primitive is given as argument', () => {
    expect(_ => testPrimitiveListCondition<number>({ some: 5 }));
    expect(_ => testPrimitiveListCondition<number>({ some: { eq: 5 } }));

    expect(_ => testPrimitiveListCondition<string>({ some: "" }));
    expect(_ => testPrimitiveListCondition<string>({ some: { eq: "" } }));

    expect(_ => testPrimitiveListCondition<boolean>({ some: true }));
    expect(_ => testPrimitiveListCondition<boolean>({ some: { is: false } }));

    expect(_ => testPrimitiveListCondition<Date>({ some: new Date() }));
    expect(_ => testPrimitiveListCondition<Date>({ some: { eq: new Date() } }));
})

// Invalid structures, multiple list operators

// @ts-expect-error
testPrimitiveListCondition<number>({ });
// @ts-expect-error
testPrimitiveListCondition<number>({ some: 5, all: 5 });
// @ts-expect-error
testPrimitiveListCondition<number>({ some: 5, none: 5 });
// @ts-expect-error
testPrimitiveListCondition<number>({ none: 5, all: 5 });
// @ts-expect-error
testPrimitiveListCondition<number>({ some: 5, all: 5, none: 5 });

// Invalid type-operation matching

// @ts-expect-error
testPrimitiveListCondition<number>({ some: "" });
// @ts-expect-error
testPrimitiveListCondition<number>({ some: true });
// @ts-expect-error
testPrimitiveListCondition<number>({ some: new Date() });

// @ts-expect-error
testPrimitiveListCondition<string>({ some: 0 });
// @ts-expect-error
testPrimitiveListCondition<string>({ some: true });
// @ts-expect-error
testPrimitiveListCondition<string>({ some: new Date() });

// @ts-expect-error
testPrimitiveListCondition<boolean>({ some: 0 });
// @ts-expect-error
testPrimitiveListCondition<boolean>({ some: "" });
// @ts-expect-error
testPrimitiveListCondition<boolean>({ some: new Date() });

// @ts-expect-error
testPrimitiveListCondition<Date>({ some: 0 });
// @ts-expect-error
testPrimitiveListCondition<Date>({ some: "" });
// @ts-expect-error
testPrimitiveListCondition<Date>({ some: true });

// @ts-expect-error
testPrimitiveListCondition<any>({ whatever: null });
// @ts-expect-error
testPrimitiveListCondition<any>({ some: null });


test('ListCondition should support conditions on nested arrays', () => {    
    expect(_ => testPrimitiveListCondition<number[]>({ some: { all: 5 } }));
    expect(_ => testPrimitiveListCondition<number[]>({ some: { none: { lt: 5 } } }));
    expect(_ => testPrimitiveListCondition<number[][][][]>({ some: { none: { all: { some: { none: 0 } } } } }));
    
    expect(_ => testPrimitiveListCondition<string[]>({ some: { all: "" } }));
    expect(_ => testPrimitiveListCondition<string[]>({ some: { none: { contains: "" } } }));
    expect(_ => testPrimitiveListCondition<string[][][][]>({ some: { none: { all: { some: { none: "" } } } } }));
    
    expect(_ => testPrimitiveListCondition<boolean[]>({ some: { all: false } }));
    expect(_ => testPrimitiveListCondition<boolean[]>({ some: { none: { not: true } } }));
    expect(_ => testPrimitiveListCondition<boolean[][][][]>({ some: { none: { all: { some: { none: true } } } } }));

    expect(_ => testPrimitiveListCondition<Date[]>({ some: { all: new Date() } }));
    expect(_ => testPrimitiveListCondition<Date[]>({ some: { none: { lt: new Date() } } }));
    expect(_ => testPrimitiveListCondition<Date[][][][]>({ some: { none: { all: { some: { none: new Date() } } } } }));
})

// Invalid structures

// @ts-expect-error
testPrimitiveListCondition<number[]>({ });
// @ts-expect-error
testPrimitiveListCondition<number[]>({ some: 5 });
// @ts-expect-error
testPrimitiveListCondition<number[]>({ some: { some: 5, all: 5 } });
// @ts-expect-error
testPrimitiveListCondition<number[]>({ some: { some: 5 }, all: { some: 5 } });


// Invalid type-operation matching

// @ts-expect-error
testPrimitiveListCondition<number[]>({some: { some: "" }});
// @ts-expect-error
testPrimitiveListCondition<number[]>({some: { some: true }});
// @ts-expect-error
testPrimitiveListCondition<number[]>({some: { some: new Date() }});

// @ts-expect-error
testPrimitiveListCondition<string[]>({some: { some: 0 }});
// @ts-expect-error
testPrimitiveListCondition<string[]>({some: { some: true }});
// @ts-expect-error
testPrimitiveListCondition<string[]>({some: { some: new Date() }});

// @ts-expect-error
testPrimitiveListCondition<boolean[]>({some: { some: 0 }});
// @ts-expect-error
testPrimitiveListCondition<boolean[]>({some: { some: "" }});
// @ts-expect-error
testPrimitiveListCondition<boolean[]>({some: { some: new Date() }});

// @ts-expect-error
testPrimitiveListCondition<Date[]>({some: { some: 0 }});
// @ts-expect-error
testPrimitiveListCondition<Date[]>({some: { some: "" }});
// @ts-expect-error
testPrimitiveListCondition<Date[]>({some: { some: true }});

// @ts-expect-error
testPrimitiveListCondition<any>({some: { whatever: null }});
// @ts-expect-error
testPrimitiveListCondition<any>({some: { some: null }});


//---------------------------------------------------------------------- EntityCondition - Primitive only object

interface EntityConditionPrimitive {
    id: number,
    name: string,
    createdAt: Date,
    active: boolean
};

function testEntityConditionPrimitive(v: EntityCondition<EntityConditionPrimitive>): void {}

test('EntityCondition should support conditions on primitive fields', () => {
    expect(_ => testEntityConditionPrimitive({ id: 5 }));
    expect(_ => testEntityConditionPrimitive({ id: { gt:5, lte: 10 } }));

    expect(_ => testEntityConditionPrimitive({ name: "" }));
    expect(_ => testEntityConditionPrimitive({ name: { contains: "", startswith: "" } }));

    expect(_ => testEntityConditionPrimitive({ createdAt: new Date() }));
    expect(_ => testEntityConditionPrimitive({ createdAt: { gte: new Date(), lt: new Date() } }));

    expect(_ => testEntityConditionPrimitive({ active: true }));
    expect(_ => testEntityConditionPrimitive({ active: { is: false } }));

    expect(_ => testEntityConditionPrimitive({
        id: 5,
        name: "",
        createdAt: new Date(),
        active: true
    }));
});

// Invalid because ValueCondition doesnt match the field type

// @ts-expect-error
testEntityConditionPrimitive({ id: "" });
// @ts-expect-error
testEntityConditionPrimitive({ id: true });
// @ts-expect-error
testEntityConditionPrimitive({ id: new Date() });

// @ts-expect-error
testEntityConditionPrimitive({ name: 0 });
// @ts-expect-error
testEntityConditionPrimitive({ name: true });
// @ts-expect-error
testEntityConditionPrimitive({ name: new Date() });

// @ts-expect-error
testEntityConditionPrimitive({ createdAt: "" });
// @ts-expect-error
testEntityConditionPrimitive({ createdAt: true });
// @ts-expect-error
testEntityConditionPrimitive({ createdAt: 0 });

// @ts-expect-error
testEntityConditionPrimitive({ active: 0 });
// @ts-expect-error
testEntityConditionPrimitive({ active: "" });
// @ts-expect-error
testEntityConditionPrimitive({ active: new Date() });

// Invalid for querying on an unknown key

// @ts-expect-error
testEntityConditionPrimitive({ whatever: null });
// @ts-expect-error
testEntityConditionPrimitive({ active: true, whatever: null });

// Invalid for providing a ListCondition instead of a ValueCondition

// @ts-expect-error
testEntityConditionPrimitive({ id: { some: 0 } });
// @ts-expect-error
testEntityConditionPrimitive({ name: { all: "" } });
// @ts-expect-error
testEntityConditionPrimitive({ createdAt: { none: new Date() } });
// @ts-expect-error
testEntityConditionPrimitive({ active: { some: true } });


//---------------------------------------------------------------------- EntityCondition - PrimitiveList only object

interface EntityConditionPrimitiveList {
    id: number[],
    name: string[],
    createdAt: Date[],
    active: boolean[]
};

function testEntityConditionPrimitiveList(v: EntityCondition<EntityConditionPrimitiveList>): void {}

test('EntityCondition should support conditions on primitive list fields', () => {
    expect(_ => testEntityConditionPrimitiveList({ id: { some: 5 } }));
    expect(_ => testEntityConditionPrimitiveList({ id: { all: { gt:5, lte: 10 } } }));

    expect(_ => testEntityConditionPrimitiveList({ name: { none: "" } }));
    expect(_ => testEntityConditionPrimitiveList({ name: { some: { contains: "", startswith: "" } } }));

    expect(_ => testEntityConditionPrimitiveList({ createdAt: { all: new Date() } }));
    expect(_ => testEntityConditionPrimitiveList({ createdAt: { none: { gte: new Date(), lt: new Date() } } }));

    expect(_ => testEntityConditionPrimitiveList({ active: { some: true } }));
    expect(_ => testEntityConditionPrimitiveList({ active: { all: { is: false } } }));

    expect(_ => testEntityConditionPrimitiveList({
        id: { some: 5 },
        name: { all: "" },
        createdAt: { none: new Date() },
        active: { some: true }
    }));
});

// Invalid because ListCondition doesnt match the field's element type

// @ts-expect-error
testEntityConditionPrimitiveList({ id: {some: ""} });
// @ts-expect-error
testEntityConditionPrimitiveList({ id: {some: true} });
// @ts-expect-error
testEntityConditionPrimitiveList({ id: {some: new Date()} });

// @ts-expect-error
testEntityConditionPrimitiveList({ name: {some: 0} });
// @ts-expect-error
testEntityConditionPrimitiveList({ name: {some: true} });
// @ts-expect-error
testEntityConditionPrimitiveList({ name: {some: new Date()} });

// @ts-expect-error
testEntityConditionPrimitiveList({ createdAt: {some: ""} });
// @ts-expect-error
testEntityConditionPrimitiveList({ createdAt: {some: true} });
// @ts-expect-error
testEntityConditionPrimitiveList({ createdAt: {some: 0} });

// @ts-expect-error
testEntityConditionPrimitiveList({ active: {some: 0} });
// @ts-expect-error
testEntityConditionPrimitiveList({ active: {some: ""} });
// @ts-expect-error
testEntityConditionPrimitiveList({ active: {some: new Date()} });

// Invalid for querying on an unknown key

// @ts-expect-error
testEntityConditionPrimitiveList({ whatever: {some: null} });
// @ts-expect-error
testEntityConditionPrimitiveList({ active: {some: true}, whatever: {some: null} });

// Invalid for providing a ValueCondition instead of a ListCondition

// @ts-expect-error
testEntityConditionPrimitiveList({ id: 0 });
// @ts-expect-error
testEntityConditionPrimitiveList({ name: "" });
// @ts-expect-error
testEntityConditionPrimitiveList({ createdAt: new Date() });
// @ts-expect-error
testEntityConditionPrimitiveList({ active: true });


//---------------------------------------------------------------------- EntityCondition - PrimitiveList only object

interface EntityConditionNestedPrimitiveList {
    id: number[][],
    name: string[][],
    createdAt: Date[][],
    active: boolean[][]
};

function testEntityConditionNestedPrimitiveList(v: EntityCondition<EntityConditionNestedPrimitiveList>): void {}

test('EntityCondition should support conditions on nested primitive lists fields', () => {
    expect(_ => testEntityConditionNestedPrimitiveList({ id: { all: { some: 5 } } }));
    expect(_ => testEntityConditionNestedPrimitiveList({ id: { some: { all: { gt:5, lte: 10 } } } }));

    expect(_ => testEntityConditionNestedPrimitiveList({ name: { none: { none: "" } } }));
    expect(_ => testEntityConditionNestedPrimitiveList({ name: { all: { some: { contains: "", startswith: "" } } } }));

    expect(_ => testEntityConditionNestedPrimitiveList({ createdAt: { some: { all: new Date() } } }));
    expect(_ => testEntityConditionNestedPrimitiveList({ createdAt: { none: { none: { gte: new Date(), lt: new Date() } } } }));

    expect(_ => testEntityConditionNestedPrimitiveList({ active: { all: { some: true } } }));
    expect(_ => testEntityConditionNestedPrimitiveList({ active: { none: { all: { is: false } } } }));

    expect(_ => testEntityConditionNestedPrimitiveList({
        id: { all: { some: 5 } },
        name: { all: { all: "" } },
        createdAt: { all: { none: new Date() } },
        active: { all: { some: true } }
    }));
});

// Invalid because ListCondition doesnt match the field's element type

// @ts-expect-error
testEntityConditionNestedPrimitiveList({ id: {some: {none: ""}} });
// @ts-expect-error
testEntityConditionNestedPrimitiveList({ id: {all: {some: true}} });
// @ts-expect-error
testEntityConditionNestedPrimitiveList({ id: {none: {all: new Date()}} });

// @ts-expect-error
testEntityConditionNestedPrimitiveList({ name: {some: {none: 0}} });
// @ts-expect-error
testEntityConditionNestedPrimitiveList({ name: {all: {some: true}} });
// @ts-expect-error
testEntityConditionNestedPrimitiveList({ name: {none: {all: new Date()}} });

// @ts-expect-error
testEntityConditionNestedPrimitiveList({ createdAt: {some: {none: ""}} });
// @ts-expect-error
testEntityConditionNestedPrimitiveList({ createdAt: {all: {some: true}} });
// @ts-expect-error
testEntityConditionNestedPrimitiveList({ createdAt: {none: {all: 0}} });

// @ts-expect-error
testEntityConditionNestedPrimitiveList({ active: {some: {none: 0}} });
// @ts-expect-error
testEntityConditionNestedPrimitiveList({ active: {all: {some: ""}} });
// @ts-expect-error
testEntityConditionNestedPrimitiveList({ active: {none: {all: new Date()}} });

// Invalid for querying on an unknown key

// @ts-expect-error
testEntityConditionNestedPrimitiveList({ whatever: {some: {some: null} }});
// @ts-expect-error
testEntityConditionNestedPrimitiveList({ active: {some: {some: true}}, whatever: {some: {some: null} }});

// Invalid for providing a ValueCondition instead of a ListCondition

// @ts-expect-error
testEntityConditionNestedPrimitiveList({ id: { some: 0 } });
// @ts-expect-error
testEntityConditionNestedPrimitiveList({ name: "" });
// @ts-expect-error
testEntityConditionNestedPrimitiveList({ createdAt: { all: new Date() } });
// @ts-expect-error
testEntityConditionNestedPrimitiveList({ active: true });


//---------------------------------------------------------------------- ValueCondition - Nested entity

interface EntityAsValueTest {
    id: number,
    ids: number[],
    name: string,
    names: string[],
    createdAt: Date,
    createdAts: Date[],
    active: boolean
    actives: boolean[]
};

function testValueConditionNestedEntity(v: ValueCondition<EntityAsValueTest>): void {}

test('ValueCondition map to correct subconditions when receiving an object as argument', () => {
    expect(_ => testValueConditionNestedEntity({ id: 5 }));
    expect(_ => testValueConditionNestedEntity({ ids: { some: 5 } }));
    expect(_ => testValueConditionNestedEntity({ name: "" }));
    expect(_ => testValueConditionNestedEntity({ names: { some: "" } }));
    expect(_ => testValueConditionNestedEntity({ createdAt: new Date() }));
    expect(_ => testValueConditionNestedEntity({ createdAts: { some: new Date() } }));
    expect(_ => testValueConditionNestedEntity({ active: true }));
    expect(_ => testValueConditionNestedEntity({ actives: { some: true } }));

    expect(_ => testValueConditionNestedEntity({
        id: 5,
        name: "",
        createdAt: new Date(),
        active: true
    }));
})


//---------------------------------------------------------------------- ValueCondition - Entity list

interface EntityAsElementTest {
    nestedPrimitive: { 
        id: number,
        name: string,
        createdAt: Date,
        active: boolean
     }[],
    nestedList: {
        ids: number[],
        names: string[],
        createdAts: Date[],
        actives: boolean[]
    }[],
    nestedObj: {
        doublyNested: {
            ids: number[]
        }[]
    }[]
};

function testListConditionNestedEntity(v: ValueCondition<EntityAsElementTest>): void {}

test('ValueCondition map to correct nested list subconditions when receiving an object as argument', () => {
    expect(_ => testListConditionNestedEntity({ nestedPrimitive: { some: { id: 5 } } }));
    expect(_ => testListConditionNestedEntity({ nestedList: { some: { ids: { all: 5 } } } }));

    expect(_ => testListConditionNestedEntity({ nestedPrimitive: { some: { name: "" } } }));
    expect(_ => testListConditionNestedEntity({ nestedList: { some: { names: { all: "" } } } }));

    expect(_ => testListConditionNestedEntity({ nestedPrimitive: { some: { createdAt: new Date() } } }));
    expect(_ => testListConditionNestedEntity({ nestedList: { some: { createdAts: { all: new Date() } } } }));

    expect(_ => testListConditionNestedEntity({ nestedPrimitive: { some: { active: true } } }));
    expect(_ => testListConditionNestedEntity({ nestedList: { some: { actives: { all: true } } } }));

    expect(_ => testListConditionNestedEntity({ nestedObj: { some: { doublyNested: { some: { ids: { some: 5 } } } } } }));
});


//---------------------------------------------------------------------- EntityCondition - Complex objects

interface EntityComplex {
    // Primitives
    id: number,
    // Array of primitives
    ids: number[],
    // Nested array of primitives
    nestedIds: number[][],
    // Array of objects
    nestedObj: { 
        id: number,
    },
    // Nested array of objects
    nestedArr: {
        ids: number[]
    }[],
    // Nested arrays of nested objects
    nestedArrObj: {
        nestedArr: {
            ids: number[][]
        }[]
    }[],
};

function testComplexEntityCondition(v: EntityCondition<EntityComplex>): void {}

test('Entity condition should handle complex combination of both direct and nested sub queries', () => {
    expect(_ => testComplexEntityCondition({
        id: {
            lt: 0
        },
        ids: {
            all: 0
        },
        nestedIds: {
            some: {
                none: 0
            }
        },
        nestedObj: {
            id: {
                gte: 0
            }
        },
        nestedArr: {
            all: {
                ids: {
                    some: {
                        lt: 5
                    }
                }
            }
        },
        nestedArrObj: {
            none: {
                nestedArr: {
                    all: {
                        ids: {
                            some: {
                                none: 5
                            }
                        }
                    }
                }
            }
        }
    }));
});
