import { expect, test } from 'vitest';
import {
    isBooleanOperator,
    isEqualityOp,
    isLikeOperator,
    isListOperator,
    isLiteralOperator,
    isLogicalOperator,
    isLowerOp,
    isNumericalOperator,
    isOrderingOperator,
    isUpperOp
} from '../src/operator.types';


test("EqualityOp typeguard should narrow string to EqualityOp", () => {
    expect(isEqualityOp("eq")).toBe(true);

    expect(isEqualityOp("lt")).not.toBe(true);
    expect(isEqualityOp("gt")).not.toBe(true);
    expect(isEqualityOp("contains")).not.toBe(true);
    expect(isEqualityOp("some")).not.toBe(true);
    expect(isEqualityOp("is")).not.toBe(true);
    expect(isEqualityOp("NOT")).not.toBe(true);
    expect(isEqualityOp("asc")).not.toBe(true);
    expect(isEqualityOp("whatever")).not.toBe(true);
});

test("LowerOp typeguard should narrow string to LowerOp", () => {
    expect(isLowerOp("lt")).toBe(true);
    expect(isLowerOp("lte")).toBe(true);

    expect(isLowerOp("eq")).not.toBe(true);
    expect(isLowerOp("gt")).not.toBe(true);
    expect(isLowerOp("contains")).not.toBe(true);
    expect(isLowerOp("some")).not.toBe(true);
    expect(isLowerOp("is")).not.toBe(true);
    expect(isLowerOp("NOT")).not.toBe(true);
    expect(isLowerOp("asc")).not.toBe(true);
    expect(isLowerOp("whatever")).not.toBe(true);
});

test("UpperOp typeguard should narrow string to UpperOp", () => {
    expect(isUpperOp("gt")).toBe(true);
    expect(isUpperOp("gte")).toBe(true);

    expect(isUpperOp("eq")).not.toBe(true);
    expect(isUpperOp("lt")).not.toBe(true);
    expect(isUpperOp("contains")).not.toBe(true);
    expect(isUpperOp("some")).not.toBe(true);
    expect(isUpperOp("is")).not.toBe(true);
    expect(isUpperOp("NOT")).not.toBe(true);
    expect(isUpperOp("asc")).not.toBe(true);
    expect(isUpperOp("whatever")).not.toBe(true);
});

test("NumericalOperator typeguard should narrow string to NumericalOperator", () => {
    expect(isNumericalOperator("eq")).toBe(true);
    expect(isNumericalOperator("lt")).toBe(true);
    expect(isNumericalOperator("lte")).toBe(true);
    expect(isNumericalOperator("gt")).toBe(true);
    expect(isNumericalOperator("gte")).toBe(true);

    expect(isNumericalOperator("contains")).not.toBe(true);
    expect(isNumericalOperator("some")).not.toBe(true);
    expect(isNumericalOperator("is")).not.toBe(true);
    expect(isNumericalOperator("NOT")).not.toBe(true);
    expect(isNumericalOperator("asc")).not.toBe(true);
    expect(isNumericalOperator("whatever")).not.toBe(true);
});

test("LikeOperator typeguard should narrow string to LikeOperator", () => {
    expect(isLikeOperator("like")).toBe(true);

    expect(isLikeOperator("eq")).not.toBe(true);
    expect(isLikeOperator("contains")).not.toBe(true);
    expect(isLikeOperator("lt")).not.toBe(true);
    expect(isLikeOperator("some")).not.toBe(true);
    expect(isLikeOperator("is")).not.toBe(true);
    expect(isLikeOperator("NOT")).not.toBe(true);
    expect(isLikeOperator("asc")).not.toBe(true);
    expect(isLikeOperator("whatever")).not.toBe(true);
});

test("LiteralOperator typeguard should narrow string to LiteralOperator", () => {
    expect(isLiteralOperator("eq")).toBe(true);
    expect(isLiteralOperator("startswith")).toBe(true);
    expect(isLiteralOperator("endswith")).toBe(true);
    expect(isLiteralOperator("contains")).toBe(true);
    expect(isLiteralOperator("like")).toBe(true);

    
    expect(isLiteralOperator("lt")).not.toBe(true);
    expect(isLiteralOperator("some")).not.toBe(true);
    expect(isLiteralOperator("is")).not.toBe(true);
    expect(isLiteralOperator("NOT")).not.toBe(true);
    expect(isLiteralOperator("asc")).not.toBe(true);
    expect(isLiteralOperator("whatever")).not.toBe(true);
});

test("BooleanOperator typeguard should narrow string to BooleanOperator", () => {
    expect(isBooleanOperator("eq")).toBe(true);
    expect(isBooleanOperator("is")).toBe(true);
    expect(isBooleanOperator("not")).toBe(true);
        
    expect(isBooleanOperator("contains")).not.toBe(true);
    expect(isBooleanOperator("lt")).not.toBe(true);
    expect(isBooleanOperator("some")).not.toBe(true);
    expect(isBooleanOperator("NOT")).not.toBe(true);
    expect(isBooleanOperator("asc")).not.toBe(true);
    expect(isBooleanOperator("whatever")).not.toBe(true);
});

test("ListOperator typeguard should narrow string to ListOperator", () => {
    expect(isListOperator("some")).toBe(true);
    expect(isListOperator("all")).toBe(true);
    expect(isListOperator("none")).toBe(true);
        
    expect(isListOperator("eq")).not.toBe(true);
    expect(isListOperator("contains")).not.toBe(true);
    expect(isListOperator("lt")).not.toBe(true);
    expect(isListOperator("is")).not.toBe(true);
    expect(isListOperator("NOT")).not.toBe(true);
    expect(isListOperator("asc")).not.toBe(true);
    expect(isListOperator("whatever")).not.toBe(true);
});

test("LogicalOperator typeguard should narrow string to LogicalOperator", () => {
    expect(isLogicalOperator("OR")).toBe(true);
    expect(isLogicalOperator("NOT")).toBe(true);
    
    expect(isLogicalOperator("eq")).not.toBe(true);
    expect(isLogicalOperator("contains")).not.toBe(true);
    expect(isLogicalOperator("lt")).not.toBe(true);
    expect(isLogicalOperator("some")).not.toBe(true);
    expect(isLogicalOperator("is")).not.toBe(true);
    expect(isLogicalOperator("asc")).not.toBe(true);
    expect(isLogicalOperator("whatever")).not.toBe(true);
});

test("OrderingOperator typeguard should narrow string to OrderingOperator", () => {
    expect(isOrderingOperator("asc")).toBe(true);
    expect(isOrderingOperator("desc")).toBe(true);
    
    expect(isOrderingOperator("eq")).not.toBe(true);
    expect(isOrderingOperator("contains")).not.toBe(true);
    expect(isOrderingOperator("none")).not.toBe(true);
    expect(isOrderingOperator("lt")).not.toBe(true);
    expect(isOrderingOperator("is")).not.toBe(true);
    expect(isOrderingOperator("NOT")).not.toBe(true);
    expect(isOrderingOperator("whatever")).not.toBe(true);
});
