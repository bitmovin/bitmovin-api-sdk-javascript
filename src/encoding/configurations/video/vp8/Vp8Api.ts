import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import Vp8VideoConfiguration from '../../../../models/Vp8VideoConfiguration';
import PaginationResponse from '../../../../models/PaginationResponse';
import {Vp8VideoConfigurationListQueryParams, Vp8VideoConfigurationListQueryParamsBuilder} from './Vp8VideoConfigurationListQueryParams';

/**
 * Vp8Api - object-oriented interface
 * @export
 * @class Vp8Api
 * @extends {BaseAPI}
 */
export default class Vp8Api extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create VP8 Codec Configuration
   * @param {Vp8VideoConfiguration} vp8VideoConfiguration The VP8 Codec Configuration to be created
   * @throws {BitmovinError}
   * @memberof Vp8Api
   */
  public create(vp8VideoConfiguration?: Vp8VideoConfiguration): Promise<Vp8VideoConfiguration> {
    return this.restClient.post<Vp8VideoConfiguration>('/encoding/configurations/video/vp8', {}, vp8VideoConfiguration).then((response) => {
      return map(response, Vp8VideoConfiguration);
    });
  }

  /**
   * @summary Delete VP8 Codec Configuration
   * @param {string} configurationId Id of the codec configuration
   * @throws {BitmovinError}
   * @memberof Vp8Api
   */
  public delete(configurationId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/configurations/video/vp8/{configuration_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary VP8 Codec Configuration Details
   * @param {string} configurationId Id of the codec configuration
   * @throws {BitmovinError}
   * @memberof Vp8Api
   */
  public get(configurationId: string): Promise<Vp8VideoConfiguration> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.get<Vp8VideoConfiguration>('/encoding/configurations/video/vp8/{configuration_id}', pathParamMap).then((response) => {
      return map(response, Vp8VideoConfiguration);
    });
  }

  /**
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof Vp8Api
   */
  public list(queryParameters?: Vp8VideoConfigurationListQueryParams | ((q: Vp8VideoConfigurationListQueryParamsBuilder) => Vp8VideoConfigurationListQueryParamsBuilder)): Promise<PaginationResponse<Vp8VideoConfiguration>> {
    let queryParams: Vp8VideoConfigurationListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new Vp8VideoConfigurationListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<Vp8VideoConfiguration>>('/encoding/configurations/video/vp8', {}, queryParams).then((response) => {
      return new PaginationResponse<Vp8VideoConfiguration>(response, Vp8VideoConfiguration);
    });
  }
}
