import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import Vp9VideoConfiguration from '../../../../models/Vp9VideoConfiguration';
import PaginationResponse from '../../../../models/PaginationResponse';
import {Vp9VideoConfigurationListQueryParams, Vp9VideoConfigurationListQueryParamsBuilder} from './Vp9VideoConfigurationListQueryParams';

/**
 * Vp9Api - object-oriented interface
 * @export
 * @class Vp9Api
 * @extends {BaseAPI}
 */
export default class Vp9Api extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create VP9 Codec Configuration
   * @param {Vp9VideoConfiguration} vp9VideoConfiguration The VP9 Codec Configuration to be created
   * @throws {RequiredError}
   * @memberof Vp9Api
   */
  public create(vp9VideoConfiguration?: Vp9VideoConfiguration): Promise<Vp9VideoConfiguration> {
    return this.restClient.post<Vp9VideoConfiguration>('/encoding/configurations/video/vp9', {}, vp9VideoConfiguration).then((response) => {
      return new Vp9VideoConfiguration(response);
    });
  }

  /**
   * @summary Delete VP9 Codec Configuration
   * @param {string} configurationId Id of the codec configuration
   * @throws {RequiredError}
   * @memberof Vp9Api
   */
  public delete(configurationId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/configurations/video/vp9/{configuration_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary VP9 Codec Configuration Details
   * @param {string} configurationId Id of the codec configuration
   * @throws {RequiredError}
   * @memberof Vp9Api
   */
  public get(configurationId: string): Promise<Vp9VideoConfiguration> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.get<Vp9VideoConfiguration>('/encoding/configurations/video/vp9/{configuration_id}', pathParamMap).then((response) => {
      return new Vp9VideoConfiguration(response);
    });
  }

  /**
   * @summary List VP9 Codec Configurations
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof Vp9Api
   */
  public list(queryParameters?: Vp9VideoConfigurationListQueryParams | ((q: Vp9VideoConfigurationListQueryParamsBuilder) => Vp9VideoConfigurationListQueryParamsBuilder)): Promise<PaginationResponse<Vp9VideoConfiguration>> {
    let queryParams: Vp9VideoConfigurationListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new Vp9VideoConfigurationListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<Vp9VideoConfiguration>>('/encoding/configurations/video/vp9', {}, queryParams).then((response) => {
      return new PaginationResponse<Vp9VideoConfiguration>(response, Vp9VideoConfiguration);;
    });
  }
}
