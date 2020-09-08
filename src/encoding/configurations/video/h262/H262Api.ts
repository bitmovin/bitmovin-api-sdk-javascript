import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import H262VideoConfiguration from '../../../../models/H262VideoConfiguration';
import PaginationResponse from '../../../../models/PaginationResponse';
import {H262VideoConfigurationListQueryParams, H262VideoConfigurationListQueryParamsBuilder} from './H262VideoConfigurationListQueryParams';

/**
 * H262Api - object-oriented interface
 * @export
 * @class H262Api
 * @extends {BaseAPI}
 */
export default class H262Api extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create H262 Codec Configuration
   * @param {H262VideoConfiguration} h262VideoConfiguration The H262 Codec Configuration to be created
   * @throws {BitmovinError}
   * @memberof H262Api
   */
  public create(h262VideoConfiguration?: H262VideoConfiguration): Promise<H262VideoConfiguration> {
    return this.restClient.post<H262VideoConfiguration>('/encoding/configurations/video/h262', {}, h262VideoConfiguration).then((response) => {
      return map(response, H262VideoConfiguration);
    });
  }

  /**
   * @summary Delete H262 Codec Configuration
   * @param {string} configurationId Id of the codec configuration
   * @throws {BitmovinError}
   * @memberof H262Api
   */
  public delete(configurationId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/configurations/video/h262/{configuration_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary H262 Codec Configuration Details
   * @param {string} configurationId Id of the codec configuration
   * @throws {BitmovinError}
   * @memberof H262Api
   */
  public get(configurationId: string): Promise<H262VideoConfiguration> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.get<H262VideoConfiguration>('/encoding/configurations/video/h262/{configuration_id}', pathParamMap).then((response) => {
      return map(response, H262VideoConfiguration);
    });
  }

  /**
   * @summary List H262 Codec Configurations
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof H262Api
   */
  public list(queryParameters?: H262VideoConfigurationListQueryParams | ((q: H262VideoConfigurationListQueryParamsBuilder) => H262VideoConfigurationListQueryParamsBuilder)): Promise<PaginationResponse<H262VideoConfiguration>> {
    let queryParams: H262VideoConfigurationListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new H262VideoConfigurationListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<H262VideoConfiguration>>('/encoding/configurations/video/h262', {}, queryParams).then((response) => {
      return new PaginationResponse<H262VideoConfiguration>(response, H262VideoConfiguration);
    });
  }
}
