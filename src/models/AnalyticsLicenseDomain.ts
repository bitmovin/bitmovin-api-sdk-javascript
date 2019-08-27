import {map} from '../common/Mapper';
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

  constructor(obj: Partial<AnalyticsLicenseDomain>) {
    super(obj);

    this.url = obj.url;
  }
}

export default AnalyticsLicenseDomain;

