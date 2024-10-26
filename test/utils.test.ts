import { AtLeastOne, EntityListKeys, EntityScalarKeys, ExactlyOne } from "../src/utils.types"

interface TestEntity {
    a: unknown,
    b: unknown,
    c: unknown[],
    d: unknown[]
};

//---------------------------------------------------------------------- AtLeastOne

function testAtLeastOne(t: AtLeastOne<TestEntity>): void {};

test('At least one should be valid if it contains exactly one key', () => {
    expect(_ => testAtLeastOne({a: null})).not.toThrow();
})


test('At least one should be valid if it contains several keys', () => {
    expect(_ => testAtLeastOne({a: null, b: null})).not.toThrow();
})

// @ts-expect-error
// At least one should throw error if empty
testAtLeastOne({});

// @ts-expect-error
// At least one should throw error if object key is not defined
testAtLeastOne({ c: null });


//---------------------------------------------------------------------- ExactlyOne

function testExactlyOne(t: ExactlyOne<TestEntity>): void {};

test('Exactly one should be valid if it contains exactly one key', () => {
    expect(_ => testAtLeastOne({a: null})).not.toThrow();
})

// @ts-expect-error
// Exactly one should throw error if empty
testExactlyOne({});

// @ts-expect-error
// Exactly one should throw error if object key is not defined
testExactlyOne({ c: null });

// @ts-expect-error
// Exactly one should throw error if it contains several keys
testExactlyOne({ a: null, b: null });


//---------------------------------------------------------------------- EntityScalarKeys

function testScalarKeys(k: EntityScalarKeys<TestEntity>): void {}

test('EntityScalarKeys should allow scalar keys from Entity', () => {
    expect(_ => testScalarKeys("a")).not.toThrow();
    expect(_ => testScalarKeys("b")).not.toThrow();
})

// EntityScalarKeys should throw if key is associated to a list
// @ts-expect-error
testScalarKeys("c");
// @ts-expect-error
testScalarKeys("d");

// EntityScalarKeys should throw is key is unknown
// @ts-expect-error
testScalarKeys("unknown");


//---------------------------------------------------------------------- EntityListKeys

function testListKeys(k: EntityListKeys<TestEntity>): void {}

test('EntityListKeys should allow list keys from Entity', () => {
    expect(_ => testListKeys("c")).not.toThrow();
    expect(_ => testListKeys("d")).not.toThrow();
})

// EntityListKeys should throw if key is associated to a scalar
// @ts-expect-error
testListKeys("a");
// @ts-expect-error
testListKeys("b");

// EntityListKeys should throw is key is unknown
// @ts-expect-error
testListKeys("unknown");
