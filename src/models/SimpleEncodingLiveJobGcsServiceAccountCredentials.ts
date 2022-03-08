import {map, mapArray} from '../common/Mapper';
import SimpleEncodingLiveJobCredentials from './SimpleEncodingLiveJobCredentials';

/**
 * @export
 * @class SimpleEncodingLiveJobGcsServiceAccountCredentials
 */
export class SimpleEncodingLiveJobGcsServiceAccountCredentials extends SimpleEncodingLiveJobCredentials {
  /**
   * Service account credentials for Google (required)
   * @type {string}
   * @memberof SimpleEncodingLiveJobGcsServiceAccountCredentials
   */
  public serviceAccountCredentials?: string;

  constructor(obj?: Partial<SimpleEncodingLiveJobGcsServiceAccountCredentials>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.serviceAccountCredentials = map(obj.serviceAccountCredentials);
  }
}

export default SimpleEncodingLiveJobGcsServiceAccountCredentials;

