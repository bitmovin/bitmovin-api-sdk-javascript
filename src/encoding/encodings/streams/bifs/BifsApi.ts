import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import CustomdataApi from './customdata/CustomdataApi';
import Bif from '../../../../models/Bif';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import PaginationResponse from '../../../../models/PaginationResponse';
import BifListQueryParams from './BifListQueryParams';

/**
 * BifsApi - object-oriented interface
 * @export
 * @class BifsApi
 * @extends {BaseAPI}
 */
export default class BifsApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Add a Roku Bif file
   * @param {string} encodingId Id of the encoding.
   * @param {string} streamId Id of the stream.
   * @param {Bif} bif
   * @throws {RequiredError}
   * @memberof BifsApi
   */
  public create(encodingId: string, streamId: string, bif?: Bif): Promise<Bif> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId
    };
    return this.restClient.post<Bif>('/encoding/encodings/{encoding_id}/streams/{stream_id}/bifs', pathParamMap, bif).then((response) => {
      return new Bif(response);
    });
  }

  /**
   * @summary Delete Bif
   * @param {string} encodingId Id of the encoding.
   * @param {string} streamId Id of the stream.
   * @param {string} bifId Id of the Bif.
   * @throws {RequiredError}
   * @memberof BifsApi
   */
  public delete(encodingId: string, streamId: string, bifId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId,
      bif_id: bifId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/streams/{stream_id}/bifs/{bif_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary Bif Details
   * @param {string} encodingId Id of the encoding.
   * @param {string} streamId Id of the stream.
   * @param {string} bifId Id of the Bif configuration.
   * @throws {RequiredError}
   * @memberof BifsApi
   */
  public get(encodingId: string, streamId: string, bifId: string): Promise<Bif> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId,
      bif_id: bifId
    };
    return this.restClient.get<Bif>('/encoding/encodings/{encoding_id}/streams/{stream_id}/bifs/{bif_id}', pathParamMap).then((response) => {
      return new Bif(response);
    });
  }

  /**
   * @summary List Bifs
   * @param {string} encodingId Id of the encoding.
   * @param {string} streamId Id of the stream.
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof BifsApi
   */
  public list(encodingId: string, streamId: string, queryParams?: BifListQueryParams): Promise<PaginationResponse<Bif>> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId
    };
    return this.restClient.get<PaginationResponse<Bif>>('/encoding/encodings/{encoding_id}/streams/{stream_id}/bifs', pathParamMap, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<Bif>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new Bif(i));
      }
      return paginationResponse;
    });
  }
}
