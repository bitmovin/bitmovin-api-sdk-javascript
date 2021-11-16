import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import Av1VideoConfiguration from '../../../../models/Av1VideoConfiguration';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import VideoConfiguration from '../../../../models/VideoConfiguration';
import PaginationResponse from '../../../../models/PaginationResponse';
import {Av1VideoConfigurationListQueryParams, Av1VideoConfigurationListQueryParamsBuilder} from './Av1VideoConfigurationListQueryParams';

/**
 * Av1Api - object-oriented interface
 * @export
 * @class Av1Api
 * @extends {BaseAPI}
 */
export default class Av1Api extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create AV1 Codec Configuration
   * @param {Av1VideoConfiguration} av1VideoConfiguration The AV1 Codec Configuration to be created
   * @throws {BitmovinError}
   * @memberof Av1Api
   */
  public create(av1VideoConfiguration?: Av1VideoConfiguration): Promise<Av1VideoConfiguration> {
    return this.restClient.post<Av1VideoConfiguration>('/encoding/configurations/video/av1', {}, av1VideoConfiguration).then((response) => {
      return map(response, Av1VideoConfiguration);
    });
  }

  /**
   * @summary Delete AV1 Codec Configuration
   * @param {string} configurationId Id of the codec configuration
   * @throws {BitmovinError}
   * @memberof Av1Api
   */
  public delete(configurationId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/configurations/video/av1/{configuration_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary AV1 Codec Configuration Details
   * @param {string} configurationId Id of the codec configuration
   * @throws {BitmovinError}
   * @memberof Av1Api
   */
  public get(configurationId: string): Promise<Av1VideoConfiguration> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.get<Av1VideoConfiguration>('/encoding/configurations/video/av1/{configuration_id}', pathParamMap).then((response) => {
      return map(response, Av1VideoConfiguration);
    });
  }

  /**
   * @summary List AV1 Codec Configurations
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof Av1Api
   */
  public list(queryParameters?: Av1VideoConfigurationListQueryParams | ((q: Av1VideoConfigurationListQueryParamsBuilder) => Av1VideoConfigurationListQueryParamsBuilder)): Promise<PaginationResponse<Av1VideoConfiguration>> {
    let queryParams: Av1VideoConfigurationListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new Av1VideoConfigurationListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<Av1VideoConfiguration>>('/encoding/configurations/video/av1', {}, queryParams).then((response) => {
      return new PaginationResponse<Av1VideoConfiguration>(response, Av1VideoConfiguration);
    });
  }
}
