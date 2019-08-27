import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../models/BitmovinResponse';
import EbuR128SinglePassFilter from '../../../models/EbuR128SinglePassFilter';
import PaginationResponse from '../../../models/PaginationResponse';
import {EbuR128SinglePassFilterListQueryParams, EbuR128SinglePassFilterListQueryParamsBuilder} from './EbuR128SinglePassFilterListQueryParams';

/**
 * EbuR128SinglePassApi - object-oriented interface
 * @export
 * @class EbuR128SinglePassApi
 * @extends {BaseAPI}
 */
export default class EbuR128SinglePassApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create EBU R128 Single Pass Filter
   * @param {EbuR128SinglePassFilter} ebuR128SinglePassFilter The EBU R128 Single Pass Filter to be created
   * @throws {RequiredError}
   * @memberof EbuR128SinglePassApi
   */
  public create(ebuR128SinglePassFilter?: EbuR128SinglePassFilter): Promise<EbuR128SinglePassFilter> {
    return this.restClient.post<EbuR128SinglePassFilter>('/encoding/filters/ebu-r128-single-pass', {}, ebuR128SinglePassFilter).then((response) => {
      return new EbuR128SinglePassFilter(response);
    });
  }

  /**
   * @summary Delete EBU R128 Single Pass Filter
   * @param {string} filterId Id of the EBU R128 Single Pass filter.
   * @throws {RequiredError}
   * @memberof EbuR128SinglePassApi
   */
  public delete(filterId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      filter_id: filterId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/filters/ebu-r128-single-pass/{filter_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary EBU R128 Single Pass Filter Details
   * @param {string} filterId Id of the EBU R128 Single Pass filter.
   * @throws {RequiredError}
   * @memberof EbuR128SinglePassApi
   */
  public get(filterId: string): Promise<EbuR128SinglePassFilter> {
    const pathParamMap = {
      filter_id: filterId
    };
    return this.restClient.get<EbuR128SinglePassFilter>('/encoding/filters/ebu-r128-single-pass/{filter_id}', pathParamMap).then((response) => {
      return new EbuR128SinglePassFilter(response);
    });
  }

  /**
   * @summary List EBU R128 Single Pass Filters
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof EbuR128SinglePassApi
   */
  public list(queryParameters?: EbuR128SinglePassFilterListQueryParams | ((q: EbuR128SinglePassFilterListQueryParamsBuilder) => EbuR128SinglePassFilterListQueryParamsBuilder)): Promise<PaginationResponse<EbuR128SinglePassFilter>> {
    let queryParams: EbuR128SinglePassFilterListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new EbuR128SinglePassFilterListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<EbuR128SinglePassFilter>>('/encoding/filters/ebu-r128-single-pass', {}, queryParams).then((response) => {
      return new PaginationResponse<EbuR128SinglePassFilter>(response, EbuR128SinglePassFilter);;
    });
  }
}
