# TypedQuery TS

**TypedQuery** is a TypeScript type library designed to help developers to abstract their queries.

It is aimed at decoupling a core application from any query related external dependencies, including ORMs, providing a backbone for building queries in typed trees that can then be seamlessly translated to any target ORM or raw query language.

## Selection type

Selection type is the building blocks for typing a `select` clause.

`Selection` type takes a generic argument from which it can extract the selectable fields.

It also allows to build sub-selections on nested entities and flat arrays contained in the main object.

It doesn't allow direct selections on nested arrays, those cases should be handled by flat arrays of objects containing flat arrays themselves.

Examples: 

```typescript
interface User {
    id: number
    firstname: string,
    address: Address,
    grades: number[],
    todos: Todo[],
};

interface Address {
    streetNumber: number,
    streetName: string,
    zipcode: number,
    city: string
};

interface Todo {
    title: string
    ratings: number[]
}

const selection: Selection<User> = {
    id: true,              // Direct field selection
    address: {
        zipcode: true      // Nested object direct field selection
    },
    grades: true,          // Flat array direct field selection
    todos: {
        title: true,       // Flat array of nested object field direct selection
        ratings: true      // Nested array indirect selection
    }
}
```

## Ordering types

Ordering types are the building blocks for typing an `orderBy` clause.

Ordering types take a generic argument from which they can extract the fields usable for sorting.

The extracted fields must be associated to an `OrderByOperator`, i.e. `asc | desc`.

They allow ordering by relational fields and nested entities.

They also allow hierarchical ordering when provided with a list of ordering statements.

They don't allow ordering by array fields.

### Ordering

- An ordering query can be built using any of the entity's primitive field associated to an `OrderByOperator`
- An ordering query can be built using any of the entity's nested objects fields associated to a nested `Ordering` query object
- An ordering query cannot be built using array fields, either they contain primitive or objects

Examples:
```typescript
let orderBy: Ordering<User>;

orderBy = {
    id: 'asc'
};

orderBy = {
    firstname: 'desc'
};

orderBy = {
    address: {
        city: 'asc'
    }
};

// Invalid for ordering by two fields
orderBy = {
    id: 'asc',
    firstname: 'desc'
}

// Invalid for ordering by arrays
orderBy = {
    grades: 'asc'
};

orderBy = {
    todos: {
        titles: 'desc'
    }
};
```

### Hierarchical Ordering

- An hierarchical ordering can be built by providing a list of `Ordering` query object
- Consecutive ordering statements will be used in the order of the list if two compared primitives have the same value

Examples:
```typescript
let orderBy: HierarchicalOrdering<User>;

orderBy = [
    { id: 'asc'},                 // Order by id
    { firstname: 'desc' },        // then by firstname
    { address: { city: 'asc' } }  // then by address' city
];
```

## Condition types

Condition types are the main building blocks for typing a `where` clause.

`WhereCondition` type takes a generic argument from which it can extract the queryable fields.

It allows to build sub-conditions on nested entities and collections contained in the main object.

Logical operations `or` and `not` can be implemented at the condition's root level.

By default, the association of fields inside the condition object is set to a logical `and`.

More details in the [condition](https://github.com/VictorFouquet/TypedQueryTS/wiki/Conditions) section of the [documentation](https://github.com/VictorFouquet/TypedQueryTS/wiki).

## Operation types

Operations are designed to enforce the constraints that define the relation between operators and the values that can be associated with them.

They act like type guards to make sure that the association of an operator to a value semantically makes sense.

For instance: 

Creating an operation that queries a `number` that `contains` a value would not make sense.

Same for an operation that queries a `number` that is both `eq` to and `lt`, or both `gt` and `gte` an other number.

Same for an operation that queries a `Date` that is both `gte` an other date and `lt` a number.

More details in the [operation](https://github.com/VictorFouquet/TypedQueryTS/wiki/Operations) section of the [documentation](https://github.com/VictorFouquet/TypedQueryTS/wiki).

## Operator types

The library provides different `Operators` to help implement the logic when building a query.

They define the actions that are currently supported by the query type system.

More details about these types rules in the [Operator](https://github.com/VictorFouquet/TypedQueryTS/wiki/Operator) section of the [documentation](https://github.com/VictorFouquet/TypedQueryTS/wiki).

## Helper types

The library provides different shared helper types to ease the building of queries by not redefining the same constraints several times.

More details about these types rules in the [helper type](https://github.com/VictorFouquet/TypedQueryTS/wiki/Helper-types) section of the [documentation](https://github.com/VictorFouquet/TypedQueryTS/wiki).
