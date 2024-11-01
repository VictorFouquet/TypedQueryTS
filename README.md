## Overview

**TypedQueryTs** is a stand-alone TypeScript type system designed to help developers abstract their queries.

Light weight, it doesn't depend on any external dependency itself as it is aimed at decoupling a core application from any query related module.

The whole type system is exported as a single file in the source code at `dist/query.types.ts` for easier integration to any project.

The solution provides an agnostic and strongly typed tree structure for building queries on provided reference data object, that can then be seamlessly translated to any target ORM or raw query language.

It currently allows developer to type queries with `select`, `where` and `orderBy` clauses.

See full documentation and extended examples in the [wiki](https://github.com/VictorFouquet/TypedQueryTS/wiki/Home).

## Selecting

Selection type is the building blocks for typing a [select clause](https://github.com/VictorFouquet/TypedQueryTS/wiki/Selecting#select-clause) that :

- takes a generic argument from which it can extract the selectable fields.
- allows to build sub-selections on nested entities and flat arrays contained in the main object.
- forbids direct selections on nested arrays, those cases should be handled by flat arrays of objects containing flat arrays themselves.

Example:

```typescript
const selectClause: SelectClause<User> = {
    select: {
        fristname: true,  // Select primitive ✅
        address: {
            city: true    // Select primitive in nested object ✅
        },
        grades: true,     // Select array of primitives ✅
        todos: {
            title: true   // Select primitive in array of nested objects ✅
        }
    }
}
```

More details in the [selecting](https://github.com/VictorFouquet/TypedQueryTS/wiki/Selecting) section.

## Sorting

Ordering types are the building blocks for typing an [orderBy clause](https://github.com/VictorFouquet/TypedQueryTS/wiki/Sorting#orderby-clause) that :

- takes a generic argument from which they can extract the fields usable for sorting
- constrains extracted fields to be associated to an `OrderByOperator`, i.e. `asc | desc`
- allows ordering by relational fields and nested entities
- allow hierarchical ordering when provided with a list of ordering statements
- forbids ordering by array fields

Examples:

```typescript
const orderById: OrderByClause<User> = {
    orderBy: {
        id: "asc"  // Orders by ascending id ✅
    }
};

const orderByZipCode: OrderByClause<User> = {
    orderBy: {
        address: {
            zipcode: "desc"  // Orders by address' zipcode descending id ✅
        }
    }
};

const orderByIdThenZipCode: OrderByClause<User> = {
    orderBy: [
        { id: "asc" },                   // Orders by ascending id ✅
        { address: { zipcode: "desc" } } // Then by address' zipcode descending id ✅
    ]
};
```

More details in the [sorting](https://github.com/VictorFouquet/TypedQueryTS/wiki/Sorting) section.

## Filtering

Condition types are the main building blocks for typing a [where clause](https://github.com/VictorFouquet/TypedQueryTS/wiki/Filtering#where-clause) that :

- takes a generic argument from which it can extract the queryable fields.
- allows to build direct conditions on the entity's primitive fields.
- allows to build sub-conditions on nested entities and collections contained in the main object.
- allows logical operations `or` and `not` to be implemented at the condition's root level.
- sets the combined association of fields inside the condition object to logical `and` by default.

Examples:

```typescript
let whereClause: WhereClause<User> 

whereClause = {
    where: {                                            // Select users whose :
        id: { gt: 0, lte: 100 },                        // id is in range ]0, 100] ✅
        firstname: 'John'                               // and first name is John ✅
    }
};

whereClause = {
    where: {                                            // Select users whose :
        or: [
            { address: { zipcode: 12345 } },            // Address' zipcode is 123456 ✅
            { address: { city: { startswith: "New" }} } // Or address' city starts with "New" ✅
        ]
    }
}

whereClause = {
    where: {                                            // Select users whose :
        not: {                                          // name doesn't contain "John" ✅
            name: {
                contains: "John"
            }
        }, 
    }
}
```

More details in the [filtering](https://github.com/VictorFouquet/TypedQueryTS/wiki/Filtering) section.

## Building blocks

### Operations

Operations are designed to enforce the constraints that define the relation between [operators](https://github.com/VictorFouquet/TypedQueryTS/wiki/Operator) and the values that can be associated with them.

They act like type guards to make sure that the association of an operator to a value semantically makes sense.

For instance:

Creating an operation that queries a number that contains a value would not make sense.

Same for an operation that queries a number that is both eq to and lt, or both gt and gte an other number.

Same for an operation that queries a Date that is both gte an other date and lt a number.

More details in the [operations](https://github.com/VictorFouquet/TypedQueryTS/wiki/Operations) section.

### Operators

The library provides different `Operators` to help implement the logic when building a query.

Operators are defined as union of strings to represent the different operations supported by the library.

They are narrowed by the different types that they can be associated to, for example `NumericalOperator` can be linked to `number` or `Date` to create a `NumericalOperation`.

More details in the [operators](https://github.com/VictorFouquet/TypedQueryTS/wiki/Operator) section.

### Helpers

The library provides different shared helper types to ease the building of queries by not redefining the same constraints several times.

They are subdivided as **primitive typing**, **structural constraining** and **data extracting** according to their respective purpose.

More details in the [helper](https://github.com/VictorFouquet/TypedQueryTS/wiki/Helper-types) section of the documentation.
