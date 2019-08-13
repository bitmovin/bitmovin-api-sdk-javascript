import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import HeAacV1AudioConfiguration from '../../../../models/HeAacV1AudioConfiguration';
import PaginationResponse from '../../../../models/PaginationResponse';
import {HeAacV1AudioConfigurationListQueryParams, HeAacV1AudioConfigurationListQueryParamsBuilder} from './HeAacV1AudioConfigurationListQueryParams';
import {getType, map} from '../../../../common/Mapper';

/**
 * HeAacV1Api - object-oriented interface
 * @export
 * @class HeAacV1Api
 * @extends {BaseAPI}
 */
export default class HeAacV1Api extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create HE-AAC v1 Codec Configuration
   * @param {HeAacV1AudioConfiguration} heAacV1AudioConfiguration The HE-AAC Codec Configuration to be created
   * @throws {RequiredError}
   * @memberof HeAacV1Api
   */
  public create(heAacV1AudioConfiguration?: HeAacV1AudioConfiguration): Promise<HeAacV1AudioConfiguration> {
    return this.restClient.post<HeAacV1AudioConfiguration>('/encoding/configurations/audio/he-aac-v1', {}, heAacV1AudioConfiguration).then((response) => {
      return new HeAacV1AudioConfiguration(response);
    });
  }

  /**
   * @summary Delete HE-AAC v1 Codec Configuration
   * @param {string} configurationId Id of the codec configuration
   * @throws {RequiredError}
   * @memberof HeAacV1Api
   */
  public delete(configurationId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/configurations/audio/he-aac-v1/{configuration_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary HE-AAC v1 Codec Configuration Details
   * @param {string} configurationId Id of the codec configuration
   * @throws {RequiredError}
   * @memberof HeAacV1Api
   */
  public get(configurationId: string): Promise<HeAacV1AudioConfiguration> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.get<HeAacV1AudioConfiguration>('/encoding/configurations/audio/he-aac-v1/{configuration_id}', pathParamMap).then((response) => {
      return new HeAacV1AudioConfiguration(response);
    });
  }

  /**
   * @summary List HE-AAC v1 Configurations
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof HeAacV1Api
   */
  public list(queryParameters?: HeAacV1AudioConfigurationListQueryParams | ((q: HeAacV1AudioConfigurationListQueryParamsBuilder) => HeAacV1AudioConfigurationListQueryParamsBuilder)): Promise<PaginationResponse<HeAacV1AudioConfiguration>> {
    let queryParams: HeAacV1AudioConfigurationListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new HeAacV1AudioConfigurationListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<HeAacV1AudioConfiguration>>('/encoding/configurations/audio/he-aac-v1', {}, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<HeAacV1AudioConfiguration>(response);
      if (Array.isArray(paginationResponse.items)) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new HeAacV1AudioConfiguration(i));
      }
      return paginationResponse;
    });
  }
}
