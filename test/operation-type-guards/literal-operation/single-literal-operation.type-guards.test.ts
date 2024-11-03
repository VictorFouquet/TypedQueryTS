
import { test, expect } from "vitest";
import { isCombinedLiteralOperation, isContainsOperation, isEndsWithOperation, isEqLiteralOperation, isLikeOperation, isLiteralOperation, isSingleLiteralOperation, isStartsWithOperation } from "../../../src/operation.type-guards";


//--------------------------------------------------------------------------- isSingleLiteralOperation

test("isSingleLiteralOperation should be true if value contains exactly one LiteralOperator associated to a string", () => {
    expect(isSingleLiteralOperation({ contains: "" })).toBe(true);
    expect(isSingleLiteralOperation({ startswith: "" })).toBe(true);
    expect(isSingleLiteralOperation({ endswith: "" })).toBe(true);
    expect(isSingleLiteralOperation({ like: "%" })).toBe(true);
    expect(isSingleLiteralOperation({ eq: "" })).toBe(true);
});

test("isSingleLiteralOperation should be false if value contains several LiteralOperator associated to strings", () => {
    expect(isSingleLiteralOperation({ contains: "", startswith: "", endswith: "", like: "%" })).toBe(false);
    expect(isSingleLiteralOperation({ contains: "", startswith: "", endswith: "" })).toBe(false);
    expect(isSingleLiteralOperation({ contains: "", startswith: "", like: "%" })).toBe(false);
    expect(isSingleLiteralOperation({ contains: "", startswith: "" })).toBe(false);
    expect(isSingleLiteralOperation({ contains: "", endswith: "", like: "%" })).toBe(false);
    expect(isSingleLiteralOperation({ contains: "", endswith: "" })).toBe(false);
    expect(isSingleLiteralOperation({ contains: "", like: "%" })).toBe(false);

    expect(isSingleLiteralOperation({ startswith: "", endswith: "", like: "%" })).toBe(false);
    expect(isSingleLiteralOperation({ startswith: "", endswith: "" })).toBe(false);
    expect(isSingleLiteralOperation({ startswith: "", like: "%" })).toBe(false);

    expect(isSingleLiteralOperation({ endswith: "", like: "%" })).toBe(false);
});


//--------------------------------------------------------------------------- isEqLiteralOperation

test("isEqLiteralOperation should be true if value contains exactly one LiteralOperator being 'eq' associated to a string", () => {
    expect(isEqLiteralOperation({ eq: "" })).toBe(true);
});

test("isEqLiteralOperation should be false if value contains exactly one LiteralOperator not being 'eq' associated to a string", () => {
    expect(isEqLiteralOperation({ like: "%" })).toBe(false);
    expect(isEqLiteralOperation({ contains: "" })).toBe(false);
    expect(isEqLiteralOperation({ startswith: "" })).toBe(false);
    expect(isEqLiteralOperation({ endswith: "" })).toBe(false);
});

test("isEqLiteralOperation should be false if value contains several LiteralOperator including 'eq' associated to strings", () => {
    expect(isEqLiteralOperation({ eq: "", like: "%" })).toBe(false);
    expect(isEqLiteralOperation({ eq: "", contains: "" })).toBe(false);
    expect(isEqLiteralOperation({ eq: "", startswith: "" })).toBe(false);
    expect(isEqLiteralOperation({ eq: "", endswith: "" })).toBe(false);
});

test("isEqLiteralOperation should overlap isSingleLiteralOperation", () => {
    const value: Record<string, string> = {
        eq: "abc"
    };
    if (isSingleLiteralOperation(value)) {
        if (isEqLiteralOperation(value)) {
            expect(value.eq).toBe("abc");
            // @ts-expect-error
            expect(value.contain).toBe(undefined);
            // @ts-expect-error
            expect(value.like).toBe(undefined);
            // @ts-expect-error
            expect(value.startswith).toBe(undefined);
            // @ts-expect-error
            expect(value.endswith).toBe(undefined);
        } else {
            expect(true).toBe(false);
        }
    } else {
        expect(true).toBe(false);
    }
});

test("isEqLiteralOperation should not overlap isCombinedLiteralOperation", () => {
    const value: Record<string, string> = {
        eq: "abc"
    };
    if (isCombinedLiteralOperation(value)) {
        if (isEqLiteralOperation(value)) {
            expect(true).toBe(false);
        } else {
            expect(true).toBe(false);
        }
    } else if (isEqLiteralOperation(value)) {
        expect(value.eq).toBe("abc");
    } else {
        expect(true).toBe(false);
    }
});


//--------------------------------------------------------------------------- isContainsOperation

test("isContainsOperation should be true if value contains exactly one LiteralOperator being 'contains' associated to a string", () => {
    expect(isContainsOperation({ contains: "" })).toBe(true);
});

test("isContainsOperation should be false if value contains exactly one LiteralOperator not being 'contains' associated to a string", () => {
    expect(isContainsOperation({ eq: "" })).toBe(false);
    expect(isContainsOperation({ like: "%" })).toBe(false);
    expect(isContainsOperation({ startswith: "" })).toBe(false);
    expect(isContainsOperation({ endswith: "" })).toBe(false);
});

test("isContainsOperation should be false if value contains several LiteralOperator including 'contains' associated to strings", () => {
    expect(isContainsOperation({ contains: "", like: "%" })).toBe(false);
    expect(isContainsOperation({ contains: "", eq: "" })).toBe(false);
    expect(isContainsOperation({ contains: "", startswith: "" })).toBe(false);
    expect(isContainsOperation({ contains: "", endswith: "" })).toBe(false);
});

test("isContainsOperation should overlap isSingleLiteralOperation", () => {
    const value: Record<string, string> = {
        contains: "abc"
    };
    if (isSingleLiteralOperation(value)) {
        if (isContainsOperation(value)) {
            expect(value.contains).toBe("abc");
            // @ts-expect-error
            expect(value.eq).toBe(undefined);
            // @ts-expect-error
            expect(value.like).toBe(undefined);
            // @ts-expect-error
            expect(value.startswith).toBe(undefined);
            // @ts-expect-error
            expect(value.endswith).toBe(undefined);
        } else {
            expect(true).toBe(false);
        }
    } else {
        expect(true).toBe(false);
    }
});

test("isContainsOperation should not overlap isCombinedLiteralOperation", () => {
    const value: Record<string, string> = {
        contains: "abc"
    };
    if (isCombinedLiteralOperation(value)) {
        if (isContainsOperation(value)) {
            expect(true).toBe(false);
        } else {
            expect(true).toBe(false);
        }
    } else if (isContainsOperation(value)) {
        expect(value.contains).toBe("abc");
    } else {
        expect(true).toBe(false);
    }
});


//--------------------------------------------------------------------------- isStartsWithOperation

test("isStartsWithOperation should be true if value contains exactly one LiteralOperator being 'startswith' associated to a string", () => {
    expect(isStartsWithOperation({ startswith: "" })).toBe(true);
});

test("isStartsWithOperation should be false if value contains exactly one LiteralOperator not being 'startswith' associated to a string", () => {
    expect(isStartsWithOperation({ eq: "" })).toBe(false);
    expect(isStartsWithOperation({ like: "%" })).toBe(false);
    expect(isStartsWithOperation({ contains: "" })).toBe(false);
    expect(isStartsWithOperation({ endswith: "" })).toBe(false);
});

test("isStartsWithOperation should be false if value contains several LiteralOperator including 'startswith' associated to strings", () => {
    expect(isStartsWithOperation({ startswith: "", like: "%" })).toBe(false);
    expect(isStartsWithOperation({ startswith: "", eq: "" })).toBe(false);
    expect(isStartsWithOperation({ startswith: "", contains: "" })).toBe(false);
    expect(isStartsWithOperation({ startswith: "", endswith: "" })).toBe(false);
});

test("isStartsWithOperation should overlap isSingleLiteralOperation", () => {
    const value: Record<string, string> = {
        startswith: "abc"
    };
    if (isSingleLiteralOperation(value)) {
        if (isStartsWithOperation(value)) {
            expect(value.startswith).toBe("abc");
            // @ts-expect-error
            expect(value.eq).toBe(undefined);
            // @ts-expect-error
            expect(value.like).toBe(undefined);
            // @ts-expect-error
            expect(value.contains).toBe(undefined);
            // @ts-expect-error
            expect(value.endswith).toBe(undefined);
        } else {
            expect(true).toBe(false);
        }
    } else {
        expect(true).toBe(false);
    }
});

test("isStartsWithOperation should not overlap isCombinedLiteralOperation", () => {
    const value: Record<string, string> = {
        startswith: "abc"
    };
    if (isCombinedLiteralOperation(value)) {
        if (isStartsWithOperation(value)) {
            expect(true).toBe(false);
        } else {
            expect(true).toBe(false);
        }
    } else if (isStartsWithOperation(value)) {
        expect(value.startswith).toBe("abc");
    } else {
        expect(true).toBe(false);
    }
});


//--------------------------------------------------------------------------- isEndsWithOperation

test("isEndsWithOperation should be true if value contains exactly one LiteralOperator being 'endswith' associated to a string", () => {
    expect(isEndsWithOperation({ endswith: "" })).toBe(true);
});

test("isEndsWithOperation should be false if value contains exactly one LiteralOperator not being 'endswith' associated to a string", () => {
    expect(isEndsWithOperation({ eq: "" })).toBe(false);
    expect(isEndsWithOperation({ like: "%" })).toBe(false);
    expect(isEndsWithOperation({ contains: "" })).toBe(false);
    expect(isEndsWithOperation({ startswith: "" })).toBe(false);
});

test("isEndsWithOperation should be false if value contains several LiteralOperator including 'endswith' associated to strings", () => {
    expect(isEndsWithOperation({ endswith: "", like: "%" })).toBe(false);
    expect(isEndsWithOperation({ endswith: "", eq: "" })).toBe(false);
    expect(isEndsWithOperation({ endswith: "", contains: "" })).toBe(false);
    expect(isEndsWithOperation({ endswith: "", startswith: "" })).toBe(false);
});

test("isEndsWithOperation should overlap isSingleLiteralOperation", () => {
    const value: Record<string, string> = {
        endswith: "abc"
    };
    if (isSingleLiteralOperation(value)) {
        if (isEndsWithOperation(value)) {
            expect(value.endswith).toBe("abc");
            // @ts-expect-error
            expect(value.eq).toBe(undefined);
            // @ts-expect-error
            expect(value.like).toBe(undefined);
            // @ts-expect-error
            expect(value.contains).toBe(undefined);
            // @ts-expect-error
            expect(value.startswith).toBe(undefined);
        } else {
            expect(true).toBe(false);
        }
    } else {
        expect(true).toBe(false);
    }
});

test("isEndsWithOperation should not overlap isCombinedLiteralOperation", () => {
    const value: Record<string, string> = {
        endswith: "abc"
    };
    if (isCombinedLiteralOperation(value)) {
        if (isEndsWithOperation(value)) {
            expect(true).toBe(false);
        } else {
            expect(true).toBe(false);
        }
    } else if (isEndsWithOperation(value)) {
        expect(value.endswith).toBe("abc");
    } else {
        expect(true).toBe(false);
    }
});

//--------------------------------------------------------------------------- isLikeOperation

test("isLikeOperation should be true if value contains exactly one LiteralOperator being 'like' associated to a pattern string", () => {
    expect(isLikeOperation({ like: "%" })).toBe(true);
    expect(isLikeOperation({ like: "%abc" })).toBe(true);
    expect(isLikeOperation({ like: "abc%" })).toBe(true);
    expect(isLikeOperation({ like: "%abc%" })).toBe(true);
    expect(isLikeOperation({ like: "%a%b%c%" })).toBe(true);
});

test("isLikeOperation should be true if value contains exactly one LiteralOperator being 'like' associated to a normal string", () => {
    expect(isLikeOperation({ like: "" })).toBe(false);
});

test("isLikeOperation should be false if value contains exactly one LiteralOperator not being 'like' associated to any string", () => {
    expect(isLikeOperation({ eq: "" })).toBe(false);
    expect(isLikeOperation({ contains: "" })).toBe(false);
    expect(isLikeOperation({ startswith: "" })).toBe(false);
    expect(isLikeOperation({ endswith: "" })).toBe(false);
});

test("isLikeOperation should be false if value contains several LiteralOperator including 'like' associated to pattern strings", () => {
    expect(isLikeOperation({ like: "%", eq: "" })).toBe(false);
    expect(isLikeOperation({ like: "%", contains: "" })).toBe(false);
    expect(isLikeOperation({ like: "%", startswith: "" })).toBe(false);
    expect(isLikeOperation({ like: "%", endswith: "" })).toBe(false);
});

test("isLikeOperation should overlap isSingleLiteralOperation", () => {
    const value: Record<string, string> = {
        like: "%abc%"
    };
    if (isSingleLiteralOperation(value)) {
        if (isLikeOperation(value)) {
            expect(value.like).toBe("%abc%");
            // @ts-expect-error
            expect(value.eq).toBe(undefined);
            // @ts-expect-error
            expect(value.endswith).toBe(undefined);
            // @ts-expect-error
            expect(value.contains).toBe(undefined);
            // @ts-expect-error
            expect(value.startswith).toBe(undefined);
        } else {
            expect(true).toBe(false);
        }
    } else {
        expect(true).toBe(false);
    }
});

test("isLikeOperation should not overlap isCombinedLiteralOperation", () => {
    const value: Record<string, string> = {
        like: "%abc"
    };
    if (isCombinedLiteralOperation(value)) {
        if (isLikeOperation(value)) {
            expect(true).toBe(false);
        } else {
            expect(true).toBe(false);
        }
    } else if (isLikeOperation(value)) {
        expect(value.like).toBe("%abc");
    } else {
        expect(true).toBe(false);
    }
});
