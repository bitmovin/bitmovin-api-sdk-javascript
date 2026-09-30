/**
 * Configures what kind of dynamic range the output should conform to. Can be used to convert between different HDR formats.
 * @export
 * @enum {string}
 */
export enum Av1DynamicRangeFormat {
  DOLBY_VISION_PROFILE_10_0 = 'DOLBY_VISION_PROFILE_10_0',
  DOLBY_VISION_PROFILE_10_1 = 'DOLBY_VISION_PROFILE_10_1',
  HDR10 = 'HDR10',
  SDR = 'SDR'
}

export default Av1DynamicRangeFormat;

