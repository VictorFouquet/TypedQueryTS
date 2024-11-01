import { expectTypeOf, test } from 'vitest';

import { Query } from "../src/query.types";


interface Entity {
    name: string,
    nested: {
        id: number
    }
}

test('Query should handle select clause', () => {
    expectTypeOf<{
        select: {
            name: true,
            nested: {
                id: true
            }
        }
    }>().toMatchTypeOf<Query<Entity>>()
});

test('Query should handle where clause', () => {
    expectTypeOf<{
        where: {
            name: "John",
            nested: {
                id: { gt: 0, lt: 10}
            }
        }
    }>().toMatchTypeOf<Query<Entity>>()
});

test('Query should handle orderBy clause', () => {
    expectTypeOf<{
        orderBy: [
            { name: "asc" },
            { nested: { id: "desc" } }
        ]
    }>().toMatchTypeOf<Query<Entity>>()
});

test('Query should handle combination of different clauses', () => {
    expectTypeOf<{
        select: {
            name: true,
            nested: {
                id: true
            }
        },
        where: {
            name: "John",
            nested: {
                id: { gt: 0, lt: 10}
            }
        },
        orderBy: [
            { name: "asc" },
            { nested: { id: "desc" } }
        ]
    }>().toMatchTypeOf<Query<Entity>>()
});

test('Query should handle empty objects', () => {
    expectTypeOf<{}>().toMatchTypeOf<Query<Entity>>()
});
