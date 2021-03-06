/**
 * AV1 has a segment based feature that allows the encoder to adaptively change quantization parameter for each segment within a frame
 * @export
 * @enum {string}
 */
export enum Av1AdaptiveQuantMode {
  OFF = 'OFF',
  VARIANCE = 'VARIANCE',
  COMPLEXITY = 'COMPLEXITY',
  CYCLIC_REFRESH = 'CYCLIC_REFRESH',
  DELTA_QUANT = 'DELTA_QUANT'
}

export default Av1AdaptiveQuantMode;

