import { expectTypeOf, test } from 'vitest';

import { AtLeastOne, EntityListKeys, EntityScalarKeys, ExactlyOne, Numeric, Primitive } from "../src/utils.types"

interface TestEntity {
    a: unknown,
    b: unknown,
    c: unknown[],
    d: unknown[]
};


//---------------------------------------------------------------------- Primitives


test('Primitive should only allow number, string, date and boolean', () => {
    expectTypeOf<number>().toMatchTypeOf<Primitive>();
    expectTypeOf<string>().toMatchTypeOf<Primitive>();
    expectTypeOf<Date>().toMatchTypeOf<Primitive>();
    expectTypeOf<boolean>().toMatchTypeOf<Primitive>();

    expectTypeOf<undefined>().not.toMatchTypeOf<Primitive>();
    expectTypeOf<null>().not.toMatchTypeOf<Primitive>();
    expectTypeOf<[]>().not.toMatchTypeOf<Primitive>();
    expectTypeOf<{}>().not.toMatchTypeOf<Primitive>();
});

test('Numeric should narrow primitive and only allow number and date', () => {
    expectTypeOf<number>().toMatchTypeOf<Numeric>();
    expectTypeOf<Date>().toMatchTypeOf<Numeric>();

    expectTypeOf<string>().not.toMatchTypeOf<Numeric>();
    expectTypeOf<boolean>().not.toMatchTypeOf<Numeric>();
    expectTypeOf<undefined>().not.toMatchTypeOf<Numeric>();
    expectTypeOf<null>().not.toMatchTypeOf<Numeric>();
    expectTypeOf<[]>().not.toMatchTypeOf<Numeric>();
    expectTypeOf<{}>().not.toMatchTypeOf<Numeric>();
});


//---------------------------------------------------------------------- AtLeastOne


test('At least one should be valid if it contains exactly one key', () => {
    expectTypeOf({ a: null }).toMatchTypeOf<AtLeastOne<TestEntity>>();
});

test('At least one should be valid if it contains several keys', () => {
    expectTypeOf({ a: null, b: null }).toMatchTypeOf<AtLeastOne<TestEntity>>();
});

test('At least one should be invalid if empty', () => {
    expectTypeOf({ }).not.toMatchTypeOf<AtLeastOne<TestEntity>>();
});

test('At least one should be invalid if containing key that is not in target', () => {
    expectTypeOf({ c: null }).not.toMatchTypeOf<AtLeastOne<TestEntity>>();
});


//---------------------------------------------------------------------- ExactlyOne


test('Exactly one should be valid if it contains exactly one key', () => {
    expectTypeOf({ a: null }).toMatchTypeOf<ExactlyOne<TestEntity>>();
});

test('Exactly one should throw error if empty', () => {
    expectTypeOf({ }).not.toMatchTypeOf<ExactlyOne<TestEntity>>();
});

test('Exactly one should throw error if it contains several keys', () => {
    expectTypeOf({ a: null, b: null }).not.toMatchTypeOf<ExactlyOne<TestEntity>>();
});

test('Exactly one should throw error if object key is not defined', () => {
    expectTypeOf({ c: null }).not.toMatchTypeOf<ExactlyOne<TestEntity>>();
});


//---------------------------------------------------------------------- EntityScalarKeys


test('EntityScalarKeys should allow scalar keys from Entity', () => {
    expectTypeOf<'a'>().toMatchTypeOf<EntityScalarKeys<TestEntity>>();
    expectTypeOf<'b'>().toMatchTypeOf<EntityScalarKeys<TestEntity>>();
});

test('EntityScalarKeys should forbid list keys from Entity', () => {
    expectTypeOf<'c'>().not.toMatchTypeOf<EntityScalarKeys<TestEntity>>();
    expectTypeOf<'d'>().not.toMatchTypeOf<EntityScalarKeys<TestEntity>>();
});

test('EntityScalarKeys should forbid unknown keys', () => {
    expectTypeOf<'unknown'>().not.toMatchTypeOf<EntityScalarKeys<TestEntity>>();
    expectTypeOf<'abc'>().not.toMatchTypeOf<EntityScalarKeys<TestEntity>>();
});


//---------------------------------------------------------------------- EntityListKeys


test('EntityListKeys should allow list keys from Entity', () => {
    expectTypeOf<'c'>().toMatchTypeOf<EntityListKeys<TestEntity>>();
    expectTypeOf<'d'>().toMatchTypeOf<EntityListKeys<TestEntity>>();
});

test('EntityListKeys should forbid list keys from Entity', () => {
    expectTypeOf<'a'>().not.toMatchTypeOf<EntityListKeys<TestEntity>>();
    expectTypeOf<'b'>().not.toMatchTypeOf<EntityListKeys<TestEntity>>();
});

test('EntityListKeys should forbid unknown keys', () => {
    expectTypeOf<'unknown'>().not.toMatchTypeOf<EntityListKeys<TestEntity>>();
    expectTypeOf<'abc'>().not.toMatchTypeOf<EntityListKeys<TestEntity>>();
});
