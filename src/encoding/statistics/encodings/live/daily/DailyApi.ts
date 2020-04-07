import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import {map, mapArray} from '../../../../../common/Mapper';
import EncodingStatisticsLive from '../../../../../models/EncodingStatisticsLive';
import PaginationResponse from '../../../../../models/PaginationResponse';
import {EncodingStatisticsLiveListByDateRangeQueryParams, EncodingStatisticsLiveListByDateRangeQueryParamsBuilder} from './EncodingStatisticsLiveListByDateRangeQueryParams';

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
   * @summary List daily live encoding statistics within specific dates
   * @param {Date} from Start date, format: yyyy-MM-dd
   * @param {Date} to End date, format: yyyy-MM-dd
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof DailyApi
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
    return this.restClient.get<PaginationResponse<EncodingStatisticsLive>>('/encoding/statistics/encodings/live/daily/{from}/{to}', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<EncodingStatisticsLive>(response, EncodingStatisticsLive);
    });
  }
}
