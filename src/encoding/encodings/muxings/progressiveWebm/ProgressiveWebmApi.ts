import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import CustomdataApi from './customdata/CustomdataApi';
import InformationApi from './information/InformationApi';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import ProgressiveWebmMuxing from '../../../../models/ProgressiveWebmMuxing';
import PaginationResponse from '../../../../models/PaginationResponse';
import {ProgressiveWebmMuxingListQueryParams, ProgressiveWebmMuxingListQueryParamsBuilder} from './ProgressiveWebmMuxingListQueryParams';
import {getType, map} from '../../../../common/Mapper';

/**
 * ProgressiveWebmApi - object-oriented interface
 * @export
 * @class ProgressiveWebmApi
 * @extends {BaseAPI}
 */
export default class ProgressiveWebmApi extends BaseAPI {
  public customdata: CustomdataApi;
  public information: InformationApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
    this.information = new InformationApi(configuration);
  }

  /**
   * @summary Add Progressive WebM Muxing
   * @param {string} encodingId Id of the encoding.
   * @param {ProgressiveWebmMuxing} progressiveWebmMuxing The Progressive WebM Muxing to be created
   * @throws {RequiredError}
   * @memberof ProgressiveWebmApi
   */
  public create(encodingId: string, progressiveWebmMuxing?: ProgressiveWebmMuxing): Promise<ProgressiveWebmMuxing> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<ProgressiveWebmMuxing>('/encoding/encodings/{encoding_id}/muxings/progressive-webm', pathParamMap, progressiveWebmMuxing).then((response) => {
      return new ProgressiveWebmMuxing(response);
    });
  }

  /**
   * @summary Delete Progressive WebM Muxing
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the Progressive WebM muxing
   * @throws {RequiredError}
   * @memberof ProgressiveWebmApi
   */
  public delete(encodingId: string, muxingId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/muxings/progressive-webm/{muxing_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary Progressive WebM Muxing Details
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the Progressive WebM muxing
   * @throws {RequiredError}
   * @memberof ProgressiveWebmApi
   */
  public get(encodingId: string, muxingId: string): Promise<ProgressiveWebmMuxing> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    return this.restClient.get<ProgressiveWebmMuxing>('/encoding/encodings/{encoding_id}/muxings/progressive-webm/{muxing_id}', pathParamMap).then((response) => {
      return new ProgressiveWebmMuxing(response);
    });
  }

  /**
   * @summary List Progressive WebM Muxings
   * @param {string} encodingId Id of the encoding.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof ProgressiveWebmApi
   */
  public list(encodingId: string, queryParameters?: ProgressiveWebmMuxingListQueryParams | ((q: ProgressiveWebmMuxingListQueryParamsBuilder) => ProgressiveWebmMuxingListQueryParamsBuilder)): Promise<PaginationResponse<ProgressiveWebmMuxing>> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    let queryParams: ProgressiveWebmMuxingListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new ProgressiveWebmMuxingListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<ProgressiveWebmMuxing>>('/encoding/encodings/{encoding_id}/muxings/progressive-webm', pathParamMap, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<ProgressiveWebmMuxing>(response);
      if (Array.isArray(paginationResponse.items)) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new ProgressiveWebmMuxing(i));
      }
      return paginationResponse;
    });
  }
}
