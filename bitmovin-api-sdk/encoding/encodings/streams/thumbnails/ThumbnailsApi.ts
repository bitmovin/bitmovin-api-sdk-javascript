import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import Thumbnail from '../../../../models/Thumbnail';
import PaginationResponse from '../../../../models/PaginationResponse';
import ThumbnailListQueryParams from './ThumbnailListQueryParams';

/**
 * ThumbnailsApi - object-oriented interface
 * @export
 * @class ThumbnailsApi
 * @extends {BaseAPI}
 */
export default class ThumbnailsApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Add Thumbnail
   * @param {string} encodingId Id of the encoding.
   * @param {string} streamId Id of the stream.
   * @param {Thumbnail} [thumbnail]
   * @throws {RequiredError}
   * @memberof ThumbnailsApi
   */
  public create(encodingId: string, streamId: string, thumbnail?: Thumbnail): Promise<Thumbnail> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId
    };
    return this.restClient.post<Thumbnail>('/encoding/encodings/{encoding_id}/streams/{stream_id}/thumbnails', pathParamMap, thumbnail).then((response) => {
      return new Thumbnail(response);
    });
  }

  /**
   * @summary Delete Thumbnail
   * @param {string} encodingId Id of the encoding.
   * @param {string} streamId Id of the stream.
   * @param {string} thumbnailId Id of the thumbnail.
   * @throws {RequiredError}
   * @memberof ThumbnailsApi
   */
  public delete(encodingId: string, streamId: string, thumbnailId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId,
      thumbnail_id: thumbnailId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/streams/{stream_id}/thumbnails/{thumbnail_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary Thumbnail Details
   * @param {string} encodingId Id of the encoding.
   * @param {string} streamId Id of the stream.
   * @param {string} thumbnailId Id of the thumbnail.
   * @throws {RequiredError}
   * @memberof ThumbnailsApi
   */
  public get(encodingId: string, streamId: string, thumbnailId: string): Promise<Thumbnail> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId,
      thumbnail_id: thumbnailId
    };
    return this.restClient.get<Thumbnail>('/encoding/encodings/{encoding_id}/streams/{stream_id}/thumbnails/{thumbnail_id}', pathParamMap).then((response) => {
      return new Thumbnail(response);
    });
  }

  /**
   * @summary List Thumbnails
   * @param {string} encodingId Id of the encoding.
   * @param {string} streamId Id of the stream.
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof ThumbnailsApi
   */
  public list(encodingId: string, streamId: string, queryParams?: ThumbnailListQueryParams): Promise<PaginationResponse<Thumbnail>> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId
    };
    return this.restClient.get<PaginationResponse<Thumbnail>>('/encoding/encodings/{encoding_id}/streams/{stream_id}/thumbnails', pathParamMap, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<Thumbnail>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new Thumbnail(i));
      }
      return paginationResponse;
    });
  }
}
