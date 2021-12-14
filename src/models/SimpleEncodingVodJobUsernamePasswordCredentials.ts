import {map, mapArray} from '../common/Mapper';
import SimpleEncodingVodJobCredentials from './SimpleEncodingVodJobCredentials';

/**
 * @export
 * @class SimpleEncodingVodJobUsernamePasswordCredentials
 */
export class SimpleEncodingVodJobUsernamePasswordCredentials extends SimpleEncodingVodJobCredentials {
  /**
   * The username to be used for authentication. (required)
   * @type {string}
   * @memberof SimpleEncodingVodJobUsernamePasswordCredentials
   */
  public username?: string;

  /**
   * The password to be used for authentication (required)
   * @type {string}
   * @memberof SimpleEncodingVodJobUsernamePasswordCredentials
   */
  public password?: string;

  constructor(obj?: Partial<SimpleEncodingVodJobUsernamePasswordCredentials>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.username = map(obj.username);
    this.password = map(obj.password);
  }
}

export default SimpleEncodingVodJobUsernamePasswordCredentials;

