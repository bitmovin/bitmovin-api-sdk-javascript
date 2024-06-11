import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import AzureSpeechToCaptionsFilter from '../../../models/AzureSpeechToCaptionsFilter';
import BitmovinResponse from '../../../models/BitmovinResponse';
import PaginationResponse from '../../../models/PaginationResponse';
import {AzureSpeechToCaptionsFilterListQueryParams, AzureSpeechToCaptionsFilterListQueryParamsBuilder} from './AzureSpeechToCaptionsFilterListQueryParams';

/**
 * AzureSpeechToCaptionsApi - object-oriented interface
 * @export
 * @class AzureSpeechToCaptionsApi
 * @extends {BaseAPI}
 */
export default class AzureSpeechToCaptionsApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create Azure Speech to captions Filter
   * @param {AzureSpeechToCaptionsFilter} azureSpeechToCaptionsFilter The Azure Speech to captions Filter to be created
   * @throws {BitmovinError}
   * @memberof AzureSpeechToCaptionsApi
   */
  public create(azureSpeechToCaptionsFilter?: AzureSpeechToCaptionsFilter): Promise<AzureSpeechToCaptionsFilter> {
    return this.restClient.post<AzureSpeechToCaptionsFilter>('/encoding/filters/azure-speech-to-captions', {}, azureSpeechToCaptionsFilter).then((response) => {
      return map(response, AzureSpeechToCaptionsFilter);
    });
  }

  /**
   * @summary Delete Azure Speech to captions Filter
   * @param {string} filterId Id of the Azure Speech to captions Filter.
   * @throws {BitmovinError}
   * @memberof AzureSpeechToCaptionsApi
   */
  public delete(filterId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      filter_id: filterId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/filters/azure-speech-to-captions/{filter_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Azure Speech to captions Filter details
   * @param {string} filterId Id of the Azure Speech to captions Filter.
   * @throws {BitmovinError}
   * @memberof AzureSpeechToCaptionsApi
   */
  public get(filterId: string): Promise<AzureSpeechToCaptionsFilter> {
    const pathParamMap = {
      filter_id: filterId
    };
    return this.restClient.get<AzureSpeechToCaptionsFilter>('/encoding/filters/azure-speech-to-captions/{filter_id}', pathParamMap).then((response) => {
      return map(response, AzureSpeechToCaptionsFilter);
    });
  }

  /**
   * @summary List Azure Speech to captions Filters
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof AzureSpeechToCaptionsApi
   */
  public list(queryParameters?: AzureSpeechToCaptionsFilterListQueryParams | ((q: AzureSpeechToCaptionsFilterListQueryParamsBuilder) => AzureSpeechToCaptionsFilterListQueryParamsBuilder)): Promise<PaginationResponse<AzureSpeechToCaptionsFilter>> {
    let queryParams: AzureSpeechToCaptionsFilterListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new AzureSpeechToCaptionsFilterListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<AzureSpeechToCaptionsFilter>>('/encoding/filters/azure-speech-to-captions', {}, queryParams).then((response) => {
      return new PaginationResponse<AzureSpeechToCaptionsFilter>(response, AzureSpeechToCaptionsFilter);
    });
  }
}
