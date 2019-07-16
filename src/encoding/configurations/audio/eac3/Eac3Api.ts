import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import Eac3AudioConfiguration from '../../../../models/Eac3AudioConfiguration';
import PaginationResponse from '../../../../models/PaginationResponse';
import { Eac3AudioConfigurationListQueryParams, Eac3AudioConfigurationListQueryParamsBuilder } from './Eac3AudioConfigurationListQueryParams';

/**
 * Eac3Api - object-oriented interface
 * @export
 * @class Eac3Api
 * @extends {BaseAPI}
 */
export default class Eac3Api extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create E-AC3 Codec Configuration
   * @param {Eac3AudioConfiguration} eac3AudioConfiguration The E-AC3 Codec Configuration to be created
   * @throws {RequiredError}
   * @memberof Eac3Api
   */
  public create(eac3AudioConfiguration?: Eac3AudioConfiguration): Promise<Eac3AudioConfiguration> {
    return this.restClient.post<Eac3AudioConfiguration>('/encoding/configurations/audio/eac3', {}, eac3AudioConfiguration).then((response) => {
      return new Eac3AudioConfiguration(response);
    });
  }

  /**
   * @summary Delete E-AC3 Codec Configuration
   * @param {string} configurationId Id of the codec configuration
   * @throws {RequiredError}
   * @memberof Eac3Api
   */
  public delete(configurationId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/configurations/audio/eac3/{configuration_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary E-AC3 Codec Configuration Details
   * @param {string} configurationId Id of the codec configuration
   * @throws {RequiredError}
   * @memberof Eac3Api
   */
  public get(configurationId: string): Promise<Eac3AudioConfiguration> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.get<Eac3AudioConfiguration>('/encoding/configurations/audio/eac3/{configuration_id}', pathParamMap).then((response) => {
      return new Eac3AudioConfiguration(response);
    });
  }

  /**
   * @summary List E-AC3 Configurations
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof Eac3Api
   */
  public list(queryParameters?: Eac3AudioConfigurationListQueryParams | ((q: Eac3AudioConfigurationListQueryParamsBuilder) => Eac3AudioConfigurationListQueryParamsBuilder)): Promise<PaginationResponse<Eac3AudioConfiguration>> {
    let queryParams: Eac3AudioConfigurationListQueryParams = {};
    if (typeof queryParameters === 'function') {
        queryParams = queryParameters(new Eac3AudioConfigurationListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
        queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<Eac3AudioConfiguration>>('/encoding/configurations/audio/eac3', {}, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<Eac3AudioConfiguration>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new Eac3AudioConfiguration(i));
      }
      return paginationResponse;
    });
  }
}
