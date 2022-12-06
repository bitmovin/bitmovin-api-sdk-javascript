/**
 * Motion vector prediction mode
 * @export
 * @enum {string}
 */
export enum MvPredictionMode {
  NONE = 'NONE',
  SPATIAL = 'SPATIAL',
  TEMPORAL = 'TEMPORAL',
  AUTO = 'AUTO'
}

export default MvPredictionMode;

