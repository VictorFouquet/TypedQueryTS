# TypedQuery TS

**TypedQuery** is a TypeScript type library designed to help developers to abstract their queries.

It is aimed at decoupling a core application from any query related external dependencies, including ORMs, providing a backbone for building queries in typed trees that can the be smoothly translated to any target ORM or raw queries.

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
