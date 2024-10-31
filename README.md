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

It also allows to build sub-queries on nested entities and collections contained in the main object.

Logical operations `or` and `not` can be implemented at the query's root level.

By default, the association of fields inside the query object is set to a logical `and`.

The following example objects will be used to illustrate the different queries that can be built :

```typescript
interface User {
    id: number
    firstname: string,
    lastname: string,
    address: Address,
    grades: number[],
    todos: Todo[],
    binGrid: boolean[][]
};

interface Address {
    streetNumber: number,
    streetName: string,
    zipcode: number,
    city: string
};

interface Todo {
    title: string
}
```

### Scalar queries

#### Primitive queries

- Scalar queries can be performed on any scalar field of the entity, either it is a primitive or a nested entity.
- A primitive scalar can be associated to the `OperationType` object corresponding to its value.
- Alternatively, the scalar key can be directly associated to the value used for the query, representing an equality operation query.

Examples:

```typescript
let condition: WhereCondition<User>;

condition = { // Simple query to get user by id
    id: 5
};
// Composed query combining both direct equality and LiteralOperation
condition = {
    firstname: {
        startswith: "J", endswith: "n"
    },
    lastname: "Doe"
};

// Invalid as User interface doesnt contain an email field
condition = {
    email: "abc@mail.com"
}
```

#### Nested entity query

- A nested entity scalar query must be a sub-query containing at least one of the nested entity fields

Examples:

```typescript
let condition: WhereCondition<User>;

// Nested query getting users whose address' zipcode equals 123456
condition = {
    address: {
        zipcode: 12345
    }
};
// Composed query on nested entity field
condition = {
    address: {
        street: "Main Street",
        city: { contains: "city" }
    }
};
// Composed query combining primitive and nested entity query
condition = {
    lastname: "Doe",
    address: {
        street: "Main Street",
        city: { contains: "city" }
    }
};

// Invalid as nested Address interface doesnt contain a state field
condition = {
    address: { state: "State" }
}
```

### List queries

The `WhereCondition` makes use of the `ListOperator` type to handle queries on list fields.

Both entity and primitive elements are supported to create the list queries.

A list query inside a List field can contain only one list operator.

**Note that all the following examples can be combined**, for instance, the `WhereCondition` type would support queries on an object containing lists of nested objects that contain nested arrays of primitives in their fields.

#### Primitive list query

- A primitive list query can be built with any of the `ListOperator` keys
- The associated value must be an operation compatible with the value of the items in the list

Examples:

```typescript
let conditon: WhereCondition<User>;
// Condition to get all users who have at least one 5 in their grades
condition = {
    grades: {
        some: 5
    }
};

// Condition to get all users who have none of their grades between 5 and 15
condition = {
    grades: {
        none: { gte: 5, lte: 15}
    }
};

// Invalid for combining two list conditions inside the same field
condition = {
    grades: {
        all: 5,
        some: { gt: 5 }
    }
};
```

#### Entity list query

- An entity list query can be built with any of the `ListOperator` keys
- The associated value must be an entity operation compatible with the entity elements keys

Examples:

```typescript
let conditon: WhereCondition<User>;

// Condition to get all users who have at least one todo with title "Todo" in their todos
condition = {
    todos: {
        some: {
            title: "Todo"
        }
    }
};
```

#### Nested list query

- A nested list query can be built with any of the `ListOperator` keys
- A nested list query can only be built for fields that are nested arrays of primitives or objects
- The `ListOperator` must be nested to follow the structure of the nested arrays they target

Examples:

```typescript
let conditon: WhereCondition<User>;

// Condition to get users whose binary grid has at least one row with all values set to true
condition = {
    binGrid: {
        some: {
            all: true
        }
    }
};
```

### Logical queries

The `WhereQuery` type makes use of `LogicalOperator` to offer flexibility when dealing with queries.

The default association in a combined condition is an implicit logical `and`.

#### Or queries

- An or query for type T must be associated to a tupple containing two subqueries of type `WhereQuery<T>`

Examples:

```typescript
let condition: WhereCondition<User>;

// Get users whose id is either 0 or 1
condition = {
    or: [
        { id: 0 },
        { id: 1 }
    ]
};

// Get users whose name starts with John or ends with Doe
condition = {
    or: [
        { name: { startswith: "John" } },
        { name: { endswith: "Doe" } }
    ]
};
```

#### Not queries

- A not query for type T must be associated to a subquery of type `WhereQuery<T>`

Examples:

```typescript
let condition: WhereCondition<User>;

// Get users whose id is not 0
condition = {
    not: { id: 0 }
};

// Get users whose name does not starts with John
condition = {
    not: { 
        name: { startswith: "John" }
    }
};
```

#### Combined logical queries

- Any logical combination can be used to build a query

Examples:

```typescript
let condition: WhereCondition<User>;

// Get users whose name starts with "John" OR ends with "Doe" AND is NOT "John Doe"
condition = {
    or: [
        { name: { startswith: "John" } },
        { name: { endswith: "Doe" } }
    ],
    not: { name: "John Doe" }
};
```

## Operator types

The library provides different `Operators` to help implement the logic when building a query.

They define the actions that are currently supported by the query type system.

More details about these types rules in the [Operator](https://github.com/VictorFouquet/TypedQueryTS/wiki/Operator) section of the [documentation](https://github.com/VictorFouquet/TypedQueryTS/wiki).

## Operation types

Operations are designed to enforce the constraints that define the relation between operators and the values that can be associated with them.

They act like type guards to make sure that the association of an operator to a value semantically makes sense.

For instance: 

Creating an operation that queries a `number` that `contains` a value would not make sense.

Same for an operation that queries a `number` that is both `eq` to and `lt`, or both `gt` and `gte` an other number.

Same for an operation that queries a `Date` that is both `gte` an other date and `lt` a number.

More details in the [operations](https://github.com/VictorFouquet/TypedQueryTS/wiki/Operations) section [documentation](https://github.com/VictorFouquet/TypedQueryTS/wiki).


## Helper types

The library provides different shared helper types to ease the building of queries by not redefining the same constraints several times.

More details about these types rules in the [helper type](https://github.com/VictorFouquet/TypedQueryTS/wiki/Helper-types) section of the [documentation](https://github.com/VictorFouquet/TypedQueryTS/wiki).
