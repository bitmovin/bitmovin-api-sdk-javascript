import {BaseAPI} from '../../../../../../common/BaseAPI';
import Configuration from '../../../../../../common/Configuration';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../../../../models/BitmovinResponse';
import ClearKeyDrm from '../../../../../../models/ClearKeyDrm';
import PaginationResponse from '../../../../../../models/PaginationResponse';
import {ClearKeyDrmListQueryParams, ClearKeyDrmListQueryParamsBuilder} from './ClearKeyDrmListQueryParams';
import {getType, map} from '../../../../../../common/Mapper';

/**
 * ClearkeyApi - object-oriented interface
 * @export
 * @class ClearkeyApi
 * @extends {BaseAPI}
 */
export default class ClearkeyApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Add ClearKey DRM to MP4
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the MP4 muxing.
   * @param {ClearKeyDrm} clearKeyDrm The ClearKey DRM to be created
   * @throws {RequiredError}
   * @memberof ClearkeyApi
   */
  public create(encodingId: string, muxingId: string, clearKeyDrm?: ClearKeyDrm): Promise<ClearKeyDrm> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    return this.restClient.post<ClearKeyDrm>('/encoding/encodings/{encoding_id}/muxings/mp4/{muxing_id}/drm/clearkey', pathParamMap, clearKeyDrm).then((response) => {
      return new ClearKeyDrm(response);
    });
  }

  /**
   * @summary Delete ClearKey DRM from MP4
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the mp4.
   * @param {string} drmId Id of the ClearKey DRM configuration.
   * @throws {RequiredError}
   * @memberof ClearkeyApi
   */
  public delete(encodingId: string, muxingId: string, drmId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId,
      drm_id: drmId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/muxings/mp4/{muxing_id}/drm/clearkey/{drm_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary ClearKey DRM Details of MP4
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the mp4.
   * @param {string} drmId Id of the ClearKey DRM configuration.
   * @throws {RequiredError}
   * @memberof ClearkeyApi
   */
  public get(encodingId: string, muxingId: string, drmId: string): Promise<ClearKeyDrm> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId,
      drm_id: drmId
    };
    return this.restClient.get<ClearKeyDrm>('/encoding/encodings/{encoding_id}/muxings/mp4/{muxing_id}/drm/clearkey/{drm_id}', pathParamMap).then((response) => {
      return new ClearKeyDrm(response);
    });
  }

  /**
   * @summary List ClearKey DRMs of MP4
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the mp4.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof ClearkeyApi
   */
  public list(encodingId: string, muxingId: string, queryParameters?: ClearKeyDrmListQueryParams | ((q: ClearKeyDrmListQueryParamsBuilder) => ClearKeyDrmListQueryParamsBuilder)): Promise<PaginationResponse<ClearKeyDrm>> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    let queryParams: ClearKeyDrmListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new ClearKeyDrmListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<ClearKeyDrm>>('/encoding/encodings/{encoding_id}/muxings/mp4/{muxing_id}/drm/clearkey', pathParamMap, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<ClearKeyDrm>(response);
      if (Array.isArray(paginationResponse.items)) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new ClearKeyDrm(i));
      }
      return paginationResponse;
    });
  }
}
