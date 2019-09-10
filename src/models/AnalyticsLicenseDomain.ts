import {map, mapArray} from '../common/Mapper';
import BitmovinResponse from './BitmovinResponse';

/**
 * @export
 * @class AnalyticsLicenseDomain
 */
export class AnalyticsLicenseDomain extends BitmovinResponse {
  /**
   * @type {string}
   * @memberof AnalyticsLicenseDomain
   */
  public url?: string;

  constructor(obj?: Partial<AnalyticsLicenseDomain>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.url = map(obj.url);
  }
}

export default AnalyticsLicenseDomain;

