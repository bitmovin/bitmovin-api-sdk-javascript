import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import Bif from '../../../../models/Bif';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import PaginationResponse from '../../../../models/PaginationResponse';
import {BifListQueryParams, BifListQueryParamsBuilder} from './BifListQueryParams';

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
   * @param {Bif} bif The Roku Bif file to be added
   * @throws {BitmovinError}
   * @memberof BifsApi
   */
  public create(encodingId: string, streamId: string, bif?: Bif): Promise<Bif> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId
    };
    return this.restClient.post<Bif>('/encoding/encodings/{encoding_id}/streams/{stream_id}/bifs', pathParamMap, bif).then((response) => {
      return map(response, Bif);
    });
  }

  /**
   * @summary Delete Bif
   * @param {string} encodingId Id of the encoding.
   * @param {string} streamId Id of the stream.
   * @param {string} bifId Id of the Bif.
   * @throws {BitmovinError}
   * @memberof BifsApi
   */
  public delete(encodingId: string, streamId: string, bifId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId,
      bif_id: bifId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/streams/{stream_id}/bifs/{bif_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Bif Details
   * @param {string} encodingId Id of the encoding.
   * @param {string} streamId Id of the stream.
   * @param {string} bifId Id of the Bif configuration.
   * @throws {BitmovinError}
   * @memberof BifsApi
   */
  public get(encodingId: string, streamId: string, bifId: string): Promise<Bif> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId,
      bif_id: bifId
    };
    return this.restClient.get<Bif>('/encoding/encodings/{encoding_id}/streams/{stream_id}/bifs/{bif_id}', pathParamMap).then((response) => {
      return map(response, Bif);
    });
  }

  /**
   * @summary List Bifs
   * @param {string} encodingId Id of the encoding.
   * @param {string} streamId Id of the stream.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof BifsApi
   */
  public list(encodingId: string, streamId: string, queryParameters?: BifListQueryParams | ((q: BifListQueryParamsBuilder) => BifListQueryParamsBuilder)): Promise<PaginationResponse<Bif>> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId
    };
    let queryParams: BifListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new BifListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<Bif>>('/encoding/encodings/{encoding_id}/streams/{stream_id}/bifs', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<Bif>(response, Bif);
    });
  }
}
