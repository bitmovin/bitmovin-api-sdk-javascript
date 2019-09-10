import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import AudioMixInputStream from '../../../../models/AudioMixInputStream';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import PaginationResponse from '../../../../models/PaginationResponse';
import {AudioMixInputStreamListQueryParams, AudioMixInputStreamListQueryParamsBuilder} from './AudioMixInputStreamListQueryParams';

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
   * @param {AudioMixInputStream} audioMixInputStream The audio mix input stream to be created
   * @throws {BitmovinError}
   * @memberof AudioMixApi
   */
  public create(encodingId: string, audioMixInputStream?: AudioMixInputStream): Promise<AudioMixInputStream> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<AudioMixInputStream>('/encoding/encodings/{encoding_id}/input-streams/audio-mix', pathParamMap, audioMixInputStream).then((response) => {
      return map(response, AudioMixInputStream);
    });
  }

  /**
   * @summary Delete audio mix input stream
   * @param {string} encodingId Id of the encoding.
   * @param {string} inputStreamId Id of the audio mix input stream.
   * @throws {BitmovinError}
   * @memberof AudioMixApi
   */
  public delete(encodingId: string, inputStreamId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      input_stream_id: inputStreamId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/input-streams/audio-mix/{input_stream_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Audio mix input stream details
   * @param {string} encodingId Id of the encoding.
   * @param {string} inputStreamId Id of the audio mix input stream.
   * @throws {BitmovinError}
   * @memberof AudioMixApi
   */
  public get(encodingId: string, inputStreamId: string): Promise<AudioMixInputStream> {
    const pathParamMap = {
      encoding_id: encodingId,
      input_stream_id: inputStreamId
    };
    return this.restClient.get<AudioMixInputStream>('/encoding/encodings/{encoding_id}/input-streams/audio-mix/{input_stream_id}', pathParamMap).then((response) => {
      return map(response, AudioMixInputStream);
    });
  }

  /**
   * @summary List audio mix input stream
   * @param {string} encodingId Id of the encoding.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof AudioMixApi
   */
  public list(encodingId: string, queryParameters?: AudioMixInputStreamListQueryParams | ((q: AudioMixInputStreamListQueryParamsBuilder) => AudioMixInputStreamListQueryParamsBuilder)): Promise<PaginationResponse<AudioMixInputStream>> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    let queryParams: AudioMixInputStreamListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new AudioMixInputStreamListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<AudioMixInputStream>>('/encoding/encodings/{encoding_id}/input-streams/audio-mix', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<AudioMixInputStream>(response, AudioMixInputStream);
    });
  }
}
