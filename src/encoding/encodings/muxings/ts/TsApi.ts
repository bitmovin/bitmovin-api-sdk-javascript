import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import DrmApi from './drm/DrmApi';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import TsMuxing from '../../../../models/TsMuxing';
import PaginationResponse from '../../../../models/PaginationResponse';
import {TsMuxingListQueryParams, TsMuxingListQueryParamsBuilder} from './TsMuxingListQueryParams';

/**
 * TsApi - object-oriented interface
 * @export
 * @class TsApi
 * @extends {BaseAPI}
 */
export default class TsApi extends BaseAPI {
  public customdata: CustomdataApi;
  public drm: DrmApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
    this.drm = new DrmApi(configuration);
  }

  /**
   * @summary Add TS Segment Muxing
   * @param {string} encodingId Id of the encoding.
   * @param {TsMuxing} tsMuxing The TS Segment Muxing to be created
   * @throws {BitmovinError}
   * @memberof TsApi
   */
  public create(encodingId: string, tsMuxing?: TsMuxing): Promise<TsMuxing> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<TsMuxing>('/encoding/encodings/{encoding_id}/muxings/ts', pathParamMap, tsMuxing).then((response) => {
      return map(response, TsMuxing);
    });
  }

  /**
   * @summary Delete TS Segment Muxing
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the ts segment muxing
   * @throws {BitmovinError}
   * @memberof TsApi
   */
  public delete(encodingId: string, muxingId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/muxings/ts/{muxing_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary TS Segment Muxing Details
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the ts segment muxing
   * @throws {BitmovinError}
   * @memberof TsApi
   */
  public get(encodingId: string, muxingId: string): Promise<TsMuxing> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    return this.restClient.get<TsMuxing>('/encoding/encodings/{encoding_id}/muxings/ts/{muxing_id}', pathParamMap).then((response) => {
      return map(response, TsMuxing);
    });
  }

  /**
   * @summary List TS Segment Muxings
   * @param {string} encodingId Id of the encoding.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof TsApi
   */
  public list(encodingId: string, queryParameters?: TsMuxingListQueryParams | ((q: TsMuxingListQueryParamsBuilder) => TsMuxingListQueryParamsBuilder)): Promise<PaginationResponse<TsMuxing>> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    let queryParams: TsMuxingListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new TsMuxingListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<TsMuxing>>('/encoding/encodings/{encoding_id}/muxings/ts', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<TsMuxing>(response, TsMuxing);
    });
  }
}
