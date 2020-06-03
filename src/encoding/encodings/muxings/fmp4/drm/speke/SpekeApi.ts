import {BaseAPI} from '../../../../../../common/BaseAPI';
import Configuration from '../../../../../../common/Configuration';
import {map, mapArray} from '../../../../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../../../../models/BitmovinResponse';
import SpekeDrm from '../../../../../../models/SpekeDrm';
import PaginationResponse from '../../../../../../models/PaginationResponse';
import {SpekeDrmListQueryParams, SpekeDrmListQueryParamsBuilder} from './SpekeDrmListQueryParams';

/**
 * SpekeApi - object-oriented interface
 * @export
 * @class SpekeApi
 * @extends {BaseAPI}
 */
export default class SpekeApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Add SPEKE DRM key provider to fMP4
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the fMP4 muxing
   * @param {SpekeDrm} spekeDrm The SPEKE DRM key provider to be created
   * @throws {BitmovinError}
   * @memberof SpekeApi
   */
  public create(encodingId: string, muxingId: string, spekeDrm?: SpekeDrm): Promise<SpekeDrm> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    return this.restClient.post<SpekeDrm>('/encoding/encodings/{encoding_id}/muxings/fmp4/{muxing_id}/drm/speke', pathParamMap, spekeDrm).then((response) => {
      return map(response, SpekeDrm);
    });
  }

  /**
   * @summary Delete SPEKE DRM from an fMP4 muxing
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the fMP4 muxing
   * @param {string} drmId Id of the SPEKE DRM.
   * @throws {BitmovinError}
   * @memberof SpekeApi
   */
  public delete(encodingId: string, muxingId: string, drmId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId,
      drm_id: drmId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/muxings/fmp4/{muxing_id}/drm/speke/{drm_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary SPEKE DRM Details of an fMP4 muxing
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the fMP4 muxing
   * @param {string} drmId Id of the SPEKE DRM.
   * @throws {BitmovinError}
   * @memberof SpekeApi
   */
  public get(encodingId: string, muxingId: string, drmId: string): Promise<SpekeDrm> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId,
      drm_id: drmId
    };
    return this.restClient.get<SpekeDrm>('/encoding/encodings/{encoding_id}/muxings/fmp4/{muxing_id}/drm/speke/{drm_id}', pathParamMap).then((response) => {
      return map(response, SpekeDrm);
    });
  }

  /**
   * @summary List SPEKE DRM of an fMP4 muxing
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the fMP4 muxing
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof SpekeApi
   */
  public list(encodingId: string, muxingId: string, queryParameters?: SpekeDrmListQueryParams | ((q: SpekeDrmListQueryParamsBuilder) => SpekeDrmListQueryParamsBuilder)): Promise<PaginationResponse<SpekeDrm>> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    let queryParams: SpekeDrmListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new SpekeDrmListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<SpekeDrm>>('/encoding/encodings/{encoding_id}/muxings/fmp4/{muxing_id}/drm/speke', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<SpekeDrm>(response, SpekeDrm);
    });
  }
}
