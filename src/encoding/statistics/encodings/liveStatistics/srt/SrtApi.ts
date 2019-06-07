import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import SrtStatistics from '../../../../../models/SrtStatistics';
import PaginationResponse from '../../../../../models/PaginationResponse';
import SrtStatisticsListQueryParams from './SrtStatisticsListQueryParams';
import SrtStatisticsListBySrtInputIdQueryParams from './SrtStatisticsListBySrtInputIdQueryParams';

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

  /**
   * @summary List Statistics For SRT Live Stream Input
   * @param {string} encodingId Id of the encoding.
   * @param {string} srtInputId Id of the SRT input.
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof SrtApi
   */
  public listBySrtInputId(encodingId: string, srtInputId: string, queryParams?: SrtStatisticsListBySrtInputIdQueryParams): Promise<PaginationResponse<SrtStatistics>> {
    const pathParamMap = {
      encoding_id: encodingId,
      srt_input_id: srtInputId
    };
    return this.restClient.get<PaginationResponse<SrtStatistics>>('/encoding/statistics/encodings/{encoding_id}/live-statistics/srt/{srt_input_id}', pathParamMap, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<SrtStatistics>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new SrtStatistics(i));
      }
      return paginationResponse;
    });
  }
}
