/**
 * @export
 * @enum {string}
 */
export enum SimpleEncodingVodJobStatus {
  CREATED = 'CREATED',
  EXECUTING = 'EXECUTING',
  FAILURE = 'FAILURE',
  RUNNING = 'RUNNING',
  FINISHED = 'FINISHED',
  ERROR = 'ERROR',
  CANCELED = 'CANCELED'
}

export default SimpleEncodingVodJobStatus;

