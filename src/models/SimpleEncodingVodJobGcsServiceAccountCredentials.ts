import {map, mapArray} from '../common/Mapper';
import SimpleEncodingVodJobCredentials from './SimpleEncodingVodJobCredentials';

/**
 * @export
 * @class SimpleEncodingVodJobGcsServiceAccountCredentials
 */
export class SimpleEncodingVodJobGcsServiceAccountCredentials extends SimpleEncodingVodJobCredentials {
  /**
   * Service account credentials for Google (required)
   * @type {string}
   * @memberof SimpleEncodingVodJobGcsServiceAccountCredentials
   */
  public serviceAccountCredentials?: string;

  constructor(obj?: Partial<SimpleEncodingVodJobGcsServiceAccountCredentials>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.serviceAccountCredentials = map(obj.serviceAccountCredentials);
  }
}

export default SimpleEncodingVodJobGcsServiceAccountCredentials;

