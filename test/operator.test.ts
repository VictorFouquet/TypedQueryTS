import { expectTypeOf, test } from 'vitest';
import { LogicalOperator, EqualityOp, InferOperator, ListOperator, LiteralOperator, BooleanOperator, LowerOp, NumericalOperator, UpperOp, OrderingOperator } from "../src/operator.types"


//---------------------------------------------------------------------- Equality Operator

test('EqualityOp should allow "eq" operator', () => {
    expectTypeOf<"eq">().toMatchTypeOf<EqualityOp>();
});

test('EqualityOp should forbid any other operator', () => {
    expectTypeOf<"lt">().not.toMatchTypeOf<EqualityOp>();
    expectTypeOf<"lte">().not.toMatchTypeOf<EqualityOp>();
    expectTypeOf<"gt">().not.toMatchTypeOf<EqualityOp>();
    expectTypeOf<"gte">().not.toMatchTypeOf<EqualityOp>();
    expectTypeOf<"like">().not.toMatchTypeOf<EqualityOp>();
    expectTypeOf<"contains">().not.toMatchTypeOf<EqualityOp>();
    expectTypeOf<"startswith">().not.toMatchTypeOf<EqualityOp>();
    expectTypeOf<"endswith">().not.toMatchTypeOf<EqualityOp>();
    expectTypeOf<"some">().not.toMatchTypeOf<EqualityOp>();
    expectTypeOf<"none">().not.toMatchTypeOf<EqualityOp>();
    expectTypeOf<"all">().not.toMatchTypeOf<EqualityOp>();
    expectTypeOf<"is">().not.toMatchTypeOf<EqualityOp>();
    expectTypeOf<"not">().not.toMatchTypeOf<EqualityOp>();
    expectTypeOf<"or">().not.toMatchTypeOf<EqualityOp>();
    expectTypeOf<"asc">().not.toMatchTypeOf<EqualityOp>();
    expectTypeOf<"desc">().not.toMatchTypeOf<EqualityOp>();
    expectTypeOf<"whatever">().not.toMatchTypeOf<EqualityOp>();
});


//---------------------------------------------------------------------- LowerOp


test('LowerOp should allow "lt" and "lte" operators', () => {
    expectTypeOf<"lt">().toMatchTypeOf<LowerOp>();
    expectTypeOf<"lte">().toMatchTypeOf<LowerOp>();
})

test('LowerOp should forbid any other operator than "lt" and "lte"', () => {
    expectTypeOf<"eq">().not.toMatchTypeOf<LowerOp>();
    expectTypeOf<"gt">().not.toMatchTypeOf<LowerOp>();
    expectTypeOf<"gte">().not.toMatchTypeOf<LowerOp>();
    expectTypeOf<"contains">().not.toMatchTypeOf<LowerOp>();
    expectTypeOf<"startswith">().not.toMatchTypeOf<LowerOp>();
    expectTypeOf<"endswith">().not.toMatchTypeOf<LowerOp>();
    expectTypeOf<"like">().not.toMatchTypeOf<LowerOp>();
    expectTypeOf<"some">().not.toMatchTypeOf<LowerOp>();
    expectTypeOf<"none">().not.toMatchTypeOf<LowerOp>();
    expectTypeOf<"all">().not.toMatchTypeOf<LowerOp>();
    expectTypeOf<"is">().not.toMatchTypeOf<LowerOp>();
    expectTypeOf<"not">().not.toMatchTypeOf<LowerOp>();
    expectTypeOf<"or">().not.toMatchTypeOf<LowerOp>();
    expectTypeOf<"asc">().not.toMatchTypeOf<LowerOp>();
    expectTypeOf<"desc">().not.toMatchTypeOf<LowerOp>();
    expectTypeOf<"whatever">().not.toMatchTypeOf<LowerOp>();
});


//---------------------------------------------------------------------- UpperOp

test('UpperOp should allow "gt" and "gte" operators', () => {
    expectTypeOf<"gt">().toMatchTypeOf<UpperOp>();
    expectTypeOf<"gte">().toMatchTypeOf<UpperOp>();
})

test('UpperOp should forbid any other operator than "gt" and "gte"', () => {
    expectTypeOf<"eq">().not.toMatchTypeOf<UpperOp>();
    expectTypeOf<"lt">().not.toMatchTypeOf<UpperOp>();
    expectTypeOf<"lte">().not.toMatchTypeOf<UpperOp>();
    expectTypeOf<"contains">().not.toMatchTypeOf<UpperOp>();
    expectTypeOf<"startswith">().not.toMatchTypeOf<UpperOp>();
    expectTypeOf<"endswith">().not.toMatchTypeOf<UpperOp>();
    expectTypeOf<"like">().not.toMatchTypeOf<UpperOp>();
    expectTypeOf<"some">().not.toMatchTypeOf<UpperOp>();
    expectTypeOf<"none">().not.toMatchTypeOf<UpperOp>();
    expectTypeOf<"all">().not.toMatchTypeOf<UpperOp>();
    expectTypeOf<"is">().not.toMatchTypeOf<UpperOp>();
    expectTypeOf<"not">().not.toMatchTypeOf<UpperOp>();
    expectTypeOf<"or">().not.toMatchTypeOf<UpperOp>();
    expectTypeOf<"asc">().not.toMatchTypeOf<UpperOp>();
    expectTypeOf<"desc">().not.toMatchTypeOf<UpperOp>();
    expectTypeOf<"whatever">().not.toMatchTypeOf<UpperOp>();
});


//---------------------------------------------------------------------- NumericalOperator

test('NumericalOperator should allow "gt" and "gte" operators', () => {
    expectTypeOf<"eq">().toMatchTypeOf<NumericalOperator>();
    expectTypeOf<"gt">().toMatchTypeOf<NumericalOperator>();
    expectTypeOf<"gte">().toMatchTypeOf<NumericalOperator>();
    expectTypeOf<"lt">().toMatchTypeOf<NumericalOperator>();
    expectTypeOf<"lte">().toMatchTypeOf<NumericalOperator>();
})

test('NumericalOperator should forbid any other operator than "gt" and "gte"', () => {    
    expectTypeOf<"like">().not.toMatchTypeOf<NumericalOperator>();
    expectTypeOf<"contains">().not.toMatchTypeOf<NumericalOperator>();
    expectTypeOf<"startswith">().not.toMatchTypeOf<NumericalOperator>();
    expectTypeOf<"endswith">().not.toMatchTypeOf<NumericalOperator>();
    expectTypeOf<"some">().not.toMatchTypeOf<NumericalOperator>();
    expectTypeOf<"none">().not.toMatchTypeOf<NumericalOperator>();
    expectTypeOf<"all">().not.toMatchTypeOf<NumericalOperator>();
    expectTypeOf<"is">().not.toMatchTypeOf<NumericalOperator>();
    expectTypeOf<"not">().not.toMatchTypeOf<NumericalOperator>();
    expectTypeOf<"or">().not.toMatchTypeOf<NumericalOperator>();
    expectTypeOf<"asc">().not.toMatchTypeOf<NumericalOperator>();
    expectTypeOf<"desc">().not.toMatchTypeOf<NumericalOperator>();
    expectTypeOf<"whatever">().not.toMatchTypeOf<NumericalOperator>();
});


//---------------------------------------------------------------------- LiteralOperator

test('LiteralOperator should allow "eq", "like", "contains", "startswith" and "endswith" operators', () => {
    expectTypeOf<"eq">().toMatchTypeOf<LiteralOperator>();
    expectTypeOf<"like">().toMatchTypeOf<LiteralOperator>();
    expectTypeOf<"contains">().toMatchTypeOf<LiteralOperator>();
    expectTypeOf<"startswith">().toMatchTypeOf<LiteralOperator>();
    expectTypeOf<"endswith">().toMatchTypeOf<LiteralOperator>();
});

test('LiteralOperator should forbid any other operator', () => {
    expectTypeOf<"lt">().not.toMatchTypeOf<LiteralOperator>();
    expectTypeOf<"lte">().not.toMatchTypeOf<LiteralOperator>();
    expectTypeOf<"gt">().not.toMatchTypeOf<LiteralOperator>();
    expectTypeOf<"gte">().not.toMatchTypeOf<LiteralOperator>();
    expectTypeOf<"some">().not.toMatchTypeOf<LiteralOperator>();
    expectTypeOf<"none">().not.toMatchTypeOf<LiteralOperator>();
    expectTypeOf<"all">().not.toMatchTypeOf<LiteralOperator>();
    expectTypeOf<"is">().not.toMatchTypeOf<LiteralOperator>();
    expectTypeOf<"not">().not.toMatchTypeOf<LiteralOperator>();
    expectTypeOf<"or">().not.toMatchTypeOf<LiteralOperator>();
    expectTypeOf<"asc">().not.toMatchTypeOf<LiteralOperator>();
    expectTypeOf<"desc">().not.toMatchTypeOf<LiteralOperator>();
    expectTypeOf<"whatever">().not.toMatchTypeOf<LiteralOperator>();
});


//---------------------------------------------------------------------- BooleanOperator

test('BooleanOperator should allow "is" and "not" operators', () => {
    expectTypeOf<"is">().toMatchTypeOf<BooleanOperator>();
    expectTypeOf<"not">().toMatchTypeOf<BooleanOperator>();
});

test('BooleanOperator should forbid any other operator', () => {
    expectTypeOf<"eq">().not.toMatchTypeOf<BooleanOperator>();
    expectTypeOf<"lt">().not.toMatchTypeOf<BooleanOperator>();
    expectTypeOf<"lte">().not.toMatchTypeOf<BooleanOperator>();
    expectTypeOf<"gt">().not.toMatchTypeOf<BooleanOperator>();
    expectTypeOf<"gte">().not.toMatchTypeOf<BooleanOperator>();
    expectTypeOf<"like">().not.toMatchTypeOf<BooleanOperator>();
    expectTypeOf<"contains">().not.toMatchTypeOf<BooleanOperator>();
    expectTypeOf<"startswith">().not.toMatchTypeOf<BooleanOperator>();
    expectTypeOf<"endswith">().not.toMatchTypeOf<BooleanOperator>();
    expectTypeOf<"some">().not.toMatchTypeOf<BooleanOperator>();
    expectTypeOf<"none">().not.toMatchTypeOf<BooleanOperator>();
    expectTypeOf<"none">().not.toMatchTypeOf<BooleanOperator>();
    expectTypeOf<"or">().not.toMatchTypeOf<BooleanOperator>();
    expectTypeOf<"asc">().not.toMatchTypeOf<BooleanOperator>();
    expectTypeOf<"desc">().not.toMatchTypeOf<BooleanOperator>();
    expectTypeOf<"whatever">().not.toMatchTypeOf<BooleanOperator>();
});


//---------------------------------------------------------------------- LogicalOperator

test('LogicalOperator should allow "or" and "not" operators', () => {
    expectTypeOf<"or">().toMatchTypeOf<LogicalOperator>();
    expectTypeOf<"not">().toMatchTypeOf<LogicalOperator>();
});

test('LogicalOperator should forbid any other operator', () => {
    expectTypeOf<"eq">().not.toMatchTypeOf<LogicalOperator>();
    expectTypeOf<"lt">().not.toMatchTypeOf<LogicalOperator>();
    expectTypeOf<"lte">().not.toMatchTypeOf<LogicalOperator>();
    expectTypeOf<"gt">().not.toMatchTypeOf<LogicalOperator>();
    expectTypeOf<"gte">().not.toMatchTypeOf<LogicalOperator>();
    expectTypeOf<"like">().not.toMatchTypeOf<LogicalOperator>();
    expectTypeOf<"contains">().not.toMatchTypeOf<LogicalOperator>();
    expectTypeOf<"startswith">().not.toMatchTypeOf<LogicalOperator>();
    expectTypeOf<"endswith">().not.toMatchTypeOf<LogicalOperator>();
    expectTypeOf<"some">().not.toMatchTypeOf<LogicalOperator>();
    expectTypeOf<"none">().not.toMatchTypeOf<LogicalOperator>();
    expectTypeOf<"all">().not.toMatchTypeOf<LogicalOperator>();
    expectTypeOf<"is">().not.toMatchTypeOf<LogicalOperator>();
    expectTypeOf<"asc">().not.toMatchTypeOf<LogicalOperator>();
    expectTypeOf<"desc">().not.toMatchTypeOf<LogicalOperator>();
    expectTypeOf<"whatever">().not.toMatchTypeOf<LogicalOperator>();
});


//---------------------------------------------------------------------- ListOperator

test('ListOperator should allow "some", "none" and "all" operators', () => {
    expectTypeOf<"some">().toMatchTypeOf<ListOperator>();
    expectTypeOf<"none">().toMatchTypeOf<ListOperator>();
    expectTypeOf<"all">().toMatchTypeOf<ListOperator>();
});

test('ListOperator should forbid any other operator', () => {
    expectTypeOf<"eq">().not.toMatchTypeOf<ListOperator>();
    expectTypeOf<"lt">().not.toMatchTypeOf<ListOperator>();
    expectTypeOf<"lte">().not.toMatchTypeOf<ListOperator>();
    expectTypeOf<"gt">().not.toMatchTypeOf<ListOperator>();
    expectTypeOf<"gte">().not.toMatchTypeOf<ListOperator>();
    expectTypeOf<"like">().not.toMatchTypeOf<ListOperator>();
    expectTypeOf<"contains">().not.toMatchTypeOf<ListOperator>();
    expectTypeOf<"startswith">().not.toMatchTypeOf<ListOperator>();
    expectTypeOf<"endswith">().not.toMatchTypeOf<ListOperator>();
    expectTypeOf<"is">().not.toMatchTypeOf<ListOperator>();
    expectTypeOf<"not">().not.toMatchTypeOf<ListOperator>();
    expectTypeOf<"or">().not.toMatchTypeOf<ListOperator>();
    expectTypeOf<"asc">().not.toMatchTypeOf<ListOperator>();
    expectTypeOf<"desc">().not.toMatchTypeOf<ListOperator>();
    expectTypeOf<"whatever">().not.toMatchTypeOf<ListOperator>();
});


//---------------------------------------------------------------------- OrderingOperator

test('OrderingOperator should allow "asc" and "desc" operators', () => { 
    expectTypeOf<"asc">().toMatchTypeOf<OrderingOperator>();
    expectTypeOf<"desc">().toMatchTypeOf<OrderingOperator>();
});

test('OrderingOperator should forbid any other operator', () => {
    expectTypeOf<"eq">().not.toMatchTypeOf<OrderingOperator>();
    expectTypeOf<"lt">().not.toMatchTypeOf<OrderingOperator>();
    expectTypeOf<"lte">().not.toMatchTypeOf<OrderingOperator>();
    expectTypeOf<"gt">().not.toMatchTypeOf<OrderingOperator>();
    expectTypeOf<"gte">().not.toMatchTypeOf<OrderingOperator>();
    expectTypeOf<"like">().not.toMatchTypeOf<OrderingOperator>();
    expectTypeOf<"contains">().not.toMatchTypeOf<OrderingOperator>();
    expectTypeOf<"startswith">().not.toMatchTypeOf<OrderingOperator>();
    expectTypeOf<"endswith">().not.toMatchTypeOf<OrderingOperator>();
    expectTypeOf<"some">().not.toMatchTypeOf<OrderingOperator>();
    expectTypeOf<"none">().not.toMatchTypeOf<OrderingOperator>();
    expectTypeOf<"all">().not.toMatchTypeOf<OrderingOperator>();
    expectTypeOf<"is">().not.toMatchTypeOf<OrderingOperator>();
    expectTypeOf<"not">().not.toMatchTypeOf<OrderingOperator>();
    expectTypeOf<"or">().not.toMatchTypeOf<OrderingOperator>();
    expectTypeOf<"whatever">().not.toMatchTypeOf<OrderingOperator>();
});


//---------------------------------------------------------------------- InferOperator

function testInferOperator<T>(v: InferOperator<T>): void {}

test('InferOperator<number> should allow NumericalOperator', () => {
    expectTypeOf<"eq">().toMatchTypeOf<InferOperator<number>>();
    expectTypeOf<"lt">().toMatchTypeOf<InferOperator<number>>();
    expectTypeOf<"lte">().toMatchTypeOf<InferOperator<number>>();
    expectTypeOf<"gt">().toMatchTypeOf<InferOperator<number>>();
    expectTypeOf<"gte">().toMatchTypeOf<InferOperator<number>>();
});

test('InferOperator<number> should forbid any other operator', () => {
    expectTypeOf<"like">().not.toMatchTypeOf<InferOperator<number>>();
    expectTypeOf<"contains">().not.toMatchTypeOf<InferOperator<number>>();
    expectTypeOf<"startswith">().not.toMatchTypeOf<InferOperator<number>>();
    expectTypeOf<"endswith">().not.toMatchTypeOf<InferOperator<number>>();
    expectTypeOf<"is">().not.toMatchTypeOf<InferOperator<number>>();
    expectTypeOf<"not">().not.toMatchTypeOf<InferOperator<number>>();
    expectTypeOf<"some">().not.toMatchTypeOf<InferOperator<number>>();
    expectTypeOf<"all">().not.toMatchTypeOf<InferOperator<number>>();
    expectTypeOf<"none">().not.toMatchTypeOf<InferOperator<number>>();
    expectTypeOf<"asc">().not.toMatchTypeOf<InferOperator<number>>();
    expectTypeOf<"desc">().not.toMatchTypeOf<InferOperator<number>>();
});

test('InferOperator<Date> should allow NumericalOperator', () => {
    expectTypeOf<"eq">().toMatchTypeOf<InferOperator<Date>>();
    expectTypeOf<"lt">().toMatchTypeOf<InferOperator<Date>>();
    expectTypeOf<"lte">().toMatchTypeOf<InferOperator<Date>>();
    expectTypeOf<"gt">().toMatchTypeOf<InferOperator<Date>>();
    expectTypeOf<"gte">().toMatchTypeOf<InferOperator<Date>>();
})

test('InferOperator<Date> should forbid any other operator', () => {
    expectTypeOf<"like">().not.toMatchTypeOf<InferOperator<Date>>();
    expectTypeOf<"contains">().not.toMatchTypeOf<InferOperator<Date>>();
    expectTypeOf<"startswith">().not.toMatchTypeOf<InferOperator<Date>>();
    expectTypeOf<"endswith">().not.toMatchTypeOf<InferOperator<Date>>();
    expectTypeOf<"is">().not.toMatchTypeOf<InferOperator<Date>>();
    expectTypeOf<"not">().not.toMatchTypeOf<InferOperator<Date>>();
    expectTypeOf<"some">().not.toMatchTypeOf<InferOperator<Date>>();
    expectTypeOf<"all">().not.toMatchTypeOf<InferOperator<Date>>();
    expectTypeOf<"none">().not.toMatchTypeOf<InferOperator<Date>>();
    expectTypeOf<"asc">().not.toMatchTypeOf<InferOperator<Date>>();
    expectTypeOf<"desc">().not.toMatchTypeOf<InferOperator<Date>>();
});


test('InferOperator<string> should allow LiteralOperator', () => {
    expectTypeOf<"eq">().toMatchTypeOf<InferOperator<string>>();
    expectTypeOf<"like">().toMatchTypeOf<InferOperator<string>>();
    expectTypeOf<"contains">().toMatchTypeOf<InferOperator<string>>();
    expectTypeOf<"startswith">().toMatchTypeOf<InferOperator<string>>();
    expectTypeOf<"endswith">().toMatchTypeOf<InferOperator<string>>();
})

test('InferOperator<string> should forbid any other operator', () => {
    expectTypeOf<"lt">().not.toMatchTypeOf<InferOperator<string>>();
    expectTypeOf<"lte">().not.toMatchTypeOf<InferOperator<string>>();
    expectTypeOf<"gt">().not.toMatchTypeOf<InferOperator<string>>();
    expectTypeOf<"gte">().not.toMatchTypeOf<InferOperator<string>>();
    expectTypeOf<"is">().not.toMatchTypeOf<InferOperator<string>>();
    expectTypeOf<"not">().not.toMatchTypeOf<InferOperator<string>>();
    expectTypeOf<"some">().not.toMatchTypeOf<InferOperator<string>>();
    expectTypeOf<"all">().not.toMatchTypeOf<InferOperator<string>>();
    expectTypeOf<"none">().not.toMatchTypeOf<InferOperator<string>>();
    expectTypeOf<"asc">().not.toMatchTypeOf<InferOperator<string>>();
    expectTypeOf<"desc">().not.toMatchTypeOf<InferOperator<string>>();
});

test('InferOperator<boolean> should allow LiteralOperator', () => {
    expectTypeOf<"is">().toMatchTypeOf<InferOperator<boolean>>();
    expectTypeOf<"not">().toMatchTypeOf<InferOperator<boolean>>();
})

test('InferOperator<boolean> should forbid any other operator', () => {
    expectTypeOf<"eq">().not.toMatchTypeOf<InferOperator<boolean>>();
    expectTypeOf<"lt">().not.toMatchTypeOf<InferOperator<boolean>>();
    expectTypeOf<"lte">().not.toMatchTypeOf<InferOperator<boolean>>();
    expectTypeOf<"gt">().not.toMatchTypeOf<InferOperator<boolean>>();
    expectTypeOf<"gte">().not.toMatchTypeOf<InferOperator<boolean>>();
    expectTypeOf<"like">().not.toMatchTypeOf<InferOperator<boolean>>();
    expectTypeOf<"contains">().not.toMatchTypeOf<InferOperator<boolean>>();
    expectTypeOf<"startswith">().not.toMatchTypeOf<InferOperator<boolean>>();
    expectTypeOf<"endswith">().not.toMatchTypeOf<InferOperator<boolean>>();
    expectTypeOf<"some">().not.toMatchTypeOf<InferOperator<boolean>>();
    expectTypeOf<"all">().not.toMatchTypeOf<InferOperator<boolean>>();
    expectTypeOf<"none">().not.toMatchTypeOf<InferOperator<boolean>>();
    expectTypeOf<"asc">().not.toMatchTypeOf<InferOperator<boolean>>();
    expectTypeOf<"desc">().not.toMatchTypeOf<InferOperator<boolean>>();
});

test('InferOperator<any[]> should allow LiteralOperator', () => {
    expectTypeOf<"some">().toMatchTypeOf<InferOperator<any[]>>();
    expectTypeOf<"all">().toMatchTypeOf<InferOperator<any[]>>();
    expectTypeOf<"none">().toMatchTypeOf<InferOperator<any[]>>();
})

test('InferOperator<any[]> should forbid any other operator', () => {
    expectTypeOf<"eq">().not.toMatchTypeOf<InferOperator<any[]>>();
    expectTypeOf<"lt">().not.toMatchTypeOf<InferOperator<any[]>>();
    expectTypeOf<"lte">().not.toMatchTypeOf<InferOperator<any[]>>();
    expectTypeOf<"gt">().not.toMatchTypeOf<InferOperator<any[]>>();
    expectTypeOf<"gte">().not.toMatchTypeOf<InferOperator<any[]>>();
    expectTypeOf<"like">().not.toMatchTypeOf<InferOperator<any[]>>();
    expectTypeOf<"contains">().not.toMatchTypeOf<InferOperator<any[]>>();
    expectTypeOf<"startswith">().not.toMatchTypeOf<InferOperator<any[]>>();
    expectTypeOf<"endswith">().not.toMatchTypeOf<InferOperator<any[]>>();
    expectTypeOf<"is">().not.toMatchTypeOf<InferOperator<any[]>>();
    expectTypeOf<"not">().not.toMatchTypeOf<InferOperator<any[]>>();
    expectTypeOf<"asc">().not.toMatchTypeOf<InferOperator<any[]>>();
    expectTypeOf<"desc">().not.toMatchTypeOf<InferOperator<any[]>>();
});
