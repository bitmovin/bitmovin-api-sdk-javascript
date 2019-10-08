/**
 * The type of the drm
 * @export
 * @enum {string}
 */
export enum DrmType {
  WIDEVINE = 'WIDEVINE',
  PLAYREADY = 'PLAYREADY',
  PRIMETIME = 'PRIMETIME',
  FAIRPLAY = 'FAIRPLAY',
  MARLIN = 'MARLIN',
  CLEARKEY = 'CLEARKEY',
  AES = 'AES',
  CENC = 'CENC',
  SPEKE = 'SPEKE'
}

export default DrmType;

