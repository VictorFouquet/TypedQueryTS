import { expectTypeOf, test } from 'vitest';

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

test('SingleNumericalOperationType should allow operation with only one operator', () => {
    expectTypeOf({ "eq":  0 }).toMatchTypeOf<SingleNumericalOperationType<'eq', number>>();
    expectTypeOf({ "lt":  0 }).toMatchTypeOf<SingleNumericalOperationType<'lt', number>>();
    expectTypeOf({ "lte": 0 }).toMatchTypeOf<SingleNumericalOperationType<'lte', number>>();
    expectTypeOf({ "gt":  0 }).toMatchTypeOf<SingleNumericalOperationType<'gt', number>>();
    expectTypeOf({ "gte": 0 }).toMatchTypeOf<SingleNumericalOperationType<'gte', number>>();
});

test('SingleNumericalOperationType enforce constraint operator', () => {
    expectTypeOf({ "lt":  0 }).not.toMatchTypeOf<SingleNumericalOperationType<'eq', number>>();
    expectTypeOf({ "lte": 0 }).not.toMatchTypeOf<SingleNumericalOperationType<'eq', number>>();
    expectTypeOf({ "gt":  0 }).not.toMatchTypeOf<SingleNumericalOperationType<'eq', number>>();
    expectTypeOf({ "gte": 0 }).not.toMatchTypeOf<SingleNumericalOperationType<'eq', number>>();

    expectTypeOf({ "eq":  0 }).not.toMatchTypeOf<SingleNumericalOperationType<'lt', number>>();
    expectTypeOf({ "lte": 0 }).not.toMatchTypeOf<SingleNumericalOperationType<'lt', number>>();
    expectTypeOf({ "gt":  0 }).not.toMatchTypeOf<SingleNumericalOperationType<'lt', number>>();
    expectTypeOf({ "gte": 0 }).not.toMatchTypeOf<SingleNumericalOperationType<'lt', number>>();

    expectTypeOf({ "eq":  0 }).not.toMatchTypeOf<SingleNumericalOperationType<'lte', number>>();
    expectTypeOf({ "lt":  0 }).not.toMatchTypeOf<SingleNumericalOperationType<'lte', number>>();
    expectTypeOf({ "gt":  0 }).not.toMatchTypeOf<SingleNumericalOperationType<'lte', number>>();
    expectTypeOf({ "gte": 0 }).not.toMatchTypeOf<SingleNumericalOperationType<'lte', number>>();

    expectTypeOf({ "eq":  0 }).not.toMatchTypeOf<SingleNumericalOperationType<'gt', number>>();
    expectTypeOf({ "lt":  0 }).not.toMatchTypeOf<SingleNumericalOperationType<'gt', number>>();
    expectTypeOf({ "lte": 0 }).not.toMatchTypeOf<SingleNumericalOperationType<'gt', number>>();
    expectTypeOf({ "gte": 0 }).not.toMatchTypeOf<SingleNumericalOperationType<'gt', number>>();

    expectTypeOf({ "eq":  0 }).not.toMatchTypeOf<SingleNumericalOperationType<'gte', number>>();
    expectTypeOf({ "lt":  0 }).not.toMatchTypeOf<SingleNumericalOperationType<'gte', number>>();
    expectTypeOf({ "lte": 0 }).not.toMatchTypeOf<SingleNumericalOperationType<'gte', number>>();
    expectTypeOf({ "gt":  0 }).not.toMatchTypeOf<SingleNumericalOperationType<'gte', number>>();
});


//---------------------------------------------------------------------- DoubleNumericalOperationType

test('DoubleNumericalOperationType should allow operation with exactly two operators', () => {
    // Tests for number bounds
    expectTypeOf({ "eq":  0, "lt":  0 }).toMatchTypeOf<DoubleNumericalOperationType<'eq', 'lt',  number>>();
    expectTypeOf({ "eq":  0, "lte": 0 }).toMatchTypeOf<DoubleNumericalOperationType<'eq', 'lte', number>>();
    expectTypeOf({ "eq":  0, "gt":  0 }).toMatchTypeOf<DoubleNumericalOperationType<'eq', 'gt', number>>();
    expectTypeOf({ "eq":  0, "gte": 0 }).toMatchTypeOf<DoubleNumericalOperationType<'eq', 'gte', number>>();

    expectTypeOf({ "lt":  0, "lte": 0 }).toMatchTypeOf<DoubleNumericalOperationType<'lt', 'lte', number>>();
    expectTypeOf({ "lt":  0, "gt":  0 }).toMatchTypeOf<DoubleNumericalOperationType<'lt', 'gt', number>>();
    expectTypeOf({ "lt":  0, "gte": 0 }).toMatchTypeOf<DoubleNumericalOperationType<'lt', 'gte', number>>();

    expectTypeOf({ "gt":  0, "lte": 0 }).toMatchTypeOf<DoubleNumericalOperationType<'gt', 'lte', number>>();
    expectTypeOf({ "gt":  0, "gte": 0 }).toMatchTypeOf<DoubleNumericalOperationType<'gt', 'gte', number>>();

    expectTypeOf({ "gte": 0, "lte": 0 }).toMatchTypeOf<DoubleNumericalOperationType<'gte', 'lte', number>>();

    // Tests for Date bounds
    expectTypeOf({ "eq":  new Date(), "lt":  new Date() }).toMatchTypeOf<DoubleNumericalOperationType<'eq', 'lt',  Date>>();
    expectTypeOf({ "eq":  new Date(), "lte": new Date() }).toMatchTypeOf<DoubleNumericalOperationType<'eq', 'lte', Date>>();
    expectTypeOf({ "eq":  new Date(), "gt":  new Date() }).toMatchTypeOf<DoubleNumericalOperationType<'eq', 'gt', Date>>();
    expectTypeOf({ "eq":  new Date(), "gte": new Date() }).toMatchTypeOf<DoubleNumericalOperationType<'eq', 'gte', Date>>();

    expectTypeOf({ "lt":  new Date(), "lte": new Date() }).toMatchTypeOf<DoubleNumericalOperationType<'lt', 'lte', Date>>();
    expectTypeOf({ "lt":  new Date(), "gt":  new Date() }).toMatchTypeOf<DoubleNumericalOperationType<'lt', 'gt', Date>>();
    expectTypeOf({ "lt":  new Date(), "gte": new Date() }).toMatchTypeOf<DoubleNumericalOperationType<'lt', 'gte', Date>>();

    expectTypeOf({ "gt":  new Date(), "lte": new Date() }).toMatchTypeOf<DoubleNumericalOperationType<'gt', 'lte', Date>>();
    expectTypeOf({ "gt":  new Date(), "gte": new Date() }).toMatchTypeOf<DoubleNumericalOperationType<'gt', 'gte', Date>>();

    expectTypeOf({ "gte": new Date(), "lte": new Date() }).toMatchTypeOf<DoubleNumericalOperationType<'gte', 'lte', Date>>();
});

test('DoubleNumericalOperationType should forbid operations combining different types', () => {
    // Tests for number bounds
    expectTypeOf({ "eq":  0, "lt":  new Date() }).not.toMatchTypeOf<DoubleNumericalOperationType<'eq', 'lt',  number>>();
    expectTypeOf({ "eq":  0, "lte": new Date() }).not.toMatchTypeOf<DoubleNumericalOperationType<'eq', 'lte', number>>();
    expectTypeOf({ "eq":  0, "gt":  new Date() }).not.toMatchTypeOf<DoubleNumericalOperationType<'eq', 'gt', number>>();
    expectTypeOf({ "eq":  0, "gte": new Date() }).not.toMatchTypeOf<DoubleNumericalOperationType<'eq', 'gte', number>>();

    expectTypeOf({ "lt":  0, "lte": new Date() }).not.toMatchTypeOf<DoubleNumericalOperationType<'lt', 'lte', number>>();
    expectTypeOf({ "lt":  0, "gt":  new Date() }).not.toMatchTypeOf<DoubleNumericalOperationType<'lt', 'gt', number>>();
    expectTypeOf({ "lt":  0, "gte": new Date() }).not.toMatchTypeOf<DoubleNumericalOperationType<'lt', 'gte', number>>();

    expectTypeOf({ "gt":  0, "lte": new Date() }).not.toMatchTypeOf<DoubleNumericalOperationType<'gt', 'lte', number>>();
    expectTypeOf({ "gt":  0, "gte": new Date() }).not.toMatchTypeOf<DoubleNumericalOperationType<'gt', 'gte', number>>();

    expectTypeOf({ "gte": 0, "lte": new Date() }).not.toMatchTypeOf<DoubleNumericalOperationType<'gte', 'lte', number>>();

    // Tests for Date bounds
    expectTypeOf({ "eq":  0, "lt":  new Date() }).not.toMatchTypeOf<DoubleNumericalOperationType<'eq', 'lt',  Date>>();
    expectTypeOf({ "eq":  0, "lte": new Date() }).not.toMatchTypeOf<DoubleNumericalOperationType<'eq', 'lte', Date>>();
    expectTypeOf({ "eq":  0, "gt":  new Date() }).not.toMatchTypeOf<DoubleNumericalOperationType<'eq', 'gt', Date>>();
    expectTypeOf({ "eq":  0, "gte": new Date() }).not.toMatchTypeOf<DoubleNumericalOperationType<'eq', 'gte', Date>>();

    expectTypeOf({ "lt":  0, "lte": new Date() }).not.toMatchTypeOf<DoubleNumericalOperationType<'lt', 'lte', Date>>();
    expectTypeOf({ "lt":  0, "gt":  new Date() }).not.toMatchTypeOf<DoubleNumericalOperationType<'lt', 'gt', Date>>();
    expectTypeOf({ "lt":  0, "gte": new Date() }).not.toMatchTypeOf<DoubleNumericalOperationType<'lt', 'gte', Date>>();

    expectTypeOf({ "gt":  0, "lte": new Date() }).not.toMatchTypeOf<DoubleNumericalOperationType<'gt', 'lte', Date>>();
    expectTypeOf({ "gt":  0, "gte": new Date() }).not.toMatchTypeOf<DoubleNumericalOperationType<'gt', 'gte', Date>>();

    expectTypeOf({ "gte": 0, "lte": new Date() }).not.toMatchTypeOf<DoubleNumericalOperationType<'gte', 'lte', Date>>();
});

test('DoubleNumericalOperationType should forbid non numerical operators and not specified keys', () => {
    expectTypeOf({ "eq": 0, "lte": 0 }).not.toMatchTypeOf<DoubleNumericalOperationType<'eq', 'lt',  number>>();
    expectTypeOf({ "gt": 0, "lte": 0 }).not.toMatchTypeOf<DoubleNumericalOperationType<'eq', 'lt',  number>>();
    expectTypeOf({ "whatever": 0, "lt": 0 }).not.toMatchTypeOf<DoubleNumericalOperationType<'eq', 'lt',  number>>();
});


//---------------------------------------------------------------------- SingleNumericalOperation

test('SingleNumericalOperation should allow operation with only one operator associated to a number', () => {
    expectTypeOf({ "eq":  0 }).toMatchTypeOf<SingleNumericalOperations<number>>();
    expectTypeOf({ "lt":  0 }).toMatchTypeOf<SingleNumericalOperations<number>>();
    expectTypeOf({ "lte": 0 }).toMatchTypeOf<SingleNumericalOperations<number>>();
    expectTypeOf({ "gt":  0 }).toMatchTypeOf<SingleNumericalOperations<number>>();
    expectTypeOf({ "gte": 0 }).toMatchTypeOf<SingleNumericalOperations<number>>();

    expectTypeOf({ "eq":  new Date() }).toMatchTypeOf<SingleNumericalOperations<Date>>();
    expectTypeOf({ "lt":  new Date() }).toMatchTypeOf<SingleNumericalOperations<Date>>();
    expectTypeOf({ "lte": new Date() }).toMatchTypeOf<SingleNumericalOperations<Date>>();
    expectTypeOf({ "gt":  new Date() }).toMatchTypeOf<SingleNumericalOperations<Date>>();
    expectTypeOf({ "gte": new Date() }).toMatchTypeOf<SingleNumericalOperations<Date>>();
});

test('SingleNumericalOperation should forbid operations when mismatching type', () => {
    expectTypeOf({ "eq":  0 }).not.toMatchTypeOf<SingleNumericalOperations<Date>>();
    expectTypeOf({ "lt":  0 }).not.toMatchTypeOf<SingleNumericalOperations<Date>>();
    expectTypeOf({ "lte": 0 }).not.toMatchTypeOf<SingleNumericalOperations<Date>>();
    expectTypeOf({ "gt":  0 }).not.toMatchTypeOf<SingleNumericalOperations<Date>>();
    expectTypeOf({ "gte": 0 }).not.toMatchTypeOf<SingleNumericalOperations<Date>>();

    expectTypeOf({ "eq":  new Date() }).not.toMatchTypeOf<SingleNumericalOperations<number>>();
    expectTypeOf({ "lt":  new Date() }).not.toMatchTypeOf<SingleNumericalOperations<number>>();
    expectTypeOf({ "lte": new Date() }).not.toMatchTypeOf<SingleNumericalOperations<number>>();
    expectTypeOf({ "gt":  new Date() }).not.toMatchTypeOf<SingleNumericalOperations<number>>();
    expectTypeOf({ "gte": new Date() }).not.toMatchTypeOf<SingleNumericalOperations<number>>();
});

test('SingleNumericalOperation should forbid operations with any other type than date or number', () => {
    expectTypeOf({ "eq": true }).not.toMatchTypeOf<SingleNumericalOperations<Date>>();
    expectTypeOf({ "gte": "" }).not.toMatchTypeOf<SingleNumericalOperations<Date>>();
    expectTypeOf({ "lte": null }).not.toMatchTypeOf<SingleNumericalOperations<Date>>();
    expectTypeOf({ "gt":  undefined }).not.toMatchTypeOf<SingleNumericalOperations<Date>>();
    expectTypeOf({ "eq":  [] }).not.toMatchTypeOf<SingleNumericalOperations<Date>>();
    expectTypeOf({ "lt":  {} }).not.toMatchTypeOf<SingleNumericalOperations<Date>>();

    expectTypeOf({ "eq": true }).not.toMatchTypeOf<SingleNumericalOperations<number>>();
    expectTypeOf({ "gte": "" }).not.toMatchTypeOf<SingleNumericalOperations<number>>();
    expectTypeOf({ "lte": null }).not.toMatchTypeOf<SingleNumericalOperations<number>>();
    expectTypeOf({ "gt":  undefined }).not.toMatchTypeOf<SingleNumericalOperations<number>>();
    expectTypeOf({ "eq":  [] }).not.toMatchTypeOf<SingleNumericalOperations<number>>();
    expectTypeOf({ "lt":  {} }).not.toMatchTypeOf<SingleNumericalOperations<number>>();
});

test('SingleNumericalOperation should forbid operations with combined operators', () => {
    expectTypeOf({ "eq": 0, "lt":  0 }).not.toMatchTypeOf<SingleNumericalOperations<number>>();
    expectTypeOf({ "eq": 0, "lte": 0 }).not.toMatchTypeOf<SingleNumericalOperations<number>>();
    expectTypeOf({ "eq": 0, "gt":  0 }).not.toMatchTypeOf<SingleNumericalOperations<number>>();
    expectTypeOf({ "eq": 0, "gte": 0 }).not.toMatchTypeOf<SingleNumericalOperations<number>>();

    expectTypeOf({ "lt": 0, "lte": 0 }).not.toMatchTypeOf<SingleNumericalOperations<number>>();
    expectTypeOf({ "lt": 0, "gt":  0 }).not.toMatchTypeOf<SingleNumericalOperations<number>>();
    expectTypeOf({ "lt": 0, "gte": 0 }).not.toMatchTypeOf<SingleNumericalOperations<number>>();

    expectTypeOf({ "lte": 0, "gt":  0 }).not.toMatchTypeOf<SingleNumericalOperations<number>>();
    expectTypeOf({ "lte": 0, "gte": 0 }).not.toMatchTypeOf<SingleNumericalOperations<number>>();

    expectTypeOf({ "gte": 0, "lte": 0 }).not.toMatchTypeOf<SingleNumericalOperations<number>>();

    expectTypeOf({ "eq": new Date(), "lt":  new Date() }).not.toMatchTypeOf<SingleNumericalOperations<Date>>();
    expectTypeOf({ "eq": new Date(), "lte": new Date() }).not.toMatchTypeOf<SingleNumericalOperations<Date>>();
    expectTypeOf({ "eq": new Date(), "gt":  new Date() }).not.toMatchTypeOf<SingleNumericalOperations<Date>>();
    expectTypeOf({ "eq": new Date(), "gte": new Date() }).not.toMatchTypeOf<SingleNumericalOperations<Date>>();

    expectTypeOf({ "lt": new Date(), "lte": new Date() }).not.toMatchTypeOf<SingleNumericalOperations<Date>>();
    expectTypeOf({ "lt": new Date(), "gt":  new Date() }).not.toMatchTypeOf<SingleNumericalOperations<Date>>();
    expectTypeOf({ "lt": new Date(), "gte": new Date() }).not.toMatchTypeOf<SingleNumericalOperations<Date>>();

    expectTypeOf({ "lte": new Date(), "gt":  new Date() }).not.toMatchTypeOf<SingleNumericalOperations<Date>>();
    expectTypeOf({ "lte": new Date(), "gte": new Date() }).not.toMatchTypeOf<SingleNumericalOperations<Date>>();

    expectTypeOf({ "gte": new Date(), "lte": new Date() }).not.toMatchTypeOf<SingleNumericalOperations<Date>>();
});


//---------------------------------------------------------------------- DoubleNumericalOperation

test('DoubleNumericalOperations should allow any legal combination of two operators', () => {
    expectTypeOf({ "lt":  0, "gt":  0 }).toMatchTypeOf<DoubleNumericalOperations<number>>();
    expectTypeOf({ "lt":  0, "gte": 0 }).toMatchTypeOf<DoubleNumericalOperations<number>>();
    expectTypeOf({ "lte": 0, "gt":  0 }).toMatchTypeOf<DoubleNumericalOperations<number>>();
    expectTypeOf({ "lte": 0, "gte": 0 }).toMatchTypeOf<DoubleNumericalOperations<number>>();

    expectTypeOf({ "lt":  new Date(), "gt":  new Date() }).toMatchTypeOf<DoubleNumericalOperations<Date>>();
    expectTypeOf({ "lt":  new Date(), "gte": new Date() }).toMatchTypeOf<DoubleNumericalOperations<Date>>();
    expectTypeOf({ "lte": new Date(), "gt":  new Date() }).toMatchTypeOf<DoubleNumericalOperations<Date>>();
    expectTypeOf({ "lte": new Date(), "gte": new Date() }).toMatchTypeOf<DoubleNumericalOperations<Date>>();
});

test('DoubleNumericalOperations should forbid single operator', () => {
    expectTypeOf({ "eq":  0 }).not.toMatchTypeOf<DoubleNumericalOperations<number>>();
    expectTypeOf({ "lt":  0 }).not.toMatchTypeOf<DoubleNumericalOperations<number>>();
    expectTypeOf({ "lte": 0 }).not.toMatchTypeOf<DoubleNumericalOperations<number>>();
    expectTypeOf({ "gt":  0 }).not.toMatchTypeOf<DoubleNumericalOperations<number>>();
    expectTypeOf({ "gte": 0 }).not.toMatchTypeOf<DoubleNumericalOperations<number>>();

    expectTypeOf({ "eq":  new Date() }).not.toMatchTypeOf<DoubleNumericalOperations<Date>>();
    expectTypeOf({ "lt":  new Date() }).not.toMatchTypeOf<DoubleNumericalOperations<Date>>();
    expectTypeOf({ "lte": new Date() }).not.toMatchTypeOf<DoubleNumericalOperations<Date>>();
    expectTypeOf({ "gt":  new Date() }).not.toMatchTypeOf<DoubleNumericalOperations<Date>>();
    expectTypeOf({ "gte": new Date() }).not.toMatchTypeOf<DoubleNumericalOperations<Date>>();
});

test('DoubleNumericalOperations should forbid any illegal combination of two operators', () => {
    expectTypeOf({ "eq":  0, "lt":  0 }).not.toMatchTypeOf<DoubleNumericalOperations<number>>();
    expectTypeOf({ "eq":  0, "lte": 0 }).not.toMatchTypeOf<DoubleNumericalOperations<number>>();
    expectTypeOf({ "eq":  0, "gt":  0 }).not.toMatchTypeOf<DoubleNumericalOperations<number>>();
    expectTypeOf({ "eq":  0, "gte": 0 }).not.toMatchTypeOf<DoubleNumericalOperations<number>>();
    expectTypeOf({ "lt":  0, "lte": 0 }).not.toMatchTypeOf<DoubleNumericalOperations<number>>();
    expectTypeOf({ "gt":  0, "gte": 0 }).not.toMatchTypeOf<DoubleNumericalOperations<number>>();

    expectTypeOf({ "eq":  new Date(), "lt":  new Date() }).not.toMatchTypeOf<DoubleNumericalOperations<Date>>();
    expectTypeOf({ "eq":  new Date(), "lte": new Date() }).not.toMatchTypeOf<DoubleNumericalOperations<Date>>();
    expectTypeOf({ "eq":  new Date(), "gt":  new Date() }).not.toMatchTypeOf<DoubleNumericalOperations<Date>>();
    expectTypeOf({ "eq":  new Date(), "gte": new Date() }).not.toMatchTypeOf<DoubleNumericalOperations<Date>>();
    expectTypeOf({ "lt":  new Date(), "lte": new Date() }).not.toMatchTypeOf<DoubleNumericalOperations<Date>>();
    expectTypeOf({ "gt":  new Date(), "gte": new Date() }).not.toMatchTypeOf<DoubleNumericalOperations<Date>>();
});


//---------------------------------------------------------------------- NumericalOperation

test('NumericalOperation should allow only valid numerical operator combination or single operator', () => {
    expectTypeOf({ "eq":  0 }).toMatchTypeOf<NumericalOperation<number>>();
    expectTypeOf({ "lt":  0 }).toMatchTypeOf<NumericalOperation<number>>();
    expectTypeOf({ "lte": 0 }).toMatchTypeOf<NumericalOperation<number>>();
    expectTypeOf({ "gt":  0 }).toMatchTypeOf<NumericalOperation<number>>();
    expectTypeOf({ "gte": 0 }).toMatchTypeOf<NumericalOperation<number>>();
    expectTypeOf({ "lt":  0, "gt":  0 }).toMatchTypeOf<NumericalOperation<number>>();
    expectTypeOf({ "lt":  0, "gte": 0 }).toMatchTypeOf<NumericalOperation<number>>();
    expectTypeOf({ "lte": 0, "gt":  0 }).toMatchTypeOf<NumericalOperation<number>>();
    expectTypeOf({ "lte": 0, "gte": 0 }).toMatchTypeOf<NumericalOperation<number>>();

    expectTypeOf({ "eq":  new Date() }).toMatchTypeOf<NumericalOperation<Date>>();
    expectTypeOf({ "lt":  new Date() }).toMatchTypeOf<NumericalOperation<Date>>();
    expectTypeOf({ "lte": new Date() }).toMatchTypeOf<NumericalOperation<Date>>();
    expectTypeOf({ "gt":  new Date() }).toMatchTypeOf<NumericalOperation<Date>>();
    expectTypeOf({ "gte": new Date() }).toMatchTypeOf<NumericalOperation<Date>>();
    expectTypeOf({ "lt":  new Date(), "gt":  new Date() }).toMatchTypeOf<NumericalOperation<Date>>();
    expectTypeOf({ "lt":  new Date(), "gte": new Date() }).toMatchTypeOf<NumericalOperation<Date>>();
    expectTypeOf({ "lte": new Date(), "gt":  new Date() }).toMatchTypeOf<NumericalOperation<Date>>();
    expectTypeOf({ "lte": new Date(), "gte": new Date() }).toMatchTypeOf<NumericalOperation<Date>>();
});


//---------------------------------------------------------------------- LiteralOperation

test('LiteralOperation should allow legal combination of literal operators', () => {
    expectTypeOf({ "eq":         "" }).toMatchTypeOf<LiteralOperation>();
    expectTypeOf({ "contains":   "" }).toMatchTypeOf<LiteralOperation>();
    expectTypeOf({ "startswith": "" }).toMatchTypeOf<LiteralOperation>();
    expectTypeOf({ "endswith":   "" }).toMatchTypeOf<LiteralOperation>();

    expectTypeOf({ "contains":    "", "startswith": "" }).toMatchTypeOf<LiteralOperation>();
    expectTypeOf({ "contains":    "", "endsswith":  "" }).toMatchTypeOf<LiteralOperation>();
    expectTypeOf({ "startswith":  "", "endswith":   "" }).toMatchTypeOf<LiteralOperation>();

    expectTypeOf({ "contains":  "", "startswith": "", "endswith": "" }).toMatchTypeOf<LiteralOperation>();
});

test('LiteralOperation should forbid combinations of literal operators containing "eq"', () => {
    expectTypeOf({ "eq": "", "contains":   "" }).not.toMatchTypeOf<LiteralOperation>();
    expectTypeOf({ "eq": "", "endswith":   "" }).not.toMatchTypeOf<LiteralOperation>();
    expectTypeOf({ "eq": "", "startswith": "" }).not.toMatchTypeOf<LiteralOperation>();
});

test('LiteralOperation should forbid combinations of literal operators with non string value', () => {
    expectTypeOf({ "eq": 0    }).not.toMatchTypeOf<LiteralOperation>();
    expectTypeOf({ "eq": true }).not.toMatchTypeOf<LiteralOperation>();
    expectTypeOf({ "eq": null }).not.toMatchTypeOf<LiteralOperation>();
    expectTypeOf({ "eq": undefined }).not.toMatchTypeOf<LiteralOperation>();
    expectTypeOf({ "eq": {} }).not.toMatchTypeOf<LiteralOperation>();
    expectTypeOf({ "eq": [] }).not.toMatchTypeOf<LiteralOperation>();
});


//---------------------------------------------------------------------- BooleanOperation

test('BooleanOperation should allow operation with only one operator', () => {
    expectTypeOf({ "is":  true  }).toMatchTypeOf<BooleanOperation>();
    expectTypeOf({ "not": false }).toMatchTypeOf<BooleanOperation>();
});

test('BooleanOperation should forbid operation with invalid value', () => {
    expectTypeOf({ "is":  0 }).not.toMatchTypeOf<BooleanOperation>();
    expectTypeOf({ "is":  "" }).not.toMatchTypeOf<BooleanOperation>();
    expectTypeOf({ "is":  {} }).not.toMatchTypeOf<BooleanOperation>();
    expectTypeOf({ "is":  [] }).not.toMatchTypeOf<BooleanOperation>();
    expectTypeOf({ "is":  null }).not.toMatchTypeOf<BooleanOperation>();
    expectTypeOf({ "is":  undefined }).not.toMatchTypeOf<BooleanOperation>();
});

test('BooleanOperation should forbid operation with combined operators', () => {
    expectTypeOf({ "is":  true, "not": false }).not.toMatchTypeOf<BooleanOperation>();
});
