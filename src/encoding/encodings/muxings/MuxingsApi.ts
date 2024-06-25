import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import TypeApi from './type/TypeApi';
import Fmp4Api from './fmp4/Fmp4Api';
import ChunkedTextApi from './chunkedText/ChunkedTextApi';
import CmafApi from './cmaf/CmafApi';
import SegmentedRawApi from './segmentedRaw/SegmentedRawApi';
import PackedAudioApi from './packedAudio/PackedAudioApi';
import TextApi from './text/TextApi';
import TsApi from './ts/TsApi';
import WebmApi from './webm/WebmApi';
import Mp3Api from './mp3/Mp3Api';
import Mp4Api from './mp4/Mp4Api';
import MxfApi from './mxf/MxfApi';
import ProgressiveTsApi from './progressiveTs/ProgressiveTsApi';
import BroadcastTsApi from './broadcastTs/BroadcastTsApi';
import ProgressiveWavApi from './progressiveWav/ProgressiveWavApi';
import ProgressiveWebmApi from './progressiveWebm/ProgressiveWebmApi';
import ProgressiveMovApi from './progressiveMov/ProgressiveMovApi';
import Muxing from '../../../models/Muxing';
import StreamMode from '../../../models/StreamMode';
import PaginationResponse from '../../../models/PaginationResponse';
import {MuxingListQueryParams, MuxingListQueryParamsBuilder} from './MuxingListQueryParams';

/**
 * MuxingsApi - object-oriented interface
 * @export
 * @class MuxingsApi
 * @extends {BaseAPI}
 */
export default class MuxingsApi extends BaseAPI {
  public type: TypeApi;
  public fmp4: Fmp4Api;
  public chunkedText: ChunkedTextApi;
  public cmaf: CmafApi;
  public segmentedRaw: SegmentedRawApi;
  public packedAudio: PackedAudioApi;
  public text: TextApi;
  public ts: TsApi;
  public webm: WebmApi;
  public mp3: Mp3Api;
  public mp4: Mp4Api;
  public mxf: MxfApi;
  public progressiveTs: ProgressiveTsApi;
  public broadcastTs: BroadcastTsApi;
  public progressiveWav: ProgressiveWavApi;
  public progressiveWebm: ProgressiveWebmApi;
  public progressiveMov: ProgressiveMovApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.type = new TypeApi(configuration);
    this.fmp4 = new Fmp4Api(configuration);
    this.chunkedText = new ChunkedTextApi(configuration);
    this.cmaf = new CmafApi(configuration);
    this.segmentedRaw = new SegmentedRawApi(configuration);
    this.packedAudio = new PackedAudioApi(configuration);
    this.text = new TextApi(configuration);
    this.ts = new TsApi(configuration);
    this.webm = new WebmApi(configuration);
    this.mp3 = new Mp3Api(configuration);
    this.mp4 = new Mp4Api(configuration);
    this.mxf = new MxfApi(configuration);
    this.progressiveTs = new ProgressiveTsApi(configuration);
    this.broadcastTs = new BroadcastTsApi(configuration);
    this.progressiveWav = new ProgressiveWavApi(configuration);
    this.progressiveWebm = new ProgressiveWebmApi(configuration);
    this.progressiveMov = new ProgressiveMovApi(configuration);
  }

  /**
   * @summary Muxing Details
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the muxing.
   * @throws {BitmovinError}
   * @memberof MuxingsApi
   */
  public get(encodingId: string, muxingId: string): Promise<Muxing> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    return this.restClient.get<Muxing>('/encoding/encodings/{encoding_id}/muxings/{muxing_id}', pathParamMap).then((response) => {
      return map(response, Muxing);
    });
  }

  /**
   * @summary List All Muxings
   * @param {string} encodingId Id of the encoding.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof MuxingsApi
   */
  public list(encodingId: string, queryParameters?: MuxingListQueryParams | ((q: MuxingListQueryParamsBuilder) => MuxingListQueryParamsBuilder)): Promise<PaginationResponse<Muxing>> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    let queryParams: MuxingListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new MuxingListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<Muxing>>('/encoding/encodings/{encoding_id}/muxings', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<Muxing>(response, Muxing);
    });
  }
}
