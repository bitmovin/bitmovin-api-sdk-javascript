/**
 * @export
 * @enum {string}
 */
export enum ScheduledContentInsertionStatus {
  CREATED = 'CREATED',
  SCHEDULED = 'SCHEDULED',
  TO_BE_DESCHEDULED = 'TO_BE_DESCHEDULED',
  DESCHEDULED = 'DESCHEDULED',
  ERROR = 'ERROR'
}

export default ScheduledContentInsertionStatus;

