import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import AudioMixInputStream from '../../../../models/AudioMixInputStream';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import PaginationResponse from '../../../../models/PaginationResponse';
import AudioMixInputStreamListQueryParams from './AudioMixInputStreamListQueryParams';

/**
 * AudioMixApi - object-oriented interface
 * @export
 * @class AudioMixApi
 * @extends {BaseAPI}
 */
export default class AudioMixApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Add audio mix input stream
   * @param {string} encodingId Id of the encoding.
   * @param {AudioMixInputStream} audioMixInputStream
   * @throws {RequiredError}
   * @memberof AudioMixApi
   */
  public create(encodingId: string, audioMixInputStream?: AudioMixInputStream): Promise<AudioMixInputStream> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<AudioMixInputStream>('/encoding/encodings/{encoding_id}/input-streams/audio-mix', pathParamMap, audioMixInputStream).then((response) => {
      return new AudioMixInputStream(response);
    });
  }

  /**
   * @summary Delete audio mix input stream
   * @param {string} encodingId Id of the encoding.
   * @param {string} inputStreamId Id of the audio mix input stream.
   * @throws {RequiredError}
   * @memberof AudioMixApi
   */
  public delete(encodingId: string, inputStreamId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      input_stream_id: inputStreamId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/input-streams/audio-mix/{input_stream_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary Audio mix input stream details
   * @param {string} encodingId Id of the encoding.
   * @param {string} inputStreamId Id of the concatenation input stream.
   * @throws {RequiredError}
   * @memberof AudioMixApi
   */
  public get(encodingId: string, inputStreamId: string): Promise<AudioMixInputStream> {
    const pathParamMap = {
      encoding_id: encodingId,
      input_stream_id: inputStreamId
    };
    return this.restClient.get<AudioMixInputStream>('/encoding/encodings/{encoding_id}/input-streams/audio-mix/{input_stream_id}', pathParamMap).then((response) => {
      return new AudioMixInputStream(response);
    });
  }

  /**
   * @summary List audio mix input stream
   * @param {string} encodingId Id of the encoding.
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof AudioMixApi
   */
  public list(encodingId: string, queryParams?: AudioMixInputStreamListQueryParams): Promise<PaginationResponse<AudioMixInputStream>> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.get<PaginationResponse<AudioMixInputStream>>('/encoding/encodings/{encoding_id}/input-streams/audio-mix', pathParamMap, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<AudioMixInputStream>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new AudioMixInputStream(i));
      }
      return paginationResponse;
    });
  }
}
