import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import MxfMuxing from '../../../../models/MxfMuxing';
import PaginationResponse from '../../../../models/PaginationResponse';
import {MxfMuxingListQueryParams, MxfMuxingListQueryParamsBuilder} from './MxfMuxingListQueryParams';

/**
 * MxfApi - object-oriented interface
 * @export
 * @class MxfApi
 * @extends {BaseAPI}
 */
export default class MxfApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Add MXF muxing
   * @param {string} encodingId Id of the encoding.
   * @param {MxfMuxing} mxfMuxing The MXF muxing to be created
   * @throws {BitmovinError}
   * @memberof MxfApi
   */
  public create(encodingId: string, mxfMuxing?: MxfMuxing): Promise<MxfMuxing> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<MxfMuxing>('/encoding/encodings/{encoding_id}/muxings/mxf', pathParamMap, mxfMuxing).then((response) => {
      return map(response, MxfMuxing);
    });
  }

  /**
   * @summary Delete MXF muxing
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the MXF muxing
   * @throws {BitmovinError}
   * @memberof MxfApi
   */
  public delete(encodingId: string, muxingId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/muxings/mxf/{muxing_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary MXF muxing details
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the MXF muxing
   * @throws {BitmovinError}
   * @memberof MxfApi
   */
  public get(encodingId: string, muxingId: string): Promise<MxfMuxing> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    return this.restClient.get<MxfMuxing>('/encoding/encodings/{encoding_id}/muxings/mxf/{muxing_id}', pathParamMap).then((response) => {
      return map(response, MxfMuxing);
    });
  }

  /**
   * @summary List MXF muxings
   * @param {string} encodingId Id of the encoding.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof MxfApi
   */
  public list(encodingId: string, queryParameters?: MxfMuxingListQueryParams | ((q: MxfMuxingListQueryParamsBuilder) => MxfMuxingListQueryParamsBuilder)): Promise<PaginationResponse<MxfMuxing>> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    let queryParams: MxfMuxingListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new MxfMuxingListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<MxfMuxing>>('/encoding/encodings/{encoding_id}/muxings/mxf', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<MxfMuxing>(response, MxfMuxing);
    });
  }
}
