/**
 * Force the encoder to flush frames. Default is DISABLED.
 * @export
 * @enum {string}
 */
export enum ForceFlushMode {
  DISABLED = 'DISABLED',
  ALL_FRAMES = 'ALL_FRAMES',
  SLICE_TYPE = 'SLICE_TYPE'
}

export default ForceFlushMode;

