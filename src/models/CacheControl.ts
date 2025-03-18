import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class CacheControl
 */
export class CacheControl {
  /**
   * Cache control for storing data on CDN. Example \"public, max-age=0, no-cache\".
   * @type {string}
   * @memberof CacheControl
   */
  public cacheControl?: string;

  constructor(obj?: Partial<CacheControl>) {
    if(!obj) {
      return;
    }
    this.cacheControl = map(obj.cacheControl);
  }
}

export default CacheControl;

