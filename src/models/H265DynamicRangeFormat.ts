/**
 * Configures what kind of dynamic range the output should conform to. Can be used to convert from SDR to HDR, from HDR to SDR or between different HDR formats
 * @export
 * @enum {string}
 */
export enum H265DynamicRangeFormat {
  DOLBY_VISION = 'DOLBY_VISION',
  DOLBY_VISION_PROFILE_5 = 'DOLBY_VISION_PROFILE_5',
  DOLBY_VISION_PROFILE_8_1 = 'DOLBY_VISION_PROFILE_8_1',
  HDR10 = 'HDR10',
  HLG = 'HLG',
  SDR = 'SDR'
}

export default H265DynamicRangeFormat;

