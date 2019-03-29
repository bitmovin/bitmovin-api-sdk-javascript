import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import TypeApi from './type/TypeApi';
import AudioMixApi from './audioMix/AudioMixApi';
import IngestApi from './ingest/IngestApi';
import ConcatenationApi from './concatenation/ConcatenationApi';
import TrimmingApi from './trimming/TrimmingApi';
import BasicInputStream from '../../../models/BasicInputStream';
import { BasicInputStreamTypeMap } from '../../../models/typeMappings'
import PaginationResponse from '../../../models/PaginationResponse';
import BasicInputStreamListQueryParams from './BasicInputStreamListQueryParams';

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
  public trimming: TrimmingApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.type = new TypeApi(configuration);
    this.audioMix = new AudioMixApi(configuration);
    this.ingest = new IngestApi(configuration);
    this.concatenation = new ConcatenationApi(configuration);
    this.trimming = new TrimmingApi(configuration);
  }

  /**
   * @summary Input Stream Details
   * @param {string} encodingId Id of the encoding.
   * @param {string} inputStreamId Id of the input stream.
   * @throws {RequiredError}
   * @memberof InputStreamsApi
   */
  public get(encodingId: string, inputStreamId: string): Promise<BasicInputStream> {
    const pathParamMap = {
      encoding_id: encodingId,
      input_stream_id: inputStreamId
    };
    return this.restClient.get<BasicInputStream>('/encoding/encodings/{encoding_id}/input-streams/{input_stream_id}', pathParamMap).then((response) => {
      return new BasicInputStream(response);
    });
  }

  /**
   * @summary List All Input Streams
   * @param {string} encodingId Id of the encoding.
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof InputStreamsApi
   */
  public list(encodingId: string, queryParams?: BasicInputStreamListQueryParams): Promise<PaginationResponse<BasicInputStream>> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.get<PaginationResponse<BasicInputStream>>('/encoding/encodings/{encoding_id}/input-streams', pathParamMap, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<BasicInputStream>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new BasicInputStreamTypeMap[i.type](i));
      }
      return paginationResponse;
    });
  }
}
