import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import ImscConfiguration from '../../../../models/ImscConfiguration';
import PaginationResponse from '../../../../models/PaginationResponse';
import {ImscConfigurationListQueryParams, ImscConfigurationListQueryParamsBuilder} from './ImscConfigurationListQueryParams';

/**
 * ImscApi - object-oriented interface
 * @export
 * @class ImscApi
 * @extends {BaseAPI}
 */
export default class ImscApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create IMSC subtitle configuration
   * @param {ImscConfiguration} imscConfiguration The IMSC subtitle configuration to be created
   * @throws {BitmovinError}
   * @memberof ImscApi
   */
  public create(imscConfiguration?: ImscConfiguration): Promise<ImscConfiguration> {
    return this.restClient.post<ImscConfiguration>('/encoding/configurations/subtitles/imsc', {}, imscConfiguration).then((response) => {
      return map(response, ImscConfiguration);
    });
  }

  /**
   * @summary Delete IMSC subtitle configuration
   * @param {string} configurationId Id of the subtitle configuration
   * @throws {BitmovinError}
   * @memberof ImscApi
   */
  public delete(configurationId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/configurations/subtitles/imsc/{configuration_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary IMSC subtitle configuration details
   * @param {string} configurationId Id of the codec configuration
   * @throws {BitmovinError}
   * @memberof ImscApi
   */
  public get(configurationId: string): Promise<ImscConfiguration> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.get<ImscConfiguration>('/encoding/configurations/subtitles/imsc/{configuration_id}', pathParamMap).then((response) => {
      return map(response, ImscConfiguration);
    });
  }

  /**
   * @summary List IMSC subtitle configurations
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof ImscApi
   */
  public list(queryParameters?: ImscConfigurationListQueryParams | ((q: ImscConfigurationListQueryParamsBuilder) => ImscConfigurationListQueryParamsBuilder)): Promise<PaginationResponse<ImscConfiguration>> {
    let queryParams: ImscConfigurationListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new ImscConfigurationListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<ImscConfiguration>>('/encoding/configurations/subtitles/imsc', {}, queryParams).then((response) => {
      return new PaginationResponse<ImscConfiguration>(response, ImscConfiguration);
    });
  }
}
