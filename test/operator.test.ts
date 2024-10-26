import { BooleanOperator, EqualityOp, InferOperator, ListOperator, LiteralOperator, LogicalOperator, LowerOp, NumericalOperator, UpperOp } from "../src/operator.types"

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
testLogicalOperator("contains")
// @ts-expect-error
testLogicalOperator("startswith")
// @ts-expect-error
testLogicalOperator("endswith")
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

//---------------------------------------------------------------------- InferOperator

function testInferOperator<T>(v: InferOperator<T>): void {}

test('InferOperator<number> should allow NumericalOperator', () => {
    expect(_ => testInferOperator<number>("eq")).not.toThrow();
    expect(_ => testInferOperator<number>("lt")).not.toThrow();
    expect(_ => testInferOperator<number>("lte")).not.toThrow();
    expect(_ => testInferOperator<number>("gt")).not.toThrow();
    expect(_ => testInferOperator<number>("gte")).not.toThrow();
})

// @ts-expect-error
testInferOperator<number>("contains");
// @ts-expect-error
testInferOperator<number>("startswith");
// @ts-expect-error
testInferOperator<number>("endswith");
// @ts-expect-error
testInferOperator<number>("is");
// @ts-expect-error
testInferOperator<number>("not");
// @ts-expect-error
testInferOperator<number>("some");
// @ts-expect-error
testInferOperator<number>("all");
// @ts-expect-error
testInferOperator<number>("none");


test('InferOperator<Date> should allow NumericalOperator', () => {
    expect(_ => testInferOperator<Date>("eq")).not.toThrow();
    expect(_ => testInferOperator<Date>("lt")).not.toThrow();
    expect(_ => testInferOperator<Date>("lte")).not.toThrow();
    expect(_ => testInferOperator<Date>("gt")).not.toThrow();
    expect(_ => testInferOperator<Date>("gte")).not.toThrow();
})

// @ts-expect-error
testInferOperator<Date>("contains");
// @ts-expect-error
testInferOperator<Date>("startswith");
// @ts-expect-error
testInferOperator<Date>("endswith");
// @ts-expect-error
testInferOperator<Date>("is");
// @ts-expect-error
testInferOperator<Date>("not");
// @ts-expect-error
testInferOperator<Date>("some");
// @ts-expect-error
testInferOperator<Date>("all");
// @ts-expect-error
testInferOperator<Dateboolean>("none");


test('InferOperator<string> should allow LiteralOperator', () => {
    expect(_ => testInferOperator<string>("eq")).not.toThrow();
    expect(_ => testInferOperator<string>("contains")).not.toThrow();
    expect(_ => testInferOperator<string>("startswith")).not.toThrow();
    expect(_ => testInferOperator<string>("endswith")).not.toThrow();
})

// @ts-expect-error
testInferOperator<string>("lt");
// @ts-expect-error
testInferOperator<string>("lte");
// @ts-expect-error
testInferOperator<string>("gt");
// @ts-expect-error
testInferOperator<string>("gte");
// @ts-expect-error
testInferOperator<string>("is");
// @ts-expect-error
testInferOperator<string>("not");
// @ts-expect-error
testInferOperator<string>("some");
// @ts-expect-error
testInferOperator<string>("all");
// @ts-expect-error
testInferOperator<string>("none");


test('InferOperator<boolean> should allow BooleanOperator', () => {
    expect(_ => testInferOperator<boolean>("is")).not.toThrow();
    expect(_ => testInferOperator<boolean>("not")).not.toThrow();
})

// @ts-expect-error
testInferOperator<boolean>("eq");
// @ts-expect-error
testInferOperator<boolean>("lt");
// @ts-expect-error
testInferOperator<boolean>("lte");
// @ts-expect-error
testInferOperator<boolean>("gt");
// @ts-expect-error
testInferOperator<boolean>("gte");
// @ts-expect-error
testInferOperator<boolean>("contains");
// @ts-expect-error
testInferOperator<boolean>("startswith");
// @ts-expect-error
testInferOperator<boolean>("endswith");
// @ts-expect-error
testInferOperator<boolean>("some");
// @ts-expect-error
testInferOperator<boolean>("all");
// @ts-expect-error
testInferOperator<boolean>("none");

test('InferOperator<any[]> should allow ListOperator', () => {
    expect(_ => testInferOperator<any[]>("some")).not.toThrow();
    expect(_ => testInferOperator<any[]>("none")).not.toThrow();
    expect(_ => testInferOperator<any[]>("all")).not.toThrow();
})

// @ts-expect-error
testInferOperator<any[]>("eq");
// @ts-expect-error
testInferOperator<any[]>("lt");
// @ts-expect-error
testInferOperator<any[]>("lte");
// @ts-expect-error
testInferOperator<any[]>("gt");
// @ts-expect-error
testInferOperator<any[]>("gte");
// @ts-expect-error
testInferOperator<any[]>("contains");
// @ts-expect-error
testInferOperator<any[]>("startswith");
// @ts-expect-error
testInferOperator<any[]>("endswith");
// @ts-expect-error
testInferOperator<any[]>("is");
// @ts-expect-error
testInferOperator<any[]>("not");
