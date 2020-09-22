import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import {map, mapArray} from '../../../../../common/Mapper';
import FairplayApi from './fairplay/FairplayApi';
import AesApi from './aes/AesApi';
import SpekeApi from './speke/SpekeApi';
import Drm from '../../../../../models/Drm';
import PaginationResponse from '../../../../../models/PaginationResponse';

/**
 * DrmApi - object-oriented interface
 * @export
 * @class DrmApi
 * @extends {BaseAPI}
 */
export default class DrmApi extends BaseAPI {
  public fairplay: FairplayApi;
  public aes: AesApi;
  public speke: SpekeApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.fairplay = new FairplayApi(configuration);
    this.aes = new AesApi(configuration);
    this.speke = new SpekeApi(configuration);
  }

  /**
   * @summary DRM Details of a Progressive TS muxing
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the Progressive TS muxing
   * @param {string} drmId Id of the DRM.
   * @throws {BitmovinError}
   * @memberof DrmApi
   */
  public get(encodingId: string, muxingId: string, drmId: string): Promise<Drm> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId,
      drm_id: drmId
    };
    return this.restClient.get<Drm>('/encoding/encodings/{encoding_id}/muxings/progressive-ts/{muxing_id}/drm/{drm_id}', pathParamMap).then((response) => {
      return map(response, Drm);
    });
  }

  /**
   * @summary List all DRM configurations of a Progressive TS muxing
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the Progressive TS muxing
   * @throws {BitmovinError}
   * @memberof DrmApi
   */
  public list(encodingId: string, muxingId: string): Promise<PaginationResponse<Drm>> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    return this.restClient.get<PaginationResponse<Drm>>('/encoding/encodings/{encoding_id}/muxings/progressive-ts/{muxing_id}/drm', pathParamMap).then((response) => {
      return new PaginationResponse<Drm>(response, Drm);
    });
  }
}
