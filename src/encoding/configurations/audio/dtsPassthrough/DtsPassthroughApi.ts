import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import CodecConfiguration from '../../../../models/CodecConfiguration';
import DtsPassthroughAudioConfiguration from '../../../../models/DtsPassthroughAudioConfiguration';
import PaginationResponse from '../../../../models/PaginationResponse';
import {DtsPassthroughAudioConfigurationListQueryParams, DtsPassthroughAudioConfigurationListQueryParamsBuilder} from './DtsPassthroughAudioConfigurationListQueryParams';

/**
 * DtsPassthroughApi - object-oriented interface
 * @export
 * @class DtsPassthroughApi
 * @extends {BaseAPI}
 */
export default class DtsPassthroughApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create DTS Passthrough Configuration
   * @param {DtsPassthroughAudioConfiguration} dtsPassthroughAudioConfiguration The DTS Passthrough Codec Configuration to be created
   * @throws {BitmovinError}
   * @memberof DtsPassthroughApi
   */
  public create(dtsPassthroughAudioConfiguration?: DtsPassthroughAudioConfiguration): Promise<DtsPassthroughAudioConfiguration> {
    return this.restClient.post<DtsPassthroughAudioConfiguration>('/encoding/configurations/audio/dts-passthrough', {}, dtsPassthroughAudioConfiguration).then((response) => {
      return map(response, DtsPassthroughAudioConfiguration);
    });
  }

  /**
   * @summary Delete DTS Passthrough Codec Configuration
   * @param {string} configurationId Id of the codec configuration
   * @throws {BitmovinError}
   * @memberof DtsPassthroughApi
   */
  public delete(configurationId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/configurations/audio/dts-passthrough/{configuration_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary DTS Passthrough Codec Configuration Details
   * @param {string} configurationId Id of the codec configuration
   * @throws {BitmovinError}
   * @memberof DtsPassthroughApi
   */
  public get(configurationId: string): Promise<DtsPassthroughAudioConfiguration> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.get<DtsPassthroughAudioConfiguration>('/encoding/configurations/audio/dts-passthrough/{configuration_id}', pathParamMap).then((response) => {
      return map(response, DtsPassthroughAudioConfiguration);
    });
  }

  /**
   * @summary List DTS Passthrough Configurations
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof DtsPassthroughApi
   */
  public list(queryParameters?: DtsPassthroughAudioConfigurationListQueryParams | ((q: DtsPassthroughAudioConfigurationListQueryParamsBuilder) => DtsPassthroughAudioConfigurationListQueryParamsBuilder)): Promise<PaginationResponse<DtsPassthroughAudioConfiguration>> {
    let queryParams: DtsPassthroughAudioConfigurationListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new DtsPassthroughAudioConfigurationListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<DtsPassthroughAudioConfiguration>>('/encoding/configurations/audio/dts-passthrough', {}, queryParams).then((response) => {
      return new PaginationResponse<DtsPassthroughAudioConfiguration>(response, DtsPassthroughAudioConfiguration);
    });
  }
}
