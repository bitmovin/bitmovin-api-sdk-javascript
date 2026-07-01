import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import H265V2VideoConfiguration from '../../../../models/H265V2VideoConfiguration';
import PaginationResponse from '../../../../models/PaginationResponse';
import {H265V2VideoConfigurationListQueryParams, H265V2VideoConfigurationListQueryParamsBuilder} from './H265V2VideoConfigurationListQueryParams';

/**
 * H265v2Api - object-oriented interface
 * @export
 * @class H265v2Api
 * @extends {BaseAPI}
 */
export default class H265v2Api extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Create H265 V2 Codec Configuration
   * @param {H265V2VideoConfiguration} h265V2VideoConfiguration The H265 V2 Codec Configuration to be created
   * @throws {BitmovinError}
   * @memberof H265v2Api
   */
  public create(h265V2VideoConfiguration?: H265V2VideoConfiguration): Promise<H265V2VideoConfiguration> {
    return this.restClient.post<H265V2VideoConfiguration>('/encoding/configurations/video/h265v2', {}, h265V2VideoConfiguration).then((response) => {
      return map(response, H265V2VideoConfiguration);
    });
  }

  /**
   * @summary Delete H265 V2 Codec Configuration
   * @param {string} configurationId Id of the codec configuration
   * @throws {BitmovinError}
   * @memberof H265v2Api
   */
  public delete(configurationId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/configurations/video/h265v2/{configuration_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary H265 V2 Codec Configuration Details
   * @param {string} configurationId Id of the codec configuration
   * @throws {BitmovinError}
   * @memberof H265v2Api
   */
  public get(configurationId: string): Promise<H265V2VideoConfiguration> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.get<H265V2VideoConfiguration>('/encoding/configurations/video/h265v2/{configuration_id}', pathParamMap).then((response) => {
      return map(response, H265V2VideoConfiguration);
    });
  }

  /**
   * @summary List H265 V2 Codec Configurations
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof H265v2Api
   */
  public list(queryParameters?: H265V2VideoConfigurationListQueryParams | ((q: H265V2VideoConfigurationListQueryParamsBuilder) => H265V2VideoConfigurationListQueryParamsBuilder)): Promise<PaginationResponse<H265V2VideoConfiguration>> {
    let queryParams: H265V2VideoConfigurationListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new H265V2VideoConfigurationListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<H265V2VideoConfiguration>>('/encoding/configurations/video/h265v2', {}, queryParams).then((response) => {
      return new PaginationResponse<H265V2VideoConfiguration>(response, H265V2VideoConfiguration);
    });
  }
}
