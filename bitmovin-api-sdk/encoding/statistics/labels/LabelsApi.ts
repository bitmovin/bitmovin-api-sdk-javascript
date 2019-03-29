import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import DailyApi from './daily/DailyApi';
import StatisticsPerLabel from '../../../models/StatisticsPerLabel';
import PaginationResponse from '../../../models/PaginationResponse';
import StatisticsPerLabelListByDateRangeQueryParams from './StatisticsPerLabelListByDateRangeQueryParams';
import StatisticsPerLabelListQueryParams from './StatisticsPerLabelListQueryParams';

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
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof LabelsApi
   */
  public list(queryParams?: StatisticsPerLabelListQueryParams): Promise<PaginationResponse<StatisticsPerLabel>> {
    return this.restClient.get<PaginationResponse<StatisticsPerLabel>>('/encoding/statistics/labels/', {}, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<StatisticsPerLabel>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new StatisticsPerLabel(i));
      }
      return paginationResponse;
    });
  }

  /**
   * @summary Get statistics per label within specific dates
   * @param {Date} from Start date. Format: yyyy-MM-dd
   * @param {Date} to End date. Format: yyyy-MM-dd
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof LabelsApi
   */
  public listByDateRange(from: Date, to: Date, queryParams?: StatisticsPerLabelListByDateRangeQueryParams): Promise<PaginationResponse<StatisticsPerLabel>> {
    const pathParamMap = {
      from: from,
      to: to
    };
    return this.restClient.get<PaginationResponse<StatisticsPerLabel>>('/encoding/statistics/labels/{from}/{to}', pathParamMap, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<StatisticsPerLabel>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new StatisticsPerLabel(i));
      }
      return paginationResponse;
    });
  }
}
