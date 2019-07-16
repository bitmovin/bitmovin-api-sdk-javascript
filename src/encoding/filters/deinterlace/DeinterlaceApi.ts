import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../models/BitmovinResponse';
import DeinterlaceFilter from '../../../models/DeinterlaceFilter';
import PaginationResponse from '../../../models/PaginationResponse';
import { DeinterlaceFilterListQueryParams, DeinterlaceFilterListQueryParamsBuilder } from './DeinterlaceFilterListQueryParams';

/**
 * DeinterlaceApi - object-oriented interface
 * @export
 * @class DeinterlaceApi
 * @extends {BaseAPI}
 */
export default class DeinterlaceApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create Deinterlace Filter
   * @param {DeinterlaceFilter} deinterlaceFilter The Deinterlace Filter to be created
   * @throws {RequiredError}
   * @memberof DeinterlaceApi
   */
  public create(deinterlaceFilter?: DeinterlaceFilter): Promise<DeinterlaceFilter> {
    return this.restClient.post<DeinterlaceFilter>('/encoding/filters/deinterlace', {}, deinterlaceFilter).then((response) => {
      return new DeinterlaceFilter(response);
    });
  }

  /**
   * @summary Delete Deinterlace Filter
   * @param {string} filterId Id of the deinterlace filter
   * @throws {RequiredError}
   * @memberof DeinterlaceApi
   */
  public delete(filterId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      filter_id: filterId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/filters/deinterlace/{filter_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary Deinterlace Filter Details
   * @param {string} filterId Id of the deinterlace filter
   * @throws {RequiredError}
   * @memberof DeinterlaceApi
   */
  public get(filterId: string): Promise<DeinterlaceFilter> {
    const pathParamMap = {
      filter_id: filterId
    };
    return this.restClient.get<DeinterlaceFilter>('/encoding/filters/deinterlace/{filter_id}', pathParamMap).then((response) => {
      return new DeinterlaceFilter(response);
    });
  }

  /**
   * @summary List Deinterlace Filters
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof DeinterlaceApi
   */
  public list(queryParameters?: DeinterlaceFilterListQueryParams | ((q: DeinterlaceFilterListQueryParamsBuilder) => DeinterlaceFilterListQueryParamsBuilder)): Promise<PaginationResponse<DeinterlaceFilter>> {
    let queryParams: DeinterlaceFilterListQueryParams = {};
    if (typeof queryParameters === 'function') {
        queryParams = queryParameters(new DeinterlaceFilterListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
        queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<DeinterlaceFilter>>('/encoding/filters/deinterlace', {}, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<DeinterlaceFilter>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new DeinterlaceFilter(i));
      }
      return paginationResponse;
    });
  }
}
