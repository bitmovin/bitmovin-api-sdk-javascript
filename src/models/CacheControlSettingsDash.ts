import {map, mapArray} from '../common/Mapper';
import CacheControl from './CacheControl';

/**
 * @export
 * @class CacheControlSettingsDash
 */
export class CacheControlSettingsDash {
  /**
   * Cache control settings for DASH Timeline manifest.
   * @type {CacheControl}
   * @memberof CacheControlSettingsDash
   */
  public timelineManifest?: CacheControl;

  /**
   * Cache control settings for DASH Template manifest.
   * @type {CacheControl}
   * @memberof CacheControlSettingsDash
   */
  public templateManifest?: CacheControl;

  constructor(obj?: Partial<CacheControlSettingsDash>) {
    if(!obj) {
      return;
    }
    this.timelineManifest = map(obj.timelineManifest, CacheControl);
    this.templateManifest = map(obj.templateManifest, CacheControl);
  }
}

export default CacheControlSettingsDash;

