/**
 * @export
 * @enum {string}
 */
export enum RetryHint {
  RETRY = 'RETRY',
  RETRY_IN_DIFFERENT_REGION = 'RETRY_IN_DIFFERENT_REGION',
  NO_RETRY = 'NO_RETRY',
  UNDEFINED = 'UNDEFINED'
}

export default RetryHint;

