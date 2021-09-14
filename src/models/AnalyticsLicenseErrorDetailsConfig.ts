import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class AnalyticsLicenseErrorDetailsConfig
 */
export class AnalyticsLicenseErrorDetailsConfig {
  /**
   * Are error details enabled on the license
   * @type {boolean}
   * @memberof AnalyticsLicenseErrorDetailsConfig
   */
  public enabled?: boolean;

  /**
   * Is network explorer feature enabled for the license
   * @type {boolean}
   * @memberof AnalyticsLicenseErrorDetailsConfig
   */
  public networkExplorerEnabled?: boolean;

  constructor(obj?: Partial<AnalyticsLicenseErrorDetailsConfig>) {
    if(!obj) {
      return;
    }
    this.enabled = map(obj.enabled);
    this.networkExplorerEnabled = map(obj.networkExplorerEnabled);
  }
}

export default AnalyticsLicenseErrorDetailsConfig;

