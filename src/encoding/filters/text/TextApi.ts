import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../models/BitmovinResponse';
import TextFilter from '../../../models/TextFilter';
import PaginationResponse from '../../../models/PaginationResponse';
import {TextFilterListQueryParams, TextFilterListQueryParamsBuilder} from './TextFilterListQueryParams';

/**
 * TextApi - object-oriented interface
 * @export
 * @class TextApi
 * @extends {BaseAPI}
 */
export default class TextApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create Text Filter
   * @param {TextFilter} textFilter The Text Filter to be created
   * @throws {RequiredError}
   * @memberof TextApi
   */
  public create(textFilter?: TextFilter): Promise<TextFilter> {
    return this.restClient.post<TextFilter>('/encoding/filters/text', {}, textFilter).then((response) => {
      return new TextFilter(response);
    });
  }

  /**
   * @summary Delete Text Filter
   * @param {string} filterId Id of the Text Filter
   * @throws {RequiredError}
   * @memberof TextApi
   */
  public delete(filterId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      filter_id: filterId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/filters/text/{filter_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary Text Filter Details
   * @param {string} filterId Id of the Text Filter
   * @throws {RequiredError}
   * @memberof TextApi
   */
  public get(filterId: string): Promise<TextFilter> {
    const pathParamMap = {
      filter_id: filterId
    };
    return this.restClient.get<TextFilter>('/encoding/filters/text/{filter_id}', pathParamMap).then((response) => {
      return new TextFilter(response);
    });
  }

  /**
   * @summary List Text Filters
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof TextApi
   */
  public list(queryParameters?: TextFilterListQueryParams | ((q: TextFilterListQueryParamsBuilder) => TextFilterListQueryParamsBuilder)): Promise<PaginationResponse<TextFilter>> {
    let queryParams: TextFilterListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new TextFilterListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<TextFilter>>('/encoding/filters/text', {}, queryParams).then((response) => {
      return new PaginationResponse<TextFilter>(response, TextFilter);;
    });
  }
}
