import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import TypeApi from './type/TypeApi';
import AudioMixApi from './audioMix/AudioMixApi';
import IngestApi from './ingest/IngestApi';
import SidecarApi from './sidecar/SidecarApi';
import ConcatenationApi from './concatenation/ConcatenationApi';
import FileApi from './file/FileApi';
import TrimmingApi from './trimming/TrimmingApi';
import SubtitlesApi from './subtitles/SubtitlesApi';
import CaptionsApi from './captions/CaptionsApi';
import InputStream from '../../../models/InputStream';
import PaginationResponse from '../../../models/PaginationResponse';
import {InputStreamListQueryParams, InputStreamListQueryParamsBuilder} from './InputStreamListQueryParams';

/**
 * InputStreamsApi - object-oriented interface
 * @export
 * @class InputStreamsApi
 * @extends {BaseAPI}
 */
export default class InputStreamsApi extends BaseAPI {
  public type: TypeApi;
  public audioMix: AudioMixApi;
  public ingest: IngestApi;
  public sidecar: SidecarApi;
  public concatenation: ConcatenationApi;
  public file: FileApi;
  public trimming: TrimmingApi;
  public subtitles: SubtitlesApi;
  public captions: CaptionsApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.type = new TypeApi(configuration);
    this.audioMix = new AudioMixApi(configuration);
    this.ingest = new IngestApi(configuration);
    this.sidecar = new SidecarApi(configuration);
    this.concatenation = new ConcatenationApi(configuration);
    this.file = new FileApi(configuration);
    this.trimming = new TrimmingApi(configuration);
    this.subtitles = new SubtitlesApi(configuration);
    this.captions = new CaptionsApi(configuration);
  }

  /**
   * @summary Input Stream Details
   * @param {string} encodingId Id of the encoding.
   * @param {string} inputStreamId Id of the input stream.
   * @throws {BitmovinError}
   * @memberof InputStreamsApi
   */
  public get(encodingId: string, inputStreamId: string): Promise<InputStream> {
    const pathParamMap = {
      encoding_id: encodingId,
      input_stream_id: inputStreamId
    };
    return this.restClient.get<InputStream>('/encoding/encodings/{encoding_id}/input-streams/{input_stream_id}', pathParamMap).then((response) => {
      return map(response, InputStream);
    });
  }

  /**
   * @summary List All Input Streams
   * @param {string} encodingId Id of the encoding.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof InputStreamsApi
   */
  public list(encodingId: string, queryParameters?: InputStreamListQueryParams | ((q: InputStreamListQueryParamsBuilder) => InputStreamListQueryParamsBuilder)): Promise<PaginationResponse<InputStream>> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    let queryParams: InputStreamListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new InputStreamListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<InputStream>>('/encoding/encodings/{encoding_id}/input-streams', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<InputStream>(response, InputStream);
    });
  }
}
