import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import FileInputStream from '../../../../models/FileInputStream';
import PaginationResponse from '../../../../models/PaginationResponse';
import FileInputStreamListQueryParams from './FileInputStreamListQueryParams';

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
   * @param {FileInputStream} fileInputStream
   * @throws {RequiredError}
   * @memberof FileApi
   */
  public create(encodingId: string, fileInputStream?: FileInputStream): Promise<FileInputStream> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<FileInputStream>('/encoding/encodings/{encoding_id}/input-streams/file', pathParamMap, fileInputStream).then((response) => {
      return new FileInputStream(response);
    });
  }

  /**
   * @summary Delete File stream
   * @param {string} encodingId Id of the encoding.
   * @param {string} inputStreamId Id of the File input stream.
   * @throws {RequiredError}
   * @memberof FileApi
   */
  public delete(encodingId: string, inputStreamId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      input_stream_id: inputStreamId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/input-streams/file/{input_stream_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary File input stream details
   * @param {string} encodingId Id of the encoding.
   * @param {string} inputStreamId Id of the File input stream.
   * @throws {RequiredError}
   * @memberof FileApi
   */
  public get(encodingId: string, inputStreamId: string): Promise<FileInputStream> {
    const pathParamMap = {
      encoding_id: encodingId,
      input_stream_id: inputStreamId
    };
    return this.restClient.get<FileInputStream>('/encoding/encodings/{encoding_id}/input-streams/file/{input_stream_id}', pathParamMap).then((response) => {
      return new FileInputStream(response);
    });
  }

  /**
   * @summary List File input stream
   * @param {string} encodingId Id of the encoding.
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof FileApi
   */
  public list(encodingId: string, queryParams?: FileInputStreamListQueryParams): Promise<PaginationResponse<FileInputStream>> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.get<PaginationResponse<FileInputStream>>('/encoding/encodings/{encoding_id}/input-streams/file', pathParamMap, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<FileInputStream>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new FileInputStream(i));
      }
      return paginationResponse;
    });
  }
}
