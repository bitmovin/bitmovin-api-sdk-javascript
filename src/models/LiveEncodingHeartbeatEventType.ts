/**
 * @export
 * @enum {string}
 */
export enum LiveEncodingHeartbeatEventType {
  FIRST_CONNECT = 'FIRST_CONNECT',
  DISCONNECT = 'DISCONNECT',
  RECONNECT = 'RECONNECT',
  WARNING = 'WARNING',
  ERROR = 'ERROR'
}

export default LiveEncodingHeartbeatEventType;

