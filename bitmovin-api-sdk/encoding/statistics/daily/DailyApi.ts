import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import DailyStatistics from '../../../models/DailyStatistics';
import PaginationResponse from '../../../models/PaginationResponse';
import DailyStatisticsListQueryParams from './DailyStatisticsListQueryParams';
import DailyStatisticsListByDateRangeQueryParams from './DailyStatisticsListByDateRangeQueryParams';

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
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof DailyApi
   */
  public list(queryParams?: DailyStatisticsListQueryParams): Promise<PaginationResponse<DailyStatistics>> {
    return this.restClient.get<PaginationResponse<DailyStatistics>>('/encoding/statistics/daily', {}, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<DailyStatistics>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new DailyStatistics(i));
      }
      return paginationResponse;
    });
  }

  /**
   * @summary List daily statistics within specific dates
   * @param {Date} from Start date, format: yyyy-MM-dd
   * @param {Date} to End date, format: yyyy-MM-dd
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof DailyApi
   */
  public listByDateRange(from: Date, to: Date, queryParams?: DailyStatisticsListByDateRangeQueryParams): Promise<PaginationResponse<DailyStatistics>> {
    const pathParamMap = {
      from: from,
      to: to
    };
    return this.restClient.get<PaginationResponse<DailyStatistics>>('/encoding/statistics/daily/{from}/{to}', pathParamMap, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<DailyStatistics>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new DailyStatistics(i));
      }
      return paginationResponse;
    });
  }
}
