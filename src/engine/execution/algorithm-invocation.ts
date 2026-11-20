/**
 * Identifies one specific algorithm invocation.
 */
export interface AlgorithmInvocation {
  readonly invocationId: string;
  readonly algorithmId: string;
  readonly parentInvocationId?: string;
}
