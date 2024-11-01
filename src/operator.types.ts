// Operator definitions
// Numerical operators are split into logical groups for better type constraints
export type EqualityOp = 'eq';
export type LowerOp = 'lt' | 'lte';  // Less than operators
export type UpperOp = 'gt' | 'gte';  // Greater than operators
export type NumericalOperator = EqualityOp | LowerOp | UpperOp;

// Like Operator
export type LikeOperator = 'like';

// String comparison operators
export type LiteralOperator = LikeOperator | EqualityOp | 'contains' | 'startswith' | 'endswith';

// Boolean operators
export type BooleanOperator = EqualityOp | 'is' | 'not';

// Composition operators
export type LogicalOperator = 'OR' | 'NOT';
export type ListOperator = 'some' | 'none' | 'all';

// Ordering operators
export type OrderingOperator = 'asc' | 'desc';

// Type inference for operators based on value type
export type InferOperator<T> =
    T extends number | Date ? NumericalOperator :
    T extends string ? LiteralOperator :
    T extends boolean ? BooleanOperator :
    T extends (infer U)[] ? ListOperator :
    never;
