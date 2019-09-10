import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import FileInputStream from '../../../../models/FileInputStream';
import PaginationResponse from '../../../../models/PaginationResponse';
import {FileInputStreamListQueryParams, FileInputStreamListQueryParamsBuilder} from './FileInputStreamListQueryParams';

/**
 * FileApi - object-oriented interface
 * @export
 * @class FileApi
 * @extends {BaseAPI}
 */
export default class FileApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Add File input stream
   * @param {string} encodingId Id of the encoding.
   * @param {FileInputStream} fileInputStream The File input stream to be created
   * @throws {BitmovinError}
   * @memberof FileApi
   */
  public create(encodingId: string, fileInputStream?: FileInputStream): Promise<FileInputStream> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<FileInputStream>('/encoding/encodings/{encoding_id}/input-streams/file', pathParamMap, fileInputStream).then((response) => {
      return map(response, FileInputStream);
    });
  }

  /**
   * @summary Delete File stream
   * @param {string} encodingId Id of the encoding.
   * @param {string} inputStreamId Id of the File input stream.
   * @throws {BitmovinError}
   * @memberof FileApi
   */
  public delete(encodingId: string, inputStreamId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      input_stream_id: inputStreamId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/input-streams/file/{input_stream_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary File input stream details
   * @param {string} encodingId Id of the encoding.
   * @param {string} inputStreamId Id of the File input stream.
   * @throws {BitmovinError}
   * @memberof FileApi
   */
  public get(encodingId: string, inputStreamId: string): Promise<FileInputStream> {
    const pathParamMap = {
      encoding_id: encodingId,
      input_stream_id: inputStreamId
    };
    return this.restClient.get<FileInputStream>('/encoding/encodings/{encoding_id}/input-streams/file/{input_stream_id}', pathParamMap).then((response) => {
      return map(response, FileInputStream);
    });
  }

  /**
   * @summary List File input stream
   * @param {string} encodingId Id of the encoding.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof FileApi
   */
  public list(encodingId: string, queryParameters?: FileInputStreamListQueryParams | ((q: FileInputStreamListQueryParamsBuilder) => FileInputStreamListQueryParamsBuilder)): Promise<PaginationResponse<FileInputStream>> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    let queryParams: FileInputStreamListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new FileInputStreamListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<FileInputStream>>('/encoding/encodings/{encoding_id}/input-streams/file', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<FileInputStream>(response, FileInputStream);
    });
  }
}
