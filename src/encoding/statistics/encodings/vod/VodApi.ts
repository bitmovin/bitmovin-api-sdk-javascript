import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import EncodingStatisticsVod from '../../../../models/EncodingStatisticsVod';
import PaginationResponse from '../../../../models/PaginationResponse';
import EncodingStatisticsVodListQueryParams from './EncodingStatisticsVodListQueryParams';
import EncodingStatisticsVodListByDateRangeQueryParams from './EncodingStatisticsVodListByDateRangeQueryParams';

/**
 * VodApi - object-oriented interface
 * @export
 * @class VodApi
 * @extends {BaseAPI}
 */
export default class VodApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary List VOD Encoding Statistics
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof VodApi
   */
  public list(queryParams?: EncodingStatisticsVodListQueryParams): Promise<PaginationResponse<EncodingStatisticsVod>> {
    return this.restClient.get<PaginationResponse<EncodingStatisticsVod>>('/encoding/statistics/encodings/vod', {}, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<EncodingStatisticsVod>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new EncodingStatisticsVod(i));
      }
      return paginationResponse;
    });
  }

  /**
   * @summary List VOD Encoding Statistics Within Specific Dates
   * @param {Date} from Start date, format: yyyy-MM-dd
   * @param {Date} to End date, format: yyyy-MM-dd
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof VodApi
   */
  public listByDateRange(from: Date, to: Date, queryParams?: EncodingStatisticsVodListByDateRangeQueryParams): Promise<PaginationResponse<EncodingStatisticsVod>> {
    const pathParamMap = {
      from: from,
      to: to
    };
    return this.restClient.get<PaginationResponse<EncodingStatisticsVod>>('/encoding/statistics/encodings/vod/{from}/{to}', pathParamMap, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<EncodingStatisticsVod>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new EncodingStatisticsVod(i));
      }
      return paginationResponse;
    });
  }
}
