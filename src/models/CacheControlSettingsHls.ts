import {map, mapArray} from '../common/Mapper';
import CacheControl from './CacheControl';

/**
 * @export
 * @class CacheControlSettingsHls
 */
export class CacheControlSettingsHls {
  /**
   * Cache control settings for HLS Multivariant playlist.
   * @type {CacheControl}
   * @memberof CacheControlSettingsHls
   */
  public multiVariantPlaylist?: CacheControl;

  /**
   * Cache control settings for HLS Media playlist.
   * @type {CacheControl}
   * @memberof CacheControlSettingsHls
   */
  public variantPlaylist?: CacheControl;

  constructor(obj?: Partial<CacheControlSettingsHls>) {
    if(!obj) {
      return;
    }
    this.multiVariantPlaylist = map(obj.multiVariantPlaylist, CacheControl);
    this.variantPlaylist = map(obj.variantPlaylist, CacheControl);
  }
}

export default CacheControlSettingsHls;

