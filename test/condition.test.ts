import { expectTypeOf, test } from 'vitest';

import { EntityCondition, ListCondition, OrCondition, NotCondition, PrimitiveCondition, ValueCondition, WhereCondition, WhereClause } from "../src/condition.types";


//---------------------------------------------------------------------- PrimitiveCondition

test('PrimitiveCondition should link a primitive to its corresponding operation', () => {
    expectTypeOf(1).toMatchTypeOf<PrimitiveCondition<number>>();
    expectTypeOf({ eq: 1 }).toMatchTypeOf<PrimitiveCondition<number>>();

    expectTypeOf(new Date()).toMatchTypeOf<PrimitiveCondition<Date>>();
    expectTypeOf({ lt: new Date() }).toMatchTypeOf<PrimitiveCondition<Date>>();

    expectTypeOf("").toMatchTypeOf<PrimitiveCondition<string>>();
    expectTypeOf({ contains: "" }).toMatchTypeOf<PrimitiveCondition<string>>();

    expectTypeOf(true).toMatchTypeOf<PrimitiveCondition<boolean>>();
    expectTypeOf({ is: false }).toMatchTypeOf<PrimitiveCondition<boolean>>();
});

test('PrimitiveCondition should enforce primitive constraint with corresponding operation', () => {
    expectTypeOf({ contains: 0 }).not.toMatchTypeOf<PrimitiveCondition<number>>();
    expectTypeOf({ eq: new Date() }).not.toMatchTypeOf<PrimitiveCondition<number>>();
    expectTypeOf({ contains: "" }).not.toMatchTypeOf<PrimitiveCondition<number>>();
    expectTypeOf({ is: true }).not.toMatchTypeOf<PrimitiveCondition<number>>();

    expectTypeOf({ contains: new Date() }).not.toMatchTypeOf<PrimitiveCondition<Date>>();
    expectTypeOf({ eq: 0 }).not.toMatchTypeOf<PrimitiveCondition<Date>>();
    expectTypeOf({ contains: "" }).not.toMatchTypeOf<PrimitiveCondition<Date>>();
    expectTypeOf({ is: true }).not.toMatchTypeOf<PrimitiveCondition<Date>>();

    expectTypeOf({ is: "" }).not.toMatchTypeOf<PrimitiveCondition<string>>();
    expectTypeOf({ eq: new Date() }).not.toMatchTypeOf<PrimitiveCondition<string>>();
    expectTypeOf({ lt: 0 }).not.toMatchTypeOf<PrimitiveCondition<string>>();
    expectTypeOf({ is: true }).not.toMatchTypeOf<PrimitiveCondition<string>>();

    expectTypeOf({ eq: true }).not.toMatchTypeOf<PrimitiveCondition<boolean>>();
    expectTypeOf({ eq: new Date() }).not.toMatchTypeOf<PrimitiveCondition<boolean>>();
    expectTypeOf({ contains: "" }).not.toMatchTypeOf<PrimitiveCondition<boolean>>();
    expectTypeOf({ eq: 0 }).not.toMatchTypeOf<PrimitiveCondition<boolean>>();
});

test('PrimitiveCondition should forbid non primitive operation', () => {
    // @ts-expect-error
    expectTypeOf({ }).not.toMatchTypeOf<PrimitiveCondition<{}>>();
    // @ts-expect-error
    expectTypeOf([]).not.toMatchTypeOf<PrimitiveCondition<[]>>();
    // @ts-expect-error
    expectTypeOf({ a: "" }).not.toMatchTypeOf<PrimitiveCondition<{ a: string }>>();
});


//---------------------------------------------------------------------- ValueCondition - Primitives

test('ValueCondition should be constrained to primitives if primitive is given as argument', () => {
    expectTypeOf(1).toMatchTypeOf<ValueCondition<number>>();
    expectTypeOf({ eq: 1 }).toMatchTypeOf<ValueCondition<number>>();

    expectTypeOf(new Date()).toMatchTypeOf<ValueCondition<Date>>();
    expectTypeOf({ lt: new Date() }).toMatchTypeOf<ValueCondition<Date>>();

    expectTypeOf("").toMatchTypeOf<ValueCondition<string>>();
    expectTypeOf({ contains: "" }).toMatchTypeOf<ValueCondition<string>>();

    expectTypeOf(true).toMatchTypeOf<ValueCondition<boolean>>();
    expectTypeOf({ is: false }).toMatchTypeOf<ValueCondition<boolean>>();
})

test('ValueCondition should enforce primitive constraint to the corresponding primitive type', () => {
    expectTypeOf({ contains: 0 }).not.toMatchTypeOf<ValueCondition<number>>();
    expectTypeOf({ eq: new Date() }).not.toMatchTypeOf<ValueCondition<number>>();
    expectTypeOf({ contains: "" }).not.toMatchTypeOf<ValueCondition<number>>();
    expectTypeOf({ is: true }).not.toMatchTypeOf<ValueCondition<number>>();

    expectTypeOf({ contains: new Date() }).not.toMatchTypeOf<ValueCondition<Date>>();
    expectTypeOf({ eq: 0 }).not.toMatchTypeOf<ValueCondition<Date>>();
    expectTypeOf({ contains: "" }).not.toMatchTypeOf<ValueCondition<Date>>();
    expectTypeOf({ is: true }).not.toMatchTypeOf<ValueCondition<Date>>();

    expectTypeOf({ is: "" }).not.toMatchTypeOf<ValueCondition<string>>();
    expectTypeOf({ eq: new Date() }).not.toMatchTypeOf<ValueCondition<string>>();
    expectTypeOf({ lt: 0 }).not.toMatchTypeOf<ValueCondition<string>>();
    expectTypeOf({ is: true }).not.toMatchTypeOf<ValueCondition<string>>();

    expectTypeOf({ eq: true }).not.toMatchTypeOf<ValueCondition<boolean>>();
    expectTypeOf({ eq: new Date() }).not.toMatchTypeOf<ValueCondition<boolean>>();
    expectTypeOf({ contains: "" }).not.toMatchTypeOf<ValueCondition<boolean>>();
    expectTypeOf({ eq: 0 }).not.toMatchTypeOf<ValueCondition<boolean>>();
});


//---------------------------------------------------------------------- ListCondition - Redirects to Primitive ValueCondition

test('ListCondition should be constrained to primitive operations in list operator if primitive is given as argument', () => {
    expectTypeOf({ some: 1 }).toMatchTypeOf<ListCondition<number>>();
    expectTypeOf({ all: { eq: 1 } }).toMatchTypeOf<ListCondition<number>>();

    expectTypeOf({ none: new Date() }).toMatchTypeOf<ListCondition<Date>>();
    expectTypeOf({ some: { lt: new Date() } }).toMatchTypeOf<ListCondition<Date>>();

    expectTypeOf({ all: '' }).toMatchTypeOf<ListCondition<string>>();
    expectTypeOf({ none: { 'contains': '' } }).toMatchTypeOf<ListCondition<string>>();

    expectTypeOf({ some: false }).toMatchTypeOf<ListCondition<boolean>>();
    expectTypeOf({ all: { not: true } }).toMatchTypeOf<ListCondition<boolean>>();
});

test('ListCondition should forbid combination of list operators', () => {
    expectTypeOf({ some: 5, all:  5 }).not.toMatchTypeOf<ListCondition<number>>();
    expectTypeOf({ some: 5, none: 5 }).not.toMatchTypeOf<ListCondition<number>>();
    expectTypeOf({ all:  5, none: 5 }).not.toMatchTypeOf<ListCondition<number>>();
    expectTypeOf({ all:  5, some: 5, none: 5 }).not.toMatchTypeOf<ListCondition<number>>();
});

test('ListCondition should allow combinations inside list operator condition', () => {
    expectTypeOf({ some: { lt: 0, gt: 10 } }).toMatchTypeOf<ListCondition<number>>();
    expectTypeOf({ none: { lte: new Date(), gte: new Date() } }).toMatchTypeOf<ListCondition<Date>>();
    expectTypeOf({ all:  { contains: "", startswith: "" } }).toMatchTypeOf<ListCondition<string>>();
});

test('ListCondition should enforce primitive constraint to the corresponding primitive type', () => {
    expectTypeOf({ some: new Date() }).not.toMatchTypeOf<ListCondition<number>>();
    expectTypeOf({ none: "" }).not.toMatchTypeOf<ListCondition<number>>();
    expectTypeOf({ all:  true }).not.toMatchTypeOf<ListCondition<number>>();
    // @ts-expect-error
    expectTypeOf({ all:  0 }).not.toMatchTypeOf<ListCondition<number>>();
 
    expectTypeOf({ none: 0 }).not.toMatchTypeOf<ListCondition<Date>>();
    expectTypeOf({ all:  "" }).not.toMatchTypeOf<ListCondition<Date>>();
    expectTypeOf({ some: true }).not.toMatchTypeOf<ListCondition<Date>>();
    // @ts-expect-error
    expectTypeOf({ some: new Date() }).not.toMatchTypeOf<ListCondition<Date>>();

    expectTypeOf({ all:  new Date() }).not.toMatchTypeOf<ListCondition<string>>();
    expectTypeOf({ some: 0 }).not.toMatchTypeOf<ListCondition<string>>();
    expectTypeOf({ none: true }).not.toMatchTypeOf<ListCondition<string>>();
    // @ts-expect-error
    expectTypeOf({ none: "" }).not.toMatchTypeOf<ListCondition<string>>();

    expectTypeOf({ some: new Date() }).not.toMatchTypeOf<ListCondition<boolean>>();
    expectTypeOf({ none: "" }).not.toMatchTypeOf<ListCondition<boolean>>();
    expectTypeOf({ all:  0 }).not.toMatchTypeOf<ListCondition<boolean>>();
    // @ts-expect-error
    expectTypeOf({ all:  true }).not.toMatchTypeOf<ListCondition<boolean>>();
});

test('ListCondition should support conditions on nested arrays', () => {    
    expectTypeOf({ some: { all: 5 } }).toMatchTypeOf<ListCondition<number[]>>();
    expectTypeOf({ some: { none: { lt: 5 } } }).toMatchTypeOf<ListCondition<number[]>>();
    expectTypeOf({ some: { none: { all: { some: { none: 0 } } } } }).toMatchTypeOf<ListCondition<number[][][][]>>();
    
    expectTypeOf({ some: { all: "" } }).toMatchTypeOf<ListCondition<string[]>>();
    expectTypeOf({ some: { none: { contains: "" } } }).toMatchTypeOf<ListCondition<string[]>>();
    expectTypeOf({ some: { none: { all: { some: { none: "" } } } } }).toMatchTypeOf<ListCondition<string[][][][]>>();
    
    expectTypeOf({ some: { all: false } }).toMatchTypeOf<ListCondition<boolean[]>>();
    expectTypeOf({ some: { none: { not: true } } }).toMatchTypeOf<ListCondition<boolean[]>>();
    expectTypeOf({ some: { none: { all: { some: { none: true } } } } }).toMatchTypeOf<ListCondition<boolean[][][][]>>();

    expectTypeOf({ some: { all: new Date() } }).toMatchTypeOf<ListCondition<Date[]>>();
    expectTypeOf({ some: { none: { lt: new Date() } } }).toMatchTypeOf<ListCondition<Date[]>>();
    expectTypeOf({ some: { none: { all: { some: { none: new Date() } } } } }).toMatchTypeOf<ListCondition<Date[][][][]>>();
});

test('ListCondition should enforce structure matching on nested arrays', () => {    
    expectTypeOf({ }).not.toMatchTypeOf<ListCondition<number[]>>();
    expectTypeOf({ some: 5 }).not.toMatchTypeOf<ListCondition<number[]>>();
    expectTypeOf({ some: { some: 5, all: 5 } }).not.toMatchTypeOf<ListCondition<number[]>>();
    expectTypeOf({ some: { some: 5 }, all: { some: 5 } }).not.toMatchTypeOf<ListCondition<number[]>>();
    // @ts-expect-error
    expectTypeOf({ some: { some: 5 } }).not.toMatchTypeOf<ListCondition<number[]>>();
});

test('ListCondition should enforce type matching on nested arrays', () => {    
    expectTypeOf({ some: { all: "" } }).not.toMatchTypeOf<ListCondition<number[]>>();
    expectTypeOf({ some: { none: true } }).not.toMatchTypeOf<ListCondition<number[]>>();
    expectTypeOf({ some: { some: new Date() } }).not.toMatchTypeOf<ListCondition<number[]>>();
    // @ts-expect-error
    expectTypeOf({ some: { some: 0 } }).not.toMatchTypeOf<ListCondition<number[]>>();

    expectTypeOf({ all: { all: 0 } }).not.toMatchTypeOf<ListCondition<string[]>>();
    expectTypeOf({ all: { none: true } }).not.toMatchTypeOf<ListCondition<string[]>>();
    expectTypeOf({ all: { some: new Date() } }).not.toMatchTypeOf<ListCondition<string[]>>();
    // @ts-expect-error
    expectTypeOf({ all: { all: "" } }).not.toMatchTypeOf<ListCondition<string[]>>();

    expectTypeOf({ none: { all: 0 } }).not.toMatchTypeOf<ListCondition<boolean[]>>();
    expectTypeOf({ none: { none: "" } }).not.toMatchTypeOf<ListCondition<boolean[]>>();
    expectTypeOf({ none: { some: new Date() } }).not.toMatchTypeOf<ListCondition<boolean[]>>();
    // @ts-expect-error
    expectTypeOf({ none: { all: true } }).not.toMatchTypeOf<ListCondition<boolean[]>>();

    expectTypeOf({ some: { all: "" } }).not.toMatchTypeOf<ListCondition<Date[]>>();
    expectTypeOf({ some: { none: true } }).not.toMatchTypeOf<ListCondition<Date[]>>();
    expectTypeOf({ some: { some: "" } }).not.toMatchTypeOf<ListCondition<Date[]>>();
    // @ts-expect-error
    expectTypeOf({ some: { all: new Date() } }).not.toMatchTypeOf<ListCondition<Date[]>>();
});


//---------------------------------------------------------------------- EntityCondition - Primitive only object

interface EntityConditionPrimitive {
    id: number,
    name: string,
    createdAt: Date,
    active: boolean
};

test('EntityCondition should support conditions on primitive fields', () => {
    expectTypeOf({ id: 5 }).toMatchTypeOf<EntityCondition<EntityConditionPrimitive>>()
    expectTypeOf({ id: { gt:5, lte: 10 } }).toMatchTypeOf<EntityCondition<EntityConditionPrimitive>>()

    expectTypeOf({ name: "" }).toMatchTypeOf<EntityCondition<EntityConditionPrimitive>>()
    expectTypeOf({ name: { contains: "", startswith: "" } }).toMatchTypeOf<EntityCondition<EntityConditionPrimitive>>()

    expectTypeOf({ createdAt: new Date() }).toMatchTypeOf<EntityCondition<EntityConditionOr>>();
    expectTypeOf({ createdAt: { gte: new Date(), lt: new Date() } }).toMatchTypeOf<EntityCondition<EntityConditionOr>>();

    expectTypeOf({ active: true }).toMatchTypeOf<EntityCondition<EntityConditionOr>>();
    expectTypeOf({ active: { is: false } }).toMatchTypeOf<EntityCondition<EntityConditionOr>>();

    expectTypeOf({
        id: 5,
        name: "",
        createdAt: new Date(),
        active: true
    }).toMatchTypeOf<EntityCondition<EntityConditionOr>>();
});

test('EntityCondition should constrain type matching between field type and operation', () => {
    expectTypeOf({ id: "" }).not.toMatchTypeOf<EntityCondition<EntityConditionPrimitive>>();
    expectTypeOf({ id: true }).not.toMatchTypeOf<EntityCondition<EntityConditionPrimitive>>();
    expectTypeOf({ id: new Date() }).not.toMatchTypeOf<EntityCondition<EntityConditionPrimitive>>();
    // @ts-expect-error
    expectTypeOf({ id: 0 }).not.toMatchTypeOf<EntityCondition<EntityConditionPrimitive>>();

    expectTypeOf({ name: 0 }).not.toMatchTypeOf<EntityCondition<EntityConditionPrimitive>>();
    expectTypeOf({ name: true }).not.toMatchTypeOf<EntityCondition<EntityConditionPrimitive>>();
    expectTypeOf({ name: new Date() }).not.toMatchTypeOf<EntityCondition<EntityConditionPrimitive>>();
    // @ts-expect-error
    expectTypeOf({ name: "" }).not.toMatchTypeOf<EntityCondition<EntityConditionPrimitive>>();

    expectTypeOf({ createdAt: "" }).not.toMatchTypeOf<EntityCondition<EntityConditionPrimitive>>();
    expectTypeOf({ createdAt: true }).not.toMatchTypeOf<EntityCondition<EntityConditionPrimitive>>();
    expectTypeOf({ createdAt: 0 }).not.toMatchTypeOf<EntityCondition<EntityConditionPrimitive>>();
    // @ts-expect-error
    expectTypeOf({ createdAt: new Date() }).not.toMatchTypeOf<EntityCondition<EntityConditionPrimitive>>();

    expectTypeOf({ active: "" }).not.toMatchTypeOf<EntityCondition<EntityConditionPrimitive>>();
    expectTypeOf({ active: new Date() }).not.toMatchTypeOf<EntityCondition<EntityConditionPrimitive>>();
    expectTypeOf({ active: 0 }).not.toMatchTypeOf<EntityCondition<EntityConditionPrimitive>>();
    // @ts-expect-error
    expectTypeOf({ active: true }).not.toMatchTypeOf<EntityCondition<EntityConditionPrimitive>>();
});

test('EntityCondition should forbid operation on unknown property', () => {
    expectTypeOf({ whatever: "" }).not.toMatchTypeOf<EntityCondition<EntityConditionPrimitive>>();
    expectTypeOf({ whatever: true }).not.toMatchTypeOf<EntityCondition<EntityConditionPrimitive>>();
    expectTypeOf({ whatever: new Date() }).not.toMatchTypeOf<EntityCondition<EntityConditionPrimitive>>();
    expectTypeOf({ whatever: 0 }).not.toMatchTypeOf<EntityCondition<EntityConditionPrimitive>>();

    expectTypeOf({ active: true, whatever: "" }).not.toEqualTypeOf<EntityCondition<EntityConditionPrimitive>>();
    expectTypeOf({ active: true, whatever: true }).not.toEqualTypeOf<EntityCondition<EntityConditionPrimitive>>();
    expectTypeOf({ active: true, whatever: new Date() }).not.toEqualTypeOf<EntityCondition<EntityConditionPrimitive>>();
    expectTypeOf({ active: true, whatever: 0 }).not.toEqualTypeOf<EntityCondition<EntityConditionPrimitive>>();
});

test('EntityCondition should forbid list operation on scalar field', () => {
    expectTypeOf({ id: { some: 0 } }).not.toMatchTypeOf<EntityCondition<EntityConditionPrimitive>>();
    expectTypeOf({ name: { all: "" } }).not.toMatchTypeOf<EntityCondition<EntityConditionPrimitive>>();
    expectTypeOf({ createdAt: { none: new Date() } }).not.toMatchTypeOf<EntityCondition<EntityConditionPrimitive>>();
    expectTypeOf({ active: { some: true } }).not.toMatchTypeOf<EntityCondition<EntityConditionPrimitive>>();
});


//---------------------------------------------------------------------- EntityCondition - PrimitiveList only object

interface EntityConditionPrimitiveList {
    id: number[],
    name: string[],
    createdAt: Date[],
    active: boolean[]
};

test('EntityCondition should support conditions on primitive list fields', () => {
    type Expected = EntityCondition<EntityConditionPrimitiveList>;

    expectTypeOf({ id: { some: 5 } }).toMatchTypeOf<Expected>();
    expectTypeOf({ id: { all: { gt:5, lte: 10 } } }).toMatchTypeOf<Expected>();

    expectTypeOf({ name: { none: "" } }).toMatchTypeOf<Expected>();
    expectTypeOf({ name: { some: { contains: "", startswith: "" } } }).toMatchTypeOf<Expected>();

    expectTypeOf({ createdAt: { all: new Date() } }).toMatchTypeOf<Expected>();
    expectTypeOf({ createdAt: { none: { gte: new Date(), lt: new Date() } } }).toMatchTypeOf<Expected>();

    expectTypeOf({ active: { some: true } }).toMatchTypeOf<Expected>();
    expectTypeOf({ active: { all: { is: false } } }).toMatchTypeOf<Expected>();

    expectTypeOf({
        id: { some: 5 },
        name: { all: "" },
        createdAt: { none: new Date() },
        active: { some: true }
    }).toMatchTypeOf<Expected>();
});

test('EntityCondition should constrain type matching on primitive list fields operations', () => {
    type Expected = EntityCondition<EntityConditionPrimitiveList>;

    expectTypeOf({ id: { some: '' } }).not.toMatchTypeOf<Expected>();
    expectTypeOf({ id: { some: true } }).not.toMatchTypeOf<Expected>();
    expectTypeOf({ id: { some: new Date() } }).not.toMatchTypeOf<Expected>();
    // @ts-expect-error
    expectTypeOf({ id: { some: 5 } }).not.toMatchTypeOf<Expected>();

    expectTypeOf({ name: { some: true } }).not.toMatchTypeOf<Expected>();
    expectTypeOf({ name: { some: new Date() } }).not.toMatchTypeOf<Expected>();
    expectTypeOf({ name: { some: 5 } }).not.toMatchTypeOf<Expected>();
    // @ts-expect-error
    expectTypeOf({ name: { some: '' } }).not.toMatchTypeOf<Expected>();

    expectTypeOf({ createdAt: { some: '' } }).not.toMatchTypeOf<Expected>();
    expectTypeOf({ createdAt: { some: true } }).not.toMatchTypeOf<Expected>();
    expectTypeOf({ createdAt: { some: 5 } }).not.toMatchTypeOf<Expected>();
    // @ts-expect-error
    expectTypeOf({ createdAt: { some: new Date() } }).not.toMatchTypeOf<Expected>();

    expectTypeOf({ active: { some: '' } }).not.toMatchTypeOf<Expected>();
    expectTypeOf({ active: { some: 5 } }).not.toMatchTypeOf<Expected>();
    expectTypeOf({ active: { some: new Date() } }).not.toMatchTypeOf<Expected>();
    // @ts-expect-error
    expectTypeOf({ active: { some: true } }).not.toMatchTypeOf<Expected>();
});

test('EntityCondition should forbid primitive list fields operations on unknown properties', () => {
    type Expected = EntityCondition<EntityConditionPrimitiveList>;

    expectTypeOf({ whatever: { some: null } }).not.toMatchTypeOf<Expected>();
    expectTypeOf({ id: { some: true }, whatever: { some: null } }).not.toMatchTypeOf<Expected>();
});

test('EntityCondition should forbid providing ValueCondition to primitive list fields', () => {
    type Expected = EntityCondition<EntityConditionPrimitiveList>;

    expectTypeOf({ id: 0 }).not.toMatchTypeOf<Expected>();
    expectTypeOf({ name: "" }).not.toMatchTypeOf<Expected>();
    expectTypeOf({ active: true }).not.toMatchTypeOf<Expected>();
    expectTypeOf({ createdAt: new Date() }).not.toMatchTypeOf<Expected>();
});


//---------------------------------------------------------------------- EntityCondition - PrimitiveList only object

interface EntityConditionNestedPrimitiveList {
    id: number[][],
    name: string[][],
    createdAt: Date[][],
    active: boolean[][]
};

test('EntityCondition should support conditions on nested primitive lists fields', () => {
    type Expected = EntityCondition<EntityConditionNestedPrimitiveList>;

    expectTypeOf({ id: { all: { some: 5 } } }).toMatchTypeOf<Expected>();
    expectTypeOf({ id: { some: { all: { gt:5, lte: 10 } } } }).toMatchTypeOf<Expected>();

    expectTypeOf({ name: { none: { none: "" } } }).toMatchTypeOf<Expected>();
    expectTypeOf({ name: { all: { some: { contains: "", startswith: "" } } } }).toMatchTypeOf<Expected>();

    expectTypeOf({ createdAt: { some: { all: new Date() } } }).toMatchTypeOf<Expected>();
    expectTypeOf({ createdAt: { none: { none: { gte: new Date(), lt: new Date() } } } }).toMatchTypeOf<Expected>();

    expectTypeOf({ active: { all: { some: true } } }).toMatchTypeOf<Expected>();
    expectTypeOf({ active: { none: { all: { is: false } } } }).toMatchTypeOf<Expected>();

    expectTypeOf({
        id: { all: { some: 5 } },
        name: { all: { all: "" } },
        createdAt: { all: { none: new Date() } },
        active: { all: { some: true } }
    }).toMatchTypeOf<Expected>();
});

test('EntityCondition should constrain type in conditions to nested primitive lists fields element type', () => {
    type Expected = EntityCondition<EntityConditionNestedPrimitiveList>;

    expectTypeOf({ id: { some: { all: "" } } }).not.toMatchTypeOf<Expected>();
    expectTypeOf({ id: { some: { none: true } } }).not.toMatchTypeOf<Expected>();
    expectTypeOf({ id: { some: { some: new Date } } }).not.toMatchTypeOf<Expected>();
    // @ts-expect-error
    expectTypeOf({ id: { some: { all: 0 } } }).not.toMatchTypeOf<Expected>();

    expectTypeOf({ name: { none: { none: true } } }).not.toMatchTypeOf<Expected>();
    expectTypeOf({ name: { none: { some: new Date } } }).not.toMatchTypeOf<Expected>();
    expectTypeOf({ name: { none: { all: 0 } } }).not.toMatchTypeOf<Expected>();
    // @ts-expect-error
    expectTypeOf({ name: { none: { all: "" } } }).not.toMatchTypeOf<Expected>();

    expectTypeOf({ createdAt: { all: { all: "" } } }).not.toMatchTypeOf<Expected>();
    expectTypeOf({ createdAt: { all: { none: true } } }).not.toMatchTypeOf<Expected>();
    expectTypeOf({ createdAt: { all: { all: 0 } } }).not.toMatchTypeOf<Expected>();
    // @ts-expect-error
    expectTypeOf({ createdAt: { all: { some: new Date } } }).not.toMatchTypeOf<Expected>();

    expectTypeOf({ active: { some: { all: "" } } }).not.toMatchTypeOf<Expected>();
    expectTypeOf({ active: { some: { some: new Date } } }).not.toMatchTypeOf<Expected>();
    expectTypeOf({ active: { some: { all: 0 } } }).not.toMatchTypeOf<Expected>();
    // @ts-expect-error
    expectTypeOf({ active: { some: { none: true } } }).not.toMatchTypeOf<Expected>();
});


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

test('ValueCondition map to correct subconditions when receiving an object as argument', () => {
    type Expected = ValueCondition<EntityAsValueTest>;

    expectTypeOf({ id: 5 }).toMatchTypeOf<Expected>()
    expectTypeOf({ ids: { some: 5 } }).toMatchTypeOf<Expected>()
    expectTypeOf({ name: "" }).toMatchTypeOf<Expected>()
    expectTypeOf({ names: { some: "" } }).toMatchTypeOf<Expected>()
    expectTypeOf({ createdAt: new Date() }).toMatchTypeOf<Expected>()
    expectTypeOf({ createdAts: { some: new Date() } }).toMatchTypeOf<Expected>()
    expectTypeOf({ active: true }).toMatchTypeOf<Expected>()
    expectTypeOf({ actives: { some: true } }).toMatchTypeOf<Expected>()

    expectTypeOf({
        id: 5,
        name: "",
        createdAt: new Date(),
        active: true
    }).toMatchTypeOf<Expected>()
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

test('ValueCondition map to correct nested list subconditions when receiving an object as argument', () => {
    type Expected = ValueCondition<EntityAsElementTest>;

    expectTypeOf({ nestedPrimitive: { some: { id: 5 } } }).toMatchTypeOf<Expected>()
    expectTypeOf({ nestedList: { some: { ids: { all: 5 } } } }).toMatchTypeOf<Expected>()

    expectTypeOf({ nestedPrimitive: { some: { name: "" } } }).toMatchTypeOf<Expected>()
    expectTypeOf({ nestedList: { some: { names: { all: "" } } } }).toMatchTypeOf<Expected>()

    expectTypeOf({ nestedPrimitive: { some: { createdAt: new Date() } } }).toMatchTypeOf<Expected>()
    expectTypeOf({ nestedList: { some: { createdAts: { all: new Date() } } } }).toMatchTypeOf<Expected>()

    expectTypeOf({ nestedPrimitive: { some: { active: true } } }).toMatchTypeOf<Expected>()
    expectTypeOf({ nestedList: { some: { actives: { all: true } } } }).toMatchTypeOf<Expected>()

    expectTypeOf({ nestedObj: { some: { doublyNested: { some: { ids: { some: 5 } } } } } }).toMatchTypeOf<Expected>()
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

test('Entity condition should handle complex combination of both direct and nested sub queries', () => {
    expectTypeOf({
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
    }).toMatchTypeOf<EntityCondition<EntityComplex>>()
});


//---------------------------------------------------------------------- OrCondition

interface EntityConditionOr {
    id: number,
    name: string,
    createdAt: Date,
    active: boolean
};

test('OrCondition should contain two sub conditions', () => {
    expectTypeOf<{ or: [
        { id: 0 },
        { id: 1 }
    ]}>().toMatchTypeOf<OrCondition<EntityConditionOr>>();
    expectTypeOf<{ or: [
        { id: 0 },
        { name: { contains: "" } }
    ]}>().toMatchTypeOf<OrCondition<EntityConditionOr>>();
});

test('OrCondition should support nested or', () => {
    expectTypeOf<{ or: [
        { or: [ { id: 0 }, { id: 1 } ] },
        { or: [ { id: 2 }, { id: 3 } ] }
    ]}>().toMatchTypeOf<OrCondition<EntityConditionOr>>();
});

test('OrCondition should fordbid incomplete statement', () => {
    expectTypeOf<{ }>().not.toMatchTypeOf<OrCondition<EntityConditionOr>>();
    expectTypeOf<{ or: [ ] }>().not.toMatchTypeOf<OrCondition<EntityConditionOr>>();
    expectTypeOf<{ or: [ { id: 5 } ] }>().not.toMatchTypeOf<OrCondition<EntityConditionOr>>();
});

test('OrCondition should enforce type matching from entity properties', () => {
    expectTypeOf<{ or: [ { id: 5 }, { name: 5 } ] }>().not.toMatchTypeOf<OrCondition<EntityConditionOr>>();
    // @ts-expect-error
    expectTypeOf<{ or: [ { id: 5 }, { name: "" } ] }>().not.toMatchTypeOf<OrCondition<EntityConditionOr>>();
});


//---------------------------------------------------------------------- NotCondition

interface EntityConditionNot {
    id: number,
    name: string,
    createdAt: Date,
    active: boolean
};

test('NotCondition should contain at least one sub condition', () => {
    expectTypeOf({ not: { id: 0 } }).toMatchTypeOf<NotCondition<EntityConditionNot>>()
    expectTypeOf({ not: { id: 0, name: { contains: "" } }}).toMatchTypeOf<NotCondition<EntityConditionNot>>()
});


//---------------------------------------------------------------------- Combined logical condition

interface EntityLogicalCondition {
    id: number,
    name: string,
    createdAt: Date,
    active: boolean
};

test('WhereCondition should allow combination of multiple logical operators', () => {
    expectTypeOf<{
        active: true,
        not: { or: [ { id: 5 }, { id: 1 } ] },
        or: [
            { not: { name: "" } },
            { name: { contains: " " } }
        ]
    }>().toMatchTypeOf<WhereCondition<EntityLogicalCondition>>()
});

//---------------------------------------------------------------------- WhereClause


interface UserWhere {
    id: number
    firstname: string,
    lastname: string,
    address: AddressWhere,
    grades: number[],
    todos: TodoWhere[],
    binGrid: boolean[][]
};

interface AddressWhere {
    streetNumber: number,
    streetName: string,
    zipcode: number,
    city: string
};

interface TodoWhere {
    title: string
}

test('WhereCondition should allow combination of multiple logical operators', () => {
    expectTypeOf<{
        where: {                                            // Select users where :
            id: { gt: 0, lte: 100 },                        // id is in range ]0, 100]
            firstname: 'John',                              // and first name is John
            or: [
                { address: { zipcode: 12345 } },            // and address' zipcode is 123456
                { address: { city: { startswith: "New" }} } // or address' city starts with "New"
            ],
            not: {                                          // and hasn't some todos with "work" in their title
                todos: { 
                    some: { title: { contains: "work" } }
                }
            }, 
        }
    }>().toMatchTypeOf<WhereClause<UserWhere>>();
});
