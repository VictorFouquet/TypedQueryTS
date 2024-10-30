import { Selection } from "../src/selection.types"

interface SelectionTest {
    id: number,
    name: string,
    createdAt: boolean,
    arrayNum: number[],
    obj: { name: string, arrayNum: number[] }
    arrayObj: { id: number }[]
};

function testSelection<T>(s: Selection<T>) {}

it('Selection should be allowed on primitive fields', () => {
    expect(_ => testSelection<SelectionTest>({ id: true }));
    expect(_ => testSelection<SelectionTest>({ id: true, name: true, createdAt: true }));
})

it('Selection should be allowed on nested object fields', () => {
    expect(_ => testSelection<SelectionTest>({ obj: { name: true } }));
})

it('Selection should be allowed on primitive array fields', () => {
    expect(_ => testSelection<SelectionTest>({ arrayNum: true }));
})

it('Selection should be allowed on nested object array fields', () => {
    expect(_ => testSelection<SelectionTest>({ arrayObj: { id: true } }));
    expect(_ => testSelection<SelectionTest>({ obj: { arrayNum: true } }));
})

// Invalid for directly selecting nested objects

// @ts-expect-error
testSelection<SelectionTest>({ obj: true });
// @ts-expect-error
testSelection<SelectionTest>({ arrayObj: true });


// Invalid for emptyness

// @ts-expect-error
testSelection<SelectionTest>({ });

// Invalid for deep nesting arrays

interface InvalidNestedArray {
    id: number,
    arrayNum: number[][]
    obj: { name: string, arrayNum: number[][] }
    arrayObj: { id: number }[][]
};

// @ts-expect-error
testSelection<InvalidNestedArray>({ arrayNum: true });
// @ts-expect-error
testSelection<InvalidNestedArray>({ obj: { arrayNum: true } });
// @ts-expect-error
testSelection<InvalidNestedArray>({ arrayObj: true });
// @ts-expect-error
testSelection<InvalidNestedArray>({ arrayObj: { id: true } });
