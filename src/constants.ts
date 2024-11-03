const EQ_OP         = 'eq'  as const;
const LT_OP         = 'lt'  as const;
const GT_OP         = 'gt'  as const;
const LTE_OP        = 'lte' as const;
const GTE_OP        = 'gte' as const;

const LIKE_OP       = 'like' as const;
const CONTAINS_OP   = 'contains'   as const;
const STARTSWITH_OP = 'startswith' as const;
const ENDSWITH_OP   = 'endswith'   as const;

const IS_OP         = 'is'  as const;
const NOT_OP        = 'not' as const;

const LOG_OR_OP     = 'OR'  as const;
const LOG_NOT_OP    = 'NOT' as const;

const SOME_OP       = 'some' as const;
const NONE_OP       = 'none' as const;
const ALL_OP        = 'all'  as const;

const ASC_OP        = 'asc'  as const;
const DESC_OP       = 'desc' as const;

export const Operators = {
    eq:         EQ_OP,
    lt:         LT_OP,
    lte:        LTE_OP,
    gt:         GT_OP,
    gte:        GTE_OP,
    like:       LIKE_OP,
    contains:   CONTAINS_OP,
    startswith: STARTSWITH_OP,
    endswith:   ENDSWITH_OP,
    is:         IS_OP,
    not:        NOT_OP,
    logicalOr:  LOG_OR_OP,
    logicalNot: LOG_NOT_OP,
    some:       SOME_OP,
    none:       NONE_OP,
    all:        ALL_OP,
    asc:        ASC_OP,
    desc:       DESC_OP,
    lower:      [LT_OP, LTE_OP],
    upper:      [GT_OP, GTE_OP],
    numerical:  [EQ_OP, LT_OP, LTE_OP, GT_OP, GTE_OP],
    literal:    [EQ_OP, LIKE_OP, CONTAINS_OP, STARTSWITH_OP, ENDSWITH_OP],
    boolean:    [EQ_OP, IS_OP, NOT_OP ],
    logical:    [LOG_OR_OP, LOG_NOT_OP],
    list:       [SOME_OP, NONE_OP, ALL_OP],
    ordering:   [ASC_OP, DESC_OP]
} as const;