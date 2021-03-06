import {BaseAPI} from '../../../../../../common/BaseAPI';
import Configuration from '../../../../../../common/Configuration';
import {map, mapArray} from '../../../../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../../../../models/BitmovinResponse';
import FairPlayDrm from '../../../../../../models/FairPlayDrm';
import PaginationResponse from '../../../../../../models/PaginationResponse';
import {FairPlayDrmListQueryParams, FairPlayDrmListQueryParamsBuilder} from './FairPlayDrmListQueryParams';

/**
 * FairplayApi - object-oriented interface
 * @export
 * @class FairplayApi
 * @extends {BaseAPI}
 */
export default class FairplayApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Add FairPlay DRM to a Progressive TS muxing
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the Progressive TS muxing.
   * @param {FairPlayDrm} fairPlayDrm The FairPlay DRM to be created
   * @throws {BitmovinError}
   * @memberof FairplayApi
   */
  public create(encodingId: string, muxingId: string, fairPlayDrm?: FairPlayDrm): Promise<FairPlayDrm> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    return this.restClient.post<FairPlayDrm>('/encoding/encodings/{encoding_id}/muxings/progressive-ts/{muxing_id}/drm/fairplay', pathParamMap, fairPlayDrm).then((response) => {
      return map(response, FairPlayDrm);
    });
  }

  /**
   * @summary Delete FairPlay DRM from a Progressive TS muxing
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the Progressive TS muxing.
   * @param {string} drmId Id of the FairPlay DRM configuration.
   * @throws {BitmovinError}
   * @memberof FairplayApi
   */
  public delete(encodingId: string, muxingId: string, drmId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId,
      drm_id: drmId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/muxings/progressive-ts/{muxing_id}/drm/fairplay/{drm_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary FairPlay DRM Details of a Progressive TS
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the Progressive TS muxing.
   * @param {string} drmId Id of the FairPlay DRM configuration.
   * @throws {BitmovinError}
   * @memberof FairplayApi
   */
  public get(encodingId: string, muxingId: string, drmId: string): Promise<FairPlayDrm> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId,
      drm_id: drmId
    };
    return this.restClient.get<FairPlayDrm>('/encoding/encodings/{encoding_id}/muxings/progressive-ts/{muxing_id}/drm/fairplay/{drm_id}', pathParamMap).then((response) => {
      return map(response, FairPlayDrm);
    });
  }

  /**
   * @summary List FairPlay DRMs of a Progressive TS muxing
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the Progressive TS muxing.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof FairplayApi
   */
  public list(encodingId: string, muxingId: string, queryParameters?: FairPlayDrmListQueryParams | ((q: FairPlayDrmListQueryParamsBuilder) => FairPlayDrmListQueryParamsBuilder)): Promise<PaginationResponse<FairPlayDrm>> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    let queryParams: FairPlayDrmListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new FairPlayDrmListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<FairPlayDrm>>('/encoding/encodings/{encoding_id}/muxings/progressive-ts/{muxing_id}/drm/fairplay', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<FairPlayDrm>(response, FairPlayDrm);
    });
  }
}
