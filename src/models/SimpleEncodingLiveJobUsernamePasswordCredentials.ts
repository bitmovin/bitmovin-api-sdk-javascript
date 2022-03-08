import {map, mapArray} from '../common/Mapper';
import SimpleEncodingLiveJobCredentials from './SimpleEncodingLiveJobCredentials';

/**
 * @export
 * @class SimpleEncodingLiveJobUsernamePasswordCredentials
 */
export class SimpleEncodingLiveJobUsernamePasswordCredentials extends SimpleEncodingLiveJobCredentials {
  /**
   * The username to be used for authentication. (required)
   * @type {string}
   * @memberof SimpleEncodingLiveJobUsernamePasswordCredentials
   */
  public username?: string;

  /**
   * The password to be used for authentication (required)
   * @type {string}
   * @memberof SimpleEncodingLiveJobUsernamePasswordCredentials
   */
  public password?: string;

  constructor(obj?: Partial<SimpleEncodingLiveJobUsernamePasswordCredentials>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.username = map(obj.username);
    this.password = map(obj.password);
  }
}

export default SimpleEncodingLiveJobUsernamePasswordCredentials;

