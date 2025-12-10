/**
 * @export
 * @enum {string}
 */
export enum LiveEncodingEventName {
  FIRST_CONNECT = 'FIRST_CONNECT',
  DISCONNECT = 'DISCONNECT',
  RECONNECT = 'RECONNECT',
  RESYNCING = 'RESYNCING',
  IDLE = 'IDLE',
  ERROR = 'ERROR',
  WARNING = 'WARNING',
  PICTURE_TIMING = 'PICTURE_TIMING',
  INFO = 'INFO'
}

export default LiveEncodingEventName;

