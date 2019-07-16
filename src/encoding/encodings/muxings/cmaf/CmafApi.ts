import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import CustomdataApi from './customdata/CustomdataApi';
import CaptionsApi from './captions/CaptionsApi';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import CmafMuxing from '../../../../models/CmafMuxing';
import PaginationResponse from '../../../../models/PaginationResponse';
import { CmafMuxingListQueryParams, CmafMuxingListQueryParamsBuilder } from './CmafMuxingListQueryParams';

/**
 * CmafApi - object-oriented interface
 * @export
 * @class CmafApi
 * @extends {BaseAPI}
 */
export default class CmafApi extends BaseAPI {
  public customdata: CustomdataApi;
  public captions: CaptionsApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
    this.captions = new CaptionsApi(configuration);
  }

  /**
   * @summary Add CMAF muxing
   * @param {string} encodingId Id of the encoding.
   * @param {CmafMuxing} cmafMuxing The CMAF muxing to be created
   * @throws {RequiredError}
   * @memberof CmafApi
   */
  public create(encodingId: string, cmafMuxing?: CmafMuxing): Promise<CmafMuxing> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<CmafMuxing>('/encoding/encodings/{encoding_id}/muxings/cmaf', pathParamMap, cmafMuxing).then((response) => {
      return new CmafMuxing(response);
    });
  }

  /**
   * @summary Delete CMAF Muxing
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the CMAF muxing
   * @throws {RequiredError}
   * @memberof CmafApi
   */
  public delete(encodingId: string, muxingId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/muxings/cmaf/{muxing_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary CMAF Muxing Details
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the CMAF muxing
   * @throws {RequiredError}
   * @memberof CmafApi
   */
  public get(encodingId: string, muxingId: string): Promise<CmafMuxing> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    return this.restClient.get<CmafMuxing>('/encoding/encodings/{encoding_id}/muxings/cmaf/{muxing_id}', pathParamMap).then((response) => {
      return new CmafMuxing(response);
    });
  }

  /**
   * @summary List CMAF muxings
   * @param {string} encodingId Id of the encoding.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof CmafApi
   */
  public list(encodingId: string, queryParameters?: CmafMuxingListQueryParams | ((q: CmafMuxingListQueryParamsBuilder) => CmafMuxingListQueryParamsBuilder)): Promise<PaginationResponse<CmafMuxing>> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    let queryParams: CmafMuxingListQueryParams = {};
    if (typeof queryParameters === 'function') {
        queryParams = queryParameters(new CmafMuxingListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
        queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<CmafMuxing>>('/encoding/encodings/{encoding_id}/muxings/cmaf', pathParamMap, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<CmafMuxing>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new CmafMuxing(i));
      }
      return paginationResponse;
    });
  }
}
