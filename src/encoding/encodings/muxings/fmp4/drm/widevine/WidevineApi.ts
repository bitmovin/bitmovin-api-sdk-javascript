import {BaseAPI} from '../../../../../../common/BaseAPI';
import Configuration from '../../../../../../common/Configuration';
import {map, mapArray} from '../../../../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../../../../models/BitmovinResponse';
import WidevineDrm from '../../../../../../models/WidevineDrm';
import PaginationResponse from '../../../../../../models/PaginationResponse';
import {WidevineDrmListQueryParams, WidevineDrmListQueryParamsBuilder} from './WidevineDrmListQueryParams';

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
   * @param {WidevineDrm} widevineDrm The Widevine DRM to be created
   * @throws {BitmovinError}
   * @memberof WidevineApi
   */
  public create(encodingId: string, muxingId: string, widevineDrm?: WidevineDrm): Promise<WidevineDrm> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    return this.restClient.post<WidevineDrm>('/encoding/encodings/{encoding_id}/muxings/fmp4/{muxing_id}/drm/widevine', pathParamMap, widevineDrm).then((response) => {
      return map(response, WidevineDrm);
    });
  }

  /**
   * @summary Delete Widevine DRM from fMP4
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the fMP4 muxing
   * @param {string} drmId Id of the widevine drm.
   * @throws {BitmovinError}
   * @memberof WidevineApi
   */
  public delete(encodingId: string, muxingId: string, drmId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId,
      drm_id: drmId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/muxings/fmp4/{muxing_id}/drm/widevine/{drm_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Widevine DRM Details of fMP4
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the fMP4 muxing.
   * @param {string} drmId Id of the widevine drm.
   * @throws {BitmovinError}
   * @memberof WidevineApi
   */
  public get(encodingId: string, muxingId: string, drmId: string): Promise<WidevineDrm> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId,
      drm_id: drmId
    };
    return this.restClient.get<WidevineDrm>('/encoding/encodings/{encoding_id}/muxings/fmp4/{muxing_id}/drm/widevine/{drm_id}', pathParamMap).then((response) => {
      return map(response, WidevineDrm);
    });
  }

  /**
   * @summary List Widevine DRMs of fMP4
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the fMP4 muxing
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof WidevineApi
   */
  public list(encodingId: string, muxingId: string, queryParameters?: WidevineDrmListQueryParams | ((q: WidevineDrmListQueryParamsBuilder) => WidevineDrmListQueryParamsBuilder)): Promise<PaginationResponse<WidevineDrm>> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    let queryParams: WidevineDrmListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new WidevineDrmListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<WidevineDrm>>('/encoding/encodings/{encoding_id}/muxings/fmp4/{muxing_id}/drm/widevine', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<WidevineDrm>(response, WidevineDrm);
    });
  }
}
