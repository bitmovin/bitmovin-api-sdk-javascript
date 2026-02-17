import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import BitmovinResponseList from '../../../../models/BitmovinResponseList';
import DnsMappingRequest from '../../../../models/DnsMappingRequest';
import DnsMappingResponse from '../../../../models/DnsMappingResponse';
import PaginationResponse from '../../../../models/PaginationResponse';
import {DnsMappingResponseListQueryParams, DnsMappingResponseListQueryParamsBuilder} from './DnsMappingResponseListQueryParams';

/**
 * DnsMappingsApi - object-oriented interface
 * @export
 * @class DnsMappingsApi
 * @extends {BaseAPI}
 */
export default class DnsMappingsApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Create new DNS mapping for encoding
   * @param {string} encodingId Id of the encoding.
   * @param {DnsMappingRequest} dnsMappingRequest The DNS mapping to be created
   * @throws {BitmovinError}
   * @memberof DnsMappingsApi
   */
  public create(encodingId: string, dnsMappingRequest?: DnsMappingRequest): Promise<DnsMappingResponse> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<DnsMappingResponse>('/encoding/live/encodings/{encoding_id}/dns-mappings', pathParamMap, dnsMappingRequest).then((response) => {
      return map(response, DnsMappingResponse);
    });
  }

  /**
   * @summary Delete DNS mapping
   * @param {string} encodingId Id of the encoding.
   * @param {string} id Id of the DNS mapping
   * @throws {BitmovinError}
   * @memberof DnsMappingsApi
   */
  public delete(encodingId: string, id: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      id: id
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/live/encodings/{encoding_id}/dns-mappings/{id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Delete all DNS mappings for encoding
   * @param {string} encodingId Id of the encoding.
   * @throws {BitmovinError}
   * @memberof DnsMappingsApi
   */
  public deleteAll(encodingId: string): Promise<BitmovinResponseList> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.delete<BitmovinResponseList>('/encoding/live/encodings/{encoding_id}/dns-mappings', pathParamMap).then((response) => {
      return map(response, BitmovinResponseList);
    });
  }

  /**
   * @summary DNS mapping details
   * @param {string} encodingId Id of the encoding.
   * @param {string} id Id of the DNS mapping
   * @throws {BitmovinError}
   * @memberof DnsMappingsApi
   */
  public get(encodingId: string, id: string): Promise<DnsMappingResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      id: id
    };
    return this.restClient.get<DnsMappingResponse>('/encoding/live/encodings/{encoding_id}/dns-mappings/{id}', pathParamMap).then((response) => {
      return map(response, DnsMappingResponse);
    });
  }

  /**
   * @summary List DNS mappings for encoding
   * @param {string} encodingId Id of the encoding.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof DnsMappingsApi
   */
  public list(encodingId: string, queryParameters?: DnsMappingResponseListQueryParams | ((q: DnsMappingResponseListQueryParamsBuilder) => DnsMappingResponseListQueryParamsBuilder)): Promise<PaginationResponse<DnsMappingResponse>> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    let queryParams: DnsMappingResponseListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new DnsMappingResponseListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<DnsMappingResponse>>('/encoding/live/encodings/{encoding_id}/dns-mappings', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<DnsMappingResponse>(response, DnsMappingResponse);
    });
  }
}
