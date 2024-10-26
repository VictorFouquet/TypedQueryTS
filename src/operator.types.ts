// Operator definitions
// Numerical operators are split into logical groups for better type constraints
export type EqualityOp = 'eq';
export type LowerOp = 'lt' | 'lte';  // Less than operators
export type UpperOp = 'gt' | 'gte';  // Greater than operators
export type NumericalOperator = EqualityOp | LowerOp | UpperOp;

// String comparison operators
export type LiteralOperator = 'eq' | 'contains' | 'startswith' | 'endswith';

// Boolean operators
export type BooleanOperator = 'is' | 'not';

// Composition operators
export type LogicalOperator = 'or' | 'not';
export type ListOperator = 'some' | 'none' | 'all';

// Type inference for operators based on value type
export type InferOperator<T> =
    T extends number | Date ? NumericalOperator :
    T extends string ? LiteralOperator :
    T extends boolean ? BooleanOperator :
    T extends (infer U)[] ? ListOperator :
    never;
