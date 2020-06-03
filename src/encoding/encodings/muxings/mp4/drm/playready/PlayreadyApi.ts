import {BaseAPI} from '../../../../../../common/BaseAPI';
import Configuration from '../../../../../../common/Configuration';
import {map, mapArray} from '../../../../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../../../../models/BitmovinResponse';
import PlayReadyDrm from '../../../../../../models/PlayReadyDrm';
import PaginationResponse from '../../../../../../models/PaginationResponse';
import {PlayReadyDrmListQueryParams, PlayReadyDrmListQueryParamsBuilder} from './PlayReadyDrmListQueryParams';

/**
 * PlayreadyApi - object-oriented interface
 * @export
 * @class PlayreadyApi
 * @extends {BaseAPI}
 */
export default class PlayreadyApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Add PlayReady DRM to an MP4 muxing
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the MP4 muxing.
   * @param {PlayReadyDrm} playReadyDrm The PlayReady DRM to be created
   * @throws {BitmovinError}
   * @memberof PlayreadyApi
   */
  public create(encodingId: string, muxingId: string, playReadyDrm?: PlayReadyDrm): Promise<PlayReadyDrm> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    return this.restClient.post<PlayReadyDrm>('/encoding/encodings/{encoding_id}/muxings/mp4/{muxing_id}/drm/playready', pathParamMap, playReadyDrm).then((response) => {
      return map(response, PlayReadyDrm);
    });
  }

  /**
   * @summary Delete PlayReady DRM from an MP4 muxing
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the MP4 muxing.
   * @param {string} drmId Id of the PlayReady DRM configuration.
   * @throws {BitmovinError}
   * @memberof PlayreadyApi
   */
  public delete(encodingId: string, muxingId: string, drmId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId,
      drm_id: drmId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/muxings/mp4/{muxing_id}/drm/playready/{drm_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary PlayReady DRM Details of an MP4 muxing
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the MP4 muxing.
   * @param {string} drmId Id of the PlayReady DRM configuration.
   * @throws {BitmovinError}
   * @memberof PlayreadyApi
   */
  public get(encodingId: string, muxingId: string, drmId: string): Promise<PlayReadyDrm> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId,
      drm_id: drmId
    };
    return this.restClient.get<PlayReadyDrm>('/encoding/encodings/{encoding_id}/muxings/mp4/{muxing_id}/drm/playready/{drm_id}', pathParamMap).then((response) => {
      return map(response, PlayReadyDrm);
    });
  }

  /**
   * @summary List PlayReady DRMs of an MP4 muxing
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the MP4 muxing.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof PlayreadyApi
   */
  public list(encodingId: string, muxingId: string, queryParameters?: PlayReadyDrmListQueryParams | ((q: PlayReadyDrmListQueryParamsBuilder) => PlayReadyDrmListQueryParamsBuilder)): Promise<PaginationResponse<PlayReadyDrm>> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    let queryParams: PlayReadyDrmListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new PlayReadyDrmListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<PlayReadyDrm>>('/encoding/encodings/{encoding_id}/muxings/mp4/{muxing_id}/drm/playready', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<PlayReadyDrm>(response, PlayReadyDrm);
    });
  }
}
