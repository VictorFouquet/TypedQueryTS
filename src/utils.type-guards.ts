import { Numeric, Primitive } from "./utils.types";

export const isNotNullOrUndefined = <T>(value: T): value is NonNullable<T> => {
    return value !== null && value !== undefined;
}

export const isNumeric = (value: any): value is Numeric => {
    return isNotNullOrUndefined(value)
        && (
            typeof value === 'number' || value instanceof Date
        );
}

export const isPrimitive = (value: any): value is Primitive => {
    return isNotNullOrUndefined(value)
        && (
            typeof value === 'boolean'
            || typeof value === 'string'
            || isNumeric(value)
        );
}
