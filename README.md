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

- `eq` : Equality operator as `EqualityOp`, can be used for any primitive besides `boolean`
- `lt | lte`: Lower bound operators as `LowerOp`, can be used for `number` and `Date`
- `gt | gte`: Upper bound operators as `UpperOp`, can be used for `number` and `Date`
- `eq | gt | gte | lt | lte`: Numerical operators as `NumericalOperator`, can be used for `number` and `Date`
- `eq | contains | startswith | endswith`: Literal operators as `LiteralOperator`, can be used for `string`
- `is | not`: Boolean operators, as `BooleanOperator`, can be used for `boolean`
- `some | all | none`: Array operators as `ListOperator`, can be used for array with any element type
- `not | or`: Logical operators as `LogicalOperator`, can be used for a sub query object

An operator util type to infer the value of an operator from the type of a target value is provided as `InferOperator<T>`.

This util type enforces the previously described operator-value constraints.

## Operation types

Operations are designed to enforce the constraints that define the relation between operators and the values that can be associated with them.

They act like type guards to make sure that the association of an operator to a value semantically makes sense.

For instance: 

Creating an operation that queries a `number` that `contains` a value would not make sense.

Same for an operation that queries a `number` that is both `eq` to and `lt`, or both `gt` and `gte` an other number.

Same for an operation that queries a `Date` that is both `gte` an other date and `lt` a number.

### Operation business rules

#### Numerical operations

- A numerical operation allows to combine a numerical operator to a `number` or a `Date`
- A numerical operation can contain a single numerical operator
- A combination of two numerical operators can be associated to either two `number` or two `Date` to create a doubly bounded range query
- A combination of two numerical operators represents a logical `AND` association
- If a combination is used, it must contain both a `LowerOp` and `UpperOp` operator, but can never be composed of two `LowerOp` or two `UpperOp`
- The `eq` operator can only be used alone and cannot be associated to another numerical operator.

Examples

```typescript
let operation: NumericalOperation;
operation = { "eq":  0 };            // Valid strict equality
operation = { "gte": 0 };            // Valid range with one bound
operation = { "gt":  0, "lte": 10 }; // Valid range with upper and lower bounds

// Valid though the created range would be empty as the association is AND
operation = { "lt":  0, "gt": 10 };

operation = { "eq": 0, "lt": 10 }          // Invalid for equal being exclusive
operation = { "lt": 0, "lte": 0 }          // Invalid for combining two lower bounds
operation = { "gt": 0, "lt": new Date() }; // Invalid for combining two different types
```

#### Literal operations

- A single literal operator can be associated to a `string` value
- Any combination of literal operators excluding `eq` can be associated to different or same `string` values
- The `eq` operator can only be used alone and cannot be associated to another literal operator.

Examples

```typescript
let operation: LiteralOperation;
operation = { "eq":  "abc" };        // Valid strict equality
operation = { "contains": "abc" };   // Valid single operation
operation = {                        // Valid combination of operators
    "startswith": "abc", 
    "contains":   "def",
    "endswith":   "ghi"
};

// Invalid for equal operator being exclusive
operation = { "eq": "abc", "contains": "abc" };
```

#### Boolean operations

- A Boolean operation only accepts one single operator and can be associated to a `boolean` value

Examples

```typescript
let operation: BooleanOperation;
operation = { "is":  true };         // Valid single operation
operation = { "not": false };        // Valid single operation

// Invalid for combining boolean operators
operation = { "is": true, "not": false };
```

## Helper types

The library provides different helper types

### Structural constraint types

- `AtLeastOne<T>` ensures at least one field of type T is contained in an object
- `ExactlyOne<T>` ensures an object has exactly one field and this field must be a field contained in type T

### Data extraction types

- `EntityScalarKeys<T>` extracts all the fields of a type T whose value is a scalar as a string union
- `EntityListKeys<T>` extracts all the fields of a type T whose value is an array as a string union
