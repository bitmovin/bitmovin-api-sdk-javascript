import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import Mp3AudioConfiguration from '../../../../models/Mp3AudioConfiguration';
import PaginationResponse from '../../../../models/PaginationResponse';
import {Mp3AudioConfigurationListQueryParams, Mp3AudioConfigurationListQueryParamsBuilder} from './Mp3AudioConfigurationListQueryParams';
import {getType, map} from '../../../../common/Mapper';

/**
 * Mp3Api - object-oriented interface
 * @export
 * @class Mp3Api
 * @extends {BaseAPI}
 */
export default class Mp3Api extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create MP3 Codec Configuration
   * @param {Mp3AudioConfiguration} mp3AudioConfiguration The MP3 Codec Configuration to be created
   * @throws {RequiredError}
   * @memberof Mp3Api
   */
  public create(mp3AudioConfiguration?: Mp3AudioConfiguration): Promise<Mp3AudioConfiguration> {
    return this.restClient.post<Mp3AudioConfiguration>('/encoding/configurations/audio/mp3', {}, mp3AudioConfiguration).then((response) => {
      return new Mp3AudioConfiguration(response);
    });
  }

  /**
   * @summary Delete MP3 Codec Configuration
   * @param {string} configurationId Id of the codec configuration
   * @throws {RequiredError}
   * @memberof Mp3Api
   */
  public delete(configurationId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/configurations/audio/mp3/{configuration_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary MP3 Codec Configuration Details
   * @param {string} configurationId Id of the codec configuration
   * @throws {RequiredError}
   * @memberof Mp3Api
   */
  public get(configurationId: string): Promise<Mp3AudioConfiguration> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.get<Mp3AudioConfiguration>('/encoding/configurations/audio/mp3/{configuration_id}', pathParamMap).then((response) => {
      return new Mp3AudioConfiguration(response);
    });
  }

  /**
   * @summary List MP3 Configurations
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof Mp3Api
   */
  public list(queryParameters?: Mp3AudioConfigurationListQueryParams | ((q: Mp3AudioConfigurationListQueryParamsBuilder) => Mp3AudioConfigurationListQueryParamsBuilder)): Promise<PaginationResponse<Mp3AudioConfiguration>> {
    let queryParams: Mp3AudioConfigurationListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new Mp3AudioConfigurationListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<Mp3AudioConfiguration>>('/encoding/configurations/audio/mp3', {}, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<Mp3AudioConfiguration>(response);
      if (Array.isArray(paginationResponse.items)) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new Mp3AudioConfiguration(i));
      }
      return paginationResponse;
    });
  }
}
