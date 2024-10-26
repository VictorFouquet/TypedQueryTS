import { NumericalOperator } from "../src/operator.types";
import { BooleanOperation, DoubleNumericalOperationType, DoubleNumericalOperations, LiteralOperation, NumericalOperation, SingleNumericalOperationType, SingleNumericalOperations } from "../src/operation.types";


//---------------------------------------------------------------------- SingleNumericalOperationType

function testSingleNumericalOperationType<K extends NumericalOperator>(
    op: SingleNumericalOperationType<K>
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

function testDoubleNumericalOperationType<K extends NumericalOperator, KP extends NumericalOperator>(
    op: DoubleNumericalOperationType<K, KP>
): void {}

test('DoubleNumericalOperationType should allow operation with exactly two operators', () => {
    expect(_ => testDoubleNumericalOperationType<"eq", "lt">({ "eq": 0, "lt": 0 }));
    expect(_ => testDoubleNumericalOperationType<"eq", "lte">({ "eq": 0, "lte": 0 }));
    expect(_ => testDoubleNumericalOperationType<"eq", "gt">({ "eq": 0, "gt": 0 }));
    expect(_ => testDoubleNumericalOperationType<"eq", "gte">({ "eq": 0, "gte": 0 }));

    expect(_ => testDoubleNumericalOperationType<"lt", "lte">({ "lt": 0, "lte": 0 }));
    expect(_ => testDoubleNumericalOperationType<"lt", "gt">({ "lt": 0, "gt": 0 }));
    expect(_ => testDoubleNumericalOperationType<"lt", "gte">({ "lt": 0, "gte": 0 }));

    expect(_ => testDoubleNumericalOperationType<"gt", "lte">({ "gt": 0, "lte": 0 }));
    expect(_ => testDoubleNumericalOperationType<"gt", "gte">({ "gt": 0, "gte": 0 }));

    expect(_ => testDoubleNumericalOperationType<"gte", "lte">({ "gte": 0, "lte": 0 }));
})

// Should throw if same key is provided twice
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

function testSingleNumericalOperation(op: SingleNumericalOperations): void {}

test('SingleNumericalOperation should allow operation with only one operator', () => {
    expect(_ => testSingleNumericalOperation({ "eq": 0 }));
    expect(_ => testSingleNumericalOperation({ "lt": 0 }));
    expect(_ => testSingleNumericalOperation({ "gt": 0 }));
    expect(_ => testSingleNumericalOperation({ "lte": 0 }));
    expect(_ => testSingleNumericalOperation({ "gte": 0 }));

    expect(_ => testSingleNumericalOperation({ "eq": new Date() }));
    expect(_ => testSingleNumericalOperation({ "lt": new Date() }));
    expect(_ => testSingleNumericalOperation({ "gt": new Date() }));
    expect(_ => testSingleNumericalOperation({ "lte": new Date() }));
    expect(_ => testSingleNumericalOperation({ "gte": new Date() }));
})

// @ts-expect-error
testSingleNumericalOperation({ "eq": true });
// @ts-expect-error
testSingleNumericalOperation({ "eq": "" });
// @ts-expect-error
testSingleNumericalOperation({ "eq": [] });

// @ts-expect-error
testSingleNumericalOperation({ "eq": 0, "lt": 0 });
// @ts-expect-error
testSingleNumericalOperation({ "eq": 0, "gt": 0 });
// @ts-expect-error
testSingleNumericalOperation({ "eq": 0, "lte": 0 });
// @ts-expect-error
testSingleNumericalOperation({ "eq": 0, "gte": 0 });

// @ts-expect-error
testSingleNumericalOperation({ "lt": 0, "gt": 0 });
// @ts-expect-error
testSingleNumericalOperation({ "lt": 0, "lte": 0 });
// @ts-expect-error
testSingleNumericalOperation({ "lt": 0, "gte": 0 });

// @ts-expect-error
testSingleNumericalOperation({ "gt": 0, "lte": 0 });
// @ts-expect-error
testSingleNumericalOperation({ "gt": 0, "gte": 0 });

// @ts-expect-error
testSingleNumericalOperation({ "gte": 0, "lte": 0 });


//---------------------------------------------------------------------- DoubleNumericalOperation

function testDoubleNumericalOperation(op: DoubleNumericalOperations): void {}

test('DoubleNumericalOperations should allow any legal combination of two operators', () => {
    expect(_ => testDoubleNumericalOperation({ "lt": 0, "gt": 0 }));
    expect(_ => testDoubleNumericalOperation({ "lt": 0, "gte": 0 }));

    expect(_ => testDoubleNumericalOperation({ "lte": 0, "gt": 0 }));
    expect(_ => testDoubleNumericalOperation({ "lte": 0, "gte": 0 }));

    expect(_ => testDoubleNumericalOperation({ "lt": new Date(), "gt": new Date() }));
    expect(_ => testDoubleNumericalOperation({ "lt": new Date(), "gte": new Date() }));

    expect(_ => testDoubleNumericalOperation({ "lte": new Date(), "gt": new Date() }));
    expect(_ => testDoubleNumericalOperation({ "lte": new Date(), "gte": new Date() }));
})

// @ts-expect-error
testDoubleNumericalOperation({ "eq": 0, "lt": 0 });
// @ts-expect-error
testDoubleNumericalOperation({ "eq": 0, "gt": 0 });
// @ts-expect-error
testDoubleNumericalOperation({ "eq": 0, "lte": 0 });
// @ts-expect-error
testDoubleNumericalOperation({ "eq": 0, "gte": 0 });

// @ts-expect-error
testDoubleNumericalOperation({ "lt": 0, "lte": 0 });
// @ts-expect-error
testDoubleNumericalOperation({ "gt": 0, "gte": 0 });

// @ts-expect-error
testDoubleNumericalOperation({ "lt": true });
// @ts-expect-error
testDoubleNumericalOperation({ "lt": 0, "gt": true });
// @ts-expect-error
testDoubleNumericalOperation({ "lt": 0, "gt": new Date() });
// @ts-expect-error
testDoubleNumericalOperation({ "lt": 0, "gt": "" });

//---------------------------------------------------------------------- NumericalOperation

function testNumericalOperation(op: NumericalOperation): void {}

test('NumericalOperation should allow only valid numerical operator combination or single operator', () => {
    expect(_ => testNumericalOperation({ "eq": 0 }));
    expect(_ => testNumericalOperation({ "lt": 0 }));
    expect(_ => testNumericalOperation({ "gt": 0 }));
    expect(_ => testNumericalOperation({ "lte": 0 }));
    expect(_ => testNumericalOperation({ "gte": 0 }));

    expect(_ => testNumericalOperation({ "lt": 0, "gt": 0 }));
    expect(_ => testNumericalOperation({ "lt": 0, "gte": 0 }));

    expect(_ => testNumericalOperation({ "lte": 0, "gt": 0 }));
    expect(_ => testNumericalOperation({ "lte": 0, "gte": 0 }));

    expect(_ => testNumericalOperation({ "eq": new Date() }));
    expect(_ => testNumericalOperation({ "lt": new Date() }));
    expect(_ => testNumericalOperation({ "gt": new Date() }));
    expect(_ => testNumericalOperation({ "lte": new Date() }));
    expect(_ => testNumericalOperation({ "gte": new Date() }));

    expect(_ => testNumericalOperation({ "lt": new Date(), "gt": new Date() }));
    expect(_ => testNumericalOperation({ "lt": new Date(), "gte": new Date() }));

    expect(_ => testNumericalOperation({ "lte": new Date(), "gt": new Date() }));
    expect(_ => testNumericalOperation({ "lte": new Date(), "gte": new Date() }));
})

// @ts-expect-error
testNumericalOperation({ "eq": 0, "lt": 0 });
// @ts-expect-error
testNumericalOperation({ "eq": 0, "gt": 0 });
// @ts-expect-error
testNumericalOperation({ "eq": 0, "lte": 0 });
// @ts-expect-error
testNumericalOperation({ "eq": 0, "gte": 0 });

// @ts-expect-error
testNumericalOperation({ "lt": 0, "lte": 0 });
// @ts-expect-error
testNumericalOperation({ "gt": 0, "gte": 0 });

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

test('LiteralOperation should allow any combination of literal operators', () => {

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
testLiteralOperation({ "contains": 0 });
// @ts-expect-error
testLiteralOperation({ "contains": 0, "startswith": "" });
// @ts-expect-error
testLiteralOperation({ "contains": new Date() });
// @ts-expect-error
testLiteralOperation({ "contains": new Date(), "startswith": "" });
// @ts-expect-error
testLiteralOperation({ "contains": [] });
// @ts-expect-error
testLiteralOperation({ "contains": [], "startswith": "" });
// @ts-expect-error
testLiteralOperation({ "contains": true });
// @ts-expect-error
testLiteralOperation({ "contains": true, "startswith": "" });


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
