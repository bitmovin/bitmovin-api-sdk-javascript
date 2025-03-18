import {map, mapArray} from '../common/Mapper';
import CacheControlSettingsDash from './CacheControlSettingsDash';
import CacheControlSettingsHls from './CacheControlSettingsHls';
import CacheControlSettingsSegments from './CacheControlSettingsSegments';

/**
 * @export
 * @class CacheControlSettings
 */
export class CacheControlSettings {
  /**
   * Cache control settings for HLS manifest.
   * @type {CacheControlSettingsHls}
   * @memberof CacheControlSettings
   */
  public hls?: CacheControlSettingsHls;

  /**
   * Cache control settings for DASH manifest.
   * @type {CacheControlSettingsDash}
   * @memberof CacheControlSettings
   */
  public dash?: CacheControlSettingsDash;

  /**
   * Cache control settings for segments.
   * @type {CacheControlSettingsSegments}
   * @memberof CacheControlSettings
   */
  public segments?: CacheControlSettingsSegments;

  constructor(obj?: Partial<CacheControlSettings>) {
    if(!obj) {
      return;
    }
    this.hls = map(obj.hls, CacheControlSettingsHls);
    this.dash = map(obj.dash, CacheControlSettingsDash);
    this.segments = map(obj.segments, CacheControlSettingsSegments);
  }
}

export default CacheControlSettings;

