import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import DtsXAudioConfiguration from '../../../../models/DtsXAudioConfiguration';
import PaginationResponse from '../../../../models/PaginationResponse';
import {DtsXAudioConfigurationListQueryParams, DtsXAudioConfigurationListQueryParamsBuilder} from './DtsXAudioConfigurationListQueryParams';

/**
 * DtsxApi - object-oriented interface
 * @export
 * @class DtsxApi
 * @extends {BaseAPI}
 */
export default class DtsxApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create DTS:X Codec Configuration
   * @param {DtsXAudioConfiguration} dtsXAudioConfiguration The DTS:X Codec Configuration to be created
   * @throws {BitmovinError}
   * @memberof DtsxApi
   */
  public create(dtsXAudioConfiguration?: DtsXAudioConfiguration): Promise<DtsXAudioConfiguration> {
    return this.restClient.post<DtsXAudioConfiguration>('/encoding/configurations/audio/dtsx', {}, dtsXAudioConfiguration).then((response) => {
      return map(response, DtsXAudioConfiguration);
    });
  }

  /**
   * @summary Delete DTS:X Codec Configuration
   * @param {string} configurationId Id of the codec configuration
   * @throws {BitmovinError}
   * @memberof DtsxApi
   */
  public delete(configurationId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/configurations/audio/dtsx/{configuration_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary DTS:X Codec Configuration Details
   * @param {string} configurationId Id of the codec configuration
   * @throws {BitmovinError}
   * @memberof DtsxApi
   */
  public get(configurationId: string): Promise<DtsXAudioConfiguration> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.get<DtsXAudioConfiguration>('/encoding/configurations/audio/dtsx/{configuration_id}', pathParamMap).then((response) => {
      return map(response, DtsXAudioConfiguration);
    });
  }

  /**
   * @summary List DTS:X Codec Configurations
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof DtsxApi
   */
  public list(queryParameters?: DtsXAudioConfigurationListQueryParams | ((q: DtsXAudioConfigurationListQueryParamsBuilder) => DtsXAudioConfigurationListQueryParamsBuilder)): Promise<PaginationResponse<DtsXAudioConfiguration>> {
    let queryParams: DtsXAudioConfigurationListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new DtsXAudioConfigurationListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<DtsXAudioConfiguration>>('/encoding/configurations/audio/dtsx', {}, queryParams).then((response) => {
      return new PaginationResponse<DtsXAudioConfiguration>(response, DtsXAudioConfiguration);
    });
  }
}
