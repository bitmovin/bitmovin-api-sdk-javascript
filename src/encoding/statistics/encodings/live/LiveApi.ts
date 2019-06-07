import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import EncodingStatisticsLive from '../../../../models/EncodingStatisticsLive';
import PaginationResponse from '../../../../models/PaginationResponse';
import EncodingStatisticsLiveListQueryParams from './EncodingStatisticsLiveListQueryParams';
import EncodingStatisticsLiveListByDateRangeQueryParams from './EncodingStatisticsLiveListByDateRangeQueryParams';

/**
 * LiveApi - object-oriented interface
 * @export
 * @class LiveApi
 * @extends {BaseAPI}
 */
export default class LiveApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary List Live Encoding Statistics
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof LiveApi
   */
  public list(queryParams?: EncodingStatisticsLiveListQueryParams): Promise<PaginationResponse<EncodingStatisticsLive>> {
    return this.restClient.get<PaginationResponse<EncodingStatisticsLive>>('/encoding/statistics/encodings/live', {}, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<EncodingStatisticsLive>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new EncodingStatisticsLive(i));
      }
      return paginationResponse;
    });
  }

  /**
   * @summary List live encoding statistics within specific dates
   * @param {Date} from Start date, format: yyyy-MM-dd
   * @param {Date} to End date, format: yyyy-MM-dd
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof LiveApi
   */
  public listByDateRange(from: Date, to: Date, queryParams?: EncodingStatisticsLiveListByDateRangeQueryParams): Promise<PaginationResponse<EncodingStatisticsLive>> {
    const pathParamMap = {
      from: from,
      to: to
    };
    return this.restClient.get<PaginationResponse<EncodingStatisticsLive>>('/encoding/statistics/encodings/live/{from}/{to}', pathParamMap, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<EncodingStatisticsLive>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new EncodingStatisticsLive(i));
      }
      return paginationResponse;
    });
  }
}
