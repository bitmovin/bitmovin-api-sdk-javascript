import {map, mapArray} from '../common/Mapper';
import CacheControl from './CacheControl';

/**
 * @export
 * @class CacheControlSettingsSegments
 */
export class CacheControlSettingsSegments {
  /**
   * Cache control settings for init segment.
   * @type {CacheControl}
   * @memberof CacheControlSettingsSegments
   */
  public initSegment?: CacheControl;

  /**
   * Cache control settings for media segment.
   * @type {CacheControl}
   * @memberof CacheControlSettingsSegments
   */
  public mediaSegment?: CacheControl;

  constructor(obj?: Partial<CacheControlSettingsSegments>) {
    if(!obj) {
      return;
    }
    this.initSegment = map(obj.initSegment, CacheControl);
    this.mediaSegment = map(obj.mediaSegment, CacheControl);
  }
}

export default CacheControlSettingsSegments;

