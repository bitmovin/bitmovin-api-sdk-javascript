import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import CdnUsageStatistics from '../../../../models/CdnUsageStatistics';
import {CdnUsageStatisticsGetQueryParams, CdnUsageStatisticsGetQueryParamsBuilder} from './CdnUsageStatisticsGetQueryParams';

/**
 * UsageApi - object-oriented interface
 * @export
 * @class UsageApi
 * @extends {BaseAPI}
 */
export default class UsageApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary List CDN usage statistics within specific dates.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof UsageApi
   */
  public get(queryParameters?: CdnUsageStatisticsGetQueryParams | ((q: CdnUsageStatisticsGetQueryParamsBuilder) => CdnUsageStatisticsGetQueryParamsBuilder)): Promise<CdnUsageStatistics> {
    let queryParams: CdnUsageStatisticsGetQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new CdnUsageStatisticsGetQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<CdnUsageStatistics>('/encoding/statistics/cdn/usage', {}, queryParams).then((response) => {
      return map(response, CdnUsageStatistics);
    });
  }
}
