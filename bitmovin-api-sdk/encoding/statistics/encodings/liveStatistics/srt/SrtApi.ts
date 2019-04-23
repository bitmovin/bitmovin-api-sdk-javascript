import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import SrtStatistics from '../../../../../models/SrtStatistics';
import PaginationResponse from '../../../../../models/PaginationResponse';
import SrtStatisticsListQueryParams from './SrtStatisticsListQueryParams';

/**
 * SrtApi - object-oriented interface
 * @export
 * @class SrtApi
 * @extends {BaseAPI}
 */
export default class SrtApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary List Stream Infos of Live Statistics from an Encoding
   * @param {string} encodingId Id of the encoding.
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof SrtApi
   */
  public list(encodingId: string, queryParams?: SrtStatisticsListQueryParams): Promise<PaginationResponse<SrtStatistics>> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.get<PaginationResponse<SrtStatistics>>('/encoding/statistics/encodings/{encoding_id}/live-statistics/srt', pathParamMap, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<SrtStatistics>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new SrtStatistics(i));
      }
      return paginationResponse;
    });
  }
}
