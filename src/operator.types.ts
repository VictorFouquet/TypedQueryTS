import { Operators } from "./constants";

export type LtOp         = typeof Operators.lt;
export type LteOp        = typeof Operators.lte;
export type GtOp         = typeof Operators.gt;
export type GteOp        = typeof Operators.gte;
export type EqualityOp   = typeof Operators.eq;
export type LikeOp       = typeof Operators.like;
export type ContainsOp   = typeof Operators.contains;
export type StartswithOp = typeof Operators.startswith;
export type EndswithOp   = typeof Operators.endswith;
export type IsOp         = typeof Operators.is;
export type NotOp        = typeof Operators.not;
export type LogOrOp      = typeof Operators.logicalOr;
export type LogNotOp     = typeof Operators.logicalNot;
export type SomeOp       = typeof Operators.some;
export type NoneOp       = typeof Operators.none;
export type AllOp        = typeof Operators.all;
export type AscOp        = typeof Operators.asc;
export type DescOp       = typeof Operators.desc;

// Less than operators
export type LowerOp = typeof Operators.lower[number];

// Greater than operators
export type UpperOp = typeof Operators.upper[number];

// Numerical operators
export type NumericalOperator = typeof Operators.numerical[number];

// String comparison operators
export type LiteralOperator = typeof Operators.literal[number];

// Boolean operators
export type BooleanOperator = typeof Operators.boolean[number];

// Composition operators
export type LogicalOperator = typeof Operators.logical[number];
export type ListOperator = typeof Operators.list[number];

// Ordering operators
export type OrderingOperator = typeof Operators.ordering[number];

// Type inference for operators based on value type
export type InferOperator<T> =
    T extends number | Date ? NumericalOperator :
    T extends string ? LiteralOperator :
    T extends boolean ? BooleanOperator :
    T extends (infer U)[] ? ListOperator :
    never;
