import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import DailyStatisticsPerLabel from '../../../../models/DailyStatisticsPerLabel';
import PaginationResponse from '../../../../models/PaginationResponse';
import DailyStatisticsPerLabelListQueryParams from './DailyStatisticsPerLabelListQueryParams';
import DailyStatisticsPerLabelListByDateRangeQueryParams from './DailyStatisticsPerLabelListByDateRangeQueryParams';

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
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof DailyApi
   */
  public list(queryParams?: DailyStatisticsPerLabelListQueryParams): Promise<PaginationResponse<DailyStatisticsPerLabel>> {
    return this.restClient.get<PaginationResponse<DailyStatisticsPerLabel>>('/encoding/statistics/labels/daily', {}, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<DailyStatisticsPerLabel>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new DailyStatisticsPerLabel(i));
      }
      return paginationResponse;
    });
  }

  /**
   * @summary Get daily statistics per label within specific dates
   * @param {Date} from Start date. Format: yyyy-MM-dd
   * @param {Date} to End date. Format: yyyy-MM-dd
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof DailyApi
   */
  public listByDateRange(from: Date, to: Date, queryParams?: DailyStatisticsPerLabelListByDateRangeQueryParams): Promise<PaginationResponse<DailyStatisticsPerLabel>> {
    const pathParamMap = {
      from: from,
      to: to
    };
    return this.restClient.get<PaginationResponse<DailyStatisticsPerLabel>>('/encoding/statistics/labels/daily/{from}/{to}', pathParamMap, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<DailyStatisticsPerLabel>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new DailyStatisticsPerLabel(i));
      }
      return paginationResponse;
    });
  }
}
