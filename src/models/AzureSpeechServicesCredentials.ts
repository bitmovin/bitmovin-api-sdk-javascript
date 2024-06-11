import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class AzureSpeechServicesCredentials
 */
export class AzureSpeechServicesCredentials {
  /**
   * Azure Speech Services resource key (required)
   * @type {string}
   * @memberof AzureSpeechServicesCredentials
   */
  public subscriptionKey?: string;

  constructor(obj?: Partial<AzureSpeechServicesCredentials>) {
    if(!obj) {
      return;
    }
    this.subscriptionKey = map(obj.subscriptionKey);
  }
}

export default AzureSpeechServicesCredentials;

