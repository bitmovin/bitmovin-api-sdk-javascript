import {map} from '../common/Mapper';
import BitmovinResponse from './BitmovinResponse';

/**
 * @export
 * @class AnalyticsLicense
 */
export class AnalyticsLicense extends BitmovinResponse {
  constructor(obj: any) {
    super(obj);
    this.name = map(obj.name);
    this.licenseKey = map(obj.licenseKey);
  }

  /**
   * Name of the Analytics License
   * @type {string}
   * @memberof AnalyticsLicense
   */
  public name?: string;
  /**
   * License Key
   * @type {string}
   * @memberof AnalyticsLicense
   */
  public licenseKey: string;
}

export default AnalyticsLicense;

