/**
 * Configures what kind of dynamic range the output should conform to. Can be used to convert from SDR to HLG, from HLG to SDR.
 * @export
 * @enum {string}
 */
export enum Vp9DynamicRangeFormat {
  HLG = 'HLG',
  SDR = 'SDR'
}

export default Vp9DynamicRangeFormat;

