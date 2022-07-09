export interface QueryModifier<Input, Output> {
  modifier(input: Input): Output;
}
