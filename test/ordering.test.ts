import { HierarchicalOrdering, Ordering } from "../src/ordering.types"

interface OrderingTest {
    id: number,
    name: string,
    createdAt: boolean,
    arrayNum: number[],
    obj: { id: number, name: string, arrayNum: number[] }
    arrayObj: { id: number }[]
};


//---------------------------------------------------------------------- Ordering

function orderByTest<T>(o: Ordering<T>) {}

it("Ordering should allow sorting by primitive fields", () => {
    expect(_ => orderByTest<OrderingTest>({
        id: 'asc'
    }))
    expect(_ => orderByTest<OrderingTest>({
        name: 'asc'
    }))
    expect(_ => orderByTest<OrderingTest>({
        createdAt: 'asc'
    }))
});

it("Ordering should allow sorting by nested object fields", () => {
    expect(_ => orderByTest<OrderingTest>({
        obj: { name: 'asc' }
    }));

    expect(_ => orderByTest<OrderingTest>({
        obj: { id: 'desc' }
    }));
});

// Invalid for ordering by two primitive at same level

// @ts-expect-error
orderByTest<OrderingTest>({ id: "asc", name: "asc" });


// Invalid for providing a hierarchical orderBy argument

// @ts-expect-error
orderByTest<OrderingTest>([ { id: "asc" }, { name: "asc" } ]);


// Invalid for ordering by two primitive at same level

// @ts-expect-error
orderByTest<OrderingTest>({ obj: { name: 'asc', id: 'desc' } });
// @ts-expect-error
orderByTest<OrderingTest>({ obj: { name: 'asc' }, id: 'desc' });


// Invalid for providing a hierarchical orderBy argument

// @ts-expect-error
orderByTest<OrderingTest>([ { obj: { id: "asc" } }, { obj: { name: "asc" } }]);


// Invalid for ordering by an array field

// @ts-expect-error
orderByTest<OrderingTest>({ arrayNum: 'asc' });
// @ts-expect-error
orderByTest<OrderingTest>({ arrayObj: 'asc' });
// @ts-expect-error
orderByTest<OrderingTest>({ arrayObj: { id: 'asc' } });

//---------------------------------------------------------------------- HierarchicalOrdering

function hierarchicalOrderByTest<T>(o: HierarchicalOrdering<T>) {};

it("HierarchicalOrdering should allow hierarchical sorting by primitive fields", () => {
    expect(_ => hierarchicalOrderByTest<OrderingTest>([
        { id: 'asc' },
        { name: 'desc' },
        { createdAt: 'asc' }
    ]));
});

it("HierarchicalOrdering should allow hierarchical sorting by nested object fields", () => {
    expect(_ => hierarchicalOrderByTest<OrderingTest>([
        { obj: { id: "asc" } },
        { obj: { name: "desc" } }
    ]));
});

it("HierarchicalOrdering should allow hierarchical sorting by combined primitive and nested object fields", () => {
    expect(_ => hierarchicalOrderByTest<OrderingTest>([
        { id: 'asc' },
        { name: 'desc' },
        { createdAt: 'asc' },
        { obj: { id: "desc" } },
        { obj: { name: "asc" } }
    ]));
});


// Invalid for providing a orderBy argument

// @ts-expect-error
hierarchicalOrderByTest<OrderingTest>({ id: "asc" });


// Invalid for hierarchically ordering by an array field

// @ts-expect-error
hierarchicalOrderByTest<OrderingTest>([ { arrayNum: 'asc' }, { id: 'asc' } ]);
// @ts-expect-error
hierarchicalOrderByTest<OrderingTest>([ { arrayObj: 'asc' }, { id: 'asc' } ]);
// @ts-expect-error
hierarchicalOrderByTest<OrderingTest>([ { arrayObj: { id: 'asc' } }, { id: 'asc' } ]);
