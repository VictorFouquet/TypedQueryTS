//--------------------------------------------------------------------------- isDoubleNumericalOperation

import { test, expect } from "vitest";
import { isDoubleNumericalOperation, isLtGtOperation, isLteGtOperation, isLtGteOperation, isLteGteOperation } from "../../src/operation.type-guards";

test("isDoubleNumericalOperation should be true if value contains two NumericalOperator associated to a number with upper and lower bound", () => {
    expect(isDoubleNumericalOperation({ lt: 0, gt: 0 })).toBe(true);
    expect(isDoubleNumericalOperation({ lt: 0, gte: 0 })).toBe(true);

    expect(isDoubleNumericalOperation({ lte: 0, gt: 0 })).toBe(true);
    expect(isDoubleNumericalOperation({ lte: 0, gte: 0 })).toBe(true);
});

test("isDoubleNumericalOperation should be false if value contains two NumericalOperator associated to a number with 2 bounds of same type", () => {
    expect(isDoubleNumericalOperation({ lt: 0, lte: 0 })).toBe(false);
    expect(isDoubleNumericalOperation({ gt: 0, gte: 0 })).toBe(false);
});

test("isDoubleNumericalOperation should be false if value contains two NumericalOperator associated to a number with an eq operator", () => {
    expect(isDoubleNumericalOperation({ eq: 0, lt: 0 })).toBe(false);
    expect(isDoubleNumericalOperation({ eq: 0, lte: 0 })).toBe(false);
    expect(isDoubleNumericalOperation({ eq: 0, gt: 0 })).toBe(false);
    expect(isDoubleNumericalOperation({ eq: 0, gte: 0 })).toBe(false);
});

test("isDoubleNumericalOperation should be true if value contains two NumericalOperator associated to a Date with upper and lower bound", () => {
    expect(isDoubleNumericalOperation({ lt: new Date(), gt: new Date() })).toBe(true);
    expect(isDoubleNumericalOperation({ lt: new Date(), gte: new Date() })).toBe(true);

    expect(isDoubleNumericalOperation({ lte: new Date(), gt: new Date() })).toBe(true);
    expect(isDoubleNumericalOperation({ lte: new Date(), gte: new Date() })).toBe(true);
});

test("isDoubleNumericalOperation should be false if value contains two NumericalOperator associated to a Date with 2 bounds of same type", () => {
    expect(isDoubleNumericalOperation({ lt: new Date(), lte: new Date() })).toBe(false);
    expect(isDoubleNumericalOperation({ gt: new Date(), gte: new Date() })).toBe(false);
});

test("isDoubleNumericalOperation should be false if value contains two NumericalOperator associated to a Date with an eq operator", () => {
    expect(isDoubleNumericalOperation({ eq: new Date(), lt: new Date() })).toBe(false);
    expect(isDoubleNumericalOperation({ eq: new Date(), lte: new Date() })).toBe(false);
    expect(isDoubleNumericalOperation({ eq: new Date(), gt: new Date() })).toBe(false);
    expect(isDoubleNumericalOperation({ eq: new Date(), gte: new Date() })).toBe(false);
});

test("isDoubleNumericalOperation should be false if value contains more than 2 NumericalOperator keys", () => {
    expect(isDoubleNumericalOperation({ gt: 0, lt: 0, eq: 0 })).toBe(false);
    expect(isDoubleNumericalOperation({ gt: new Date(), lt: new Date(), eq: 0 })).toBe(false);
    expect(isDoubleNumericalOperation({ gt: 0, lt: 0, gte: 0 })).toBe(false);
    expect(isDoubleNumericalOperation({ gt: new Date(), lt: new Date(), gte: 0 })).toBe(false);
    expect(isDoubleNumericalOperation({ gt: 0, lt: new Date(), gte: new Date() })).toBe(false);
});

test("isDoubleNumericalOperation should be false if value is an empty object or not an object", () => {
    expect(isDoubleNumericalOperation({})).toBe(false);
    expect(isDoubleNumericalOperation([])).toBe(false);
    expect(isDoubleNumericalOperation(true)).toBe(false);
    expect(isDoubleNumericalOperation(new Date())).toBe(false);
    expect(isDoubleNumericalOperation(0)).toBe(false);
    expect(isDoubleNumericalOperation("")).toBe(false);
    expect(isDoubleNumericalOperation(null)).toBe(false);
    expect(isDoubleNumericalOperation(undefined)).toBe(false);
});

//--------------------------------------------------------------------------- isLtGtOperation

test("isLtGtOperation should be true if value contains the lt and gt keys associated to a number", () => {
    expect(isLtGtOperation({ lt: 0, gt: 0 })).toBe(true);
});

test("isLtGtOperation should be true if value contains the lt and gt keys associated to a date", () => {
    expect(isLtGtOperation({ lt: new Date(), gt: new Date() })).toBe(true);
});

test("isLtGtOperation should overlap isDoubleNumericalOperation", () => {
    let value: Record<string, number|Date> 
    
    value = { gt: 5, lt: 10 };

    if (isDoubleNumericalOperation(value)) {
        if (isLtGtOperation(value)) {
            expect(value.lt).toBe(10);
            expect(value.gt).toBe(5);
        } else {
            expect(false).toBe(true);
        }
    } else {
        expect(false).toBe(true);
    }
});

test("isLtGtOperation should be false if given any other NumericalOperator than lt/gt", () => {
    expect(isLtGtOperation({ lt: 0, lte: 0 })).toBe(false);
    expect(isLtGtOperation({ lt: 0, gte: 0 })).toBe(false);
    expect(isLtGtOperation({ lt: 0, eq:  0 })).toBe(false);
    expect(isLtGtOperation({ gt: 0, lte: 0 })).toBe(false);
    expect(isLtGtOperation({ gt: 0, gte: 0 })).toBe(false);
    expect(isLtGtOperation({ gt: 0, eq:  0 })).toBe(false);

    expect(isLtGtOperation({ lt: new Date(), lte: new Date() })).toBe(false);
    expect(isLtGtOperation({ lt: new Date(), gte: new Date() })).toBe(false);
    expect(isLtGtOperation({ lt: new Date(), eq:  new Date() })).toBe(false);
    expect(isLtGtOperation({ gt: new Date(), lte: new Date() })).toBe(false);
    expect(isLtGtOperation({ gt: new Date(), gte: new Date() })).toBe(false);
    expect(isLtGtOperation({ gt: new Date(), eq:  new Date() })).toBe(false);
});

test("isLtGtOperation should be false if value is an empty object or not an object", () => {
    expect(isLtGtOperation({})).toBe(false);
    expect(isLtGtOperation([])).toBe(false);
    expect(isLtGtOperation(true)).toBe(false);
    expect(isLtGtOperation(new Date())).toBe(false);
    expect(isLtGtOperation(0)).toBe(false);
    expect(isLtGtOperation("")).toBe(false);
    expect(isLtGtOperation(null)).toBe(false);
    expect(isLtGtOperation(undefined)).toBe(false);
});

//--------------------------------------------------------------------------- isLteGtOperation

test("isLteGtOperation should be true if value contains the lte and gt keys associated to a number", () => {
    expect(isLteGtOperation({ lte: 0, gt: 0 })).toBe(true);
});

test("isLteGtOperation should be true if value contains the lte and gt keys associated to a date", () => {
    expect(isLteGtOperation({ lte: new Date(), gt: new Date() })).toBe(true);
});

test("isLteGtOperation should overlap isDoubleNumericalOperation", () => {
    let value: Record<string, number|Date> 
    
    value = { gt: 5, lte: 10 };

    if (isDoubleNumericalOperation(value)) {
        if (isLteGtOperation(value)) {
            expect(value.lte).toBe(10);
            expect(value.gt).toBe(5);
        } else {
            expect(false).toBe(true);
        }
    } else {
        expect(false).toBe(true);
    }
});

test("isLteGtOperation should be false if given any other NumericalOperator than lt/gt", () => {
    expect(isLteGtOperation({ lte: 0, lt:  0 })).toBe(false);
    expect(isLteGtOperation({ lte: 0, gte: 0 })).toBe(false);
    expect(isLteGtOperation({ lte: 0, eq:  0 })).toBe(false);
    expect(isLteGtOperation({ gt:  0, lt:  0 })).toBe(false);
    expect(isLteGtOperation({ gt:  0, gte: 0 })).toBe(false);
    expect(isLteGtOperation({ gt:  0, eq:  0 })).toBe(false);

    expect(isLteGtOperation({ lte: new Date(), lt:  new Date() })).toBe(false);
    expect(isLteGtOperation({ lte: new Date(), gte: new Date() })).toBe(false);
    expect(isLteGtOperation({ lte: new Date(), eq:  new Date() })).toBe(false);
    expect(isLteGtOperation({ gt:  new Date(), lt:  new Date() })).toBe(false);
    expect(isLteGtOperation({ gt:  new Date(), gte: new Date() })).toBe(false);
    expect(isLteGtOperation({ gt:  new Date(), eq:  new Date() })).toBe(false);
});

test("isLteGtOperation should be false if value is an empty object or not an object", () => {
    expect(isLteGtOperation({})).toBe(false);
    expect(isLteGtOperation([])).toBe(false);
    expect(isLteGtOperation(true)).toBe(false);
    expect(isLteGtOperation(new Date())).toBe(false);
    expect(isLteGtOperation(0)).toBe(false);
    expect(isLteGtOperation("")).toBe(false);
    expect(isLteGtOperation(null)).toBe(false);
    expect(isLteGtOperation(undefined)).toBe(false);
});

//--------------------------------------------------------------------------- isLtGteOperation

test("isLtGteOperation should be true if value contains the lt and gte keys associated to a number", () => {
    expect(isLtGteOperation({ lt: 0, gte: 0 })).toBe(true);
});

test("isLtGteOperation should be true if value contains the lt and gte keys associated to a date", () => {
    expect(isLtGteOperation({ lt: new Date(), gte: new Date() })).toBe(true);
});

test("isLtGteOperation should overlap isDoubleNumericalOperation", () => {
    let value: Record<string, number|Date> 
    
    value = { gte: 5, lt: 10 };

    if (isDoubleNumericalOperation(value)) {
        if (isLtGteOperation(value)) {
            expect(value.lt).toBe(10);
            expect(value.gte).toBe(5);
        } else {
            expect(false).toBe(true);
        }
    } else {
        expect(false).toBe(true);
    }
});

test("isLtGteOperation should be false if given any other NumericalOperator than lt/gte", () => {
    expect(isLtGteOperation({ lt:  0, lte: 0 })).toBe(false);
    expect(isLtGteOperation({ lt:  0, gt:  0 })).toBe(false);
    expect(isLtGteOperation({ lt:  0, eq:  0 })).toBe(false);
    expect(isLtGteOperation({ gte: 0, lte: 0 })).toBe(false);
    expect(isLtGteOperation({ gte: 0, gt:  0 })).toBe(false);
    expect(isLtGteOperation({ gte: 0, eq:  0 })).toBe(false);

    expect(isLtGteOperation({ lt:  new Date(), lte: new Date() })).toBe(false);
    expect(isLtGteOperation({ lt:  new Date(), gt:  new Date() })).toBe(false);
    expect(isLtGteOperation({ lt:  new Date(), eq:  new Date() })).toBe(false);
    expect(isLtGteOperation({ gte: new Date(), lte: new Date() })).toBe(false);
    expect(isLtGteOperation({ gte: new Date(), gt:  new Date() })).toBe(false);
    expect(isLtGteOperation({ gte: new Date(), eq:  new Date() })).toBe(false);
});

test("isLtGteOperation should be false if value is an empty object or not an object", () => {
    expect(isLtGteOperation({})).toBe(false);
    expect(isLtGteOperation([])).toBe(false);
    expect(isLtGteOperation(true)).toBe(false);
    expect(isLtGteOperation(new Date())).toBe(false);
    expect(isLtGteOperation(0)).toBe(false);
    expect(isLtGteOperation("")).toBe(false);
    expect(isLtGteOperation(null)).toBe(false);
    expect(isLtGteOperation(undefined)).toBe(false);
});

//--------------------------------------------------------------------------- isLteGteOperation

test("isLteGteOperation should be true if value contains the lt and gte keys associated to a number", () => {
    expect(isLteGteOperation({ lte: 0, gte: 0 })).toBe(true);
});

test("isLteGteOperation should be true if value contains the lt and gte keys associated to a date", () => {
    expect(isLteGteOperation({ lte: new Date(), gte: new Date() })).toBe(true);
});

test("isLteGteOperation should overlap isDoubleNumericalOperation", () => {
    let value: Record<string, number|Date> 
    
    value = { gte: 5, lte: 10 };

    if (isDoubleNumericalOperation(value)) {
        if (isLteGteOperation(value)) {
            expect(value.lte).toBe(10);
            expect(value.gte).toBe(5);
        } else {
            expect(false).toBe(true);
        }
    } else {
        expect(false).toBe(true);
    }
});

test("isLteGteOperation should be false if given any other NumericalOperator than lt/gte", () => {
    expect(isLteGteOperation({ lte: 0, lt: 0 })).toBe(false);
    expect(isLteGteOperation({ lte: 0, gt: 0 })).toBe(false);
    expect(isLteGteOperation({ lte: 0, eq: 0 })).toBe(false);
    expect(isLteGteOperation({ gte: 0, lt: 0 })).toBe(false);
    expect(isLteGteOperation({ gte: 0, gt: 0 })).toBe(false);
    expect(isLteGteOperation({ gte: 0, eq: 0 })).toBe(false);

    expect(isLteGteOperation({ lte: new Date(), lt: new Date() })).toBe(false);
    expect(isLteGteOperation({ lte: new Date(), gt: new Date() })).toBe(false);
    expect(isLteGteOperation({ lte: new Date(), eq: new Date() })).toBe(false);
    expect(isLteGteOperation({ gte: new Date(), lt: new Date() })).toBe(false);
    expect(isLteGteOperation({ gte: new Date(), gt: new Date() })).toBe(false);
    expect(isLteGteOperation({ gte: new Date(), eq: new Date() })).toBe(false);
});

test("isLteGteOperation should be false if value is an empty object or not an object", () => {
    expect(isLteGteOperation({})).toBe(false);
    expect(isLteGteOperation([])).toBe(false);
    expect(isLteGteOperation(true)).toBe(false);
    expect(isLteGteOperation(new Date())).toBe(false);
    expect(isLteGteOperation(0)).toBe(false);
    expect(isLteGteOperation("")).toBe(false);
    expect(isLteGteOperation(null)).toBe(false);
    expect(isLteGteOperation(undefined)).toBe(false);
});
