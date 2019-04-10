import {BaseAPI} from '../../../../../../common/BaseAPI';
import Configuration from '../../../../../../common/Configuration';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../../../../models/BitmovinResponse';
import WidevineDrm from '../../../../../../models/WidevineDrm';
import PaginationResponse from '../../../../../../models/PaginationResponse';
import WidevineDrmListQueryParams from './WidevineDrmListQueryParams';

/**
 * WidevineApi - object-oriented interface
 * @export
 * @class WidevineApi
 * @extends {BaseAPI}
 */
export default class WidevineApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Add Widevine DRM to fMP4
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the fMP4 muxing.
   * @param {WidevineDrm} [widevineDrm]
   * @throws {RequiredError}
   * @memberof WidevineApi
   */
  public create(encodingId: string, muxingId: string, widevineDrm?: WidevineDrm): Promise<WidevineDrm> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    return this.restClient.post<WidevineDrm>('/encoding/encodings/{encoding_id}/muxings/fmp4/{muxing_id}/drm/widevine', pathParamMap, widevineDrm).then((response) => {
      return new WidevineDrm(response);
    });
  }

  /**
   * @summary Delete Widevine DRM from fMP4
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the fMP4 muxing
   * @param {string} drmId Id of the widevine drm.
   * @throws {RequiredError}
   * @memberof WidevineApi
   */
  public delete(encodingId: string, muxingId: string, drmId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId,
      drm_id: drmId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/muxings/fmp4/{muxing_id}/drm/widevine/{drm_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary Widevine DRM Details of fMP4
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the fMP4 muxing.
   * @param {string} drmId Id of the widevine drm.
   * @throws {RequiredError}
   * @memberof WidevineApi
   */
  public get(encodingId: string, muxingId: string, drmId: string): Promise<WidevineDrm> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId,
      drm_id: drmId
    };
    return this.restClient.get<WidevineDrm>('/encoding/encodings/{encoding_id}/muxings/fmp4/{muxing_id}/drm/widevine/{drm_id}', pathParamMap).then((response) => {
      return new WidevineDrm(response);
    });
  }

  /**
   * @summary List Widevine DRMs of fMP4
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the fMP4 muxing
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof WidevineApi
   */
  public list(encodingId: string, muxingId: string, queryParams?: WidevineDrmListQueryParams): Promise<PaginationResponse<WidevineDrm>> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    return this.restClient.get<PaginationResponse<WidevineDrm>>('/encoding/encodings/{encoding_id}/muxings/fmp4/{muxing_id}/drm/widevine', pathParamMap, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<WidevineDrm>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new WidevineDrm(i));
      }
      return paginationResponse;
    });
  }
}
