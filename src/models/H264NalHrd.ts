/**
 * Signal hypothetical reference decoder (HRD) information (requires bufsize to be set)
 * @export
 * @enum {string}
 */
export enum H264NalHrd {
  NONE = 'NONE',
  VBR = 'VBR',
  CBR = 'CBR'
}

export default H264NalHrd;

