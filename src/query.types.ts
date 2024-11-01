import { WhereClause } from "./condition.types";
import { OrderByClause } from "./ordering.types";
import { SelectClause } from "./selection.types";

export type Query<T> = Partial<SelectClause<T> | WhereClause<T> | OrderByClause<T>>;
