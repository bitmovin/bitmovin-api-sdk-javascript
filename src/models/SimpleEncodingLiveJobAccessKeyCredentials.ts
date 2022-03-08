import {map, mapArray} from '../common/Mapper';
import SimpleEncodingLiveJobCredentials from './SimpleEncodingLiveJobCredentials';

/**
 * @export
 * @class SimpleEncodingLiveJobAccessKeyCredentials
 */
export class SimpleEncodingLiveJobAccessKeyCredentials extends SimpleEncodingLiveJobCredentials {
  /**
   * The identifier of the access key (required)
   * @type {string}
   * @memberof SimpleEncodingLiveJobAccessKeyCredentials
   */
  public accessKey?: string;

  /**
   * The secret to be used for authentication (required)
   * @type {string}
   * @memberof SimpleEncodingLiveJobAccessKeyCredentials
   */
  public secretKey?: string;

  constructor(obj?: Partial<SimpleEncodingLiveJobAccessKeyCredentials>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.accessKey = map(obj.accessKey);
    this.secretKey = map(obj.secretKey);
  }
}

export default SimpleEncodingLiveJobAccessKeyCredentials;

