import { NumericalOperation, LiteralOperation, BooleanOperation } from "./operation.types";
import { ListOperator } from "./operator.types";
import { AtLeastOne, ExactlyOne, Primitive } from "./utils.types";


// Types a condition to query on an object
export type EntityCondition<T> = {
    [K in keyof T]?: ValueCondition<T[K]>
}

// Types a condition to query on a value
export type ValueCondition<V> =
    V extends Primitive ? PrimitiveCondition<V> :
    V extends (infer U)[] ? ListCondition<U> :
    V extends object ? EntityCondition<V> :
    never;

// Types a condition to query on a Primitive
export type PrimitiveCondition<V extends Primitive> =
    V extends number | Date ? NumericalOperation<V> | V:
    V extends string ? LiteralOperation | V :
    V extends boolean ? BooleanOperation | V :
    never;

// Types a condition to query on a list
export type ListCondition<T> = ExactlyOne<{
    [K in ListOperator]: ValueCondition<T>
}>

// Logical condition composition
export type LogicalCondition<T> = OrCondition<T> & NotCondition<T>;

// OR requires exactly two subconditions
export type OrCondition<T> = {
    OR: [WhereCondition<T>, WhereCondition<T>]
};

// NOT requires one subcondition
export type NotCondition<T> = {
    NOT: WhereCondition<T>
};

// Main where condition type
export type WhereCondition<T> = Partial<LogicalCondition<T> & EntityCondition<T>>;

// Embeds WhereCondition in a where clause
export type WhereClause<T> = {
    where: WhereCondition<T>
}
