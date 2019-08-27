import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import SrtStatistics from '../../../../../models/SrtStatistics';
import PaginationResponse from '../../../../../models/PaginationResponse';
import {SrtStatisticsListQueryParams, SrtStatisticsListQueryParamsBuilder} from './SrtStatisticsListQueryParams';
import {SrtStatisticsListBySrtInputIdQueryParams, SrtStatisticsListBySrtInputIdQueryParamsBuilder} from './SrtStatisticsListBySrtInputIdQueryParams';

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
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof SrtApi
   */
  public list(encodingId: string, queryParameters?: SrtStatisticsListQueryParams | ((q: SrtStatisticsListQueryParamsBuilder) => SrtStatisticsListQueryParamsBuilder)): Promise<PaginationResponse<SrtStatistics>> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    let queryParams: SrtStatisticsListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new SrtStatisticsListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<SrtStatistics>>('/encoding/statistics/encodings/{encoding_id}/live-statistics/srt', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<SrtStatistics>(response, SrtStatistics);;
    });
  }

  /**
   * @summary List Statistics For SRT Live Stream Input
   * @param {string} encodingId Id of the encoding.
   * @param {string} srtInputId Id of the SRT input.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof SrtApi
   */
  public listBySrtInputId(encodingId: string, srtInputId: string, queryParameters?: SrtStatisticsListBySrtInputIdQueryParams | ((q: SrtStatisticsListBySrtInputIdQueryParamsBuilder) => SrtStatisticsListBySrtInputIdQueryParamsBuilder)): Promise<PaginationResponse<SrtStatistics>> {
    const pathParamMap = {
      encoding_id: encodingId,
      srt_input_id: srtInputId
    };
    let queryParams: SrtStatisticsListBySrtInputIdQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new SrtStatisticsListBySrtInputIdQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<SrtStatistics>>('/encoding/statistics/encodings/{encoding_id}/live-statistics/srt/{srt_input_id}', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<SrtStatistics>(response, SrtStatistics);;
    });
  }
}
