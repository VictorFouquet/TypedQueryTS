import { Operators } from "./constants";
import { DoubleNumericalOperations, EqOperation, GteOperation, GtOperation, LiteralOperation, LteGteOperation, LteGtOperation, LteOperation, LtGteOperation, LtGtOperation, LtOperation, SingleNumericalOperations } from "./operation.types";
import { isNumericalOperator, isLowerOp, isUpperOp, isLiteralOperator } from "./operator.type-guards";
import { isNotNullOrUndefined, isNumeric } from "./utils.type-guards";
import { Numeric } from "./utils.types";

export const isLiteralOperation = (value: any): value is LiteralOperation => {
    return isNotNullOrUndefined(value)
        && typeof value === 'object'
        && !(value instanceof Date)
        && Object.entries(value).every(([k, v]) => isLiteralOperator(k) && typeof v === 'string');
}

//---------------------------------------------------------------------------------- Single Value Operation Guards

export const isSingleNumericalOperation = (value: any): value is SingleNumericalOperations<Numeric> => {
    return isNotNullOrUndefined(value)
        && typeof value === 'object'
        && Object.keys(value).length === 1
        && Object.entries(value).every(([k, v]) => isNumericalOperator(k) && isNumeric(v));
}

const buildSingleNumOperation = <T>(expected: string): ((v: any) => v is T) => {
    return (value): value is T => isSingleNumericalOperation(value) && expected in value!;
}

export const isLtOperation    = (value: any): value is LtOperation<Numeric> => { return isSingleNumericalOperation(value) && "lt" in value!; }//buildSingleNumOperation<LtOperation<Numeric>>(Operators.lt);
export const isLteOperation   = buildSingleNumOperation<LteOperation<Numeric>>(Operators.lte);
export const isGtOperation    = buildSingleNumOperation<GtOperation<Numeric>>(Operators.gt);
export const isGteOperation   = buildSingleNumOperation<GteOperation<Numeric>>(Operators.gte);
export const isEqNumOperation = buildSingleNumOperation<EqOperation<Numeric>>(Operators.eq);

//---------------------------------------------------------------------------------- Double Value Operation Guards

export const isDoubleNumericalOperation = (value: any): value is DoubleNumericalOperations<Numeric> => {
    return isNotNullOrUndefined(value)
        && typeof value === 'object'
        && Object.keys(value).length === 2
        && Object.keys(value).some(v => isLowerOp(v))
        && Object.keys(value).some(v => isUpperOp(v))
        && (
            Object.values(value).every(v => v instanceof Date)
            || Object.values(value).every(v => typeof v === 'number')
        );
}

const buildDoubleNumOperation = <T>(k: string, u: string): ((v: any) => v is T) => {
    return (value): value is T => isDoubleNumericalOperation(value) && k in value && u in value;
}

export const isLtGtOperation   = buildDoubleNumOperation<LtGtOperation<Numeric>>(Operators.lt, Operators.gt);
export const isLtGteOperation  = buildDoubleNumOperation<LtGteOperation<Numeric>>(Operators.lt, Operators.gte);
export const isLteGtOperation  = buildDoubleNumOperation<LteGtOperation<Numeric>>(Operators.lte, Operators.gt);
export const isLteGteOperation = buildDoubleNumOperation<LteGteOperation<Numeric>>(Operators.lte, Operators.gte);
