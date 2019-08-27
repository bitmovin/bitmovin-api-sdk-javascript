import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import DailyApi from './daily/DailyApi';
import StatisticsPerLabel from '../../../models/StatisticsPerLabel';
import PaginationResponse from '../../../models/PaginationResponse';
import {StatisticsPerLabelListQueryParams, StatisticsPerLabelListQueryParamsBuilder} from './StatisticsPerLabelListQueryParams';
import {StatisticsPerLabelListByDateRangeQueryParams, StatisticsPerLabelListByDateRangeQueryParamsBuilder} from './StatisticsPerLabelListByDateRangeQueryParams';

/**
 * LabelsApi - object-oriented interface
 * @export
 * @class LabelsApi
 * @extends {BaseAPI}
 */
export default class LabelsApi extends BaseAPI {
  public daily: DailyApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.daily = new DailyApi(configuration);
  }

  /**
   * @summary Get Statistics per Label
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof LabelsApi
   */
  public list(queryParameters?: StatisticsPerLabelListQueryParams | ((q: StatisticsPerLabelListQueryParamsBuilder) => StatisticsPerLabelListQueryParamsBuilder)): Promise<PaginationResponse<StatisticsPerLabel>> {
    let queryParams: StatisticsPerLabelListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new StatisticsPerLabelListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<StatisticsPerLabel>>('/encoding/statistics/labels/', {}, queryParams).then((response) => {
      return new PaginationResponse<StatisticsPerLabel>(response, StatisticsPerLabel);;
    });
  }

  /**
   * @summary Get statistics per label within specific dates
   * @param {Date} from Start date. Format: yyyy-MM-dd
   * @param {Date} to End date. Format: yyyy-MM-dd
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof LabelsApi
   */
  public listByDateRange(from: Date, to: Date, queryParameters?: StatisticsPerLabelListByDateRangeQueryParams | ((q: StatisticsPerLabelListByDateRangeQueryParamsBuilder) => StatisticsPerLabelListByDateRangeQueryParamsBuilder)): Promise<PaginationResponse<StatisticsPerLabel>> {
    const pathParamMap = {
      from: from,
      to: to
    };
    let queryParams: StatisticsPerLabelListByDateRangeQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new StatisticsPerLabelListByDateRangeQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<StatisticsPerLabel>>('/encoding/statistics/labels/{from}/{to}', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<StatisticsPerLabel>(response, StatisticsPerLabel);;
    });
  }
}
