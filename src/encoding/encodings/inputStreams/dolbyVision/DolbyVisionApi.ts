import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import DolbyVisionInputStream from '../../../../models/DolbyVisionInputStream';
import PaginationResponse from '../../../../models/PaginationResponse';
import {DolbyVisionInputStreamListQueryParams, DolbyVisionInputStreamListQueryParamsBuilder} from './DolbyVisionInputStreamListQueryParams';

/**
 * DolbyVisionApi - object-oriented interface
 * @export
 * @class DolbyVisionApi
 * @extends {BaseAPI}
 */
export default class DolbyVisionApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Add Dolby Vision input stream
   * @param {string} encodingId Id of the encoding.
   * @param {DolbyVisionInputStream} dolbyVisionInputStream The Dolby Vision input stream to be created
   * @throws {BitmovinError}
   * @memberof DolbyVisionApi
   */
  public create(encodingId: string, dolbyVisionInputStream?: DolbyVisionInputStream): Promise<DolbyVisionInputStream> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<DolbyVisionInputStream>('/encoding/encodings/{encoding_id}/input-streams/dolby-vision', pathParamMap, dolbyVisionInputStream).then((response) => {
      return map(response, DolbyVisionInputStream);
    });
  }

  /**
   * @summary Delete Dolby Vision input stream
   * @param {string} encodingId Id of the encoding.
   * @param {string} dolbyVisionInputStreamId Id of the Dolby Vision input stream.
   * @throws {BitmovinError}
   * @memberof DolbyVisionApi
   */
  public delete(encodingId: string, dolbyVisionInputStreamId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      dolby_vision_input_stream_id: dolbyVisionInputStreamId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/input-streams/dolby-vision/{dolby_vision_input_stream_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Dolby Vision input stream details
   * @param {string} encodingId Id of the encoding.
   * @param {string} dolbyVisionInputStreamId Id of the Dolby Vision input stream.
   * @throws {BitmovinError}
   * @memberof DolbyVisionApi
   */
  public get(encodingId: string, dolbyVisionInputStreamId: string): Promise<DolbyVisionInputStream> {
    const pathParamMap = {
      encoding_id: encodingId,
      dolby_vision_input_stream_id: dolbyVisionInputStreamId
    };
    return this.restClient.get<DolbyVisionInputStream>('/encoding/encodings/{encoding_id}/input-streams/dolby-vision/{dolby_vision_input_stream_id}', pathParamMap).then((response) => {
      return map(response, DolbyVisionInputStream);
    });
  }

  /**
   * @summary List Dolby Vision input stream
   * @param {string} encodingId Id of the encoding.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof DolbyVisionApi
   */
  public list(encodingId: string, queryParameters?: DolbyVisionInputStreamListQueryParams | ((q: DolbyVisionInputStreamListQueryParamsBuilder) => DolbyVisionInputStreamListQueryParamsBuilder)): Promise<PaginationResponse<DolbyVisionInputStream>> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    let queryParams: DolbyVisionInputStreamListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new DolbyVisionInputStreamListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<DolbyVisionInputStream>>('/encoding/encodings/{encoding_id}/input-streams/dolby-vision', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<DolbyVisionInputStream>(response, DolbyVisionInputStream);
    });
  }
}
