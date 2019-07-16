import {BaseAPI} from '../../../../../../common/BaseAPI';
import Configuration from '../../../../../../common/Configuration';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../../../../models/BitmovinResponse';
import FairPlayDrm from '../../../../../../models/FairPlayDrm';
import PaginationResponse from '../../../../../../models/PaginationResponse';
import { FairPlayDrmListQueryParams, FairPlayDrmListQueryParamsBuilder } from './FairPlayDrmListQueryParams';

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
   * @summary Add FairPlay DRM to fMP4
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the fMP4 muxing
   * @param {FairPlayDrm} fairPlayDrm The FairPlay DRM to be created
   * @throws {RequiredError}
   * @memberof FairplayApi
   */
  public create(encodingId: string, muxingId: string, fairPlayDrm?: FairPlayDrm): Promise<FairPlayDrm> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    return this.restClient.post<FairPlayDrm>('/encoding/encodings/{encoding_id}/muxings/fmp4/{muxing_id}/drm/fairplay', pathParamMap, fairPlayDrm).then((response) => {
      return new FairPlayDrm(response);
    });
  }

  /**
   * @summary Delete FairPlay DRM from fMP4
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the fMP4 muxing
   * @param {string} drmId Id of the FairPlay DRM configuration.
   * @throws {RequiredError}
   * @memberof FairplayApi
   */
  public delete(encodingId: string, muxingId: string, drmId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId,
      drm_id: drmId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/muxings/fmp4/{muxing_id}/drm/fairplay/{drm_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary FairPlay DRM Details of fMP4
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the fMP4 muxing
   * @param {string} drmId Id of the FairPlay DRM configuration.
   * @throws {RequiredError}
   * @memberof FairplayApi
   */
  public get(encodingId: string, muxingId: string, drmId: string): Promise<FairPlayDrm> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId,
      drm_id: drmId
    };
    return this.restClient.get<FairPlayDrm>('/encoding/encodings/{encoding_id}/muxings/fmp4/{muxing_id}/drm/fairplay/{drm_id}', pathParamMap).then((response) => {
      return new FairPlayDrm(response);
    });
  }

  /**
   * @summary List FairPlay DRMs of fMP4
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the fMP4 muxing.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
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
    return this.restClient.get<PaginationResponse<FairPlayDrm>>('/encoding/encodings/{encoding_id}/muxings/fmp4/{muxing_id}/drm/fairplay', pathParamMap, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<FairPlayDrm>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new FairPlayDrm(i));
      }
      return paginationResponse;
    });
  }
}
