import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import AnalyticsErrorDetailsResponse from '../../../models/AnalyticsErrorDetailsResponse';
import AnalyticsLicenseKey from '../../../models/AnalyticsLicenseKey';

/**
 * ErrorsApi - object-oriented interface
 * @export
 * @class ErrorsApi
 * @extends {BaseAPI}
 */
export default class ErrorsApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Impression Error Details
   * @param {string} impressionId Impression id
   * @param {AnalyticsLicenseKey} analyticsLicenseKey Analytics license
   * @throws {BitmovinError}
   * @memberof ErrorsApi
   */
  public create(impressionId: string, analyticsLicenseKey?: AnalyticsLicenseKey): Promise<AnalyticsErrorDetailsResponse> {
    const pathParamMap = {
      impression_id: impressionId
    };
    return this.restClient.post<AnalyticsErrorDetailsResponse>('/analytics/impressions/{impression_id}/errors', pathParamMap, analyticsLicenseKey).then((response) => {
      return map(response, AnalyticsErrorDetailsResponse);
    });
  }
}
