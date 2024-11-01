import { OrderingOperator } from "./operator.types"
import { ExactlyOne, Primitive } from "./utils.types"

export type Ordering<T> = ExactlyOne<{
    [K in keyof T]: 
        T[K] extends Primitive ? OrderingOperator :
        T[K] extends (infer U)[] ? never :
        T[K] extends Record<string, unknown> ? Ordering<T[K]> :
        never
}>

export type HierarchicalOrdering<T> = Ordering<T>[];

export type OrderByClause<T> = {
    orderBy: Ordering<T> | HierarchicalOrdering<T>
}
