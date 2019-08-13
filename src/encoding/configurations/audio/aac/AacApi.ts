import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import CustomdataApi from './customdata/CustomdataApi';
import AacAudioConfiguration from '../../../../models/AacAudioConfiguration';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import PaginationResponse from '../../../../models/PaginationResponse';
import {AacAudioConfigurationListQueryParams, AacAudioConfigurationListQueryParamsBuilder} from './AacAudioConfigurationListQueryParams';
import {getType, map} from '../../../../common/Mapper';

/**
 * AacApi - object-oriented interface
 * @export
 * @class AacApi
 * @extends {BaseAPI}
 */
export default class AacApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create AAC Codec Configuration
   * @param {AacAudioConfiguration} aacAudioConfiguration The AAC Codec Configuration to be created
   * @throws {RequiredError}
   * @memberof AacApi
   */
  public create(aacAudioConfiguration?: AacAudioConfiguration): Promise<AacAudioConfiguration> {
    return this.restClient.post<AacAudioConfiguration>('/encoding/configurations/audio/aac', {}, aacAudioConfiguration).then((response) => {
      return new AacAudioConfiguration(response);
    });
  }

  /**
   * @summary Delete AAC Codec Configuration
   * @param {string} configurationId Id of the codec configuration
   * @throws {RequiredError}
   * @memberof AacApi
   */
  public delete(configurationId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/configurations/audio/aac/{configuration_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary AAC Codec Configuration Details
   * @param {string} configurationId Id of the codec configuration
   * @throws {RequiredError}
   * @memberof AacApi
   */
  public get(configurationId: string): Promise<AacAudioConfiguration> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.get<AacAudioConfiguration>('/encoding/configurations/audio/aac/{configuration_id}', pathParamMap).then((response) => {
      return new AacAudioConfiguration(response);
    });
  }

  /**
   * @summary List AAC Configurations
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof AacApi
   */
  public list(queryParameters?: AacAudioConfigurationListQueryParams | ((q: AacAudioConfigurationListQueryParamsBuilder) => AacAudioConfigurationListQueryParamsBuilder)): Promise<PaginationResponse<AacAudioConfiguration>> {
    let queryParams: AacAudioConfigurationListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new AacAudioConfigurationListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<AacAudioConfiguration>>('/encoding/configurations/audio/aac', {}, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<AacAudioConfiguration>(response);
      if (Array.isArray(paginationResponse.items)) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new AacAudioConfiguration(i));
      }
      return paginationResponse;
    });
  }
}
