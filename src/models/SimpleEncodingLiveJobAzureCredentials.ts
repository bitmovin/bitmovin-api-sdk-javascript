import {map, mapArray} from '../common/Mapper';
import SimpleEncodingLiveJobCredentials from './SimpleEncodingLiveJobCredentials';

/**
 * @export
 * @class SimpleEncodingLiveJobAzureCredentials
 */
export class SimpleEncodingLiveJobAzureCredentials extends SimpleEncodingLiveJobCredentials {
  /**
   * Azure Account Key used for authentication (required)
   * @type {string}
   * @memberof SimpleEncodingLiveJobAzureCredentials
   */
  public key?: string;

  constructor(obj?: Partial<SimpleEncodingLiveJobAzureCredentials>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.key = map(obj.key);
  }
}

export default SimpleEncodingLiveJobAzureCredentials;

