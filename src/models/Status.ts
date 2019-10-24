/**
 * @export
 * @enum {string}
 */
export enum Status {
  CREATED = 'CREATED',
  QUEUED = 'QUEUED',
  RUNNING = 'RUNNING',
  FINISHED = 'FINISHED',
  ERROR = 'ERROR',
  CANCELED = 'CANCELED'
}

export default Status;

