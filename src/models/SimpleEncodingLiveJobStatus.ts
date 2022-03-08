/**
 * @export
 * @enum {string}
 */
export enum SimpleEncodingLiveJobStatus {
  CREATED = 'CREATED',
  EXECUTING = 'EXECUTING',
  FAILURE = 'FAILURE',
  STARTING = 'STARTING',
  RUNNING = 'RUNNING',
  STOPPED = 'STOPPED',
  ERROR = 'ERROR',
  CANCELED = 'CANCELED'
}

export default SimpleEncodingLiveJobStatus;

