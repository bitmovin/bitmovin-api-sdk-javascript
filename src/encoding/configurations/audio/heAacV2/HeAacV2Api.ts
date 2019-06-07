import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import HeAacV2AudioConfiguration from '../../../../models/HeAacV2AudioConfiguration';
import PaginationResponse from '../../../../models/PaginationResponse';
import HeAacV2AudioConfigurationListQueryParams from './HeAacV2AudioConfigurationListQueryParams';

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
   * @param {HeAacV2AudioConfiguration} heAacV2AudioConfiguration
   * @throws {RequiredError}
   * @memberof HeAacV2Api
   */
  public create(heAacV2AudioConfiguration?: HeAacV2AudioConfiguration): Promise<HeAacV2AudioConfiguration> {
    return this.restClient.post<HeAacV2AudioConfiguration>('/encoding/configurations/audio/he-aac-v2', {}, heAacV2AudioConfiguration).then((response) => {
      return new HeAacV2AudioConfiguration(response);
    });
  }

  /**
   * @summary Delete HE-AAC v2 Codec Configuration
   * @param {string} configurationId Id of the codec configuration
   * @throws {RequiredError}
   * @memberof HeAacV2Api
   */
  public delete(configurationId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/configurations/audio/he-aac-v2/{configuration_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary HE-AAC v2 Codec Configuration Details
   * @param {string} configurationId Id of the codec configuration
   * @throws {RequiredError}
   * @memberof HeAacV2Api
   */
  public get(configurationId: string): Promise<HeAacV2AudioConfiguration> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.get<HeAacV2AudioConfiguration>('/encoding/configurations/audio/he-aac-v2/{configuration_id}', pathParamMap).then((response) => {
      return new HeAacV2AudioConfiguration(response);
    });
  }

  /**
   * @summary List HE-AAC v2 Configurations
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof HeAacV2Api
   */
  public list(queryParams?: HeAacV2AudioConfigurationListQueryParams): Promise<PaginationResponse<HeAacV2AudioConfiguration>> {
    return this.restClient.get<PaginationResponse<HeAacV2AudioConfiguration>>('/encoding/configurations/audio/he-aac-v2', {}, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<HeAacV2AudioConfiguration>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new HeAacV2AudioConfiguration(i));
      }
      return paginationResponse;
    });
  }
}
