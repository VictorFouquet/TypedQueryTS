import { Operators } from "./constants";
import * as OPS from "./operator.types";

const buildSingleOperatorGuard = <T>(expected: string): ((v: any) => v is T) => {
    return (v: any): v is T => v === expected;
}

const buildListOperatorGuard = <T>(expected: readonly string[]): ((v: any) => v is T) => {
    return (v: any): v is T => expected.includes(v);
}

export const isEqualityOp        = buildSingleOperatorGuard<OPS.EqualityOp>(Operators.eq);
export const isLtOp              = buildSingleOperatorGuard<OPS.LtOp>(Operators.lt);
export const isLteOp             = buildSingleOperatorGuard<OPS.LteOp>(Operators.lte);
export const isGtOp              = buildSingleOperatorGuard<OPS.GtOp>(Operators.gt);
export const isGteOp             = buildSingleOperatorGuard<OPS.GteOp>(Operators.gte);
export const isLikeOp            = buildSingleOperatorGuard<OPS.LikeOp>(Operators.like);
export const isContainsOp        = buildSingleOperatorGuard<OPS.ContainsOp>(Operators.contains);
export const isStartsWithOp      = buildSingleOperatorGuard<OPS.StartswithOp>(Operators.startswith);
export const isEndsWithOp        = buildSingleOperatorGuard<OPS.EndswithOp>(Operators.endswith);
export const isIsOp              = buildSingleOperatorGuard<OPS.IsOp>(Operators.is);
export const isNotOp             = buildSingleOperatorGuard<OPS.NotOp>(Operators.not);
export const isLogOrOp           = buildSingleOperatorGuard<OPS.LogOrOp>(Operators.logicalOr);
export const isLogNotOp          = buildSingleOperatorGuard<OPS.LogNotOp>(Operators.logicalNot);
export const isSomeOp            = buildSingleOperatorGuard<OPS.SomeOp>(Operators.some);
export const isNoneOp            = buildSingleOperatorGuard<OPS.NoneOp>(Operators.none);
export const isAllOp             = buildSingleOperatorGuard<OPS.AllOp>(Operators.all);
export const isAscOp             = buildSingleOperatorGuard<OPS.AscOp>(Operators.asc);
export const isDescOp            = buildSingleOperatorGuard<OPS.DescOp>(Operators.desc);

export const isLowerOp           = buildListOperatorGuard<OPS.LowerOp>(Operators.lower);
export const isUpperOp           = buildListOperatorGuard<OPS.UpperOp>(Operators.upper);
export const isNumericalOperator = buildListOperatorGuard<OPS.NumericalOperator>(Operators.numerical);
export const isLiteralOperator   = buildListOperatorGuard<OPS.LiteralOperator>(Operators.literal);
export const isBooleanOperator   = buildListOperatorGuard<OPS.BooleanOperator>(Operators.boolean);
export const isLogicalOperator   = buildListOperatorGuard<OPS.LogicalOperator>(Operators.logical);
export const isListOperator      = buildListOperatorGuard<OPS.ListOperator>(Operators.list);
export const isOrderingOperator  = buildListOperatorGuard<OPS.OrderingOperator>(Operators.ordering);
