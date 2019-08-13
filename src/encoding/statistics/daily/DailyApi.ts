import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import DailyStatistics from '../../../models/DailyStatistics';
import PaginationResponse from '../../../models/PaginationResponse';
import {DailyStatisticsListQueryParams, DailyStatisticsListQueryParamsBuilder} from './DailyStatisticsListQueryParams';
import {DailyStatisticsListByDateRangeQueryParams, DailyStatisticsListByDateRangeQueryParamsBuilder} from './DailyStatisticsListByDateRangeQueryParams';
import {getType, map} from '../../../common/Mapper';

/**
 * DailyApi - object-oriented interface
 * @export
 * @class DailyApi
 * @extends {BaseAPI}
 */
export default class DailyApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary List Daily Statistics
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof DailyApi
   */
  public list(queryParameters?: DailyStatisticsListQueryParams | ((q: DailyStatisticsListQueryParamsBuilder) => DailyStatisticsListQueryParamsBuilder)): Promise<PaginationResponse<DailyStatistics>> {
    let queryParams: DailyStatisticsListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new DailyStatisticsListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<DailyStatistics>>('/encoding/statistics/daily', {}, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<DailyStatistics>(response);
      if (Array.isArray(paginationResponse.items)) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new DailyStatistics(i));
      }
      return paginationResponse;
    });
  }

  /**
   * @summary List daily statistics within specific dates
   * @param {Date} from Start date, format: yyyy-MM-dd
   * @param {Date} to End date, format: yyyy-MM-dd
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof DailyApi
   */
  public listByDateRange(from: Date, to: Date, queryParameters?: DailyStatisticsListByDateRangeQueryParams | ((q: DailyStatisticsListByDateRangeQueryParamsBuilder) => DailyStatisticsListByDateRangeQueryParamsBuilder)): Promise<PaginationResponse<DailyStatistics>> {
    const pathParamMap = {
      from: from,
      to: to
    };
    let queryParams: DailyStatisticsListByDateRangeQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new DailyStatisticsListByDateRangeQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<DailyStatistics>>('/encoding/statistics/daily/{from}/{to}', pathParamMap, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<DailyStatistics>(response);
      if (Array.isArray(paginationResponse.items)) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new DailyStatistics(i));
      }
      return paginationResponse;
    });
  }
}
