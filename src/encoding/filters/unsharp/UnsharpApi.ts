import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../models/BitmovinResponse';
import UnsharpFilter from '../../../models/UnsharpFilter';
import PaginationResponse from '../../../models/PaginationResponse';
import UnsharpFilterListQueryParams from './UnsharpFilterListQueryParams';

/**
 * UnsharpApi - object-oriented interface
 * @export
 * @class UnsharpApi
 * @extends {BaseAPI}
 */
export default class UnsharpApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create Unsharp Filter
   * @param {UnsharpFilter} unsharpFilter
   * @throws {RequiredError}
   * @memberof UnsharpApi
   */
  public create(unsharpFilter?: UnsharpFilter): Promise<UnsharpFilter> {
    return this.restClient.post<UnsharpFilter>('/encoding/filters/unsharp', {}, unsharpFilter).then((response) => {
      return new UnsharpFilter(response);
    });
  }

  /**
   * @summary Delete Unsharp Filter
   * @param {string} filterId Id of the unsharp filter
   * @throws {RequiredError}
   * @memberof UnsharpApi
   */
  public delete(filterId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      filter_id: filterId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/filters/unsharp/{filter_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary Unsharp Filter Details
   * @param {string} filterId Id of the unsharp filter
   * @throws {RequiredError}
   * @memberof UnsharpApi
   */
  public get(filterId: string): Promise<UnsharpFilter> {
    const pathParamMap = {
      filter_id: filterId
    };
    return this.restClient.get<UnsharpFilter>('/encoding/filters/unsharp/{filter_id}', pathParamMap).then((response) => {
      return new UnsharpFilter(response);
    });
  }

  /**
   * @summary List Unsharp Filters
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof UnsharpApi
   */
  public list(queryParams?: UnsharpFilterListQueryParams): Promise<PaginationResponse<UnsharpFilter>> {
    return this.restClient.get<PaginationResponse<UnsharpFilter>>('/encoding/filters/unsharp', {}, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<UnsharpFilter>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new UnsharpFilter(i));
      }
      return paginationResponse;
    });
  }
}
