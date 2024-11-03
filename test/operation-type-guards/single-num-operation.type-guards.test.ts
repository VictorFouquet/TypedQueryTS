//--------------------------------------------------------------------------- isSingleNumericalOperation

import { test, expect } from "vitest";
import { isSingleNumericalOperation, isLtOperation, isGtOperation, isLteOperation, isGteOperation, isEqNumOperation } from "../../src/operation.type-guards";

test("isSingleNumericalOperation should be true if value contains one NumericalOperator associated to a number", () => {
    expect(isSingleNumericalOperation({ lt: 0 })).toBe(true);
    expect(isSingleNumericalOperation({ lte: 0 })).toBe(true);
    expect(isSingleNumericalOperation({ gt: 0 })).toBe(true);
    expect(isSingleNumericalOperation({ gte: 0 })).toBe(true);
    expect(isSingleNumericalOperation({ eq: 0 })).toBe(true);
});

test("isSingleNumericalOperation should be true if value contains one NumericalOperator associated to a date", () => {
    expect(isSingleNumericalOperation({ lt: new Date() })).toBe(true);
    expect(isSingleNumericalOperation({ lte: new Date() })).toBe(true);
    expect(isSingleNumericalOperation({ gt: new Date() })).toBe(true);
    expect(isSingleNumericalOperation({ gte: new Date() })).toBe(true);
    expect(isSingleNumericalOperation({ eq: new Date() })).toBe(true);
});

test("isSingleNumericalOperation should be false if value contains several NumericalOperator keys", () => {
    expect(isSingleNumericalOperation({ gt: 0, lt: 0 })).toBe(false);
    expect(isSingleNumericalOperation({ gt: new Date(), lt: new Date() })).toBe(false);
    expect(isSingleNumericalOperation({ gt: 0, lt: new Date() })).toBe(false);
});

test("isSingleNumericalOperation should be false if value is an empty object or not an object", () => {
    expect(isSingleNumericalOperation({})).toBe(false);
    expect(isSingleNumericalOperation([])).toBe(false);
    expect(isSingleNumericalOperation(true)).toBe(false);
    expect(isSingleNumericalOperation(new Date())).toBe(false);
    expect(isSingleNumericalOperation(0)).toBe(false);
    expect(isSingleNumericalOperation("")).toBe(false);
    expect(isSingleNumericalOperation(null)).toBe(false);
    expect(isSingleNumericalOperation(undefined)).toBe(false);
});

test("isSingleNumericalOperation should be true if value contains one NumericalOperator associated to a number", () => {
    expect(isSingleNumericalOperation({ lt: 0 })).toBe(true);
    expect(isSingleNumericalOperation({ lte: 0 })).toBe(true);
    expect(isSingleNumericalOperation({ gt: 0 })).toBe(true);
    expect(isSingleNumericalOperation({ gte: 0 })).toBe(true);
    expect(isSingleNumericalOperation({ eq: 0 })).toBe(true);
});

test("isSingleNumericalOperation should be true if value contains one NumericalOperator associated to a date", () => {
    expect(isSingleNumericalOperation({ lt: new Date() })).toBe(true);
    expect(isSingleNumericalOperation({ lte: new Date() })).toBe(true);
    expect(isSingleNumericalOperation({ gt: new Date() })).toBe(true);
    expect(isSingleNumericalOperation({ gte: new Date() })).toBe(true);
    expect(isSingleNumericalOperation({ eq: new Date() })).toBe(true);
});

test("isSingleNumericalOperation should be false if value contains several NumericalOperator keys", () => {
    expect(isSingleNumericalOperation({ gt: 0, lt: 0 })).toBe(false);
    expect(isSingleNumericalOperation({ gt: new Date(), lt: new Date() })).toBe(false);
    expect(isSingleNumericalOperation({ gt: 0, lt: new Date() })).toBe(false);
});

test("isSingleNumericalOperation should be false if value is an empty object or not an object", () => {
    expect(isSingleNumericalOperation({})).toBe(false);
    expect(isSingleNumericalOperation([])).toBe(false);
    expect(isSingleNumericalOperation(true)).toBe(false);
    expect(isSingleNumericalOperation(new Date())).toBe(false);
    expect(isSingleNumericalOperation(0)).toBe(false);
    expect(isSingleNumericalOperation("")).toBe(false);
    expect(isSingleNumericalOperation(null)).toBe(false);
    expect(isSingleNumericalOperation(undefined)).toBe(false);
});

//--------------------------------------------------------------------------- isLtOperation

test("isLtOperation should be true if value contains the lt key associated to a number", () => {
    expect(isLtOperation({ lt: 0 })).toBe(true);
});

test("isLtOperation should be true if value contains the lt key associated to a date", () => {
    expect(isLtOperation({ lt: new Date() })).toBe(true);
});

test("isLtOperation should overlap isSingleNumericalOperation", () => {
    let value: Record<string, number|Date> 
    
    value = { lt: 5 };

    if (isSingleNumericalOperation(value)) {
        if (isLtOperation(value)) {
            expect(value.lt).toBe(5);
        } else {
            expect(false).toBe(true);
        }
    } else {
        expect(false).toBe(true);
    }
});

test("isLtOperation should be false if given any other NumericalOperator than lt", () => {

    expect(isLtOperation({ lte: 0 })).toBe(false);
    expect(isLtOperation({ gt: 0 })).toBe(false);
    expect(isLtOperation({ gte: 0 })).toBe(false);
    expect(isLtOperation({ eq: 0 })).toBe(false);

    expect(isLtOperation({ lte: new Date() })).toBe(false);
    expect(isLtOperation({ gt: new Date() })).toBe(false);
    expect(isLtOperation({ gte: new Date() })).toBe(false);
    expect(isLtOperation({ eq: new Date() })).toBe(false);
});

test("isLtOperation should be false if value is an empty object or not an object", () => {
    expect(isLtOperation({})).toBe(false);
    expect(isLtOperation([])).toBe(false);
    expect(isLtOperation(true)).toBe(false);
    expect(isLtOperation(new Date())).toBe(false);
    expect(isLtOperation(0)).toBe(false);
    expect(isLtOperation("")).toBe(false);
    expect(isLtOperation(null)).toBe(false);
    expect(isLtOperation(undefined)).toBe(false);
});

//--------------------------------------------------------------------------- isGtOperation

test("isGtOperation should be true if value contains the lt key associated to a number", () => {
    expect(isGtOperation({ gt: 0 })).toBe(true);
});

test("isGtOperation should be true if value contains the lt key associated to a date", () => {
    expect(isGtOperation({ gt: new Date() })).toBe(true);
});

test("isGtOperation should overlap isSingleNumericalOperation", () => {
    let value: Record<string, number|Date> 
    
    value = { gt: 5 };

    if (isSingleNumericalOperation(value)) {
        if (isGtOperation(value)) {
            expect(value.gt).toBe(5);
        } else {
            expect(false).toBe(true);
        }
    } else {
        expect(false).toBe(true);
    }
});

test("isGtOperation should be false if given any other NumericalOperator than lt", () => {
    expect(isGtOperation({ lt: 0 })).toBe(false);
    expect(isGtOperation({ lte: 0 })).toBe(false);
    expect(isGtOperation({ gte: 0 })).toBe(false);
    expect(isGtOperation({ eq: 0 })).toBe(false);

    expect(isGtOperation({ lt: new Date() })).toBe(false);
    expect(isGtOperation({ lte: new Date() })).toBe(false);
    expect(isGtOperation({ gte: new Date() })).toBe(false);
    expect(isGtOperation({ eq: new Date() })).toBe(false);
});

test("isGtOperation should be false if value is an empty object or not an object", () => {
    expect(isGtOperation({})).toBe(false);
    expect(isGtOperation([])).toBe(false);
    expect(isGtOperation(true)).toBe(false);
    expect(isGtOperation(new Date())).toBe(false);
    expect(isGtOperation(0)).toBe(false);
    expect(isGtOperation("")).toBe(false);
    expect(isGtOperation(null)).toBe(false);
    expect(isGtOperation(undefined)).toBe(false);
});

//--------------------------------------------------------------------------- isLteOperation

test("isLteOperation should be true if value contains the lt key associated to a number", () => {
    expect(isLteOperation({ lte: 0 })).toBe(true);
});

test("isLteOperation should be true if value contains the lt key associated to a date", () => {
    expect(isLteOperation({ lte: new Date() })).toBe(true);
});

test("isLteOperation should overlap isSingleNumericalOperation", () => {
    let value: Record<string, number|Date> 
    
    value = { lte: 5 };

    if (isSingleNumericalOperation(value)) {
        if (isLteOperation(value)) {
            expect(value.lte).toBe(5);
        } else {
            expect(false).toBe(true);
        }
    } else {
        expect(false).toBe(true);
    }
});

test("isLteOperation should be false if given any other NumericalOperator than lt", () => {

    expect(isLteOperation({ lt: 0 })).toBe(false);
    expect(isLteOperation({ gt: 0 })).toBe(false);
    expect(isLteOperation({ gte: 0 })).toBe(false);
    expect(isLteOperation({ eq: 0 })).toBe(false);

    expect(isLteOperation({ lt: new Date() })).toBe(false);
    expect(isLteOperation({ gt: new Date() })).toBe(false);
    expect(isLteOperation({ gte: new Date() })).toBe(false);
    expect(isLteOperation({ eq: new Date() })).toBe(false);
});

test("isLteOperation should be false if value is an empty object or not an object", () => {
    expect(isLteOperation({})).toBe(false);
    expect(isLteOperation([])).toBe(false);
    expect(isLteOperation(true)).toBe(false);
    expect(isLteOperation(new Date())).toBe(false);
    expect(isLteOperation(0)).toBe(false);
    expect(isLteOperation("")).toBe(false);
    expect(isLteOperation(null)).toBe(false);
    expect(isLteOperation(undefined)).toBe(false);
});

//--------------------------------------------------------------------------- isGteOperation

test("isGteOperation should be true if value contains the lt key associated to a number", () => {
    expect(isGteOperation({ gte: 0 })).toBe(true);
});

test("isGteOperation should be true if value contains the lt key associated to a date", () => {
    expect(isGteOperation({ gte: new Date() })).toBe(true);
});

test("isGteOperation should overlap isSingleNumericalOperation", () => {
    let value: Record<string, number|Date> 
    
    value = { gte: 5 };

    if (isSingleNumericalOperation(value)) {
        if (isGteOperation(value)) {
            expect(value.gte).toBe(5);
        } else {
            expect(false).toBe(true);
        }
    } else {
        expect(false).toBe(true);
    }
});

test("isGteOperation should be false if given any other NumericalOperator than lt", () => {

    expect(isGteOperation({ lt: 0 })).toBe(false);
    expect(isGteOperation({ gt: 0 })).toBe(false);
    expect(isGteOperation({ lte: 0 })).toBe(false);
    expect(isGteOperation({ eq: 0 })).toBe(false);

    expect(isGteOperation({ lt: new Date() })).toBe(false);
    expect(isGteOperation({ gt: new Date() })).toBe(false);
    expect(isGteOperation({ lte: new Date() })).toBe(false);
    expect(isGteOperation({ eq: new Date() })).toBe(false);
});

test("isGteOperation should be false if value is an empty object or not an object", () => {
    expect(isGteOperation({})).toBe(false);
    expect(isGteOperation([])).toBe(false);
    expect(isGteOperation(true)).toBe(false);
    expect(isGteOperation(new Date())).toBe(false);
    expect(isGteOperation(0)).toBe(false);
    expect(isGteOperation("")).toBe(false);
    expect(isGteOperation(null)).toBe(false);
    expect(isGteOperation(undefined)).toBe(false);
});

//--------------------------------------------------------------------------- isEqNumOperation

test("isEqNumOperation should be true if value contains the lt key associated to a number", () => {
    expect(isEqNumOperation({ eq: 0 })).toBe(true);
});

test("isEqNumOperation should be true if value contains the lt key associated to a date", () => {
    expect(isEqNumOperation({ eq: new Date() })).toBe(true);
});

test("isEqNumOperation should overlap isSingleNumericalOperation", () => {
    let value: Record<string, number|Date> 
    
    value = { eq: 5 };

    if (isSingleNumericalOperation(value)) {
        if (isEqNumOperation(value)) {
            expect(value.eq).toBe(5);
        } else {
            expect(false).toBe(true);
        }
    } else {
        expect(false).toBe(true);
    }
});

test("isEqNumOperation should be false if given any other NumericalOperator than lt", () => {
    expect(isEqNumOperation({ lt: 0 })).toBe(false);
    expect(isEqNumOperation({ gt: 0 })).toBe(false);
    expect(isEqNumOperation({ lte: 0 })).toBe(false);
    expect(isEqNumOperation({ gte: 0 })).toBe(false);

    expect(isEqNumOperation({ lt: new Date() })).toBe(false);
    expect(isEqNumOperation({ gt: new Date() })).toBe(false);
    expect(isEqNumOperation({ lte: new Date() })).toBe(false);
    expect(isEqNumOperation({ gte: new Date() })).toBe(false);
});

test("isEqNumOperation should be false if value is an empty object or not an object", () => {
    expect(isEqNumOperation({})).toBe(false);
    expect(isEqNumOperation([])).toBe(false);
    expect(isEqNumOperation(true)).toBe(false);
    expect(isEqNumOperation(new Date())).toBe(false);
    expect(isEqNumOperation(0)).toBe(false);
    expect(isEqNumOperation("")).toBe(false);
    expect(isEqNumOperation(null)).toBe(false);
    expect(isEqNumOperation(undefined)).toBe(false);
});
