import {map, mapArray} from '../common/Mapper';
import SimpleEncodingVodJobCredentials from './SimpleEncodingVodJobCredentials';

/**
 * @export
 * @class SimpleEncodingVodJobAccessKeyCredentials
 */
export class SimpleEncodingVodJobAccessKeyCredentials extends SimpleEncodingVodJobCredentials {
  /**
   * The identifier of the access key (required)
   * @type {string}
   * @memberof SimpleEncodingVodJobAccessKeyCredentials
   */
  public accessKey?: string;

  /**
   * The secret to be used for authentication (required)
   * @type {string}
   * @memberof SimpleEncodingVodJobAccessKeyCredentials
   */
  public secretKey?: string;

  constructor(obj?: Partial<SimpleEncodingVodJobAccessKeyCredentials>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.accessKey = map(obj.accessKey);
    this.secretKey = map(obj.secretKey);
  }
}

export default SimpleEncodingVodJobAccessKeyCredentials;

