import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import DolbyAtmosAudioConfiguration from '../../../../models/DolbyAtmosAudioConfiguration';
import PaginationResponse from '../../../../models/PaginationResponse';
import {DolbyAtmosAudioConfigurationListQueryParams, DolbyAtmosAudioConfigurationListQueryParamsBuilder} from './DolbyAtmosAudioConfigurationListQueryParams';

/**
 * DolbyAtmosApi - object-oriented interface
 * @export
 * @class DolbyAtmosApi
 * @extends {BaseAPI}
 */
export default class DolbyAtmosApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create Dolby Atmos Configuration
   * @param {DolbyAtmosAudioConfiguration} dolbyAtmosAudioConfiguration The Dolby Atmos Codec Configuration to be created
   * @throws {BitmovinError}
   * @memberof DolbyAtmosApi
   */
  public create(dolbyAtmosAudioConfiguration?: DolbyAtmosAudioConfiguration): Promise<DolbyAtmosAudioConfiguration> {
    return this.restClient.post<DolbyAtmosAudioConfiguration>('/encoding/configurations/audio/dolby-atmos', {}, dolbyAtmosAudioConfiguration).then((response) => {
      return map(response, DolbyAtmosAudioConfiguration);
    });
  }

  /**
   * @summary Delete Dolby Atmos Codec Configuration
   * @param {string} configurationId Id of the codec configuration
   * @throws {BitmovinError}
   * @memberof DolbyAtmosApi
   */
  public delete(configurationId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/configurations/audio/dolby-atmos/{configuration_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Dolby Atmos Codec Configuration Details
   * @param {string} configurationId Id of the codec configuration
   * @throws {BitmovinError}
   * @memberof DolbyAtmosApi
   */
  public get(configurationId: string): Promise<DolbyAtmosAudioConfiguration> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.get<DolbyAtmosAudioConfiguration>('/encoding/configurations/audio/dolby-atmos/{configuration_id}', pathParamMap).then((response) => {
      return map(response, DolbyAtmosAudioConfiguration);
    });
  }

  /**
   * @summary List Dolby Atmos Configurations
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof DolbyAtmosApi
   */
  public list(queryParameters?: DolbyAtmosAudioConfigurationListQueryParams | ((q: DolbyAtmosAudioConfigurationListQueryParamsBuilder) => DolbyAtmosAudioConfigurationListQueryParamsBuilder)): Promise<PaginationResponse<DolbyAtmosAudioConfiguration>> {
    let queryParams: DolbyAtmosAudioConfigurationListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new DolbyAtmosAudioConfigurationListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<DolbyAtmosAudioConfiguration>>('/encoding/configurations/audio/dolby-atmos', {}, queryParams).then((response) => {
      return new PaginationResponse<DolbyAtmosAudioConfiguration>(response, DolbyAtmosAudioConfiguration);
    });
  }
}
