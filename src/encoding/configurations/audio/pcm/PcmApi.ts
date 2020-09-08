import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import PcmAudioConfiguration from '../../../../models/PcmAudioConfiguration';
import PaginationResponse from '../../../../models/PaginationResponse';
import {PcmAudioConfigurationListQueryParams, PcmAudioConfigurationListQueryParamsBuilder} from './PcmAudioConfigurationListQueryParams';

/**
 * PcmApi - object-oriented interface
 * @export
 * @class PcmApi
 * @extends {BaseAPI}
 */
export default class PcmApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create PCM Codec Configuration
   * @param {PcmAudioConfiguration} pcmAudioConfiguration The PCM Codec Configuration to be created
   * @throws {BitmovinError}
   * @memberof PcmApi
   */
  public create(pcmAudioConfiguration?: PcmAudioConfiguration): Promise<PcmAudioConfiguration> {
    return this.restClient.post<PcmAudioConfiguration>('/encoding/configurations/audio/pcm', {}, pcmAudioConfiguration).then((response) => {
      return map(response, PcmAudioConfiguration);
    });
  }

  /**
   * @summary Delete PCM Codec Configuration
   * @param {string} configurationId Id of the codec configuration
   * @throws {BitmovinError}
   * @memberof PcmApi
   */
  public delete(configurationId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/configurations/audio/pcm/{configuration_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary PCM Codec Configuration Details
   * @param {string} configurationId Id of the codec configuration
   * @throws {BitmovinError}
   * @memberof PcmApi
   */
  public get(configurationId: string): Promise<PcmAudioConfiguration> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.get<PcmAudioConfiguration>('/encoding/configurations/audio/pcm/{configuration_id}', pathParamMap).then((response) => {
      return map(response, PcmAudioConfiguration);
    });
  }

  /**
   * @summary List PCM Configurations
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof PcmApi
   */
  public list(queryParameters?: PcmAudioConfigurationListQueryParams | ((q: PcmAudioConfigurationListQueryParamsBuilder) => PcmAudioConfigurationListQueryParamsBuilder)): Promise<PaginationResponse<PcmAudioConfiguration>> {
    let queryParams: PcmAudioConfigurationListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new PcmAudioConfigurationListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<PcmAudioConfiguration>>('/encoding/configurations/audio/pcm', {}, queryParams).then((response) => {
      return new PaginationResponse<PcmAudioConfiguration>(response, PcmAudioConfiguration);
    });
  }
}
