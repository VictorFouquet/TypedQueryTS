import { NumericalOperator, LowerOp, UpperOp, LiteralOperator, BooleanOperator, EqualityOp, LikeOperator } from "./operator.types";
import { AtLeastOne, ExactlyOne, Numeric } from "./utils.types";


// Numerical single operation type generation
export type SingleNumericalOperationType<K extends NumericalOperator, V> = {
    [P in K]: V;
} & {
    [P in Exclude<NumericalOperator, K>]?: never;
};

// Numerical double operation type generation
export type DoubleNumericalOperationType<T extends NumericalOperator, U extends NumericalOperator, V> =(
    {
        [P in T | U]: V;
    } & {
        [P in Exclude<NumericalOperator, T | U>]?: never;
    }
);

// Generate all single valid numerarical operations
export type SingleNumericalOperations<V> = {
    [K in NumericalOperator]: SingleNumericalOperationType<K, V>;
}[NumericalOperator];

// Generate all valid double numerical operations from operators combinations
export type DoubleNumericalOperations<V> = {
    [L in LowerOp]: {
        [U in UpperOp]: DoubleNumericalOperationType<L, U, V>;
    }[UpperOp];
}[LowerOp];


// Numerical operation must contain either a single operator or a valid combination of two operators
export type NumericalOperation<V extends Numeric> = V extends number ?
    SingleNumericalOperations<number> | DoubleNumericalOperations<number> :
    SingleNumericalOperations<Date> | DoubleNumericalOperations<Date>;

// Literal operation must contain at least one operator and invalid any combination containing "eq"
export type LiteralOperation = ExactlyOne<{
    [K in LiteralOperator]:
        K extends EqualityOp ? string :
        never
}> | AtLeastOne<{
    [K in LiteralOperator]:
        K extends EqualityOp ? never :
        K extends LikeOperator ? `${string}%${string}` :
        string
}>

// Boolean operation must contain exactly one operator
export type BooleanOperation = ExactlyOne<{ [K in BooleanOperator]: boolean }>
