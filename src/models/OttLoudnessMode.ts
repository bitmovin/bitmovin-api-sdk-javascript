/**
 * Specifies the OTT loudness mode. If the mode is `DTSX_OTT_LOUDNESS_DETECT`, the `lkfs` value will be calculated internally and does not need to be provided. A provided `lkfs` value will be ignored. For the modes `DTSX_OTT_LOUDNESS_INPUT` and `DTSX_OTT_LOUDNESS_TARGET` an `lkfs` value must be provided by the user. 
 * @export
 * @enum {string}
 */
export enum OttLoudnessMode {
  DTSX_OTT_LOUDNESS_DETECT = 'DTSX_OTT_LOUDNESS_DETECT',
  DTSX_OTT_LOUDNESS_INPUT = 'DTSX_OTT_LOUDNESS_INPUT',
  DTSX_OTT_LOUDNESS_TARGET = 'DTSX_OTT_LOUDNESS_TARGET'
}

export default OttLoudnessMode;

