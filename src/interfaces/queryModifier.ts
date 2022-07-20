/**
 * A modifier that returns a new query.
 */
export interface QueryModifier<Input, Output> {
  modifier(input: Input): Output;
}
