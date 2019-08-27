import {BaseAPI} from '../../../../../../common/BaseAPI';
import Configuration from '../../../../../../common/Configuration';
import CustomdataApi from './customdata/CustomdataApi';
import MarlinDrm from '../../../../../../models/MarlinDrm';
import PaginationResponse from '../../../../../../models/PaginationResponse';
import {MarlinDrmListQueryParams, MarlinDrmListQueryParamsBuilder} from './MarlinDrmListQueryParams';

/**
 * MarlinApi - object-oriented interface
 * @export
 * @class MarlinApi
 * @extends {BaseAPI}
 */
export default class MarlinApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Add Marlin DRM to MP4
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the MP4 muxing.
   * @param {MarlinDrm} marlinDrm The Marlin DRM to be created
   * @throws {RequiredError}
   * @memberof MarlinApi
   */
  public create(encodingId: string, muxingId: string, marlinDrm?: MarlinDrm): Promise<MarlinDrm> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    return this.restClient.post<MarlinDrm>('/encoding/encodings/{encoding_id}/muxings/mp4/{muxing_id}/drm/marlin', pathParamMap, marlinDrm).then((response) => {
      return new MarlinDrm(response);
    });
  }

  /**
   * @summary Delete Marlin DRM from MP4
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the mp4.
   * @param {string} drmId Id of the Marlin DRM configuration.
   * @throws {RequiredError}
   * @memberof MarlinApi
   */
  public delete(encodingId: string, muxingId: string, drmId: string): Promise<MarlinDrm> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId,
      drm_id: drmId
    };
    return this.restClient.delete<MarlinDrm>('/encoding/encodings/{encoding_id}/muxings/mp4/{muxing_id}/drm/marlin/{drm_id}', pathParamMap).then((response) => {
      return new MarlinDrm(response);
    });
  }

  /**
   * @summary Marlin DRM Details of MP4
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the mp4.
   * @param {string} drmId Id of the Marlin DRM configuration.
   * @throws {RequiredError}
   * @memberof MarlinApi
   */
  public get(encodingId: string, muxingId: string, drmId: string): Promise<MarlinDrm> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId,
      drm_id: drmId
    };
    return this.restClient.get<MarlinDrm>('/encoding/encodings/{encoding_id}/muxings/mp4/{muxing_id}/drm/marlin/{drm_id}', pathParamMap).then((response) => {
      return new MarlinDrm(response);
    });
  }

  /**
   * @summary List Marlin DRMs of MP4
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the mp4.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof MarlinApi
   */
  public list(encodingId: string, muxingId: string, queryParameters?: MarlinDrmListQueryParams | ((q: MarlinDrmListQueryParamsBuilder) => MarlinDrmListQueryParamsBuilder)): Promise<PaginationResponse<MarlinDrm>> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    let queryParams: MarlinDrmListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new MarlinDrmListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<MarlinDrm>>('/encoding/encodings/{encoding_id}/muxings/mp4/{muxing_id}/drm/marlin', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<MarlinDrm>(response, MarlinDrm);;
    });
  }
}
