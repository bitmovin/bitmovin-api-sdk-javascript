import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import {map, mapArray} from '../../../../../common/Mapper';
import BitmovinResponse from '../../../../../models/BitmovinResponse';
import DolbyVisionMetadata from '../../../../../models/DolbyVisionMetadata';
import PaginationResponse from '../../../../../models/PaginationResponse';
import {DolbyVisionMetadataListQueryParams, DolbyVisionMetadataListQueryParamsBuilder} from './DolbyVisionMetadataListQueryParams';

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
   * @summary Add Dolby Vision Metadata
   * @param {string} encodingId Id of the encoding.
   * @param {string} streamId Id of the stream.
   * @param {DolbyVisionMetadata} dolbyVisionMetadata The Dolby Vision Metadata to be added
   * @throws {BitmovinError}
   * @memberof DolbyVisionApi
   */
  public create(encodingId: string, streamId: string, dolbyVisionMetadata?: DolbyVisionMetadata): Promise<DolbyVisionMetadata> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId
    };
    return this.restClient.post<DolbyVisionMetadata>('/encoding/encodings/{encoding_id}/streams/{stream_id}/hdr/dolby-vision', pathParamMap, dolbyVisionMetadata).then((response) => {
      return map(response, DolbyVisionMetadata);
    });
  }

  /**
   * @summary Delete Dolby Vision Metadata
   * @param {string} encodingId Id of the encoding.
   * @param {string} streamId Id of the stream.
   * @param {string} hdrId Id of the Dolby Vision Metadata.
   * @throws {BitmovinError}
   * @memberof DolbyVisionApi
   */
  public delete(encodingId: string, streamId: string, hdrId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId,
      hdr_id: hdrId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/streams/{stream_id}/hdr/dolby-vision/{hdr_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Dolby Vision Metadata Details
   * @param {string} encodingId Id of the encoding.
   * @param {string} streamId Id of the stream.
   * @param {string} hdrId Id of the Dolby Vision Metadata.
   * @throws {BitmovinError}
   * @memberof DolbyVisionApi
   */
  public get(encodingId: string, streamId: string, hdrId: string): Promise<DolbyVisionMetadata> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId,
      hdr_id: hdrId
    };
    return this.restClient.get<DolbyVisionMetadata>('/encoding/encodings/{encoding_id}/streams/{stream_id}/hdr/dolby-vision/{hdr_id}', pathParamMap).then((response) => {
      return map(response, DolbyVisionMetadata);
    });
  }

  /**
   * @summary List Dolby Vision Metadata
   * @param {string} encodingId Id of the encoding.
   * @param {string} streamId Id of the stream.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof DolbyVisionApi
   */
  public list(encodingId: string, streamId: string, queryParameters?: DolbyVisionMetadataListQueryParams | ((q: DolbyVisionMetadataListQueryParamsBuilder) => DolbyVisionMetadataListQueryParamsBuilder)): Promise<PaginationResponse<DolbyVisionMetadata>> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId
    };
    let queryParams: DolbyVisionMetadataListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new DolbyVisionMetadataListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<DolbyVisionMetadata>>('/encoding/encodings/{encoding_id}/streams/{stream_id}/hdr/dolby-vision', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<DolbyVisionMetadata>(response, DolbyVisionMetadata);
    });
  }
}
