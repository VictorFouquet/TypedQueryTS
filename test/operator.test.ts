import { BooleanOperator, EqualityOp, ListOperator, LiteralOperator, LogicalOperator, LowerOp, NumericalOperator, UpperOp } from "../src/operator.types"

//---------------------------------------------------------------------- Equality Operator

function testEqualityOp(op: EqualityOp): void {}

test('EqualityOp should allow "eq" operator', () => {
    expect(_ => testEqualityOp("eq")).not.toThrow();
})

// EqualityOp should throw for any other value than 'eq'
// @ts-expect-error
testEqualityOp("lt")
// @ts-expect-error
testEqualityOp("gt")
// @ts-expect-error
testEqualityOp("lte")
// @ts-expect-error
testEqualityOp("gte")
// @ts-expect-error
testEqualityOp("contains")
// @ts-expect-error
testEqualityOp("startswith")
// @ts-expect-error
testEqualityOp("endswith")
// @ts-expect-error
testEqualityOp("some")
// @ts-expect-error
testEqualityOp("all")
// @ts-expect-error
testEqualityOp("none")
// @ts-expect-error
testEqualityOp("or")
// @ts-expect-error
testEqualityOp("not")
// @ts-expect-error
testEqualityOp("is")
// @ts-expect-error
testEqualityOp("whatever")

//---------------------------------------------------------------------- LowerOp

function testLowerOp(op: LowerOp): void {}

test('EqualityOp should allow "eq" operator', () => {
    expect(_ => testLowerOp("lt")).not.toThrow();
    expect(_ => testLowerOp("lte")).not.toThrow();
})

// LowerOp should throw for any other value than 'lt' or 'lte'
// @ts-expect-error
testLowerOp("eq")
// @ts-expect-error
testLowerOp("gt")
// @ts-expect-error
testLowerOp("gte")
// @ts-expect-error
testLowerOp("contains")
// @ts-expect-error
testLowerOp("startswith")
// @ts-expect-error
testLowerOp("endswith")
// @ts-expect-error
testLowerOp("some")
// @ts-expect-error
testLowerOp("all")
// @ts-expect-error
testLowerOp("none")
// @ts-expect-error
testLowerOp("or")
// @ts-expect-error
testLowerOp("not")
// @ts-expect-error
testLowerOp("is")
// @ts-expect-error
testLowerOp("whatever")

//---------------------------------------------------------------------- UpperOp

function testUpperOp(op: UpperOp): void {}

test('EqualityOp should allow "eq" operator', () => {
    expect(_ => testUpperOp("gt")).not.toThrow();
    expect(_ => testUpperOp("gte")).not.toThrow();
})

// UpperOp should throw for any other value than 'gt' or 'gte'
// @ts-expect-error
testUpperOp("eq")
// @ts-expect-error
testUpperOp("lt")
// @ts-expect-error
testUpperOp("lte")
// @ts-expect-error
testLowerOp("contains")
// @ts-expect-error
testLowerOp("startswith")
// @ts-expect-error
testLowerOp("endswith")
// @ts-expect-error
testUpperOp("some")
// @ts-expect-error
testUpperOp("all")
// @ts-expect-error
testUpperOp("none")
// @ts-expect-error
testUpperOp("or")
// @ts-expect-error
testUpperOp("not")
// @ts-expect-error
testUpperOp("is")
// @ts-expect-error
testUpperOp("whatever")

//---------------------------------------------------------------------- NumericalOperator

function testNumericalOperator(op: NumericalOperator): void {}

test('EqualityOp should allow "eq" operator', () => {
    expect(_ => testNumericalOperator("eq")).not.toThrow();
    expect(_ => testNumericalOperator("gt")).not.toThrow();
    expect(_ => testNumericalOperator("gte")).not.toThrow();
    expect(_ => testNumericalOperator("lt")).not.toThrow();
    expect(_ => testNumericalOperator("lte")).not.toThrow();
})

// NumericalOperator should throw for any other value than 'eq', 'gt', 'gte', 'lt', 'lte' 
// @ts-expect-error
testNumericalOperator("contains")
// @ts-expect-error
testNumericalOperator("startswith")
// @ts-expect-error
testNumericalOperator("endswith")
// @ts-expect-error
testNumericalOperator("some")
// @ts-expect-error
testNumericalOperator("all")
// @ts-expect-error
testNumericalOperator("none")
// @ts-expect-error
testNumericalOperator("or")
// @ts-expect-error
testNumericalOperator("not")
// @ts-expect-error
testNumericalOperator("is")
// @ts-expect-error
testNumericalOperator("whatever")

//---------------------------------------------------------------------- LiteralOperator

function testLiteralOperator(op: LiteralOperator): void {}

test('EqualityOp should allow "eq" operator', () => {
    expect(_ => testLiteralOperator("eq")).not.toThrow();
    expect(_ => testLiteralOperator("contains")).not.toThrow();
    expect(_ => testLiteralOperator("startswith")).not.toThrow();
    expect(_ => testLiteralOperator("endswith")).not.toThrow();
})

// LiteralOperator should throw for any other value than 'eq', 'contains', 'startswit', 'endswith'
// @ts-expect-error
testLiteralOperator("lt")
// @ts-expect-error
testLiteralOperator("lte")
// @ts-expect-error
testLiteralOperator("gt")
// @ts-expect-error
testLiteralOperator("gte")
// @ts-expect-error
testLiteralOperator("some")
// @ts-expect-error
testLiteralOperator("all")
// @ts-expect-error
testLiteralOperator("none")
// @ts-expect-error
testLiteralOperator("or")
// @ts-expect-error
testLiteralOperator("not")
// @ts-expect-error
testLiteralOperator("is")
// @ts-expect-error
testLiteralOperator("whatever")

//---------------------------------------------------------------------- BooleanOperator

function testBooleanOperator(op: BooleanOperator): void {}

test('EqualityOp should allow "eq" operator', () => {
    expect(_ => testBooleanOperator("is")).not.toThrow();
    expect(_ => testBooleanOperator("not")).not.toThrow();
})

// BooleanOperator should throw for any other value than 'is' or 'not'
// @ts-expect-error
testBooleanOperator("eq")
// @ts-expect-error
testBooleanOperator("lt")
// @ts-expect-error
testBooleanOperator("lte")
// @ts-expect-error
testBooleanOperator("gt")
// @ts-expect-error
testBooleanOperator("gte")
// @ts-expect-error
testNumericalOperator("contains")
// @ts-expect-error
testNumericalOperator("startswith")
// @ts-expect-error
testNumericalOperator("endswith")
// @ts-expect-error
testBooleanOperator("some")
// @ts-expect-error
testBooleanOperator("all")
// @ts-expect-error
testBooleanOperator("none")
// @ts-expect-error
testBooleanOperator("or")
// @ts-expect-error
testBooleanOperator("whatever")

//---------------------------------------------------------------------- LogicalOperator

function testLogicalOperator(op: LogicalOperator): void {}

test('EqualityOp should allow "eq" operator', () => {
    expect(_ => testLogicalOperator("or")).not.toThrow();
    expect(_ => testLogicalOperator("not")).not.toThrow();
})

// LogicalOperator should throw for any other value than 'or' or 'not'
// @ts-expect-error
testLogicalOperator("eq")
// @ts-expect-error
testLogicalOperator("lt")
// @ts-expect-error
testLogicalOperator("lte")
// @ts-expect-error
testLogicalOperator("gt")
// @ts-expect-error
testLogicalOperator("gte")
// @ts-expect-error
testNuLogicalOperator("contains")
// @ts-expect-error
testNuLogicalOperator("startswith")
// @ts-expect-error
testNuLogicalOperator("endswith")
// @ts-expect-error
testLogicalOperator("some")
// @ts-expect-error
testLogicalOperator("all")
// @ts-expect-error
testLogicalOperator("none")
// @ts-expect-error
testLogicalOperator("is")
// @ts-expect-error
testLogicalOperator("whatever")

//---------------------------------------------------------------------- ListOperator

function testListOperator(op: ListOperator): void {}

test('EqualityOp should allow "eq" operator', () => {
    expect(_ => testListOperator("some")).not.toThrow();
    expect(_ => testListOperator("none")).not.toThrow();
    expect(_ => testListOperator("all")).not.toThrow();
})

// ListOperator should throw for any other value than 'some', 'none' or 'all'
// @ts-expect-error
testListOperator("eq")
// @ts-expect-error
testListOperator("lt")
// @ts-expect-error
testListOperator("lte")
// @ts-expect-error
testListOperator("gt")
// @ts-expect-error
testListOperator("gte")
// @ts-expect-error
testListOperator("contains")
// @ts-expect-error
testListOperator("startswith")
// @ts-expect-error
testListOperator("endswith")
// @ts-expect-error
testListOperator("is")
// @ts-expect-error
testListOperator("or")
// @ts-expect-error
testListOperator("not")
// @ts-expect-error
testListOperator("whatever")
