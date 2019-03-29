import {map} from '../common/Mapper';
import BitmovinResponse from './BitmovinResponse';

/**
 * @export
 * @class AnalyticsLicenseDomain
 */
export default class AnalyticsLicenseDomain extends BitmovinResponse {
  constructor(obj: any) {
    super(obj);
    this.url = map(obj.url);
  }

  /**
   * @type {string}
   * @memberof AnalyticsLicenseDomain
   */
  public url?: string;
}
