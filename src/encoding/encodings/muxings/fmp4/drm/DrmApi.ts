import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import {map, mapArray} from '../../../../../common/Mapper';
import WidevineApi from './widevine/WidevineApi';
import PlayreadyApi from './playready/PlayreadyApi';
import PrimetimeApi from './primetime/PrimetimeApi';
import FairplayApi from './fairplay/FairplayApi';
import MarlinApi from './marlin/MarlinApi';
import ClearkeyApi from './clearkey/ClearkeyApi';
import CencApi from './cenc/CencApi';
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
  public widevine: WidevineApi;
  public playready: PlayreadyApi;
  public primetime: PrimetimeApi;
  public fairplay: FairplayApi;
  public marlin: MarlinApi;
  public clearkey: ClearkeyApi;
  public cenc: CencApi;
  public aes: AesApi;
  public speke: SpekeApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.widevine = new WidevineApi(configuration);
    this.playready = new PlayreadyApi(configuration);
    this.primetime = new PrimetimeApi(configuration);
    this.fairplay = new FairplayApi(configuration);
    this.marlin = new MarlinApi(configuration);
    this.clearkey = new ClearkeyApi(configuration);
    this.cenc = new CencApi(configuration);
    this.aes = new AesApi(configuration);
    this.speke = new SpekeApi(configuration);
  }

  /**
   * @summary DRM Details of an fMP4 muxing
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the fMP4 muxing
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
    return this.restClient.get<Drm>('/encoding/encodings/{encoding_id}/muxings/fmp4/{muxing_id}/drm/{drm_id}', pathParamMap).then((response) => {
      return map(response, Drm);
    });
  }

  /**
   * @summary List all DRMs of an fMP4 muxing
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the fMP4 muxing
   * @throws {BitmovinError}
   * @memberof DrmApi
   */
  public list(encodingId: string, muxingId: string): Promise<PaginationResponse<Drm>> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    return this.restClient.get<PaginationResponse<Drm>>('/encoding/encodings/{encoding_id}/muxings/fmp4/{muxing_id}/drm', pathParamMap).then((response) => {
      return new PaginationResponse<Drm>(response, Drm);
    });
  }
}
