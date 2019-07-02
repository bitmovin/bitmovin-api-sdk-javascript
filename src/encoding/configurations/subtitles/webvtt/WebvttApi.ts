import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResource from '../../../../models/BitmovinResource';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import WebVttConfiguration from '../../../../models/WebVttConfiguration';
import PaginationResponse from '../../../../models/PaginationResponse';
import WebVttConfigurationListQueryParams from './WebVttConfigurationListQueryParams';

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
   * @param {WebVttConfiguration} webVttConfiguration
   * @throws {RequiredError}
   * @memberof WebvttApi
   */
  public create(webVttConfiguration?: WebVttConfiguration): Promise<WebVttConfiguration> {
    return this.restClient.post<WebVttConfiguration>('/encoding/configurations/subtitles/webvtt/', {}, webVttConfiguration).then((response) => {
      return new WebVttConfiguration(response);
    });
  }

  /**
   * @summary Delete WebVtt Subtitle Configuration
   * @param {string} configurationId Id of the subtitle configuration
   * @throws {RequiredError}
   * @memberof WebvttApi
   */
  public delete(configurationId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/configurations/subtitles/webvtt/{configuration_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary WebVtt Subtitle Configuration Details
   * @param {string} configurationId Id of the codec configuration
   * @throws {RequiredError}
   * @memberof WebvttApi
   */
  public get(configurationId: string): Promise<WebVttConfiguration> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.get<WebVttConfiguration>('/encoding/configurations/subtitles/webvtt/{configuration_id}', pathParamMap).then((response) => {
      return new WebVttConfiguration(response);
    });
  }

  /**
   * @summary List WebVtt Configurations
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof WebvttApi
   */
  public list(queryParams?: WebVttConfigurationListQueryParams): Promise<PaginationResponse<WebVttConfiguration>> {
    return this.restClient.get<PaginationResponse<WebVttConfiguration>>('/encoding/configurations/subtitles/webvtt/', {}, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<WebVttConfiguration>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new WebVttConfiguration(i));
      }
      return paginationResponse;
    });
  }
}
