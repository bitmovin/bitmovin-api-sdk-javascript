import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import DrmApi from './drm/DrmApi';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import Fmp4Muxing from '../../../../models/Fmp4Muxing';
import PaginationResponse from '../../../../models/PaginationResponse';
import {Fmp4MuxingListQueryParams, Fmp4MuxingListQueryParamsBuilder} from './Fmp4MuxingListQueryParams';

/**
 * Fmp4Api - object-oriented interface
 * @export
 * @class Fmp4Api
 * @extends {BaseAPI}
 */
export default class Fmp4Api extends BaseAPI {
  public customdata: CustomdataApi;
  public drm: DrmApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
    this.drm = new DrmApi(configuration);
  }

  /**
   * @summary Add fMP4 muxing
   * @param {string} encodingId Id of the encoding.
   * @param {Fmp4Muxing} fmp4Muxing The fMP4 muxing to be created
   * @throws {BitmovinError}
   * @memberof Fmp4Api
   */
  public create(encodingId: string, fmp4Muxing?: Fmp4Muxing): Promise<Fmp4Muxing> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<Fmp4Muxing>('/encoding/encodings/{encoding_id}/muxings/fmp4', pathParamMap, fmp4Muxing).then((response) => {
      return map(response, Fmp4Muxing);
    });
  }

  /**
   * @summary Delete fMP4 muxing
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the fMP4 muxing
   * @throws {BitmovinError}
   * @memberof Fmp4Api
   */
  public delete(encodingId: string, muxingId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/muxings/fmp4/{muxing_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary fMP4 muxing details
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the fMP4 muxing
   * @throws {BitmovinError}
   * @memberof Fmp4Api
   */
  public get(encodingId: string, muxingId: string): Promise<Fmp4Muxing> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    return this.restClient.get<Fmp4Muxing>('/encoding/encodings/{encoding_id}/muxings/fmp4/{muxing_id}', pathParamMap).then((response) => {
      return map(response, Fmp4Muxing);
    });
  }

  /**
   * @summary List fMP4 muxings
   * @param {string} encodingId Id of the encoding.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof Fmp4Api
   */
  public list(encodingId: string, queryParameters?: Fmp4MuxingListQueryParams | ((q: Fmp4MuxingListQueryParamsBuilder) => Fmp4MuxingListQueryParamsBuilder)): Promise<PaginationResponse<Fmp4Muxing>> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    let queryParams: Fmp4MuxingListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new Fmp4MuxingListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<Fmp4Muxing>>('/encoding/encodings/{encoding_id}/muxings/fmp4', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<Fmp4Muxing>(response, Fmp4Muxing);
    });
  }
}
