import {BaseAPI} from '../../../../../../common/BaseAPI';
import Configuration from '../../../../../../common/Configuration';
import {map, mapArray} from '../../../../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../../../../models/BitmovinResponse';
import CencDrm from '../../../../../../models/CencDrm';
import PaginationResponse from '../../../../../../models/PaginationResponse';
import {CencDrmListQueryParams, CencDrmListQueryParamsBuilder} from './CencDrmListQueryParams';

/**
 * CencApi - object-oriented interface
 * @export
 * @class CencApi
 * @extends {BaseAPI}
 */
export default class CencApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Add CENC DRM to Progressive WebM
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the Progressive WebM muxing.
   * @param {CencDrm} cencDrm The CENC DRM to be created
   * @throws {BitmovinError}
   * @memberof CencApi
   */
  public create(encodingId: string, muxingId: string, cencDrm?: CencDrm): Promise<CencDrm> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    return this.restClient.post<CencDrm>('/encoding/encodings/{encoding_id}/muxings/progressive-webm/{muxing_id}/drm/cenc', pathParamMap, cencDrm).then((response) => {
      return map(response, CencDrm);
    });
  }

  /**
   * @summary Delete CENC DRM from Progressive WebM
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the Progressive WebM muxing
   * @param {string} drmId Id of the CENC DRM.
   * @throws {BitmovinError}
   * @memberof CencApi
   */
  public delete(encodingId: string, muxingId: string, drmId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId,
      drm_id: drmId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/muxings/progressive-webm/{muxing_id}/drm/cenc/{drm_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary CENC DRM Details of Progressive WebM
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the Progressive WebM muxing.
   * @param {string} drmId Id of the CENC DRM.
   * @throws {BitmovinError}
   * @memberof CencApi
   */
  public get(encodingId: string, muxingId: string, drmId: string): Promise<CencDrm> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId,
      drm_id: drmId
    };
    return this.restClient.get<CencDrm>('/encoding/encodings/{encoding_id}/muxings/progressive-webm/{muxing_id}/drm/cenc/{drm_id}', pathParamMap).then((response) => {
      return map(response, CencDrm);
    });
  }

  /**
   * @summary List CENC DRM configurations of Progressive WebM muxing
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the Progressive WebM muxing.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof CencApi
   */
  public list(encodingId: string, muxingId: string, queryParameters?: CencDrmListQueryParams | ((q: CencDrmListQueryParamsBuilder) => CencDrmListQueryParamsBuilder)): Promise<PaginationResponse<CencDrm>> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    let queryParams: CencDrmListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new CencDrmListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<CencDrm>>('/encoding/encodings/{encoding_id}/muxings/progressive-webm/{muxing_id}/drm/cenc', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<CencDrm>(response, CencDrm);
    });
  }
}
