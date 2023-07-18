import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import {map, mapArray} from '../../../../../common/Mapper';
import LiveEncodingOptionsStatistics from '../../../../../models/LiveEncodingOptionsStatistics';
import LiveOptionsStatistics from '../../../../../models/LiveOptionsStatistics';
import {LiveOptionsStatisticsListByDateRangeQueryParams, LiveOptionsStatisticsListByDateRangeQueryParamsBuilder} from './LiveOptionsStatisticsListByDateRangeQueryParams';

/**
 * OptionsApi - object-oriented interface
 * @export
 * @class OptionsApi
 * @extends {BaseAPI}
 */
export default class OptionsApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary List live options encoding statistics for a given encoding
   * @param {string} encodingId Id of the encoding
   * @throws {BitmovinError}
   * @memberof OptionsApi
   */
  public get(encodingId: string): Promise<LiveEncodingOptionsStatistics> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.get<LiveEncodingOptionsStatistics>('/encoding/statistics/encodings/live/{encoding_id}/options', pathParamMap).then((response) => {
      return map(response, LiveEncodingOptionsStatistics);
    });
  }

  /**
   * @summary List live options encoding statistics within specific dates
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof OptionsApi
   */
  public listByDateRange(queryParameters?: LiveOptionsStatisticsListByDateRangeQueryParams | ((q: LiveOptionsStatisticsListByDateRangeQueryParamsBuilder) => LiveOptionsStatisticsListByDateRangeQueryParamsBuilder)): Promise<LiveOptionsStatistics> {
    let queryParams: LiveOptionsStatisticsListByDateRangeQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new LiveOptionsStatisticsListByDateRangeQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<LiveOptionsStatistics>('/encoding/statistics/encodings/live/options', {}, queryParams).then((response) => {
      return map(response, LiveOptionsStatistics);
    });
  }
}
