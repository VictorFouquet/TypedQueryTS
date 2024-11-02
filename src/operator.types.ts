//----------------------------------------------------------------------------------- String constants

const EqualityOp = ['eq'] as const;
const LowerOp = ['lt', 'lte'] as const;
const UpperOp = ['gt', 'gte'] as const;
const NumericalOperator = [...EqualityOp, ...LowerOp, ...UpperOp] as const;
const LikeOperator = ['like'] as const;
const LiteralOperator = [ ...EqualityOp, ...LikeOperator, 'contains', 'startswith', 'endswith'] as const;
const BooleanOperator = [ ...EqualityOp, 'is', 'not' ] as const;
const LogicalOperator = ['OR', 'NOT'] as const;
const ListOperator = ['some', 'none', 'all'] as const;
const OrderingOperator = ['asc', 'desc'] as const;

//----------------------------------------------------------------------------------- Operator definitions

// Numerical operators are split into logical groups for better type constraints
export type EqualityOp = typeof EqualityOp[number];

// Less than operators
export type LowerOp = typeof LowerOp[number];

// Greater than operators
export type UpperOp = typeof UpperOp[number];

// Numerical operators
export type NumericalOperator = typeof NumericalOperator[number];

// Like Operator
export type LikeOperator = typeof LikeOperator[number];

// String comparison operators
export type LiteralOperator = typeof LiteralOperator[number];

// Boolean operators
export type BooleanOperator = typeof BooleanOperator[number];

// Composition operators
export type LogicalOperator = typeof LogicalOperator[number];
export type ListOperator = typeof ListOperator[number];

// Ordering operators
export type OrderingOperator = typeof OrderingOperator[number];

// Type inference for operators based on value type
export type InferOperator<T> =
    T extends number | Date ? NumericalOperator :
    T extends string ? LiteralOperator :
    T extends boolean ? BooleanOperator :
    T extends (infer U)[] ? ListOperator :
    never;

//----------------------------------------------------------------------------------- Type Guards

// EqualityOp type guard
export const isEqualityOp = (value: unknown): value is EqualityOp => {
    return EqualityOp.includes(value as EqualityOp);
}

// LowerOp type guard
export const isLowerOp = (value: unknown): value is LowerOp => {
    return LowerOp.includes(value as LowerOp);
}

// UpperOp type guard
export const isUpperOp = (value: unknown): value is UpperOp => {
    return UpperOp.includes(value as UpperOp);
}

// NumericalOperator type guard
export const isNumericalOperator = (value: unknown): value is NumericalOperator => {
    return NumericalOperator.includes(value as NumericalOperator);
}

// LikeOperator type guard
export const isLikeOperator = (value: unknown): value is LikeOperator => {
    return LikeOperator.includes(value as LikeOperator);
}

// LiteralOperator type guard
export const isLiteralOperator = (value: unknown): value is LiteralOperator => {
    return LiteralOperator.includes(value as LiteralOperator);
}

// BooleanOperator type guard
export const isBooleanOperator = (value: unknown): value is BooleanOperator => {
    return BooleanOperator.includes(value as BooleanOperator);
}

// LogicalOperator type guard
export const isLogicalOperator = (value: unknown): value is LogicalOperator => {
    return LogicalOperator.includes(value as LogicalOperator);
}

// ListOperator type guard
export const isListOperator = (value: unknown): value is ListOperator => {
    return ListOperator.includes(value as ListOperator);
}

// OrderingOperator type guard
export const isOrderingOperator = (value: unknown): value is OrderingOperator => {
    return OrderingOperator.includes(value as OrderingOperator);
}
