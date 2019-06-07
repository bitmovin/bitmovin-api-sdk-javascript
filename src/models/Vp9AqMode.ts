/**
 * Adaptive quantization mode.
 * @export
 * @enum {string}
 */
export const enum Vp9AqMode {
  NONE = 'NONE',
  VARIANCE = 'VARIANCE',
  COMPLEXITY = 'COMPLEXITY',
  CYCLIC = 'CYCLIC'
}

export default Vp9AqMode;

