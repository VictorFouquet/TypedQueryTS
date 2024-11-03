
//--------------------------------------------------------------------------- isCombinedLiteralOperation

import { test, expect } from "vitest";
import { isCombinedLiteralOperation, isLiteralOperation } from "../../../src/operation.type-guards";

test("isCombinedLiteralOperation should be false if value contains several LiteralOperator associated to strings", () => {
    expect(isCombinedLiteralOperation({ contains: "", startswith: "", endswith: "", like: "%" })).toBe(true);
    expect(isCombinedLiteralOperation({ contains: "", startswith: "", endswith: "" })).toBe(true);
    expect(isCombinedLiteralOperation({ contains: "", startswith: "", like: "%" })).toBe(true);
    expect(isCombinedLiteralOperation({ contains: "", startswith: "" })).toBe(true);
    expect(isCombinedLiteralOperation({ contains: "", endswith: "", like: "%" })).toBe(true);
    expect(isCombinedLiteralOperation({ contains: "", endswith: "" })).toBe(true);
    expect(isCombinedLiteralOperation({ contains: "", like: "%" })).toBe(true);

    expect(isCombinedLiteralOperation({ startswith: "", endswith: "", like: "%" })).toBe(true);
    expect(isCombinedLiteralOperation({ startswith: "", endswith: "" })).toBe(true);
    expect(isCombinedLiteralOperation({ startswith: "", like: "%" })).toBe(true);

    expect(isCombinedLiteralOperation({ endswith: "", like: "%" })).toBe(true);
});


test("isLiteralOperation should be false if value contains any combination of LiteralOperator with an invalid like", () => {
    expect(isCombinedLiteralOperation({ contains: "", startswith: "", endswith: "", like: "" })).toBe(false);
    expect(isCombinedLiteralOperation({ contains: "", startswith: "", like: "" })).toBe(false);
    expect(isCombinedLiteralOperation({ contains: "", endswith: "", like: "" })).toBe(false);
    expect(isCombinedLiteralOperation({ contains: "", like: "" })).toBe(false);
    expect(isCombinedLiteralOperation({ startswith: "", endswith: "", like: "" })).toBe(false);
    expect(isCombinedLiteralOperation({ startswith: "", like: "" })).toBe(false);
    expect(isCombinedLiteralOperation({ endswith: "", like: "" })).toBe(false);
});

test("isCombinedLiteralOperation should be false if value contains combination of LiteralOperator including 'eq' associated to strings", () => {
    expect(isCombinedLiteralOperation({ contains: "", startswith: "", endswith: "", like: "%", eq: "" })).toBe(false);
    expect(isCombinedLiteralOperation({ contains: "", startswith: "", endswith: "", eq: "" })).toBe(false);
    expect(isCombinedLiteralOperation({ contains: "", startswith: "", like: "%", eq: "" })).toBe(false);
    expect(isCombinedLiteralOperation({ contains: "", startswith: "", eq: "" })).toBe(false);
    expect(isCombinedLiteralOperation({ contains: "", eq: "" })).toBe(false);

    expect(isCombinedLiteralOperation({ startswith: "", eq: "" })).toBe(false);
    expect(isCombinedLiteralOperation({ endswith: "", eq: "" })).toBe(false);
    expect(isCombinedLiteralOperation({ like: "%", eq: "" })).toBe(false);
});


//--------------------------------------------------------------------------- isCombinedLiteralOperation

test("isLiteralOperation should be true if value contains any combination of LiteralOperator associated to strings", () => {
    expect(isLiteralOperation({ contains: "", startswith: "", endswith: "", like: "%" })).toBe(true);
    expect(isLiteralOperation({ contains: "", startswith: "", endswith: "" })).toBe(true);
    expect(isLiteralOperation({ contains: "", startswith: "", like: "%" })).toBe(true);
    expect(isLiteralOperation({ contains: "", startswith: "" })).toBe(true);
    expect(isLiteralOperation({ contains: "", endswith: "", like: "%" })).toBe(true);
    expect(isLiteralOperation({ contains: "", endswith: "" })).toBe(true);
    expect(isLiteralOperation({ contains: "", like: "%" })).toBe(true);

    expect(isLiteralOperation({ startswith: "", endswith: "", like: "%" })).toBe(true);
    expect(isLiteralOperation({ startswith: "", endswith: "" })).toBe(true);
    expect(isLiteralOperation({ startswith: "", like: "%" })).toBe(true);

    expect(isLiteralOperation({ endswith: "", like: "%" })).toBe(true);
});

test("isLiteralOperation should be false if value contains any combination of LiteralOperator with an invalid like", () => {
    expect(isLiteralOperation({ contains: "", startswith: "", endswith: "", like: "" })).toBe(false);
    expect(isLiteralOperation({ contains: "", startswith: "", like: "" })).toBe(false);
    expect(isLiteralOperation({ contains: "", endswith: "", like: "" })).toBe(false);
    expect(isLiteralOperation({ contains: "", like: "" })).toBe(false);
    expect(isLiteralOperation({ startswith: "", endswith: "", like: "" })).toBe(false);
    expect(isLiteralOperation({ startswith: "", like: "" })).toBe(false);
    expect(isLiteralOperation({ endswith: "", like: "" })).toBe(false);
});

test("isLiteralOperation should be false if value contains combination of LiteralOperator including 'eq' associated to strings", () => {
    expect(isLiteralOperation({ contains: "", startswith: "", endswith: "", like: "%", eq: "" })).toBe(false);
    expect(isLiteralOperation({ contains: "", startswith: "", endswith: "", eq: "" })).toBe(false);
    expect(isLiteralOperation({ contains: "", startswith: "", like: "%", eq: "" })).toBe(false);
    expect(isLiteralOperation({ contains: "", startswith: "", eq: "" })).toBe(false);
    expect(isLiteralOperation({ contains: "", eq: "" })).toBe(false);

    expect(isLiteralOperation({ startswith: "", eq: "" })).toBe(false);
    expect(isLiteralOperation({ endswith: "", eq: "" })).toBe(false);
    expect(isLiteralOperation({ like: "%", eq: "" })).toBe(false);
});
