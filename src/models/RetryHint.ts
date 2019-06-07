/**
 * @export
 * @enum {string}
 */
export const enum RetryHint {
  RETRY = 'RETRY',
  RETRY_IN_DIFFERENT_REGION = 'RETRY_IN_DIFFERENT_REGION',
  NO_RETRY = 'NO_RETRY'
}

export default RetryHint;

