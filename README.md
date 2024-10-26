# TypedQuery TS

**TypedQuery** is a TypeScript type library designed to help developers to abstract their queries.

It is aimed at decoupling a core application from any query related external dependencies, including ORMs, providing a backbone for building queries in typed trees that can the be smoothly translated to any target ORM or raw queries.


## Helper types

The library provides different helper types

### Structural constraint types

- `AtLeastOne<T>` is used to ensure at least one field of type T is contained in an object
- `ExactlyOne<T>` is used to ensure an object has exactly one field and this field must be a field contained in type T

### Data extraction types

- `EntityScalarKeys<T>` is used to extract all the fields of a type T whose value is a scalar as a string union
- `EntityListKeys<T>` is used to extract all the fields of a type T whose value is an array as a string union
