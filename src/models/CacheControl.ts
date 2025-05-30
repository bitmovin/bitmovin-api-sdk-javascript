import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class CacheControl
 */
export class CacheControl {
  /**
   * Cache control for storing data on CDN. Example \"public, max-age=0, no-cache\". Cache control is supported on S3, GCS and Azure output storage providers.
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

