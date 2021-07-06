import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import DolbyDigitalPlusAudioConfiguration from '../../../../models/DolbyDigitalPlusAudioConfiguration';
import PaginationResponse from '../../../../models/PaginationResponse';
import {DolbyDigitalPlusAudioConfigurationListQueryParams, DolbyDigitalPlusAudioConfigurationListQueryParamsBuilder} from './DolbyDigitalPlusAudioConfigurationListQueryParams';

/**
 * DolbyDigitalPlusApi - object-oriented interface
 * @export
 * @class DolbyDigitalPlusApi
 * @extends {BaseAPI}
 */
export default class DolbyDigitalPlusApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create Dolby Digital Plus Codec Configuration
   * @param {DolbyDigitalPlusAudioConfiguration} dolbyDigitalPlusAudioConfiguration The Dolby Digital Plus Codec Configuration to be created (Dolby Encoder v3.17).  Dolby Digital Plus enables high-resolution multichannel audio at lower bit rates than with Dolby Digital. 
   * @throws {BitmovinError}
   * @memberof DolbyDigitalPlusApi
   */
  public create(dolbyDigitalPlusAudioConfiguration?: DolbyDigitalPlusAudioConfiguration): Promise<DolbyDigitalPlusAudioConfiguration> {
    return this.restClient.post<DolbyDigitalPlusAudioConfiguration>('/encoding/configurations/audio/dolby-digital-plus', {}, dolbyDigitalPlusAudioConfiguration).then((response) => {
      return map(response, DolbyDigitalPlusAudioConfiguration);
    });
  }

  /**
   * @summary Delete Dolby Digital Plus Codec Configuration
   * @param {string} configurationId Id of the codec configuration
   * @throws {BitmovinError}
   * @memberof DolbyDigitalPlusApi
   */
  public delete(configurationId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/configurations/audio/dolby-digital-plus/{configuration_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Dolby Digital Plus Codec Configuration Details
   * @param {string} configurationId Id of the codec configuration
   * @throws {BitmovinError}
   * @memberof DolbyDigitalPlusApi
   */
  public get(configurationId: string): Promise<DolbyDigitalPlusAudioConfiguration> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.get<DolbyDigitalPlusAudioConfiguration>('/encoding/configurations/audio/dolby-digital-plus/{configuration_id}', pathParamMap).then((response) => {
      return map(response, DolbyDigitalPlusAudioConfiguration);
    });
  }

  /**
   * @summary List Dolby Digital Plus Codec Configurations
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof DolbyDigitalPlusApi
   */
  public list(queryParameters?: DolbyDigitalPlusAudioConfigurationListQueryParams | ((q: DolbyDigitalPlusAudioConfigurationListQueryParamsBuilder) => DolbyDigitalPlusAudioConfigurationListQueryParamsBuilder)): Promise<PaginationResponse<DolbyDigitalPlusAudioConfiguration>> {
    let queryParams: DolbyDigitalPlusAudioConfigurationListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new DolbyDigitalPlusAudioConfigurationListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<DolbyDigitalPlusAudioConfiguration>>('/encoding/configurations/audio/dolby-digital-plus', {}, queryParams).then((response) => {
      return new PaginationResponse<DolbyDigitalPlusAudioConfiguration>(response, DolbyDigitalPlusAudioConfiguration);
    });
  }
}
