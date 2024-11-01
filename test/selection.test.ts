import { expectTypeOf, test } from 'vitest';
import { SelectClause, Selection } from "../src/selection.types"

interface SelectionTest {
    id: number,
    name: string,
    createdAt: boolean,
    arrayNum: number[],
    obj: { name: string, arrayNum: number[] }
    arrayObj: { id: number }[]
};

test('Selection should be allowed on primitive fields', () => {
    expectTypeOf({ id: true }).toMatchTypeOf<Selection<SelectionTest>>();
    
    expectTypeOf(
        { id: true, name: true, createdAt: true }
    ).toMatchTypeOf<Selection<SelectionTest>>();
});

test('Selection should be allowed on nested object fields', () => {
    expectTypeOf(
        { obj: { name: true } }
    ).toMatchTypeOf<Selection<SelectionTest>>();
});

test('Selection should be allowed on primitive array fields', () => {
    expectTypeOf({ arrayNum: true }).toMatchTypeOf<Selection<SelectionTest>>();
});

test('Selection should be allowed on nested object array fields', () => {
    expectTypeOf({ arrayObj: { id: true } }).toMatchTypeOf<Selection<SelectionTest>>();
    expectTypeOf({ obj: { arrayNum: true } }).toMatchTypeOf<Selection<SelectionTest>>();
});

test('Selection should be forbidden when directly selecting a nested object or array of objects', () => {
    expectTypeOf({ obj: true }).not.toMatchTypeOf<Selection<SelectionTest>>();
    expectTypeOf({ arrayObj: true }).not.toMatchTypeOf<Selection<SelectionTest>>();
});

test('Selection should be forbidden if empty', () => {
    expectTypeOf({ }).not.toMatchTypeOf<Selection<SelectionTest>>();
});

test('SelectClause should nest selection object under "select" property', () => {
    expectTypeOf({ 
        select: {
            id: true
        }
    }).toMatchTypeOf<SelectClause<SelectionTest>>();

    expectTypeOf({ 
        select: {
            id: true,
            name: true,
            createdAt: true,
            arrayNum: true,
            obj: {
                name: true,
                arrayNum: true
            },
            arrayObj: {
                id: true
            }
        }
    }).toMatchTypeOf<SelectClause<SelectionTest>>();

    expectTypeOf({ 
        select: {
            id: true,
            name: true,
            createdAt: true,
            arrayNum: true,
            obj: {
                name: true,
                arrayNum: true
            },
            arrayObj: {
                id: true
            }
        }
    }).toMatchTypeOf<SelectClause<SelectionTest>>();
});

test('Selection should be forbidden on nested arrays', () => {
    interface InvalidNestedArray {
        id: number,
        arrayNum: number[][]
        obj: { name: string, arrayNum: number[][] }
        arrayObj: { id: number }[][]
    };

    expectTypeOf(
        { arrayNum: true }
    ).not.toMatchTypeOf<Selection<InvalidNestedArray>>();
    
    expectTypeOf(
        { obj: { arrayNum: true } }
    ).not.toMatchTypeOf<Selection<InvalidNestedArray>>();
    
    expectTypeOf(
        { arrayObj: true }
    ).not.toMatchTypeOf<Selection<InvalidNestedArray>>();
    
    expectTypeOf(
        { arrayObj: { id: true } }
    ).not.toMatchTypeOf<Selection<InvalidNestedArray>>();
});

