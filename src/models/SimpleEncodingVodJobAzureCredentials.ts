import {map, mapArray} from '../common/Mapper';
import SimpleEncodingVodJobCredentials from './SimpleEncodingVodJobCredentials';

/**
 * @export
 * @class SimpleEncodingVodJobAzureCredentials
 */
export class SimpleEncodingVodJobAzureCredentials extends SimpleEncodingVodJobCredentials {
  /**
   * Azure Account Key used for authentication (required)
   * @type {string}
   * @memberof SimpleEncodingVodJobAzureCredentials
   */
  public key?: string;

  constructor(obj?: Partial<SimpleEncodingVodJobAzureCredentials>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.key = map(obj.key);
  }
}

export default SimpleEncodingVodJobAzureCredentials;

