import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import AnalyticsImpressionDetails from '../../models/AnalyticsImpressionDetails';
import AnalyticsLicenseKey from '../../models/AnalyticsLicenseKey';
import {getType, map} from '../../common/Mapper';

/**
 * ImpressionsApi - object-oriented interface
 * @export
 * @class ImpressionsApi
 * @extends {BaseAPI}
 */
export default class ImpressionsApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Impression Details
   * @param {string} impressionId Impression id
   * @param {AnalyticsLicenseKey} analyticsLicenseKey Analytics license
   * @throws {RequiredError}
   * @memberof ImpressionsApi
   */
  public create(impressionId: string, analyticsLicenseKey?: AnalyticsLicenseKey): Promise<AnalyticsImpressionDetails> {
    const pathParamMap = {
      impression_id: impressionId
    };
    return this.restClient.post<AnalyticsImpressionDetails>('/analytics/impressions/{impression_id}', pathParamMap, analyticsLicenseKey).then((response) => {
      return new AnalyticsImpressionDetails(response);
    });
  }
}
