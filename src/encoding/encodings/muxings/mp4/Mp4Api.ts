import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import InformationApi from './information/InformationApi';
import DrmApi from './drm/DrmApi';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import Mp4Muxing from '../../../../models/Mp4Muxing';
import PaginationResponse from '../../../../models/PaginationResponse';
import {Mp4MuxingListQueryParams, Mp4MuxingListQueryParamsBuilder} from './Mp4MuxingListQueryParams';

/**
 * Mp4Api - object-oriented interface
 * @export
 * @class Mp4Api
 * @extends {BaseAPI}
 */
export default class Mp4Api extends BaseAPI {
  public customdata: CustomdataApi;
  public information: InformationApi;
  public drm: DrmApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
    this.information = new InformationApi(configuration);
    this.drm = new DrmApi(configuration);
  }

  /**
   * @summary Add MP4 Muxing
   * @param {string} encodingId Id of the encoding.
   * @param {Mp4Muxing} mp4Muxing The MP4 Muxing to be created
   * @throws {BitmovinError}
   * @memberof Mp4Api
   */
  public create(encodingId: string, mp4Muxing?: Mp4Muxing): Promise<Mp4Muxing> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<Mp4Muxing>('/encoding/encodings/{encoding_id}/muxings/mp4', pathParamMap, mp4Muxing).then((response) => {
      return map(response, Mp4Muxing);
    });
  }

  /**
   * @summary Delete MP4 Muxing
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the MP4 muxing
   * @throws {BitmovinError}
   * @memberof Mp4Api
   */
  public delete(encodingId: string, muxingId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/muxings/mp4/{muxing_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary MP4 Segment Muxing Details
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the MP4 muxing
   * @throws {BitmovinError}
   * @memberof Mp4Api
   */
  public get(encodingId: string, muxingId: string): Promise<Mp4Muxing> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    return this.restClient.get<Mp4Muxing>('/encoding/encodings/{encoding_id}/muxings/mp4/{muxing_id}', pathParamMap).then((response) => {
      return map(response, Mp4Muxing);
    });
  }

  /**
   * @summary List MP4 Muxings
   * @param {string} encodingId Id of the encoding.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof Mp4Api
   */
  public list(encodingId: string, queryParameters?: Mp4MuxingListQueryParams | ((q: Mp4MuxingListQueryParamsBuilder) => Mp4MuxingListQueryParamsBuilder)): Promise<PaginationResponse<Mp4Muxing>> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    let queryParams: Mp4MuxingListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new Mp4MuxingListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<Mp4Muxing>>('/encoding/encodings/{encoding_id}/muxings/mp4', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<Mp4Muxing>(response, Mp4Muxing);
    });
  }
}
