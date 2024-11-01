import { expectTypeOf, test } from 'vitest';
import { Selection } from "../src/selection.types"

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

test('Selection should be forbidden on nested object', () => {
    expectTypeOf({ obj: true }).not.toMatchTypeOf<Selection<SelectionTest>>();
    expectTypeOf({ arrayObj: true }).not.toMatchTypeOf<Selection<SelectionTest>>();
});

test('Selection should be forbidden if empty', () => {
    expectTypeOf({ }).not.toMatchTypeOf<Selection<SelectionTest>>();
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

