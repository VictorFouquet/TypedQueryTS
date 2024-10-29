import { NumericalOperator } from "../src/operator.types";
import {
    BooleanOperation,
    DoubleNumericalOperationType,
    DoubleNumericalOperations,
    LiteralOperation,
    NumericalOperation,
    SingleNumericalOperationType,
    SingleNumericalOperations
} from "../src/operation.types";


//---------------------------------------------------------------------- SingleNumericalOperationType

function testSingleNumericalOperationType<K extends NumericalOperator>(
    op: SingleNumericalOperationType<K, number>
): void {}

test('SingleNumericalOperationType should allow operation with only one operator', () => {
    expect(_ => testSingleNumericalOperationType<"eq">({ "eq": 0 }));
    expect(_ => testSingleNumericalOperationType<"lt">({ "lt": 0 }));
    expect(_ => testSingleNumericalOperationType<"gt">({ "gt": 0 }));
    expect(_ => testSingleNumericalOperationType<"lte">({ "lte": 0 }));
    expect(_ => testSingleNumericalOperationType<"gte">({ "gte": 0 }));
})

// @ts-expect-error
testSingleNumericalOperationType<"eq">({ "lt": 0 });
// @ts-expect-error
testSingleNumericalOperationType<"eq">({ "gt": 0 });
// @ts-expect-error
testSingleNumericalOperationType<"eq">({ "lte": 0 });
// @ts-expect-error
testSingleNumericalOperationType<"eq">({ "gte": 0 });

// @ts-expect-error
testSingleNumericalOperationType<"lt">({ "eq": 0 });
// @ts-expect-error
testSingleNumericalOperationType<"lt">({ "gt": 0 });
// @ts-expect-error
testSingleNumericalOperationType<"lt">({ "lte": 0 });
// @ts-expect-error
testSingleNumericalOperationType<"lt">({ "gte": 0 });

// @ts-expect-error
testSingleNumericalOperationType<"lte">({ "eq": 0 });
// @ts-expect-error
testSingleNumericalOperationType<"lte">({ "lt": 0 });
// @ts-expect-error
testSingleNumericalOperationType<"lte">({ "gt": 0 });
// @ts-expect-error
testSingleNumericalOperationType<"lte">({ "gte": 0 });

// @ts-expect-error
testSingleNumericalOperationType<"gte">({ "eq": 0 });
// @ts-expect-error
testSingleNumericalOperationType<"gte">({ "lt": 0 });
// @ts-expect-error
testSingleNumericalOperationType<"gte">({ "gt": 0 });
// @ts-expect-error
testSingleNumericalOperationType<"gte">({ "lte": 0 });


//---------------------------------------------------------------------- DoubleNumericalOperationType

function testDoubleNumericalOperationType<K extends NumericalOperator, KP extends NumericalOperator, V extends number|Date>(
    op: DoubleNumericalOperationType<K, KP, V>
): void {}

test('DoubleNumericalOperationType should allow operation with exactly two operators', () => {
    // Tests for number bounds
    expect(_ => testDoubleNumericalOperationType<"eq", "lt", number>({ "eq": 0, "lt": 0 }));
    expect(_ => testDoubleNumericalOperationType<"eq", "lte", number>({ "eq": 0, "lte": 0 }));
    expect(_ => testDoubleNumericalOperationType<"eq", "gt", number>({ "eq": 0, "gt": 0 }));
    expect(_ => testDoubleNumericalOperationType<"eq", "gte", number>({ "eq": 0, "gte": 0 }));

    expect(_ => testDoubleNumericalOperationType<"lt", "lte", number>({ "lt": 0, "lte": 0 }));
    expect(_ => testDoubleNumericalOperationType<"lt", "gt", number>({ "lt": 0, "gt": 0 }));
    expect(_ => testDoubleNumericalOperationType<"lt", "gte", number>({ "lt": 0, "gte": 0 }));

    expect(_ => testDoubleNumericalOperationType<"gt", "lte", number>({ "gt": 0, "lte": 0 }));
    expect(_ => testDoubleNumericalOperationType<"gt", "gte", number>({ "gt": 0, "gte": 0 }));

    expect(_ => testDoubleNumericalOperationType<"gte", "lte", number>({ "gte": 0, "lte": 0 }));

    // Tests for Date bounds
    expect(_ => testDoubleNumericalOperationType<"eq", "lt", Date>({ "eq": new Date(), "lt": new Date() }));
    expect(_ => testDoubleNumericalOperationType<"eq", "lte", Date>({ "eq": new Date(), "lte": new Date() }));
    expect(_ => testDoubleNumericalOperationType<"eq", "gt", Date>({ "eq": new Date(), "gt": new Date() }));
    expect(_ => testDoubleNumericalOperationType<"eq", "gte", Date>({ "eq": new Date(), "gte": new Date() }));

    expect(_ => testDoubleNumericalOperationType<"lt", "lte", Date>({ "lt": new Date(), "lte": new Date() }));
    expect(_ => testDoubleNumericalOperationType<"lt", "gt", Date>({ "lt": new Date(), "gt": new Date() }));
    expect(_ => testDoubleNumericalOperationType<"lt", "gte", Date>({ "lt": new Date(), "gte": new Date() }));

    expect(_ => testDoubleNumericalOperationType<"gt", "lte", Date>({ "gt": new Date(), "lte": new Date() }));
    expect(_ => testDoubleNumericalOperationType<"gt", "gte", Date>({ "gt": new Date(), "gte": new Date() }));

    expect(_ => testDoubleNumericalOperationType<"gte", "lte", Date>({ "gte": new Date(), "lte": new Date() }));
})

// Invalid for inconsistency in provided value types

// @ts-expect-error
testDoubleNumericalOperationType<"eq", "lt", number>({ "eq": 0, "lt": new Date() });
// @ts-expect-error
testDoubleNumericalOperationType<"eq", "lte", Date>({ "eq": 0, "lte": new Date() });
// @ts-expect-error
testDoubleNumericalOperationType<"eq", "gt", number>({ "eq": 0, "gt": new Date() });
// @ts-expect-error
testDoubleNumericalOperationType<"eq", "gte", Date>({ "eq": 0, "gte": new Date() });
// @ts-expect-error
testDoubleNumericalOperationType<"lt", "lte", number>({ "lt": 0, "lte": new Date() });
// @ts-expect-error
testDoubleNumericalOperationType<"lt", "gt", Date>({ "lt": 0, "gt": new Date() });
// @ts-expect-error
testDoubleNumericalOperationType<"lt", "gte", number>({ "lt": 0, "gte": new Date() });
// @ts-expect-error
testDoubleNumericalOperationType<"gt", "lte", Date>({ "gt": 0, "lte": new Date() });
// @ts-expect-error
testDoubleNumericalOperationType<"gt", "gte", number>({ "gt": 0, "gte": new Date() });
// @ts-expect-error
testDoubleNumericalOperationType<"gte", "lte", Date>({ "gte": 0, "lte": new Date() });


// Invalid for providing same key twice

// @ts-expect-error
testDoubleNumericalOperationType<"eq", "eq">({ "eq": 0, "eq": 0 });
// @ts-expect-error
testDoubleNumericalOperationType<"lt", "lt">({ "lt": 0, "lt": 0 });
// @ts-expect-error
testDoubleNumericalOperationType<"lte", "lte">({ "lte": 0, "lte": 0 });
// @ts-expect-error
testDoubleNumericalOperationType<"gte", "gte">({ "gte": 0, "gte": 0 });

// Should throw error if a key is not a NumericalOperator
// @ts-expect-error
testDoubleNumericalOperationType<"whatever", "gte">({ "whatever": 0, "gte": 0 });

// Should throw if the provided key couple don't match
// @ts-expect-error
testDoubleNumericalOperationType<"eq", "lt">({ "eq": 0, "lte": 0 });
// @ts-expect-error
testDoubleNumericalOperationType<"eq", "lt">({ "gt": 0, "lt": 0 });

// Should throw if none of the provided key match
// @ts-expect-error
testDoubleNumericalOperationType<"gt", "lt">({ "gte": 0, "lte": 0 });
// @ts-expect-error
testDoubleNumericalOperationType<"gte", "lte">({ "gt": 0, "lt": 0 });


//---------------------------------------------------------------------- SingleNumericalOperation

function testSingleNumericalOperation<T extends number|Date>(op: SingleNumericalOperations<T>): void {}

test('SingleNumericalOperation should allow operation with only one operator associated to a number', () => {
    expect(_ => testSingleNumericalOperation<number>({ "eq": 0 }));
    expect(_ => testSingleNumericalOperation<number>({ "lt": 0 }));
    expect(_ => testSingleNumericalOperation<number>({ "gt": 0 }));
    expect(_ => testSingleNumericalOperation<number>({ "lte": 0 }));
    expect(_ => testSingleNumericalOperation<number>({ "gte": 0 }));

    expect(_ => testSingleNumericalOperation<Date>({ "eq": new Date() }));
    expect(_ => testSingleNumericalOperation<Date>({ "lt": new Date() }));
    expect(_ => testSingleNumericalOperation<Date>({ "gt": new Date() }));
    expect(_ => testSingleNumericalOperation<Date>({ "lte": new Date() }));
    expect(_ => testSingleNumericalOperation<Date>({ "gte": new Date() }));
})

// Invalid for associating a date to a set to be number field

// @ts-expect-error
testSingleNumericalOperation<number>({ "eq": new Date() });
// @ts-expect-error
testSingleNumericalOperation<number>({ "lt": new Date() });
// @ts-expect-error
testSingleNumericalOperation<number>({ "gt": new Date() });
// @ts-expect-error
testSingleNumericalOperation<number>({ "lte": new Date() });
// @ts-expect-error
testSingleNumericalOperation<number>({ "gte": new Date() });

// Invalid for associating a number to a set to be Date field

// @ts-expect-error
testSingleNumericalOperation<Date>({ "eq": 0 });
// @ts-expect-error
testSingleNumericalOperation<Date>({ "lt": 0 });
// @ts-expect-error
testSingleNumericalOperation<Date>({ "gt": 0 });
// @ts-expect-error
testSingleNumericalOperation<Date>({ "lte": 0 });
// @ts-expect-error
testSingleNumericalOperation<Date>({ "gte": 0 });

// Invalid for other wrong types

// @ts-expect-error
testSingleNumericalOperation<number>({ "eq": true });
// @ts-expect-error
testSingleNumericalOperation<number>({ "eq": "" });
// @ts-expect-error
testSingleNumericalOperation<number>({ "eq": [] });

// Invalid combination with exclusive eq

// @ts-expect-error
testSingleNumericalOperation<number>({ "eq": 0, "lt": 0 });
// @ts-expect-error
testSingleNumericalOperation<number>({ "eq": 0, "gt": 0 });
// @ts-expect-error
testSingleNumericalOperation<number>({ "eq": 0, "lte": 0 });
// @ts-expect-error
testSingleNumericalOperation<number>({ "eq": 0, "gte": 0 });

// Invalid combinations with incompatible bounds

// @ts-expect-error
testSingleNumericalOperation<number>({ "lt": 0, "gt": 0 });
// @ts-expect-error
testSingleNumericalOperation<number>({ "lt": 0, "lte": 0 });
// @ts-expect-error
testSingleNumericalOperation<number>({ "lt": 0, "gte": 0 });

// @ts-expect-error
testSingleNumericalOperation<number>({ "gt": 0, "lte": 0 });
// @ts-expect-error
testSingleNumericalOperation<number>({ "gt": 0, "gte": 0 });

// @ts-expect-error
testSingleNumericalOperation<number>({ "gte": 0, "lte": 0 });


//---------------------------------------------------------------------- DoubleNumericalOperation

function testDoubleNumericalOperation<T extends number | Date>(op: DoubleNumericalOperations<T>): void {}

test('DoubleNumericalOperations should allow any legal combination of two operators', () => {
    expect(_ => testDoubleNumericalOperation<number>({ "lt": 0, "gt": 0 }));
    expect(_ => testDoubleNumericalOperation<number>({ "lt": 0, "gte": 0 }));

    expect(_ => testDoubleNumericalOperation<number>({ "lte": 0, "gt": 0 }));
    expect(_ => testDoubleNumericalOperation<number>({ "lte": 0, "gte": 0 }));

    expect(_ => testDoubleNumericalOperation<Date>({ "lt": new Date(), "gt": new Date() }));
    expect(_ => testDoubleNumericalOperation<Date>({ "lt": new Date(), "gte": new Date() }));

    expect(_ => testDoubleNumericalOperation<Date>({ "lte": new Date(), "gt": new Date() }));
    expect(_ => testDoubleNumericalOperation<Date>({ "lte": new Date(), "gte": new Date() }));
})

// Invalid numerical Date-number associations with valid bounds

// @ts-expect-error
testDoubleNumericalOperation<Date>({ "lt": 0, "gt": 0 });
// @ts-expect-error
testDoubleNumericalOperation<Date>({ "lt": 0, "gte": 0 });
// @ts-expect-error
testDoubleNumericalOperation<Date>({ "lte": 0, "gt": 0 });
// @ts-expect-error
testDoubleNumericalOperation<Date>({ "lte": 0, "gte": 0 });

// @ts-expect-error
testDoubleNumericalOperation<number>({ "lt": new Date(), "gt": new Date() });
// @ts-expect-error
testDoubleNumericalOperation<number>({ "lt": new Date(), "gte": new Date() });
// @ts-expect-error
testDoubleNumericalOperation<number>({ "lte": new Date(), "gt": new Date() });
// @ts-expect-error
testDoubleNumericalOperation<number>({ "lte": new Date(), "gte": new Date() });

// Invalid combinations for using eq

// @ts-expect-error
testDoubleNumericalOperation({ "eq": 0, "lt": 0 });
// @ts-expect-error
testDoubleNumericalOperation({ "eq": 0, "gt": 0 });
// @ts-expect-error
testDoubleNumericalOperation({ "eq": 0, "lte": 0 });
// @ts-expect-error
testDoubleNumericalOperation({ "eq": 0, "gte": 0 });

// Invalid bound combinations

// @ts-expect-error
testDoubleNumericalOperation({ "lt": 0, "lte": 0 });
// @ts-expect-error
testDoubleNumericalOperation({ "gt": 0, "gte": 0 });

// Invalid type associations

// @ts-expect-error
testDoubleNumericalOperation({ "lt": true });
// @ts-expect-error
testDoubleNumericalOperation({ "lt": 0, "gt": true });
// @ts-expect-error
testDoubleNumericalOperation({ "lt": 0, "gt": new Date() });
// @ts-expect-error
testDoubleNumericalOperation({ "lt": 0, "gt": "" });

//---------------------------------------------------------------------- NumericalOperation

function testNumericalOperation<V extends number|Date>(op: NumericalOperation<V>): void {}

test('NumericalOperation should allow only valid numerical operator combination or single operator', () => {
    expect(_ => testNumericalOperation<number>({ "eq": 0 }));
    expect(_ => testNumericalOperation<number>({ "lt": 0 }));
    expect(_ => testNumericalOperation<number>({ "gt": 0 }));
    expect(_ => testNumericalOperation<number>({ "lte": 0 }));
    expect(_ => testNumericalOperation<number>({ "gte": 0 }));

    expect(_ => testNumericalOperation<number>({ "lt": 0, "gt": 0 }));
    expect(_ => testNumericalOperation<number>({ "lt": 0, "gte": 0 }));

    expect(_ => testNumericalOperation<number>({ "lte": 0, "gt": 0 }));
    expect(_ => testNumericalOperation<number>({ "lte": 0, "gte": 0 }));

    expect(_ => testNumericalOperation<Date>({ "eq": new Date() }));
    expect(_ => testNumericalOperation<Date>({ "lt": new Date() }));
    expect(_ => testNumericalOperation<Date>({ "gt": new Date() }));
    expect(_ => testNumericalOperation<Date>({ "lte": new Date() }));
    expect(_ => testNumericalOperation<Date>({ "gte": new Date() }));

    expect(_ => testNumericalOperation<Date>({ "lt": new Date(), "gt": new Date() }));
    expect(_ => testNumericalOperation<Date>({ "lt": new Date(), "gte": new Date() }));

    expect(_ => testNumericalOperation<Date>({ "lte": new Date(), "gt": new Date() }));
    expect(_ => testNumericalOperation<Date>({ "lte": new Date(), "gte": new Date() }));
})

// Invalid for combining with exclusive "eq"

// @ts-expect-error
testNumericalOperation({ "eq": 0, "lt": 0 });
// @ts-expect-error
testNumericalOperation({ "eq": 0, "gt": 0 });
// @ts-expect-error
testNumericalOperation({ "eq": 0, "lte": 0 });
// @ts-expect-error
testNumericalOperation({ "eq": 0, "gte": 0 });

// Invalid bounds combinations

// @ts-expect-error
testNumericalOperation({ "lt": 0, "lte": 0 });
// @ts-expect-error
testNumericalOperation({ "gt": 0, "gte": 0 });

// Invalid provided types

// @ts-expect-error
testNumericalOperation({ "lt": true });
// @ts-expect-error
testNumericalOperation({ "lt": 0, "gt": true });
// @ts-expect-error
testNumericalOperation({ "lt": 0, "gt": new Date() });
// @ts-expect-error
testNumericalOperation({ "lt": 0, "gt": "" });


//---------------------------------------------------------------------- LiteralOperation

function testLiteralOperation(op: LiteralOperation): void {}

test('LiteralOperation should allow legal combination of literal operators', () => {
    expect(_ => testLiteralOperation({ "eq": "" }));
    expect(_ => testLiteralOperation({ "contains": "" }));
    expect(_ => testLiteralOperation({ "startswith": "" }));
    expect(_ => testLiteralOperation({ "endswith": "" }));

    expect(_ => testLiteralOperation({ "contains": "", "startswith": "" }));
    expect(_ => testLiteralOperation({ "contains": "", "endswith": "" }));
    expect(_ => testLiteralOperation({ "startswith": "", "endswith": "" }));

    expect(_ => testLiteralOperation({ "contains": "", "startswith": "", "endswith": "" }));
})

// @ts-expect-error
testLiteralOperation({ });
// @ts-expect-error
testLiteralOperation({ "whatever": "" });
// @ts-expect-error
testLiteralOperation({ "eq": "", "contains": "" });
// @ts-expect-error
testLiteralOperation({ "eq": "", "startswith": "" });
// @ts-expect-error
testLiteralOperation({ "eq": "", "endswith": "" });


//---------------------------------------------------------------------- BooleanOperation

function testBooleanOperation(op: BooleanOperation): void {}

test('BooleanOperation should allow operation with only one operator', () => {
    expect(_ => testBooleanOperation({ "is": true }));
    expect(_ => testBooleanOperation({ "not": false }));
})

// @ts-expect-error
testBooleanOperation({});
// @ts-expect-error
testBooleanOperation({ "is": "" });
// @ts-expect-error
testBooleanOperation({ "is": 0 });
// @ts-expect-error
testBooleanOperation({ "is": new Date() });

// @ts-expect-error
testBooleanOperation({ "is": true, "not": true });
// @ts-expect-error
testBooleanOperation({ "is": true, "not": false });

// @ts-expect-error
testBooleanOperation({ "is": true, "not": 0 });
// @ts-expect-error
testBooleanOperation({ "is": true, "not": "" });
// @ts-expect-error
testBooleanOperation({ "is": true, "not": new Date() });
// @ts-expect-error
testBooleanOperation({ "is": true, "not": [] });
