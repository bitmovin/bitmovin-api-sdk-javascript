import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../models/BitmovinResponse';
import DolbyLoudnessFilter from '../../../models/DolbyLoudnessFilter';
import PaginationResponse from '../../../models/PaginationResponse';
import {DolbyLoudnessFilterListQueryParams, DolbyLoudnessFilterListQueryParamsBuilder} from './DolbyLoudnessFilterListQueryParams';

/**
 * DolbyLoudnessApi - object-oriented interface
 * @export
 * @class DolbyLoudnessApi
 * @extends {BaseAPI}
 */
export default class DolbyLoudnessApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create Dolby Loudness Filter
   * @param {DolbyLoudnessFilter} dolbyLoudnessFilter The Dolby Loudness Filter to be created
   * @throws {BitmovinError}
   * @memberof DolbyLoudnessApi
   */
  public create(dolbyLoudnessFilter?: DolbyLoudnessFilter): Promise<DolbyLoudnessFilter> {
    return this.restClient.post<DolbyLoudnessFilter>('/encoding/filters/dolby-loudness', {}, dolbyLoudnessFilter).then((response) => {
      return map(response, DolbyLoudnessFilter);
    });
  }

  /**
   * @summary Delete Dolby Loudness Filter
   * @param {string} filterId Id of the Dolby Loudness filter.
   * @throws {BitmovinError}
   * @memberof DolbyLoudnessApi
   */
  public delete(filterId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      filter_id: filterId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/filters/dolby-loudness/{filter_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Get Dolby Loudness Filter details
   * @param {string} filterId Id of the Dolby Loudness filter.
   * @throws {BitmovinError}
   * @memberof DolbyLoudnessApi
   */
  public get(filterId: string): Promise<DolbyLoudnessFilter> {
    const pathParamMap = {
      filter_id: filterId
    };
    return this.restClient.get<DolbyLoudnessFilter>('/encoding/filters/dolby-loudness/{filter_id}', pathParamMap).then((response) => {
      return map(response, DolbyLoudnessFilter);
    });
  }

  /**
   * @summary List Dolby Loudness Filters
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof DolbyLoudnessApi
   */
  public list(queryParameters?: DolbyLoudnessFilterListQueryParams | ((q: DolbyLoudnessFilterListQueryParamsBuilder) => DolbyLoudnessFilterListQueryParamsBuilder)): Promise<PaginationResponse<DolbyLoudnessFilter>> {
    let queryParams: DolbyLoudnessFilterListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new DolbyLoudnessFilterListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<DolbyLoudnessFilter>>('/encoding/filters/dolby-loudness', {}, queryParams).then((response) => {
      return new PaginationResponse<DolbyLoudnessFilter>(response, DolbyLoudnessFilter);
    });
  }
}
