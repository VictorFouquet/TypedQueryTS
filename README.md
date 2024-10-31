# TypedQuery TS

**TypedQuery** is a TypeScript type library designed to help developers to abstract their queries.

It is aimed at decoupling a core application from any query related external dependencies, including ORMs, providing a backbone for building queries in typed trees that can then be seamlessly translated to any target ORM or raw query language.

## Selection type

Selection type is the building blocks for typing a `select` clause.

`Selection` type takes a generic argument from which it can extract the selectable fields.

It also allows to build sub-selections on nested entities and flat arrays contained in the main object.

More details and examples in the [selecting](https://github.com/VictorFouquet/TypedQueryTS/wiki/Selecting) section of the [documentation](https://github.com/VictorFouquet/TypedQueryTS/wiki).

## Ordering types

Ordering types are the building blocks for typing an `orderBy` clause.

Ordering types take a generic argument from which they can extract the fields usable for sorting.

The extracted fields must be associated to an `OrderByOperator`, i.e. `asc | desc`.

They allow ordering by relational fields and nested entities.

They also allow hierarchical ordering when provided with a list of ordering statements.

They don't allow ordering by array fields.

More details and examples in the [ordering](https://github.com/VictorFouquet/TypedQueryTS/wiki/Ordering) section of the [documentation](https://github.com/VictorFouquet/TypedQueryTS/wiki).

## Condition types

Condition types are the main building blocks for typing a `where` clause.

`WhereCondition` type takes a generic argument from which it can extract the queryable fields.

It allows to build sub-conditions on nested entities and collections contained in the main object.

Logical operations `or` and `not` can be implemented at the condition's root level.

By default, the association of fields inside the condition object is set to a logical `and`.

More details and examples in the [condition](https://github.com/VictorFouquet/TypedQueryTS/wiki/Conditions) section of the [documentation](https://github.com/VictorFouquet/TypedQueryTS/wiki).

## Operation types

Operations are designed to enforce the constraints that define the relation between operators and the values that can be associated with them.

They act like type guards to make sure that the association of an operator to a value semantically makes sense.

For instance: 

Creating an operation that queries a `number` that `contains` a value would not make sense.

Same for an operation that queries a `number` that is both `eq` to and `lt`, or both `gt` and `gte` an other number.

Same for an operation that queries a `Date` that is both `gte` an other date and `lt` a number.

More details and examples in the [operation](https://github.com/VictorFouquet/TypedQueryTS/wiki/Operations) section of the [documentation](https://github.com/VictorFouquet/TypedQueryTS/wiki).

## Operator types

The library provides different `Operators` to help implement the logic when building a query.

They define the actions that are currently supported by the query type system.

More details and examples in the [operator](https://github.com/VictorFouquet/TypedQueryTS/wiki/Operator) section of the [documentation](https://github.com/VictorFouquet/TypedQueryTS/wiki).

## Helper types

The library provides different shared helper types to ease the building of queries by not redefining the same constraints several times.

More details and examples in the [helper](https://github.com/VictorFouquet/TypedQueryTS/wiki/Helper-types) section of the [documentation](https://github.com/VictorFouquet/TypedQueryTS/wiki).
