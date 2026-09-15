/**
 * @export
 * @enum {string}
 */
export enum PccHdrOutcome {
  HDR = 'hdr',
  SDR = 'sdr',
  CLAIMED = 'claimed',
  DENIED = 'denied',
  UNESTABLISHED = 'unestablished',
  UNREPORTED = 'unreported'
}

export default PccHdrOutcome;

