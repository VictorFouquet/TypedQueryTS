import { NumericalOperation, LiteralOperation, BooleanOperation } from "./operation.types";
import { ListOperator } from "./operator.types";
import { AtLeastOne, EntityScalarKeys, EntityListKeys, ExactlyOne, Primitive } from "./utils.types";


// Primitive query
export type PrimitiveQuery<V extends Primitive> =
    V extends number | Date ?
        NumericalOperation | number | Date :
        V extends string ?
            LiteralOperation | string :
            V extends boolean ?
                BooleanOperation | boolean :
                never;

export type ValueQuery<V> =
    V extends Primitive ?
            PrimitiveQuery<V> :
            V extends (infer U)[] ?
                ListQuery<U> :
                V extends object ?
                    EntityQuery<V> :
                    never;

// Entity query
export type EntityQuery<T> = AtLeastOne<{
    [K in keyof T]: ValueQuery<T[K]>
}>

// List query
export type ListQuery<T> = ExactlyOne<{
    [K in ListOperator]: ValueQuery<T>
}>


// Field condition types based on field type
export type FieldCondition<V> = V extends number | Date
    ? NumericalOperation
    : V extends string
    ? LiteralOperation
    : V extends boolean
    ? BooleanOperation
    : V extends object
    ? AtLeastOne<ScalarCondition<V>>
    : never;

// Conditions for scalar fields
export type ScalarCondition<T> = {
    [K in EntityScalarKeys<T>]: FieldCondition<T[K]> | T[K]
};

// Conditions for array fields
export type ListElementCondition<T> = AtLeastOne<{
    [K in EntityListKeys<T>]: T[K] extends (infer U)[]
        ? U extends object
            ? AtLeastOne<ScalarCondition<U>>            // For array of objects
            : FieldCondition<U>                         // For array of primitives
        : never
}>;

// Array operation conditions
export type ListCondition<T> = {
    [K in ListOperator]: ListElementCondition<T>
};
  
// Logical query composition
export type LogicalCondition<T> = OrCondition<T> | NotCondition<T>;

// OR requires exactly two subconditions
export type OrCondition<T> = {
    or: [WhereCondition<T>, WhereCondition<T>]
};

// NOT requires one subcondition
export type NotCondition<T> = {
    not: WhereCondition<T>
};

// Main query type
export type WhereCondition<T> = AtLeastOne<
    ScalarCondition<T> &
    LogicalCondition<T> &
    ListCondition<T>
>;
