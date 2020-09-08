/**
 * Using TOP_FIELD_FIRST or BOTTOM_FIELD_FIRST will output interlaced video
 * @export
 * @enum {string}
 */
export enum H262InterlaceMode {
  NONE = 'NONE',
  TOP_FIELD_FIRST = 'TOP_FIELD_FIRST',
  BOTTOM_FIELD_FIRST = 'BOTTOM_FIELD_FIRST'
}

export default H262InterlaceMode;

