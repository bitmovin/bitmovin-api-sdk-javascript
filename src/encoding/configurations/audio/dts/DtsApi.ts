import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import DtsAudioConfiguration from '../../../../models/DtsAudioConfiguration';
import PaginationResponse from '../../../../models/PaginationResponse';
import {DtsAudioConfigurationListQueryParams, DtsAudioConfigurationListQueryParamsBuilder} from './DtsAudioConfigurationListQueryParams';

/**
 * DtsApi - object-oriented interface
 * @export
 * @class DtsApi
 * @extends {BaseAPI}
 */
export default class DtsApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create DTS Codec Configuration
   * @param {DtsAudioConfiguration} dtsAudioConfiguration The DTS Codec Configuration to be created
   * @throws {BitmovinError}
   * @memberof DtsApi
   */
  public create(dtsAudioConfiguration?: DtsAudioConfiguration): Promise<DtsAudioConfiguration> {
    return this.restClient.post<DtsAudioConfiguration>('/encoding/configurations/audio/dts', {}, dtsAudioConfiguration).then((response) => {
      return map(response, DtsAudioConfiguration);
    });
  }

  /**
   * @summary Delete DTS Codec Configuration
   * @param {string} configurationId Id of the codec configuration
   * @throws {BitmovinError}
   * @memberof DtsApi
   */
  public delete(configurationId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/configurations/audio/dts/{configuration_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary DTS Codec Configuration Details
   * @param {string} configurationId Id of the codec configuration
   * @throws {BitmovinError}
   * @memberof DtsApi
   */
  public get(configurationId: string): Promise<DtsAudioConfiguration> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.get<DtsAudioConfiguration>('/encoding/configurations/audio/dts/{configuration_id}', pathParamMap).then((response) => {
      return map(response, DtsAudioConfiguration);
    });
  }

  /**
   * @summary List DTS Codec Configurations
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof DtsApi
   */
  public list(queryParameters?: DtsAudioConfigurationListQueryParams | ((q: DtsAudioConfigurationListQueryParamsBuilder) => DtsAudioConfigurationListQueryParamsBuilder)): Promise<PaginationResponse<DtsAudioConfiguration>> {
    let queryParams: DtsAudioConfigurationListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new DtsAudioConfigurationListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<DtsAudioConfiguration>>('/encoding/configurations/audio/dts', {}, queryParams).then((response) => {
      return new PaginationResponse<DtsAudioConfiguration>(response, DtsAudioConfiguration);
    });
  }
}
