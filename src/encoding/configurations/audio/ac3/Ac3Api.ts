import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import CustomdataApi from './customdata/CustomdataApi';
import Ac3AudioConfiguration from '../../../../models/Ac3AudioConfiguration';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import PaginationResponse from '../../../../models/PaginationResponse';
import {Ac3AudioConfigurationListQueryParams, Ac3AudioConfigurationListQueryParamsBuilder} from './Ac3AudioConfigurationListQueryParams';

/**
 * Ac3Api - object-oriented interface
 * @export
 * @class Ac3Api
 * @extends {BaseAPI}
 */
export default class Ac3Api extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create AC3 Codec Configuration
   * @param {Ac3AudioConfiguration} ac3AudioConfiguration The AC3 Codec Configuration to be created
   * @throws {RequiredError}
   * @memberof Ac3Api
   */
  public create(ac3AudioConfiguration?: Ac3AudioConfiguration): Promise<Ac3AudioConfiguration> {
    return this.restClient.post<Ac3AudioConfiguration>('/encoding/configurations/audio/ac3', {}, ac3AudioConfiguration).then((response) => {
      return new Ac3AudioConfiguration(response);
    });
  }

  /**
   * @summary Delete AC3 Codec Configuration
   * @param {string} configurationId Id of the codec configuration
   * @throws {RequiredError}
   * @memberof Ac3Api
   */
  public delete(configurationId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/configurations/audio/ac3/{configuration_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary AC3 Codec Configuration Details
   * @param {string} configurationId Id of the codec configuration
   * @throws {RequiredError}
   * @memberof Ac3Api
   */
  public get(configurationId: string): Promise<Ac3AudioConfiguration> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.get<Ac3AudioConfiguration>('/encoding/configurations/audio/ac3/{configuration_id}', pathParamMap).then((response) => {
      return new Ac3AudioConfiguration(response);
    });
  }

  /**
   * @summary List AC3 Configurations
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof Ac3Api
   */
  public list(queryParameters?: Ac3AudioConfigurationListQueryParams | ((q: Ac3AudioConfigurationListQueryParamsBuilder) => Ac3AudioConfigurationListQueryParamsBuilder)): Promise<PaginationResponse<Ac3AudioConfiguration>> {
    let queryParams: Ac3AudioConfigurationListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new Ac3AudioConfigurationListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<Ac3AudioConfiguration>>('/encoding/configurations/audio/ac3', {}, queryParams).then((response) => {
      return new PaginationResponse<Ac3AudioConfiguration>(response, Ac3AudioConfiguration);;
    });
  }
}
