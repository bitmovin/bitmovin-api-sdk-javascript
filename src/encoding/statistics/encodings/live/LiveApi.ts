import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import EncodingStatisticsLive from '../../../../models/EncodingStatisticsLive';
import PaginationResponse from '../../../../models/PaginationResponse';
import {EncodingStatisticsLiveListQueryParams, EncodingStatisticsLiveListQueryParamsBuilder} from './EncodingStatisticsLiveListQueryParams';
import {EncodingStatisticsLiveListByDateRangeQueryParams, EncodingStatisticsLiveListByDateRangeQueryParamsBuilder} from './EncodingStatisticsLiveListByDateRangeQueryParams';

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
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof LiveApi
   */
  public list(queryParameters?: EncodingStatisticsLiveListQueryParams | ((q: EncodingStatisticsLiveListQueryParamsBuilder) => EncodingStatisticsLiveListQueryParamsBuilder)): Promise<PaginationResponse<EncodingStatisticsLive>> {
    let queryParams: EncodingStatisticsLiveListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new EncodingStatisticsLiveListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<EncodingStatisticsLive>>('/encoding/statistics/encodings/live', {}, queryParams).then((response) => {
      return new PaginationResponse<EncodingStatisticsLive>(response, EncodingStatisticsLive);;
    });
  }

  /**
   * @summary List live encoding statistics within specific dates
   * @param {Date} from Start date, format: yyyy-MM-dd
   * @param {Date} to End date, format: yyyy-MM-dd
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof LiveApi
   */
  public listByDateRange(from: Date, to: Date, queryParameters?: EncodingStatisticsLiveListByDateRangeQueryParams | ((q: EncodingStatisticsLiveListByDateRangeQueryParamsBuilder) => EncodingStatisticsLiveListByDateRangeQueryParamsBuilder)): Promise<PaginationResponse<EncodingStatisticsLive>> {
    const pathParamMap = {
      from: from,
      to: to
    };
    let queryParams: EncodingStatisticsLiveListByDateRangeQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new EncodingStatisticsLiveListByDateRangeQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<EncodingStatisticsLive>>('/encoding/statistics/encodings/live/{from}/{to}', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<EncodingStatisticsLive>(response, EncodingStatisticsLive);;
    });
  }
}
