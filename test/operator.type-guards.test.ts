import { expect, test } from 'vitest';
import {
    isAllOp,
    isAscOp,
    isBooleanOperator,
    isContainsOp,
    isDescOp,
    isEndsWithOp,
    isEqualityOp,
    isGteOp,
    isGtOp,
    isIsOp,
    isLikeOp,
    isListOperator,
    isLiteralOperator,
    isLogicalOperator,
    isLogNotOp,
    isLogOrOp,
    isLowerOp,
    isLteOp,
    isLtOp,
    isNoneOp,
    isNotOp,
    isNumericalOperator,
    isOrderingOperator,
    isSomeOp,
    isStartsWithOp,
    isUpperOp
} from '../src/operator.type-guards';


test("EqualityOp typeguard should narrow string to EqualityOp", () => {
    expect(isEqualityOp("eq")).toBe(true);

    expect(isEqualityOp("lt")).not.toBe(true);
    expect(isEqualityOp("lte")).not.toBe(true);
    expect(isEqualityOp("gt")).not.toBe(true);
    expect(isEqualityOp("gte")).not.toBe(true);
    expect(isEqualityOp("like")).not.toBe(true);
    expect(isEqualityOp("contains")).not.toBe(true);
    expect(isEqualityOp("startswith")).not.toBe(true);
    expect(isEqualityOp("endswith")).not.toBe(true);
    expect(isEqualityOp("some")).not.toBe(true);
    expect(isEqualityOp("all")).not.toBe(true);
    expect(isEqualityOp("none")).not.toBe(true);
    expect(isEqualityOp("is")).not.toBe(true);
    expect(isEqualityOp("not")).not.toBe(true);
    expect(isEqualityOp("OR")).not.toBe(true);
    expect(isEqualityOp("NOT")).not.toBe(true);
    expect(isEqualityOp("asc")).not.toBe(true);
    expect(isEqualityOp("desc")).not.toBe(true);
    expect(isEqualityOp("whatever")).not.toBe(true);
});

test("LtOp typeguard should narrow string to LtOp", () => {
    expect(isLtOp("lt")).toBe(true);
    
    expect(isLtOp("eq")).not.toBe(true);
    expect(isLtOp("lte")).not.toBe(true);
    expect(isLtOp("gt")).not.toBe(true);
    expect(isLtOp("gte")).not.toBe(true);
    expect(isLtOp("like")).not.toBe(true);
    expect(isLtOp("contains")).not.toBe(true);
    expect(isLtOp("startswith")).not.toBe(true);
    expect(isLtOp("endswith")).not.toBe(true);
    expect(isLtOp("some")).not.toBe(true);
    expect(isLtOp("all")).not.toBe(true);
    expect(isLtOp("none")).not.toBe(true);
    expect(isLtOp("is")).not.toBe(true);
    expect(isLtOp("not")).not.toBe(true);
    expect(isLtOp("OR")).not.toBe(true);
    expect(isLtOp("NOT")).not.toBe(true);
    expect(isLtOp("asc")).not.toBe(true);
    expect(isLtOp("desc")).not.toBe(true);
    expect(isLtOp("whatever")).not.toBe(true);
});

test("LteOp typeguard should narrow string to LteOp", () => {
    expect(isLteOp("lte")).toBe(true);
    
    expect(isLteOp("eq")).not.toBe(true);
    expect(isLteOp("lt")).not.toBe(true);
    expect(isLteOp("gt")).not.toBe(true);
    expect(isLteOp("gte")).not.toBe(true);
    expect(isLteOp("like")).not.toBe(true);
    expect(isLteOp("contains")).not.toBe(true);
    expect(isLteOp("startswith")).not.toBe(true);
    expect(isLteOp("endswith")).not.toBe(true);
    expect(isLteOp("some")).not.toBe(true);
    expect(isLteOp("all")).not.toBe(true);
    expect(isLteOp("none")).not.toBe(true);
    expect(isLteOp("is")).not.toBe(true);
    expect(isLteOp("not")).not.toBe(true);
    expect(isLteOp("OR")).not.toBe(true);
    expect(isLteOp("NOT")).not.toBe(true);
    expect(isLteOp("asc")).not.toBe(true);
    expect(isLteOp("desc")).not.toBe(true);
    expect(isLteOp("whatever")).not.toBe(true);
});

test("GtOp typeguard should narrow string to GtOp", () => {
    expect(isGtOp("gt")).toBe(true);
    
    expect(isGtOp("eq")).not.toBe(true);
    expect(isGtOp("lt")).not.toBe(true);
    expect(isGtOp("lte")).not.toBe(true);
    expect(isGtOp("gte")).not.toBe(true);
    expect(isGtOp("like")).not.toBe(true);
    expect(isGtOp("contains")).not.toBe(true);
    expect(isGtOp("startswith")).not.toBe(true);
    expect(isGtOp("endswith")).not.toBe(true);
    expect(isGtOp("some")).not.toBe(true);
    expect(isGtOp("all")).not.toBe(true);
    expect(isGtOp("none")).not.toBe(true);
    expect(isGtOp("is")).not.toBe(true);
    expect(isGtOp("not")).not.toBe(true);
    expect(isGtOp("OR")).not.toBe(true);
    expect(isGtOp("NOT")).not.toBe(true);
    expect(isGtOp("asc")).not.toBe(true);
    expect(isGtOp("desc")).not.toBe(true);
    expect(isGtOp("whatever")).not.toBe(true);
});

test("GteOp typeguard should narrow string to GteOp", () => {
    expect(isGteOp("gte")).toBe(true);
    
    expect(isGteOp("eq")).not.toBe(true);
    expect(isGteOp("lt")).not.toBe(true);
    expect(isGteOp("lte")).not.toBe(true);
    expect(isGteOp("gt")).not.toBe(true);
    expect(isGteOp("like")).not.toBe(true);
    expect(isGteOp("contains")).not.toBe(true);
    expect(isGteOp("startswith")).not.toBe(true);
    expect(isGteOp("endswith")).not.toBe(true);
    expect(isGteOp("some")).not.toBe(true);
    expect(isGteOp("all")).not.toBe(true);
    expect(isGteOp("none")).not.toBe(true);
    expect(isGteOp("is")).not.toBe(true);
    expect(isGteOp("not")).not.toBe(true);
    expect(isGteOp("OR")).not.toBe(true);
    expect(isGteOp("NOT")).not.toBe(true);
    expect(isGteOp("asc")).not.toBe(true);
    expect(isGteOp("desc")).not.toBe(true);
    expect(isGteOp("whatever")).not.toBe(true);
});

test("LikeOp typeguard should narrow string to LikeOp", () => {
    expect(isLikeOp("like")).toBe(true);
    
    expect(isLikeOp("eq")).not.toBe(true);
    expect(isLikeOp("lt")).not.toBe(true);
    expect(isLikeOp("lte")).not.toBe(true);
    expect(isLikeOp("gt")).not.toBe(true);
    expect(isLikeOp("gte")).not.toBe(true);
    expect(isLikeOp("contains")).not.toBe(true);
    expect(isLikeOp("startswith")).not.toBe(true);
    expect(isLikeOp("endswith")).not.toBe(true);
    expect(isLikeOp("some")).not.toBe(true);
    expect(isLikeOp("all")).not.toBe(true);
    expect(isLikeOp("none")).not.toBe(true);
    expect(isLikeOp("is")).not.toBe(true);
    expect(isLikeOp("not")).not.toBe(true);
    expect(isLikeOp("OR")).not.toBe(true);
    expect(isLikeOp("NOT")).not.toBe(true);
    expect(isLikeOp("asc")).not.toBe(true);
    expect(isLikeOp("desc")).not.toBe(true);
    expect(isLikeOp("whatever")).not.toBe(true);
});

test("ContainsOp typeguard should narrow string to ContainsOp", () => {
    expect(isContainsOp("contains")).toBe(true);
    
    expect(isContainsOp("eq")).not.toBe(true);
    expect(isContainsOp("lt")).not.toBe(true);
    expect(isContainsOp("lte")).not.toBe(true);
    expect(isContainsOp("gt")).not.toBe(true);
    expect(isContainsOp("gte")).not.toBe(true);
    expect(isContainsOp("like")).not.toBe(true);
    expect(isContainsOp("startswith")).not.toBe(true);
    expect(isContainsOp("endswith")).not.toBe(true);
    expect(isContainsOp("some")).not.toBe(true);
    expect(isContainsOp("all")).not.toBe(true);
    expect(isContainsOp("none")).not.toBe(true);
    expect(isContainsOp("is")).not.toBe(true);
    expect(isContainsOp("not")).not.toBe(true);
    expect(isContainsOp("OR")).not.toBe(true);
    expect(isContainsOp("NOT")).not.toBe(true);
    expect(isContainsOp("asc")).not.toBe(true);
    expect(isContainsOp("desc")).not.toBe(true);
    expect(isContainsOp("whatever")).not.toBe(true);
});

test("StartswithOp typeguard should narrow string to StartswithOp", () => {
    expect(isStartsWithOp("startswith")).toBe(true);
    
    expect(isStartsWithOp("eq")).not.toBe(true);
    expect(isStartsWithOp("lt")).not.toBe(true);
    expect(isStartsWithOp("lte")).not.toBe(true);
    expect(isStartsWithOp("gt")).not.toBe(true);
    expect(isStartsWithOp("gte")).not.toBe(true);
    expect(isStartsWithOp("like")).not.toBe(true);
    expect(isStartsWithOp("contains")).not.toBe(true);
    expect(isStartsWithOp("endswith")).not.toBe(true);
    expect(isStartsWithOp("some")).not.toBe(true);
    expect(isStartsWithOp("all")).not.toBe(true);
    expect(isStartsWithOp("none")).not.toBe(true);
    expect(isStartsWithOp("is")).not.toBe(true);
    expect(isStartsWithOp("not")).not.toBe(true);
    expect(isStartsWithOp("OR")).not.toBe(true);
    expect(isStartsWithOp("NOT")).not.toBe(true);
    expect(isStartsWithOp("asc")).not.toBe(true);
    expect(isStartsWithOp("desc")).not.toBe(true);
    expect(isStartsWithOp("whatever")).not.toBe(true);
});

test("isEndsWithOp should narrow string to EndswithOp", () => {
    expect(isEndsWithOp("endswith")).toBe(true);
    
    expect(isEndsWithOp("eq")).not.toBe(true);
    expect(isEndsWithOp("lt")).not.toBe(true);
    expect(isEndsWithOp("lte")).not.toBe(true);
    expect(isEndsWithOp("gt")).not.toBe(true);
    expect(isEndsWithOp("gte")).not.toBe(true);
    expect(isEndsWithOp("like")).not.toBe(true);
    expect(isEndsWithOp("contains")).not.toBe(true);
    expect(isEndsWithOp("startswith")).not.toBe(true);
    expect(isEndsWithOp("some")).not.toBe(true);
    expect(isEndsWithOp("all")).not.toBe(true);
    expect(isEndsWithOp("none")).not.toBe(true);
    expect(isEndsWithOp("is")).not.toBe(true);
    expect(isEndsWithOp("not")).not.toBe(true);
    expect(isEndsWithOp("OR")).not.toBe(true);
    expect(isEndsWithOp("NOT")).not.toBe(true);
    expect(isEndsWithOp("asc")).not.toBe(true);
    expect(isEndsWithOp("desc")).not.toBe(true);
    expect(isEndsWithOp("whatever")).not.toBe(true);
});

test("isSomeOp should narrow string to SomeOp", () => {
    expect(isSomeOp("some")).toBe(true);
    
    expect(isSomeOp("eq")).not.toBe(true);
    expect(isSomeOp("lt")).not.toBe(true);
    expect(isSomeOp("lte")).not.toBe(true);
    expect(isSomeOp("gt")).not.toBe(true);
    expect(isSomeOp("gte")).not.toBe(true);
    expect(isSomeOp("like")).not.toBe(true);
    expect(isSomeOp("contains")).not.toBe(true);
    expect(isSomeOp("startswith")).not.toBe(true);
    expect(isSomeOp("endswith")).not.toBe(true);
    expect(isSomeOp("all")).not.toBe(true);
    expect(isSomeOp("none")).not.toBe(true);
    expect(isSomeOp("is")).not.toBe(true);
    expect(isSomeOp("not")).not.toBe(true);
    expect(isSomeOp("OR")).not.toBe(true);
    expect(isSomeOp("NOT")).not.toBe(true);
    expect(isSomeOp("asc")).not.toBe(true);
    expect(isSomeOp("desc")).not.toBe(true);
    expect(isSomeOp("whatever")).not.toBe(true);
});

test("isAllOp should narrow string to AllOp", () => {
    expect(isAllOp("all")).toBe(true);
    
    expect(isAllOp("eq")).not.toBe(true);
    expect(isAllOp("lt")).not.toBe(true);
    expect(isAllOp("lte")).not.toBe(true);
    expect(isAllOp("gt")).not.toBe(true);
    expect(isAllOp("gte")).not.toBe(true);
    expect(isAllOp("like")).not.toBe(true);
    expect(isAllOp("contains")).not.toBe(true);
    expect(isAllOp("startswith")).not.toBe(true);
    expect(isAllOp("endswith")).not.toBe(true);
    expect(isAllOp("some")).not.toBe(true);
    expect(isAllOp("none")).not.toBe(true);
    expect(isAllOp("is")).not.toBe(true);
    expect(isAllOp("not")).not.toBe(true);
    expect(isAllOp("OR")).not.toBe(true);
    expect(isAllOp("NOT")).not.toBe(true);
    expect(isAllOp("asc")).not.toBe(true);
    expect(isAllOp("desc")).not.toBe(true);
    expect(isAllOp("whatever")).not.toBe(true);
});

test("isNoneOp should narrow string to NoneOp", () => {
    expect(isNoneOp("none")).toBe(true);
    
    expect(isNoneOp("eq")).not.toBe(true);
    expect(isNoneOp("lt")).not.toBe(true);
    expect(isNoneOp("lte")).not.toBe(true);
    expect(isNoneOp("gt")).not.toBe(true);
    expect(isNoneOp("gte")).not.toBe(true);
    expect(isNoneOp("like")).not.toBe(true);
    expect(isNoneOp("contains")).not.toBe(true);
    expect(isNoneOp("startswith")).not.toBe(true);
    expect(isNoneOp("endswith")).not.toBe(true);
    expect(isNoneOp("some")).not.toBe(true);
    expect(isNoneOp("all")).not.toBe(true);
    expect(isNoneOp("is")).not.toBe(true);
    expect(isNoneOp("not")).not.toBe(true);
    expect(isNoneOp("OR")).not.toBe(true);
    expect(isNoneOp("NOT")).not.toBe(true);
    expect(isNoneOp("asc")).not.toBe(true);
    expect(isNoneOp("desc")).not.toBe(true);
    expect(isNoneOp("whatever")).not.toBe(true);
});

test("isIsOp should narrow string to IsOp", () => {
    expect(isIsOp("is")).toBe(true);
    
    expect(isIsOp("eq")).not.toBe(true);
    expect(isIsOp("lt")).not.toBe(true);
    expect(isIsOp("lte")).not.toBe(true);
    expect(isIsOp("gt")).not.toBe(true);
    expect(isIsOp("gte")).not.toBe(true);
    expect(isIsOp("like")).not.toBe(true);
    expect(isIsOp("contains")).not.toBe(true);
    expect(isIsOp("startswith")).not.toBe(true);
    expect(isIsOp("endswith")).not.toBe(true);
    expect(isIsOp("some")).not.toBe(true);
    expect(isIsOp("all")).not.toBe(true);
    expect(isIsOp("none")).not.toBe(true);
    expect(isIsOp("not")).not.toBe(true);
    expect(isIsOp("OR")).not.toBe(true);
    expect(isIsOp("NOT")).not.toBe(true);
    expect(isIsOp("asc")).not.toBe(true);
    expect(isIsOp("desc")).not.toBe(true);
    expect(isIsOp("whatever")).not.toBe(true);
});

test("isNotOp should narrow string to NotOp", () => {
    expect(isNotOp("not")).toBe(true);
    
    expect(isNotOp("eq")).not.toBe(true);
    expect(isNotOp("lt")).not.toBe(true);
    expect(isNotOp("lte")).not.toBe(true);
    expect(isNotOp("gt")).not.toBe(true);
    expect(isNotOp("gte")).not.toBe(true);
    expect(isNotOp("like")).not.toBe(true);
    expect(isNotOp("contains")).not.toBe(true);
    expect(isNotOp("startswith")).not.toBe(true);
    expect(isNotOp("endswith")).not.toBe(true);
    expect(isNotOp("some")).not.toBe(true);
    expect(isNotOp("all")).not.toBe(true);
    expect(isNotOp("none")).not.toBe(true);
    expect(isNotOp("is")).not.toBe(true);
    expect(isNotOp("OR")).not.toBe(true);
    expect(isNotOp("NOT")).not.toBe(true);
    expect(isNotOp("asc")).not.toBe(true);
    expect(isNotOp("desc")).not.toBe(true);
    expect(isNotOp("whatever")).not.toBe(true);
});

test("isLogOrOp should narrow string to LogOrOp", () => {
    expect(isLogOrOp("OR")).toBe(true);
    
    expect(isLogOrOp("eq")).not.toBe(true);
    expect(isLogOrOp("lt")).not.toBe(true);
    expect(isLogOrOp("lte")).not.toBe(true);
    expect(isLogOrOp("gt")).not.toBe(true);
    expect(isLogOrOp("gte")).not.toBe(true);
    expect(isLogOrOp("like")).not.toBe(true);
    expect(isLogOrOp("contains")).not.toBe(true);
    expect(isLogOrOp("startswith")).not.toBe(true);
    expect(isLogOrOp("endswith")).not.toBe(true);
    expect(isLogOrOp("some")).not.toBe(true);
    expect(isLogOrOp("all")).not.toBe(true);
    expect(isLogOrOp("none")).not.toBe(true);
    expect(isLogOrOp("is")).not.toBe(true);
    expect(isLogOrOp("not")).not.toBe(true);
    expect(isLogOrOp("NOT")).not.toBe(true);
    expect(isLogOrOp("asc")).not.toBe(true);
    expect(isLogOrOp("desc")).not.toBe(true);
    expect(isLogOrOp("whatever")).not.toBe(true);
});

test("isLogNotOp should narrow string to LogNotOp", () => {
    expect(isLogNotOp("NOT")).toBe(true);
    
    expect(isLogNotOp("eq")).not.toBe(true);
    expect(isLogNotOp("lt")).not.toBe(true);
    expect(isLogNotOp("lte")).not.toBe(true);
    expect(isLogNotOp("gt")).not.toBe(true);
    expect(isLogNotOp("gte")).not.toBe(true);
    expect(isLogNotOp("like")).not.toBe(true);
    expect(isLogNotOp("contains")).not.toBe(true);
    expect(isLogNotOp("startswith")).not.toBe(true);
    expect(isLogNotOp("endswith")).not.toBe(true);
    expect(isLogNotOp("some")).not.toBe(true);
    expect(isLogNotOp("all")).not.toBe(true);
    expect(isLogNotOp("none")).not.toBe(true);
    expect(isLogNotOp("is")).not.toBe(true);
    expect(isLogNotOp("not")).not.toBe(true);
    expect(isLogNotOp("OR")).not.toBe(true);
    expect(isLogNotOp("asc")).not.toBe(true);
    expect(isLogNotOp("desc")).not.toBe(true);
    expect(isLogNotOp("whatever")).not.toBe(true);
});

test("isAscOp should narrow string to AscOp", () => {
    expect(isAscOp("asc")).toBe(true);
    
    expect(isAscOp("eq")).not.toBe(true);
    expect(isAscOp("lt")).not.toBe(true);
    expect(isAscOp("lte")).not.toBe(true);
    expect(isAscOp("gt")).not.toBe(true);
    expect(isAscOp("gte")).not.toBe(true);
    expect(isAscOp("like")).not.toBe(true);
    expect(isAscOp("contains")).not.toBe(true);
    expect(isAscOp("startswith")).not.toBe(true);
    expect(isAscOp("endswith")).not.toBe(true);
    expect(isAscOp("some")).not.toBe(true);
    expect(isAscOp("all")).not.toBe(true);
    expect(isAscOp("none")).not.toBe(true);
    expect(isAscOp("is")).not.toBe(true);
    expect(isAscOp("not")).not.toBe(true);
    expect(isAscOp("OR")).not.toBe(true);
    expect(isAscOp("NOT")).not.toBe(true);
    expect(isAscOp("desc")).not.toBe(true);
    expect(isAscOp("whatever")).not.toBe(true);
});

test("isDescOp should narrow string to DescOp", () => {
    expect(isDescOp("desc")).toBe(true);
    
    expect(isDescOp("eq")).not.toBe(true);
    expect(isDescOp("lt")).not.toBe(true);
    expect(isDescOp("lte")).not.toBe(true);
    expect(isDescOp("gt")).not.toBe(true);
    expect(isDescOp("gte")).not.toBe(true);
    expect(isDescOp("like")).not.toBe(true);
    expect(isDescOp("contains")).not.toBe(true);
    expect(isDescOp("startswith")).not.toBe(true);
    expect(isDescOp("endswith")).not.toBe(true);
    expect(isDescOp("some")).not.toBe(true);
    expect(isDescOp("all")).not.toBe(true);
    expect(isDescOp("none")).not.toBe(true);
    expect(isDescOp("is")).not.toBe(true);
    expect(isDescOp("not")).not.toBe(true);
    expect(isDescOp("OR")).not.toBe(true);
    expect(isDescOp("NOT")).not.toBe(true);
    expect(isDescOp("asc")).not.toBe(true);
    expect(isDescOp("whatever")).not.toBe(true);
});

test("LowerOp typeguard should narrow string to LowerOp", () => {
    expect(isLowerOp("lt")).toBe(true);
    expect(isLowerOp("lte")).toBe(true);

    expect(isLowerOp("eq")).not.toBe(true);
    expect(isLowerOp("gt")).not.toBe(true);
    expect(isLowerOp("gte")).not.toBe(true);
    expect(isLowerOp("like")).not.toBe(true);
    expect(isLowerOp("contains")).not.toBe(true);
    expect(isLowerOp("startswith")).not.toBe(true);
    expect(isLowerOp("endswith")).not.toBe(true);
    expect(isLowerOp("some")).not.toBe(true);
    expect(isLowerOp("all")).not.toBe(true);
    expect(isLowerOp("none")).not.toBe(true);
    expect(isLowerOp("is")).not.toBe(true);
    expect(isLowerOp("not")).not.toBe(true);
    expect(isLowerOp("OR")).not.toBe(true);
    expect(isLowerOp("NOT")).not.toBe(true);
    expect(isLowerOp("asc")).not.toBe(true);
    expect(isLowerOp("whatever")).not.toBe(true);
});

test("UpperOp typeguard should narrow string to UpperOp", () => {
    expect(isUpperOp("gt")).toBe(true);
    expect(isUpperOp("gte")).toBe(true);

    expect(isUpperOp("eq")).not.toBe(true);
    expect(isUpperOp("lt")).not.toBe(true);
    expect(isUpperOp("lte")).not.toBe(true);
    expect(isUpperOp("like")).not.toBe(true);
    expect(isUpperOp("contains")).not.toBe(true);
    expect(isUpperOp("startswith")).not.toBe(true);
    expect(isUpperOp("endswith")).not.toBe(true);
    expect(isUpperOp("some")).not.toBe(true);
    expect(isUpperOp("all")).not.toBe(true);
    expect(isUpperOp("none")).not.toBe(true);
    expect(isUpperOp("is")).not.toBe(true);
    expect(isUpperOp("not")).not.toBe(true);
    expect(isUpperOp("OR")).not.toBe(true);
    expect(isUpperOp("NOT")).not.toBe(true);
    expect(isUpperOp("asc")).not.toBe(true);
    expect(isUpperOp("desc")).not.toBe(true);
    expect(isUpperOp("whatever")).not.toBe(true);
});

test("NumericalOperator typeguard should narrow string to NumericalOperator", () => {
    expect(isNumericalOperator("eq")).toBe(true);
    expect(isNumericalOperator("lt")).toBe(true);
    expect(isNumericalOperator("lte")).toBe(true);
    expect(isNumericalOperator("gt")).toBe(true);
    expect(isNumericalOperator("gte")).toBe(true);

    expect(isNumericalOperator("like")).not.toBe(true);
    expect(isNumericalOperator("contains")).not.toBe(true);
    expect(isNumericalOperator("startswith")).not.toBe(true);
    expect(isNumericalOperator("endswith")).not.toBe(true);
    expect(isNumericalOperator("some")).not.toBe(true);
    expect(isNumericalOperator("all")).not.toBe(true);
    expect(isNumericalOperator("none")).not.toBe(true);
    expect(isNumericalOperator("is")).not.toBe(true);
    expect(isNumericalOperator("not")).not.toBe(true);
    expect(isNumericalOperator("OR")).not.toBe(true);
    expect(isNumericalOperator("NOT")).not.toBe(true);
    expect(isNumericalOperator("asc")).not.toBe(true);
    expect(isNumericalOperator("desc")).not.toBe(true);
    expect(isNumericalOperator("whatever")).not.toBe(true);
});

test("LiteralOperator typeguard should narrow string to LiteralOperator", () => {
    expect(isLiteralOperator("eq")).toBe(true);
    expect(isLiteralOperator("startswith")).toBe(true);
    expect(isLiteralOperator("endswith")).toBe(true);
    expect(isLiteralOperator("contains")).toBe(true);
    expect(isLiteralOperator("like")).toBe(true);
    
    expect(isLiteralOperator("lt")).not.toBe(true);
    expect(isLiteralOperator("lte")).not.toBe(true);
    expect(isLiteralOperator("gt")).not.toBe(true);
    expect(isLiteralOperator("gte")).not.toBe(true);
    expect(isLiteralOperator("some")).not.toBe(true);
    expect(isLiteralOperator("all")).not.toBe(true);
    expect(isLiteralOperator("none")).not.toBe(true);
    expect(isLiteralOperator("is")).not.toBe(true);
    expect(isLiteralOperator("not")).not.toBe(true);
    expect(isLiteralOperator("OR")).not.toBe(true);
    expect(isLiteralOperator("NOT")).not.toBe(true);
    expect(isLiteralOperator("asc")).not.toBe(true);
    expect(isLiteralOperator("desc")).not.toBe(true);
    expect(isLiteralOperator("whatever")).not.toBe(true);
});

test("BooleanOperator typeguard should narrow string to BooleanOperator", () => {
    expect(isBooleanOperator("eq")).toBe(true);
    expect(isBooleanOperator("is")).toBe(true);
    expect(isBooleanOperator("not")).toBe(true);
        
    expect(isBooleanOperator("lt")).not.toBe(true);
    expect(isBooleanOperator("lte")).not.toBe(true);
    expect(isBooleanOperator("gt")).not.toBe(true);
    expect(isBooleanOperator("gte")).not.toBe(true);
    expect(isBooleanOperator("like")).not.toBe(true);
    expect(isBooleanOperator("contains")).not.toBe(true);
    expect(isBooleanOperator("startswith")).not.toBe(true);
    expect(isBooleanOperator("endswith")).not.toBe(true);
    expect(isBooleanOperator("some")).not.toBe(true);
    expect(isBooleanOperator("all")).not.toBe(true);
    expect(isBooleanOperator("none")).not.toBe(true);
    expect(isBooleanOperator("OR")).not.toBe(true);
    expect(isBooleanOperator("NOT")).not.toBe(true);
    expect(isBooleanOperator("asc")).not.toBe(true);
    expect(isBooleanOperator("desc")).not.toBe(true);
    expect(isBooleanOperator("whatever")).not.toBe(true);
});

test("ListOperator typeguard should narrow string to ListOperator", () => {
    expect(isListOperator("some")).toBe(true);
    expect(isListOperator("all")).toBe(true);
    expect(isListOperator("none")).toBe(true);
        
    expect(isListOperator("eq")).not.toBe(true);
    expect(isListOperator("lt")).not.toBe(true);
    expect(isListOperator("lte")).not.toBe(true);
    expect(isListOperator("gt")).not.toBe(true);
    expect(isListOperator("gte")).not.toBe(true);
    expect(isListOperator("like")).not.toBe(true);
    expect(isListOperator("contains")).not.toBe(true);
    expect(isListOperator("startswith")).not.toBe(true);
    expect(isListOperator("endswith")).not.toBe(true);
    expect(isListOperator("is")).not.toBe(true);
    expect(isListOperator("not")).not.toBe(true);
    expect(isListOperator("OR")).not.toBe(true);
    expect(isListOperator("NOT")).not.toBe(true);
    expect(isListOperator("asc")).not.toBe(true);
    expect(isListOperator("desc")).not.toBe(true);
    expect(isListOperator("whatever")).not.toBe(true);
});

test("LogicalOperator typeguard should narrow string to LogicalOperator", () => {
    expect(isLogicalOperator("OR")).toBe(true);
    expect(isLogicalOperator("NOT")).toBe(true);
    
    expect(isLogicalOperator("eq")).not.toBe(true);
    expect(isLogicalOperator("lt")).not.toBe(true);
    expect(isLogicalOperator("lte")).not.toBe(true);
    expect(isLogicalOperator("gt")).not.toBe(true);
    expect(isLogicalOperator("gte")).not.toBe(true);
    expect(isLogicalOperator("like")).not.toBe(true);
    expect(isLogicalOperator("contains")).not.toBe(true);
    expect(isLogicalOperator("startswith")).not.toBe(true);
    expect(isLogicalOperator("endswith")).not.toBe(true);
    expect(isLogicalOperator("some")).not.toBe(true);
    expect(isLogicalOperator("all")).not.toBe(true);
    expect(isLogicalOperator("none")).not.toBe(true);
    expect(isLogicalOperator("is")).not.toBe(true);
    expect(isLogicalOperator("not")).not.toBe(true);
    expect(isLogicalOperator("asc")).not.toBe(true);
    expect(isLogicalOperator("desc")).not.toBe(true);
    expect(isLogicalOperator("whatever")).not.toBe(true);
});

test("OrderingOperator typeguard should narrow string to OrderingOperator", () => {
    expect(isOrderingOperator("asc")).toBe(true);
    expect(isOrderingOperator("desc")).toBe(true);
    
    expect(isOrderingOperator("eq")).not.toBe(true);
    expect(isOrderingOperator("lt")).not.toBe(true);
    expect(isOrderingOperator("lte")).not.toBe(true);
    expect(isOrderingOperator("gt")).not.toBe(true);
    expect(isOrderingOperator("gte")).not.toBe(true);
    expect(isOrderingOperator("like")).not.toBe(true);
    expect(isOrderingOperator("contains")).not.toBe(true);
    expect(isOrderingOperator("startswith")).not.toBe(true);
    expect(isOrderingOperator("endswith")).not.toBe(true);
    expect(isOrderingOperator("some")).not.toBe(true);
    expect(isOrderingOperator("all")).not.toBe(true);
    expect(isOrderingOperator("none")).not.toBe(true);
    expect(isOrderingOperator("is")).not.toBe(true);
    expect(isOrderingOperator("not")).not.toBe(true);
    expect(isOrderingOperator("OR")).not.toBe(true);
    expect(isOrderingOperator("NOT")).not.toBe(true);
    expect(isLogicalOperator("asc")).not.toBe(true);
    expect(isOrderingOperator("whatever")).not.toBe(true);
});


