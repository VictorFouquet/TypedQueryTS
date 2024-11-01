import { expectTypeOf, test } from 'vitest';
import { HierarchicalOrdering, OrderByClause, Ordering } from "../src/ordering.types"

interface OrderingTest {
    id: number,
    name: string,
    createdAt: boolean,
    arrayNum: number[],
    obj: { id: number, name: string, arrayNum: number[] }
    arrayObj: { id: number }[]
};


//---------------------------------------------------------------------- Ordering


test("Ordering should allow sorting by primitive fields", () => {
    expectTypeOf<{ id: 'asc' }>().toMatchTypeOf<Ordering<OrderingTest>>();
    expectTypeOf<{ name: 'desc' }>().toMatchTypeOf<Ordering<OrderingTest>>();
    expectTypeOf<{ createdAt: 'asc' }>().toMatchTypeOf<Ordering<OrderingTest>>();
});

test("Ordering should allow sorting by nested object fields", () => {
    expectTypeOf<{
        obj: { name: 'asc' }
    }>().toMatchTypeOf<Ordering<OrderingTest>>();

    expectTypeOf<{
        obj: { id: 'desc' }
    }>().toMatchTypeOf<Ordering<OrderingTest>>();
});

test("Ordering should forbid sorting by several fields in same level", () => {
    expectTypeOf<
        { id: "asc", name: "asc" }
    >().not.toMatchTypeOf<Ordering<OrderingTest>>();

    expectTypeOf<
        { obj: { name: 'asc', id: 'desc' } }
    >().not.toMatchTypeOf<Ordering<OrderingTest>>();

    expectTypeOf<
        { obj: { name: 'asc' }, id: 'desc' }
    >().not.toMatchTypeOf<Ordering<OrderingTest>>();
});

test("Ordering should forbid providing a hierarchical orderBy argument", () => {
    expectTypeOf<
        [ { id: "asc" }, { name: "asc" } ]
    >().not.toMatchTypeOf<Ordering<OrderingTest>>();

    expectTypeOf<
        [ { obj: { id: "asc" } }, { obj: { name: "asc" } }]
    >().not.toMatchTypeOf<Ordering<OrderingTest>>();
});

test("Ordering should forbid sorting based on a nested array", () => {
    expectTypeOf<{ arrayNum: 'asc' }>().not.toMatchTypeOf<Ordering<OrderingTest>>();

    expectTypeOf<{ arrayObj: 'asc' }>().not.toMatchTypeOf<Ordering<OrderingTest>>();

    expectTypeOf<{ arrayObj: { id: 'asc' } }>().not.toMatchTypeOf<Ordering<OrderingTest>>();
});


//---------------------------------------------------------------------- HierarchicalOrdering

test("HierarchicalOrdering should allow hierarchical sorting by primitive fields", () => {
    expectTypeOf<[
        { id: 'asc' },
        { name: 'desc' },
        { createdAt: 'asc' }
    ]>().toMatchTypeOf<HierarchicalOrdering<OrderingTest>>();
});

test("HierarchicalOrdering should allow hierarchical sorting by nested object fields", () => {
    expectTypeOf<[
        { obj: { id: "asc" } },
        { obj: { name: "desc" } }
    ]>().toMatchTypeOf<HierarchicalOrdering<OrderingTest>>();
});

test("HierarchicalOrdering should allow hierarchical sorting by combined primitive and nested object fields", () => {
    expectTypeOf<[
        { id: 'asc' },
        { name: 'desc' },
        { createdAt: 'asc' },
        { obj: { id: "desc" } },
        { obj: { name: "asc" } }
    ]>().toMatchTypeOf<HierarchicalOrdering<OrderingTest>>();
});

test("HierarchicalOrdering should forbid providing a Ordering argument", () => {
    expectTypeOf<{ id: "asc" }>().not.toMatchTypeOf<HierarchicalOrdering<OrderingTest>>();
});

test("HierarchicalOrdering should forbid sorting by array fields", () => {
    expectTypeOf<
        [ { arrayNum: 'asc' }, { id: 'asc' } ]
    >().not.toMatchTypeOf<HierarchicalOrdering<OrderingTest>>();

    expectTypeOf<
        [ { arrayObj: 'asc' }, { id: 'asc' } ]
    >().not.toMatchTypeOf<HierarchicalOrdering<OrderingTest>>();

    expectTypeOf<
        [ { arrayObj: { id: 'asc' } }, { id: 'asc' } ]
    >().not.toMatchTypeOf<HierarchicalOrdering<OrderingTest>>();
});


//---------------------------------------------------------------------- OrderByClause

test('OrderByClause should allow sorting under an "orderBy" key', () => {
    expectTypeOf<{
        orderBy: { id: 'asc' }
    }>().toMatchTypeOf<OrderByClause<OrderingTest>>();
});

test('OrderByClause should allow hierarchical sorting under an "orderBy" key', () => {
    expectTypeOf<{
        orderBy: [
            { id: 'asc' },
            { name: 'desc' },
            { createdAt: 'asc' },
            { obj: { id: "desc" } },
            { obj: { name: "asc" } }
        ]
    }>().toMatchTypeOf<OrderByClause<OrderingTest>>();
});
