import {BaseAPI} from '../../../../../../common/BaseAPI';
import Configuration from '../../../../../../common/Configuration';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../../../../models/BitmovinResponse';
import PrimeTimeDrm from '../../../../../../models/PrimeTimeDrm';
import PaginationResponse from '../../../../../../models/PaginationResponse';
import {PrimeTimeDrmListQueryParams, PrimeTimeDrmListQueryParamsBuilder} from './PrimeTimeDrmListQueryParams';
import {getType, map} from '../../../../../../common/Mapper';

/**
 * PrimetimeApi - object-oriented interface
 * @export
 * @class PrimetimeApi
 * @extends {BaseAPI}
 */
export default class PrimetimeApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Add PrimeTime DRM to fMP4
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the fMP4 muxing.
   * @param {PrimeTimeDrm} primeTimeDrm The PrimeTime DRM to be created
   * @throws {RequiredError}
   * @memberof PrimetimeApi
   */
  public create(encodingId: string, muxingId: string, primeTimeDrm?: PrimeTimeDrm): Promise<PrimeTimeDrm> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    return this.restClient.post<PrimeTimeDrm>('/encoding/encodings/{encoding_id}/muxings/fmp4/{muxing_id}/drm/primetime', pathParamMap, primeTimeDrm).then((response) => {
      return new PrimeTimeDrm(response);
    });
  }

  /**
   * @summary Delete PrimeTime DRM from fMP4
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the fMP4 muxing
   * @param {string} drmId Id of the PrimeTime DRM configuration.
   * @throws {RequiredError}
   * @memberof PrimetimeApi
   */
  public delete(encodingId: string, muxingId: string, drmId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId,
      drm_id: drmId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/muxings/fmp4/{muxing_id}/drm/primetime/{drm_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary PrimeTime DRM Details of fMP4
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the fMP4 muxing
   * @param {string} drmId Id of the PrimeTime DRM configuration.
   * @throws {RequiredError}
   * @memberof PrimetimeApi
   */
  public get(encodingId: string, muxingId: string, drmId: string): Promise<PrimeTimeDrm> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId,
      drm_id: drmId
    };
    return this.restClient.get<PrimeTimeDrm>('/encoding/encodings/{encoding_id}/muxings/fmp4/{muxing_id}/drm/primetime/{drm_id}', pathParamMap).then((response) => {
      return new PrimeTimeDrm(response);
    });
  }

  /**
   * @summary List PrimeTime DRMs of fMP4
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the fMP4 muxing
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof PrimetimeApi
   */
  public list(encodingId: string, muxingId: string, queryParameters?: PrimeTimeDrmListQueryParams | ((q: PrimeTimeDrmListQueryParamsBuilder) => PrimeTimeDrmListQueryParamsBuilder)): Promise<PaginationResponse<PrimeTimeDrm>> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    let queryParams: PrimeTimeDrmListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new PrimeTimeDrmListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<PrimeTimeDrm>>('/encoding/encodings/{encoding_id}/muxings/fmp4/{muxing_id}/drm/primetime', pathParamMap, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<PrimeTimeDrm>(response);
      if (Array.isArray(paginationResponse.items)) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new PrimeTimeDrm(i));
      }
      return paginationResponse;
    });
  }
}
