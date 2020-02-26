import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import {map, mapArray} from '../../../../../common/Mapper';
import PlayreadyApi from './playready/PlayreadyApi';
import ClearkeyApi from './clearkey/ClearkeyApi';
import WidevineApi from './widevine/WidevineApi';
import MarlinApi from './marlin/MarlinApi';
import CencApi from './cenc/CencApi';
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
  public playready: PlayreadyApi;
  public clearkey: ClearkeyApi;
  public widevine: WidevineApi;
  public marlin: MarlinApi;
  public cenc: CencApi;
  public speke: SpekeApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.playready = new PlayreadyApi(configuration);
    this.clearkey = new ClearkeyApi(configuration);
    this.widevine = new WidevineApi(configuration);
    this.marlin = new MarlinApi(configuration);
    this.cenc = new CencApi(configuration);
    this.speke = new SpekeApi(configuration);
  }

  /**
   * @summary List all DRM configurations of MP4 muxing
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the MP4 muxing
   * @throws {BitmovinError}
   * @memberof DrmApi
   */
  public list(encodingId: string, muxingId: string): Promise<PaginationResponse<Drm>> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    return this.restClient.get<PaginationResponse<Drm>>('/encoding/encodings/{encoding_id}/muxings/mp4/{muxing_id}/drm', pathParamMap).then((response) => {
      return new PaginationResponse<Drm>(response, Drm);
    });
  }
}
