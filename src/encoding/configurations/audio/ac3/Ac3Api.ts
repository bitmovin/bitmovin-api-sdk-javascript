import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import CustomdataApi from './customdata/CustomdataApi';
import Ac3AudioConfiguration from '../../../../models/Ac3AudioConfiguration';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import PaginationResponse from '../../../../models/PaginationResponse';
import Ac3AudioConfigurationListQueryParams from './Ac3AudioConfigurationListQueryParams';

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
   * @param {Ac3AudioConfiguration} ac3AudioConfiguration
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
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof Ac3Api
   */
  public list(queryParams?: Ac3AudioConfigurationListQueryParams): Promise<PaginationResponse<Ac3AudioConfiguration>> {
    return this.restClient.get<PaginationResponse<Ac3AudioConfiguration>>('/encoding/configurations/audio/ac3', {}, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<Ac3AudioConfiguration>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new Ac3AudioConfiguration(i));
      }
      return paginationResponse;
    });
  }
}
