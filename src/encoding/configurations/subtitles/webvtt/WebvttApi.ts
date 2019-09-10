import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import WebVttConfiguration from '../../../../models/WebVttConfiguration';
import PaginationResponse from '../../../../models/PaginationResponse';
import {WebVttConfigurationListQueryParams, WebVttConfigurationListQueryParamsBuilder} from './WebVttConfigurationListQueryParams';

/**
 * WebvttApi - object-oriented interface
 * @export
 * @class WebvttApi
 * @extends {BaseAPI}
 */
export default class WebvttApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create WebVtt Subtitle Configuration
   * @param {WebVttConfiguration} webVttConfiguration The WebVtt Subtitle Configuration to be created
   * @throws {BitmovinError}
   * @memberof WebvttApi
   */
  public create(webVttConfiguration?: WebVttConfiguration): Promise<WebVttConfiguration> {
    return this.restClient.post<WebVttConfiguration>('/encoding/configurations/subtitles/webvtt/', {}, webVttConfiguration).then((response) => {
      return map(response, WebVttConfiguration);
    });
  }

  /**
   * @summary Delete WebVtt Subtitle Configuration
   * @param {string} configurationId Id of the subtitle configuration
   * @throws {BitmovinError}
   * @memberof WebvttApi
   */
  public delete(configurationId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/configurations/subtitles/webvtt/{configuration_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary WebVtt Subtitle Configuration Details
   * @param {string} configurationId Id of the codec configuration
   * @throws {BitmovinError}
   * @memberof WebvttApi
   */
  public get(configurationId: string): Promise<WebVttConfiguration> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.get<WebVttConfiguration>('/encoding/configurations/subtitles/webvtt/{configuration_id}', pathParamMap).then((response) => {
      return map(response, WebVttConfiguration);
    });
  }

  /**
   * @summary List WebVtt Configurations
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof WebvttApi
   */
  public list(queryParameters?: WebVttConfigurationListQueryParams | ((q: WebVttConfigurationListQueryParamsBuilder) => WebVttConfigurationListQueryParamsBuilder)): Promise<PaginationResponse<WebVttConfiguration>> {
    let queryParams: WebVttConfigurationListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new WebVttConfigurationListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<WebVttConfiguration>>('/encoding/configurations/subtitles/webvtt/', {}, queryParams).then((response) => {
      return new PaginationResponse<WebVttConfiguration>(response, WebVttConfiguration);
    });
  }
}
