import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import DolbyDigitalAudioConfiguration from '../../../../models/DolbyDigitalAudioConfiguration';
import PaginationResponse from '../../../../models/PaginationResponse';
import {DolbyDigitalAudioConfigurationListQueryParams, DolbyDigitalAudioConfigurationListQueryParamsBuilder} from './DolbyDigitalAudioConfigurationListQueryParams';

/**
 * DolbyDigitalApi - object-oriented interface
 * @export
 * @class DolbyDigitalApi
 * @extends {BaseAPI}
 */
export default class DolbyDigitalApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create Dolby Digital Codec Configuration
   * @param {DolbyDigitalAudioConfiguration} dolbyDigitalAudioConfiguration The Dolby Digital Codec Configuration to be created (Dolby Encoder v3.17)
   * @throws {BitmovinError}
   * @memberof DolbyDigitalApi
   */
  public create(dolbyDigitalAudioConfiguration?: DolbyDigitalAudioConfiguration): Promise<DolbyDigitalAudioConfiguration> {
    return this.restClient.post<DolbyDigitalAudioConfiguration>('/encoding/configurations/audio/dolby-digital', {}, dolbyDigitalAudioConfiguration).then((response) => {
      return map(response, DolbyDigitalAudioConfiguration);
    });
  }

  /**
   * @summary Delete Dolby Digital Codec Configuration
   * @param {string} configurationId Id of the codec configuration
   * @throws {BitmovinError}
   * @memberof DolbyDigitalApi
   */
  public delete(configurationId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/configurations/audio/dolby-digital/{configuration_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Dolby Digital Codec Configuration Details
   * @param {string} configurationId Id of the codec configuration
   * @throws {BitmovinError}
   * @memberof DolbyDigitalApi
   */
  public get(configurationId: string): Promise<DolbyDigitalAudioConfiguration> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.get<DolbyDigitalAudioConfiguration>('/encoding/configurations/audio/dolby-digital/{configuration_id}', pathParamMap).then((response) => {
      return map(response, DolbyDigitalAudioConfiguration);
    });
  }

  /**
   * @summary List Dolby Digital Codec Configurations
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof DolbyDigitalApi
   */
  public list(queryParameters?: DolbyDigitalAudioConfigurationListQueryParams | ((q: DolbyDigitalAudioConfigurationListQueryParamsBuilder) => DolbyDigitalAudioConfigurationListQueryParamsBuilder)): Promise<PaginationResponse<DolbyDigitalAudioConfiguration>> {
    let queryParams: DolbyDigitalAudioConfigurationListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new DolbyDigitalAudioConfigurationListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<DolbyDigitalAudioConfiguration>>('/encoding/configurations/audio/dolby-digital', {}, queryParams).then((response) => {
      return new PaginationResponse<DolbyDigitalAudioConfiguration>(response, DolbyDigitalAudioConfiguration);
    });
  }
}
