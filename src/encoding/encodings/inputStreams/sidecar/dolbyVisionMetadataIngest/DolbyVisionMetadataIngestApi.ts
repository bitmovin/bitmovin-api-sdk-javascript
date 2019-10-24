import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import {map, mapArray} from '../../../../../common/Mapper';
import BitmovinResponse from '../../../../../models/BitmovinResponse';
import DolbyVisionMetadataIngestInputStream from '../../../../../models/DolbyVisionMetadataIngestInputStream';
import PaginationResponse from '../../../../../models/PaginationResponse';
import {DolbyVisionMetadataIngestInputStreamListQueryParams, DolbyVisionMetadataIngestInputStreamListQueryParamsBuilder} from './DolbyVisionMetadataIngestInputStreamListQueryParams';

/**
 * DolbyVisionMetadataIngestApi - object-oriented interface
 * @export
 * @class DolbyVisionMetadataIngestApi
 * @extends {BaseAPI}
 */
export default class DolbyVisionMetadataIngestApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Add Dolby Vision Metadata Ingest Input Stream
   * @param {string} encodingId Id of the encoding.
   * @param {DolbyVisionMetadataIngestInputStream} dolbyVisionMetadataIngestInputStream The Dolby Vision Metadata Ingest Input Stream to be created
   * @throws {BitmovinError}
   * @memberof DolbyVisionMetadataIngestApi
   */
  public create(encodingId: string, dolbyVisionMetadataIngestInputStream?: DolbyVisionMetadataIngestInputStream): Promise<DolbyVisionMetadataIngestInputStream> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<DolbyVisionMetadataIngestInputStream>('/encoding/encodings/{encoding_id}/input-streams/sidecar/dolby-vision-metadata-ingest', pathParamMap, dolbyVisionMetadataIngestInputStream).then((response) => {
      return map(response, DolbyVisionMetadataIngestInputStream);
    });
  }

  /**
   * @summary Delete Dolby Vision Metadata Ingest Input Stream
   * @param {string} encodingId Id of the encoding.
   * @param {string} inputStreamId Id of the Dolby Vision Metadata Ingest input stream.
   * @throws {BitmovinError}
   * @memberof DolbyVisionMetadataIngestApi
   */
  public delete(encodingId: string, inputStreamId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      input_stream_id: inputStreamId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/input-streams/sidecar/dolby-vision-metadata-ingest/{input_stream_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Dolby Vision Metadata Ingest Input Stream Details
   * @param {string} encodingId Id of the encoding.
   * @param {string} inputStreamId Id of the Dolby Vision Metadata Ingest input stream.
   * @throws {BitmovinError}
   * @memberof DolbyVisionMetadataIngestApi
   */
  public get(encodingId: string, inputStreamId: string): Promise<DolbyVisionMetadataIngestInputStream> {
    const pathParamMap = {
      encoding_id: encodingId,
      input_stream_id: inputStreamId
    };
    return this.restClient.get<DolbyVisionMetadataIngestInputStream>('/encoding/encodings/{encoding_id}/input-streams/sidecar/dolby-vision-metadata-ingest/{input_stream_id}', pathParamMap).then((response) => {
      return map(response, DolbyVisionMetadataIngestInputStream);
    });
  }

  /**
   * @summary List Dolby Vision Metadata Ingest Input Streams
   * @param {string} encodingId Id of the encoding.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof DolbyVisionMetadataIngestApi
   */
  public list(encodingId: string, queryParameters?: DolbyVisionMetadataIngestInputStreamListQueryParams | ((q: DolbyVisionMetadataIngestInputStreamListQueryParamsBuilder) => DolbyVisionMetadataIngestInputStreamListQueryParamsBuilder)): Promise<PaginationResponse<DolbyVisionMetadataIngestInputStream>> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    let queryParams: DolbyVisionMetadataIngestInputStreamListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new DolbyVisionMetadataIngestInputStreamListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<DolbyVisionMetadataIngestInputStream>>('/encoding/encodings/{encoding_id}/input-streams/sidecar/dolby-vision-metadata-ingest', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<DolbyVisionMetadataIngestInputStream>(response, DolbyVisionMetadataIngestInputStream);
    });
  }
}
