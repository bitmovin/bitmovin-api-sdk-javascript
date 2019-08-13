import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import EncodingStatisticsVod from '../../../../models/EncodingStatisticsVod';
import PaginationResponse from '../../../../models/PaginationResponse';
import {EncodingStatisticsVodListQueryParams, EncodingStatisticsVodListQueryParamsBuilder} from './EncodingStatisticsVodListQueryParams';
import {EncodingStatisticsVodListByDateRangeQueryParams, EncodingStatisticsVodListByDateRangeQueryParamsBuilder} from './EncodingStatisticsVodListByDateRangeQueryParams';
import {getType, map} from '../../../../common/Mapper';

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
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof VodApi
   */
  public list(queryParameters?: EncodingStatisticsVodListQueryParams | ((q: EncodingStatisticsVodListQueryParamsBuilder) => EncodingStatisticsVodListQueryParamsBuilder)): Promise<PaginationResponse<EncodingStatisticsVod>> {
    let queryParams: EncodingStatisticsVodListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new EncodingStatisticsVodListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<EncodingStatisticsVod>>('/encoding/statistics/encodings/vod', {}, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<EncodingStatisticsVod>(response);
      if (Array.isArray(paginationResponse.items)) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new EncodingStatisticsVod(i));
      }
      return paginationResponse;
    });
  }

  /**
   * @summary List VOD Encoding Statistics Within Specific Dates
   * @param {Date} from Start date, format: yyyy-MM-dd
   * @param {Date} to End date, format: yyyy-MM-dd
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof VodApi
   */
  public listByDateRange(from: Date, to: Date, queryParameters?: EncodingStatisticsVodListByDateRangeQueryParams | ((q: EncodingStatisticsVodListByDateRangeQueryParamsBuilder) => EncodingStatisticsVodListByDateRangeQueryParamsBuilder)): Promise<PaginationResponse<EncodingStatisticsVod>> {
    const pathParamMap = {
      from: from,
      to: to
    };
    let queryParams: EncodingStatisticsVodListByDateRangeQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new EncodingStatisticsVodListByDateRangeQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<EncodingStatisticsVod>>('/encoding/statistics/encodings/vod/{from}/{to}', pathParamMap, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<EncodingStatisticsVod>(response);
      if (Array.isArray(paginationResponse.items)) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new EncodingStatisticsVod(i));
      }
      return paginationResponse;
    });
  }
}
