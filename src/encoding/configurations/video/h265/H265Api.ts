import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import H265VideoConfiguration from '../../../../models/H265VideoConfiguration';
import PaginationResponse from '../../../../models/PaginationResponse';
import { H265VideoConfigurationListQueryParams, H265VideoConfigurationListQueryParamsBuilder } from './H265VideoConfigurationListQueryParams';

/**
 * H265Api - object-oriented interface
 * @export
 * @class H265Api
 * @extends {BaseAPI}
 */
export default class H265Api extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create H265/HEVC Codec Configuration
   * @param {H265VideoConfiguration} h265VideoConfiguration The H265/HEVC Codec Configuration to be created
   * @throws {RequiredError}
   * @memberof H265Api
   */
  public create(h265VideoConfiguration?: H265VideoConfiguration): Promise<H265VideoConfiguration> {
    return this.restClient.post<H265VideoConfiguration>('/encoding/configurations/video/h265', {}, h265VideoConfiguration).then((response) => {
      return new H265VideoConfiguration(response);
    });
  }

  /**
   * @summary Delete H265/HEVC Codec Configuration
   * @param {string} configurationId Id of the codec configuration
   * @throws {RequiredError}
   * @memberof H265Api
   */
  public delete(configurationId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/configurations/video/h265/{configuration_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary H265/HEVC Codec Configuration Details
   * @param {string} configurationId Id of the codec configuration
   * @throws {RequiredError}
   * @memberof H265Api
   */
  public get(configurationId: string): Promise<H265VideoConfiguration> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.get<H265VideoConfiguration>('/encoding/configurations/video/h265/{configuration_id}', pathParamMap).then((response) => {
      return new H265VideoConfiguration(response);
    });
  }

  /**
   * @summary List H265/HEVC Codec Configurations
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof H265Api
   */
  public list(queryParameters?: H265VideoConfigurationListQueryParams | ((q: H265VideoConfigurationListQueryParamsBuilder) => H265VideoConfigurationListQueryParamsBuilder)): Promise<PaginationResponse<H265VideoConfiguration>> {
    let queryParams: H265VideoConfigurationListQueryParams = {};
    if (typeof queryParameters === 'function') {
        queryParams = queryParameters(new H265VideoConfigurationListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
        queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<H265VideoConfiguration>>('/encoding/configurations/video/h265', {}, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<H265VideoConfiguration>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new H265VideoConfiguration(i));
      }
      return paginationResponse;
    });
  }
}
