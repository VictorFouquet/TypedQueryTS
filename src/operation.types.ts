import { NumericalOperator, EqualityOp, LtOp, LteOp, GtOp, GteOp, LiteralOperator, BooleanOperator, LikeOp, ContainsOp, AllOp, SomeOp, StartswithOp, EndswithOp } from "./operator.types";
import { AtLeastOne, ExactlyOne, Numeric } from "./utils.types";

// Numerical single operation type generation
export type SingleNumericalOperationType<K extends NumericalOperator, V> = ExactlyOne<{
    [P in K]: V;
}> & {
    [P in Exclude<NumericalOperator, K>]?: never;
};

export type EqOperation<V> = SingleNumericalOperationType<EqualityOp, V>;
export type LtOperation<V> = SingleNumericalOperationType<LtOp, V>;
export type LteOperation<V> = SingleNumericalOperationType<LteOp, V>;
export type GtOperation<V> = SingleNumericalOperationType<GtOp, V>;
export type GteOperation<V> = SingleNumericalOperationType<GteOp, V>;

// Generate all single valid numerarical operations
export type SingleNumericalOperations<V> = ExactlyOne<
    | EqOperation<V>
    | LtOperation<V>
    | GtOperation<V>
    | LteOperation<V>
    | GteOperation<V>
>;

// Numerical double operation type generation
export type DoubleNumericalOperationType<T extends NumericalOperator, U extends NumericalOperator, V> =(
    {
        [P in T | U]: V;
    } & {
        [P in Exclude<NumericalOperator, T | U>]?: never;
    }
);

export type LtGtOperation<V> = DoubleNumericalOperationType<LtOp, GtOp, V>;
export type LtGteOperation<V> = DoubleNumericalOperationType<LtOp, GteOp, V>;
export type LteGtOperation<V> = DoubleNumericalOperationType<LteOp, GtOp, V>;
export type LteGteOperation<V> = DoubleNumericalOperationType<LteOp, GteOp, V>;

// Generate all valid double numerical operations from operators combinations
export type DoubleNumericalOperations<V> = 
    | LtGtOperation<V>
    | LtGteOperation<V>
    | LteGtOperation<V>
    | LteGteOperation<V>;

// Numerical operation must contain either a single operator or a valid combination of two operators
export type NumericalOperation<V extends Numeric> = V extends number ?
    SingleNumericalOperations<number> | DoubleNumericalOperations<number> :
    SingleNumericalOperations<Date> | DoubleNumericalOperations<Date>;


export type SingleLiteralOperation<K extends LiteralOperator> = ExactlyOne<{
    [P in K]:
        P extends EqualityOp ? string :
        never
}>

export type CombinedLiteralOperation<K extends LiteralOperator> = AtLeastOne<{
    [P in K]:
        P extends EqualityOp ? never :
        P extends LikeOp ? `${string}%${string}` :
        string
}>

export type EqLiteralOperation         = SingleLiteralOperation<EqualityOp>
export type LikeLiteralOperation       = CombinedLiteralOperation<LikeOp>
export type ContainsLiteralOperation   = CombinedLiteralOperation<ContainsOp>
export type StartsWithLiteralOperation = CombinedLiteralOperation<StartswithOp>
export type EndswithLiteralOperation   = CombinedLiteralOperation<EndswithOp>

// Literal operation must contain at least one operator and invalid any combination containing "eq"
//SingleLiteralOperation<LiteralOperator> | CombinedLiteralOperation<LiteralOperator>
export type LiteralOperation = 
    | EqLiteralOperation
    | LikeLiteralOperation
    | ContainsLiteralOperation
    | StartsWithLiteralOperation
    | EndswithLiteralOperation;

// Boolean operation must contain exactly one operator
export type BooleanOperation = ExactlyOne<{ [K in BooleanOperator]: boolean }>

