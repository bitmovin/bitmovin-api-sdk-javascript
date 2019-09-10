import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import HeAacV2AudioConfiguration from '../../../../models/HeAacV2AudioConfiguration';
import PaginationResponse from '../../../../models/PaginationResponse';
import {HeAacV2AudioConfigurationListQueryParams, HeAacV2AudioConfigurationListQueryParamsBuilder} from './HeAacV2AudioConfigurationListQueryParams';

/**
 * HeAacV2Api - object-oriented interface
 * @export
 * @class HeAacV2Api
 * @extends {BaseAPI}
 */
export default class HeAacV2Api extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create HE-AAC v2 Codec Configuration
   * @param {HeAacV2AudioConfiguration} heAacV2AudioConfiguration The HE-AAC v2 Codec Configuration to be created
   * @throws {BitmovinError}
   * @memberof HeAacV2Api
   */
  public create(heAacV2AudioConfiguration?: HeAacV2AudioConfiguration): Promise<HeAacV2AudioConfiguration> {
    return this.restClient.post<HeAacV2AudioConfiguration>('/encoding/configurations/audio/he-aac-v2', {}, heAacV2AudioConfiguration).then((response) => {
      return map(response, HeAacV2AudioConfiguration);
    });
  }

  /**
   * @summary Delete HE-AAC v2 Codec Configuration
   * @param {string} configurationId Id of the codec configuration
   * @throws {BitmovinError}
   * @memberof HeAacV2Api
   */
  public delete(configurationId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/configurations/audio/he-aac-v2/{configuration_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary HE-AAC v2 Codec Configuration Details
   * @param {string} configurationId Id of the codec configuration
   * @throws {BitmovinError}
   * @memberof HeAacV2Api
   */
  public get(configurationId: string): Promise<HeAacV2AudioConfiguration> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.get<HeAacV2AudioConfiguration>('/encoding/configurations/audio/he-aac-v2/{configuration_id}', pathParamMap).then((response) => {
      return map(response, HeAacV2AudioConfiguration);
    });
  }

  /**
   * @summary List HE-AAC v2 Configurations
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof HeAacV2Api
   */
  public list(queryParameters?: HeAacV2AudioConfigurationListQueryParams | ((q: HeAacV2AudioConfigurationListQueryParamsBuilder) => HeAacV2AudioConfigurationListQueryParamsBuilder)): Promise<PaginationResponse<HeAacV2AudioConfiguration>> {
    let queryParams: HeAacV2AudioConfigurationListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new HeAacV2AudioConfigurationListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<HeAacV2AudioConfiguration>>('/encoding/configurations/audio/he-aac-v2', {}, queryParams).then((response) => {
      return new PaginationResponse<HeAacV2AudioConfiguration>(response, HeAacV2AudioConfiguration);
    });
  }
}
