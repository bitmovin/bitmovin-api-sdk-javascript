import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import {map, mapArray} from '../../common/Mapper';
import TypeApi from './type/TypeApi';
import VideoApi from './video/VideoApi';
import AudioApi from './audio/AudioApi';
import SubtitlesApi from './subtitles/SubtitlesApi';
import CodecConfiguration from '../../models/CodecConfiguration';
import PaginationResponse from '../../models/PaginationResponse';
import {CodecConfigurationListQueryParams, CodecConfigurationListQueryParamsBuilder} from './CodecConfigurationListQueryParams';

/**
 * ConfigurationsApi - object-oriented interface
 * @export
 * @class ConfigurationsApi
 * @extends {BaseAPI}
 */
export default class ConfigurationsApi extends BaseAPI {
  public type: TypeApi;
  public video: VideoApi;
  public audio: AudioApi;
  public subtitles: SubtitlesApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.type = new TypeApi(configuration);
    this.video = new VideoApi(configuration);
    this.audio = new AudioApi(configuration);
    this.subtitles = new SubtitlesApi(configuration);
  }

  /**
   * @summary Get Codec Configuration Details
   * @param {string} configurationId Id of the codec configuration
   * @throws {BitmovinError}
   * @memberof ConfigurationsApi
   */
  public get(configurationId: string): Promise<CodecConfiguration> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.get<CodecConfiguration>('/encoding/configurations/{configuration_id}', pathParamMap).then((response) => {
      return map(response, CodecConfiguration);
    });
  }

  /**
   * @summary List all Codec Configurations
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof ConfigurationsApi
   */
  public list(queryParameters?: CodecConfigurationListQueryParams | ((q: CodecConfigurationListQueryParamsBuilder) => CodecConfigurationListQueryParamsBuilder)): Promise<PaginationResponse<CodecConfiguration>> {
    let queryParams: CodecConfigurationListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new CodecConfigurationListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<CodecConfiguration>>('/encoding/configurations', {}, queryParams).then((response) => {
      return new PaginationResponse<CodecConfiguration>(response, CodecConfiguration);
    });
  }
}
