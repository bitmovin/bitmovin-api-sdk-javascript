import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import {map, mapArray} from '../../../../../common/Mapper';
import EncodingStatisticsLive from '../../../../../models/EncodingStatisticsLive';
import PaginationResponse from '../../../../../models/PaginationResponse';

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
   * @throws {BitmovinError}
   * @memberof DailyApi
   */
  public listByDateRange(from: Date, to: Date): Promise<PaginationResponse<EncodingStatisticsLive>> {
    const pathParamMap = {
      from: from,
      to: to
    };
    return this.restClient.get<PaginationResponse<EncodingStatisticsLive>>('/encoding/statistics/encodings/live/daily/{from}/{to}', pathParamMap).then((response) => {
      return new PaginationResponse<EncodingStatisticsLive>(response, EncodingStatisticsLive);
    });
  }
}
