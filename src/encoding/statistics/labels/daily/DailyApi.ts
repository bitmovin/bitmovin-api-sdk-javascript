import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import DailyStatisticsPerLabel from '../../../../models/DailyStatisticsPerLabel';
import PaginationResponse from '../../../../models/PaginationResponse';
import {DailyStatisticsPerLabelListQueryParams, DailyStatisticsPerLabelListQueryParamsBuilder} from './DailyStatisticsPerLabelListQueryParams';
import {DailyStatisticsPerLabelListByDateRangeQueryParams, DailyStatisticsPerLabelListByDateRangeQueryParamsBuilder} from './DailyStatisticsPerLabelListByDateRangeQueryParams';

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
   * @summary Get Daily Statistics per Label
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof DailyApi
   */
  public list(queryParameters?: DailyStatisticsPerLabelListQueryParams | ((q: DailyStatisticsPerLabelListQueryParamsBuilder) => DailyStatisticsPerLabelListQueryParamsBuilder)): Promise<PaginationResponse<DailyStatisticsPerLabel>> {
    let queryParams: DailyStatisticsPerLabelListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new DailyStatisticsPerLabelListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<DailyStatisticsPerLabel>>('/encoding/statistics/labels/daily', {}, queryParams).then((response) => {
      return new PaginationResponse<DailyStatisticsPerLabel>(response, DailyStatisticsPerLabel);;
    });
  }

  /**
   * @summary Get daily statistics per label within specific dates
   * @param {Date} from Start date. Format: yyyy-MM-dd
   * @param {Date} to End date. Format: yyyy-MM-dd
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof DailyApi
   */
  public listByDateRange(from: Date, to: Date, queryParameters?: DailyStatisticsPerLabelListByDateRangeQueryParams | ((q: DailyStatisticsPerLabelListByDateRangeQueryParamsBuilder) => DailyStatisticsPerLabelListByDateRangeQueryParamsBuilder)): Promise<PaginationResponse<DailyStatisticsPerLabel>> {
    const pathParamMap = {
      from: from,
      to: to
    };
    let queryParams: DailyStatisticsPerLabelListByDateRangeQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new DailyStatisticsPerLabelListByDateRangeQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<DailyStatisticsPerLabel>>('/encoding/statistics/labels/daily/{from}/{to}', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<DailyStatisticsPerLabel>(response, DailyStatisticsPerLabel);;
    });
  }
}
