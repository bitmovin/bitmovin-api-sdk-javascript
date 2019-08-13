/**
 * @export
 * @enum {string}
 */
export enum ScheduledInsertableContentStatus {
  CREATED = 'CREATED',
  SCHEDULED = 'SCHEDULED',
  TO_BE_DESCHEDULED = 'TO_BE_DESCHEDULED',
  DESCHEDULED = 'DESCHEDULED',
  ERROR = 'ERROR'
}

export default ScheduledInsertableContentStatus;

