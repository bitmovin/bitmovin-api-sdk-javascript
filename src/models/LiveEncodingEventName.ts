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
  ERROR = 'ERROR'
}

export default LiveEncodingEventName;

