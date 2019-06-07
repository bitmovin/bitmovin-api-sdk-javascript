/**
 * Defines how the internal chunk length for encoding will be determined
 * @export
 * @enum {string}
 */
export const enum ChunkLengthMode {
  SPEED_OPTIMIZED = 'SPEED_OPTIMIZED',
  CUSTOM = 'CUSTOM'
}

export default ChunkLengthMode;

