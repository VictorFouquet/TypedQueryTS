//------------------------------------------------------------------------------------ Object structure helpers

// Ensures that an object contains at least one key from T
export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> & U[keyof U];

// Ensures that an object contains exactly one key from T and no other key
export type ExactlyOne<T> = {
  [K in keyof T]: {
    [P in K]: T[P]
  } & {
    [P in Exclude<keyof T, K>]?: never
  }
}[keyof T];


//------------------------------------------------------------------------------------ Object key extraction helpers

// Extract scalar keys from entity
export type EntityScalarKeys<T> = {
    [K in keyof T]: T[K] extends (infer U)[] ? never : K
}[keyof T];

// Extract array keys from entity
export type EntityListKeys<T> = {
    [K in keyof T]: T[K] extends (infer U)[] ? K : never
}[keyof T];
