import {map, mapArray} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';

/**
 * @export
 * @class AkamaiAccount
 */
export class AkamaiAccount extends BitmovinResource {
  /**
   * Akamai/Linode API token (required)
   * @type {string}
   * @memberof AkamaiAccount
   */
  public apiToken?: string;

  constructor(obj?: Partial<AkamaiAccount>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.apiToken = map(obj.apiToken);
  }
}

export default AkamaiAccount;

