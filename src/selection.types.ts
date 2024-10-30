import { AtLeastOne, Primitive } from "./utils.types";

// Main Selection type logic
export type Selection<T> = AtLeastOne<{
    [K in keyof T]: 
        T[K] extends Primitive ? boolean :      // Direct selection of primitive fields
        T[K] extends (infer U)[] ? 
            U extends Primitive ? boolean :     // Direct selection or primitive array fields
            Selection<U> :                      // Indirect selection of nested objects array fields
        T[K] extends object ? Selection<T[K]> : // Indirect selection of nested objects fields
        never
}>

export type SelectClause<T> = {
    select: Selection<T>
};
