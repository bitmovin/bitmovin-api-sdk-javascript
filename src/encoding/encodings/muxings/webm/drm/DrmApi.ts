import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import {map, mapArray} from '../../../../../common/Mapper';
import CencApi from './cenc/CencApi';
import Drm from '../../../../../models/Drm';
import PaginationResponse from '../../../../../models/PaginationResponse';

/**
 * DrmApi - object-oriented interface
 * @export
 * @class DrmApi
 * @extends {BaseAPI}
 */
export default class DrmApi extends BaseAPI {
  public cenc: CencApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.cenc = new CencApi(configuration);
  }

  /**
   * @summary List all DRM configurations of WebM Muxing
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the WebM muxing
   * @throws {BitmovinError}
   * @memberof DrmApi
   */
  public list(encodingId: string, muxingId: string): Promise<PaginationResponse<Drm>> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    return this.restClient.get<PaginationResponse<Drm>>('/encoding/encodings/{encoding_id}/muxings/webm/{muxing_id}/drm', pathParamMap).then((response) => {
      return new PaginationResponse<Drm>(response, Drm);
    });
  }
}
