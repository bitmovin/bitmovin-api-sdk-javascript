import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import CodecConfiguration from '../../../../models/CodecConfiguration';
import PassthroughAudioConfiguration from '../../../../models/PassthroughAudioConfiguration';
import PaginationResponse from '../../../../models/PaginationResponse';
import {PassthroughAudioConfigurationListQueryParams, PassthroughAudioConfigurationListQueryParamsBuilder} from './PassthroughAudioConfigurationListQueryParams';

/**
 * PassthroughApi - object-oriented interface
 * @export
 * @class PassthroughApi
 * @extends {BaseAPI}
 */
export default class PassthroughApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Create Audio Passthrough Configuration
   * @param {PassthroughAudioConfiguration} passthroughAudioConfiguration The Audio Passthrough Configuration to be created
   * @throws {BitmovinError}
   * @memberof PassthroughApi
   */
  public create(passthroughAudioConfiguration?: PassthroughAudioConfiguration): Promise<PassthroughAudioConfiguration> {
    return this.restClient.post<PassthroughAudioConfiguration>('/encoding/configurations/audio/passthrough', {}, passthroughAudioConfiguration).then((response) => {
      return map(response, PassthroughAudioConfiguration);
    });
  }

  /**
   * @summary Delete Audio Passthrough Codec Configuration
   * @param {string} configurationId Id of the audio configuration
   * @throws {BitmovinError}
   * @memberof PassthroughApi
   */
  public delete(configurationId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/configurations/audio/passthrough/{configuration_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Audio Passthrough Configuration Details
   * @param {string} configurationId Id of the audio configuration
   * @throws {BitmovinError}
   * @memberof PassthroughApi
   */
  public get(configurationId: string): Promise<PassthroughAudioConfiguration> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.get<PassthroughAudioConfiguration>('/encoding/configurations/audio/passthrough/{configuration_id}', pathParamMap).then((response) => {
      return map(response, PassthroughAudioConfiguration);
    });
  }

  /**
   * @summary List Audio Passthrough Configurations
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof PassthroughApi
   */
  public list(queryParameters?: PassthroughAudioConfigurationListQueryParams | ((q: PassthroughAudioConfigurationListQueryParamsBuilder) => PassthroughAudioConfigurationListQueryParamsBuilder)): Promise<PaginationResponse<PassthroughAudioConfiguration>> {
    let queryParams: PassthroughAudioConfigurationListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new PassthroughAudioConfigurationListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<PassthroughAudioConfiguration>>('/encoding/configurations/audio/passthrough', {}, queryParams).then((response) => {
      return new PaginationResponse<PassthroughAudioConfiguration>(response, PassthroughAudioConfiguration);
    });
  }
}
