import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import MjpegVideoConfiguration from '../../../../models/MjpegVideoConfiguration';
import PaginationResponse from '../../../../models/PaginationResponse';
import {MjpegVideoConfigurationListQueryParams, MjpegVideoConfigurationListQueryParamsBuilder} from './MjpegVideoConfigurationListQueryParams';

/**
 * MjpegApi - object-oriented interface
 * @export
 * @class MjpegApi
 * @extends {BaseAPI}
 */
export default class MjpegApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create MJPEG Codec Configuration
   * @param {MjpegVideoConfiguration} mjpegVideoConfiguration The MJPEG Codec Configuration to be created
   * @throws {RequiredError}
   * @memberof MjpegApi
   */
  public create(mjpegVideoConfiguration?: MjpegVideoConfiguration): Promise<MjpegVideoConfiguration> {
    return this.restClient.post<MjpegVideoConfiguration>('/encoding/configurations/video/mjpeg', {}, mjpegVideoConfiguration).then((response) => {
      return new MjpegVideoConfiguration(response);
    });
  }

  /**
   * @summary Delete MJPEG Codec Configuration
   * @param {string} configurationId Id of the codec configuration
   * @throws {RequiredError}
   * @memberof MjpegApi
   */
  public delete(configurationId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/configurations/video/mjpeg/{configuration_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary MJPEG Codec Configuration Details
   * @param {string} configurationId Id of the codec configuration
   * @throws {RequiredError}
   * @memberof MjpegApi
   */
  public get(configurationId: string): Promise<MjpegVideoConfiguration> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.get<MjpegVideoConfiguration>('/encoding/configurations/video/mjpeg/{configuration_id}', pathParamMap).then((response) => {
      return new MjpegVideoConfiguration(response);
    });
  }

  /**
   * @summary List MJPEG Configurations
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof MjpegApi
   */
  public list(queryParameters?: MjpegVideoConfigurationListQueryParams | ((q: MjpegVideoConfigurationListQueryParamsBuilder) => MjpegVideoConfigurationListQueryParamsBuilder)): Promise<PaginationResponse<MjpegVideoConfiguration>> {
    let queryParams: MjpegVideoConfigurationListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new MjpegVideoConfigurationListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<MjpegVideoConfiguration>>('/encoding/configurations/video/mjpeg', {}, queryParams).then((response) => {
      return new PaginationResponse<MjpegVideoConfiguration>(response, MjpegVideoConfiguration);;
    });
  }
}
