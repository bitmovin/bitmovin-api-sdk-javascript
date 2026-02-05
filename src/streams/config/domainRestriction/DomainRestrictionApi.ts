import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import StreamsDomainRestrictionCreateRequest from '../../../models/StreamsDomainRestrictionCreateRequest';
import StreamsDomainRestrictionResponse from '../../../models/StreamsDomainRestrictionResponse';
import StreamsDomainRestrictionUpdateRequest from '../../../models/StreamsDomainRestrictionUpdateRequest';
import PaginationResponse from '../../../models/PaginationResponse';
import {StreamsDomainRestrictionResponseListQueryParams, StreamsDomainRestrictionResponseListQueryParamsBuilder} from './StreamsDomainRestrictionResponseListQueryParams';

/**
 * DomainRestrictionApi - object-oriented interface
 * @export
 * @class DomainRestrictionApi
 * @extends {BaseAPI}
 */
export default class DomainRestrictionApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Create new streams domain restriction
   * @param {StreamsDomainRestrictionCreateRequest} streamsDomainRestrictionCreateRequest Create a new streams domain restriction
   * @throws {BitmovinError}
   * @memberof DomainRestrictionApi
   */
  public create(streamsDomainRestrictionCreateRequest?: StreamsDomainRestrictionCreateRequest): Promise<StreamsDomainRestrictionResponse> {
    return this.restClient.post<StreamsDomainRestrictionResponse>('/streams/config/domain-restriction', {}, streamsDomainRestrictionCreateRequest).then((response) => {
      return map(response, StreamsDomainRestrictionResponse);
    });
  }

  /**
   * @summary Delete streams domain restriction by id
   * @param {string} domainRestrictionId Id of the streams domain restriction.
   * @throws {BitmovinError}
   * @memberof DomainRestrictionApi
   */
  public delete(domainRestrictionId: string): Promise<Response> {
    const pathParamMap = {
      domain_restriction_id: domainRestrictionId
    };
    return this.restClient.delete<Response>('/streams/config/domain-restriction/{domain_restriction_id}', pathParamMap).then((response) => {
      return map(response, );
    });
  }

  /**
   * @summary Get streams domain restriction config by id
   * @param {string} domainRestrictionId Id of the streams domain restriction.
   * @throws {BitmovinError}
   * @memberof DomainRestrictionApi
   */
  public get(domainRestrictionId: string): Promise<StreamsDomainRestrictionResponse> {
    const pathParamMap = {
      domain_restriction_id: domainRestrictionId
    };
    return this.restClient.get<StreamsDomainRestrictionResponse>('/streams/config/domain-restriction/{domain_restriction_id}', pathParamMap).then((response) => {
      return map(response, StreamsDomainRestrictionResponse);
    });
  }

  /**
   * @summary Get paginated list of domain restriction configurations
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof DomainRestrictionApi
   */
  public list(queryParameters?: StreamsDomainRestrictionResponseListQueryParams | ((q: StreamsDomainRestrictionResponseListQueryParamsBuilder) => StreamsDomainRestrictionResponseListQueryParamsBuilder)): Promise<PaginationResponse<StreamsDomainRestrictionResponse>> {
    let queryParams: StreamsDomainRestrictionResponseListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new StreamsDomainRestrictionResponseListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<StreamsDomainRestrictionResponse>>('/streams/config/domain-restriction', {}, queryParams).then((response) => {
      return new PaginationResponse<StreamsDomainRestrictionResponse>(response, StreamsDomainRestrictionResponse);
    });
  }

  /**
   * @summary Partially update streams domain restriction by id
   * @param {string} domainRestrictionId Id of the streams domain restriction.
   * @param {StreamsDomainRestrictionUpdateRequest} streamsDomainRestrictionUpdateRequest The updated streams domain restriction object.
   * @throws {BitmovinError}
   * @memberof DomainRestrictionApi
   */
  public patchStreamsDomainRestriction(domainRestrictionId: string, streamsDomainRestrictionUpdateRequest?: StreamsDomainRestrictionUpdateRequest): Promise<StreamsDomainRestrictionResponse> {
    const pathParamMap = {
      domain_restriction_id: domainRestrictionId
    };
    return this.restClient.patch<StreamsDomainRestrictionResponse>('/streams/config/domain-restriction/{domain_restriction_id}', pathParamMap, streamsDomainRestrictionUpdateRequest).then((response) => {
      return map(response, StreamsDomainRestrictionResponse);
    });
  }
}
