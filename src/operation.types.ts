import { NumericalOperator, LowerOp, UpperOp, LiteralOperator, BooleanOperator, EqualityOp } from "./operator.types";
import { AtLeastOne, ExactlyOne } from "./utils.types";


// Numerical single operation type generation
export type SingleNumericalOperationType<K extends NumericalOperator> = {
    [P in K]: number | Date;
} & {
    [P in Exclude<NumericalOperator, K>]?: never;
};

// Numerical double operation type generation
export type DoubleNumericalOperationType<T extends NumericalOperator, U extends NumericalOperator> =(
    {
        [P in T | U]: number;
    } & {
        [P in Exclude<NumericalOperator, T | U>]?: never;
    }
) | (
    {
        [P in T | U]: Date;
    } & {
        [P in Exclude<NumericalOperator, T | U>]?: never;
    }
);

// Generate all single valid numerarical operations
export type SingleNumericalOperations = {
    [K in NumericalOperator]: SingleNumericalOperationType<K>;
}[NumericalOperator];

// Generate all valid double numerical operations from operators combinations
export type DoubleNumericalOperations = {
    [L in LowerOp]: {
        [U in UpperOp]: DoubleNumericalOperationType<L, U>;
    }[UpperOp];
}[LowerOp];


// Numerical operation must contain either a single operator or a valid combination of two operators
export type NumericalOperation = SingleNumericalOperations | DoubleNumericalOperations;

// Literal operation must contain at least one operator and invalid any combination containing "eq"
export type LiteralOperation = ExactlyOne<{
    [K in LiteralOperator]: K extends EqualityOp ? string : never
}> | AtLeastOne<{
    [K in LiteralOperator]: K extends EqualityOp ? never : string
}>

// Boolean operation must contain exactly one operator
export type BooleanOperation = ExactlyOne<{ [K in BooleanOperator]: boolean }>
