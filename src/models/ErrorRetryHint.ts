/**
 * @export
 * @enum {string}
 */
export enum ErrorRetryHint {
  RETRY = 'RETRY',
  NO_RETRY = 'NO_RETRY',
  RETRY_IN_DIFFERENT_REGION = 'RETRY_IN_DIFFERENT_REGION'
}

export default ErrorRetryHint;

