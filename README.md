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

## Helper types

The library provides different helper types

### Structural constraint types

- `AtLeastOne<T>` ensures at least one field of type T is contained in an object
- `ExactlyOne<T>` ensures an object has exactly one field and this field must be a field contained in type T

### Data extraction types

- `EntityScalarKeys<T>` extracts all the fields of a type T whose value is a scalar as a string union
- `EntityListKeys<T>` extracts all the fields of a type T whose value is an array as a string union
