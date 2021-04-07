/**
 * Specifies if the Deinterlace Filter should be applied unconditionally or only on demand.
 * @export
 * @enum {string}
 */
export enum DeinterlaceAutoEnable {
  ALWAYS_ON = 'ALWAYS_ON',
  META_DATA_BASED = 'META_DATA_BASED',
  META_DATA_AND_CONTENT_BASED = 'META_DATA_AND_CONTENT_BASED'
}

export default DeinterlaceAutoEnable;

