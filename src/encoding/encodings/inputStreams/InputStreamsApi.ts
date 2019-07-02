import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import TypeApi from './type/TypeApi';
import AudioMixApi from './audioMix/AudioMixApi';
import IngestApi from './ingest/IngestApi';
import ConcatenationApi from './concatenation/ConcatenationApi';
import FileApi from './file/FileApi';
import TrimmingApi from './trimming/TrimmingApi';
import SubtitlesApi from './subtitles/SubtitlesApi';
import CaptionsApi from './captions/CaptionsApi';
import InputStream from '../../../models/InputStream';
import { InputStreamTypeMap } from '../../../models/typeMappings'
import PaginationResponse from '../../../models/PaginationResponse';
import InputStreamListQueryParams from './InputStreamListQueryParams';

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
   * @throws {RequiredError}
   * @memberof InputStreamsApi
   */
  public get(encodingId: string, inputStreamId: string): Promise<InputStream> {
    const pathParamMap = {
      encoding_id: encodingId,
      input_stream_id: inputStreamId
    };
    return this.restClient.get<InputStream>('/encoding/encodings/{encoding_id}/input-streams/{input_stream_id}', pathParamMap).then((response) => {
      return new InputStream(response);
    });
  }

  /**
   * @summary List All Input Streams
   * @param {string} encodingId Id of the encoding.
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof InputStreamsApi
   */
  public list(encodingId: string, queryParams?: InputStreamListQueryParams): Promise<PaginationResponse<InputStream>> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.get<PaginationResponse<InputStream>>('/encoding/encodings/{encoding_id}/input-streams', pathParamMap, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<InputStream>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new InputStreamTypeMap[i.type](i));
      }
      return paginationResponse;
    });
  }
}
