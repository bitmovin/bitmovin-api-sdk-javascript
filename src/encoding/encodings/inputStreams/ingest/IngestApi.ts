import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import IngestInputStream from '../../../../models/IngestInputStream';
import PaginationResponse from '../../../../models/PaginationResponse';
import IngestInputStreamListQueryParams from './IngestInputStreamListQueryParams';

/**
 * IngestApi - object-oriented interface
 * @export
 * @class IngestApi
 * @extends {BaseAPI}
 */
export default class IngestApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Add Ingest Input Stream
   * @param {string} encodingId Id of the encoding.
   * @param {IngestInputStream} ingestInputStream
   * @throws {RequiredError}
   * @memberof IngestApi
   */
  public create(encodingId: string, ingestInputStream?: IngestInputStream): Promise<IngestInputStream> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<IngestInputStream>('/encoding/encodings/{encoding_id}/input-streams/ingest', pathParamMap, ingestInputStream).then((response) => {
      return new IngestInputStream(response);
    });
  }

  /**
   * @summary Delete Ingest Input Stream
   * @param {string} encodingId Id of the encoding.
   * @param {string} inputStreamId Id of the ingest input stream.
   * @throws {RequiredError}
   * @memberof IngestApi
   */
  public delete(encodingId: string, inputStreamId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      input_stream_id: inputStreamId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/input-streams/ingest/{input_stream_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary Ingest Input Stream Details
   * @param {string} encodingId Id of the encoding.
   * @param {string} inputStreamId Id of the ingest input stream.
   * @throws {RequiredError}
   * @memberof IngestApi
   */
  public get(encodingId: string, inputStreamId: string): Promise<IngestInputStream> {
    const pathParamMap = {
      encoding_id: encodingId,
      input_stream_id: inputStreamId
    };
    return this.restClient.get<IngestInputStream>('/encoding/encodings/{encoding_id}/input-streams/ingest/{input_stream_id}', pathParamMap).then((response) => {
      return new IngestInputStream(response);
    });
  }

  /**
   * @summary List Ingest Input Streams
   * @param {string} encodingId Id of the encoding.
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof IngestApi
   */
  public list(encodingId: string, queryParams?: IngestInputStreamListQueryParams): Promise<PaginationResponse<IngestInputStream>> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.get<PaginationResponse<IngestInputStream>>('/encoding/encodings/{encoding_id}/input-streams/ingest', pathParamMap, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<IngestInputStream>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new IngestInputStream(i));
      }
      return paginationResponse;
    });
  }
}
