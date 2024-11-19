/**
 * Status of the standby pool encoding
 * @export
 * @enum {string}
 */
export enum LiveStandbyPoolEncodingStatus {
  TO_BE_CREATED = 'TO_BE_CREATED',
  CREATING = 'CREATING',
  PREPARING = 'PREPARING',
  READY = 'READY',
  TO_BE_DELETED = 'TO_BE_DELETED',
  DELETING = 'DELETING',
  ACQUIRED = 'ACQUIRED',
  ERROR = 'ERROR'
}

export default LiveStandbyPoolEncodingStatus;

