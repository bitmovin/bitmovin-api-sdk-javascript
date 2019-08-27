import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import VorbisAudioConfiguration from '../../../../models/VorbisAudioConfiguration';
import PaginationResponse from '../../../../models/PaginationResponse';
import {VorbisAudioConfigurationListQueryParams, VorbisAudioConfigurationListQueryParamsBuilder} from './VorbisAudioConfigurationListQueryParams';

/**
 * VorbisApi - object-oriented interface
 * @export
 * @class VorbisApi
 * @extends {BaseAPI}
 */
export default class VorbisApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create Vorbis Codec Configuration
   * @param {VorbisAudioConfiguration} vorbisAudioConfiguration The Vorbis Codec Configuration to be created
   * @throws {RequiredError}
   * @memberof VorbisApi
   */
  public create(vorbisAudioConfiguration?: VorbisAudioConfiguration): Promise<VorbisAudioConfiguration> {
    return this.restClient.post<VorbisAudioConfiguration>('/encoding/configurations/audio/vorbis', {}, vorbisAudioConfiguration).then((response) => {
      return new VorbisAudioConfiguration(response);
    });
  }

  /**
   * @summary Delete Vorbis Codec Configuration
   * @param {string} configurationId Id of the codec configuration
   * @throws {RequiredError}
   * @memberof VorbisApi
   */
  public delete(configurationId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/configurations/audio/vorbis/{configuration_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary Vorbis Codec Configuration Details
   * @param {string} configurationId Id of the codec configuration
   * @throws {RequiredError}
   * @memberof VorbisApi
   */
  public get(configurationId: string): Promise<VorbisAudioConfiguration> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.get<VorbisAudioConfiguration>('/encoding/configurations/audio/vorbis/{configuration_id}', pathParamMap).then((response) => {
      return new VorbisAudioConfiguration(response);
    });
  }

  /**
   * @summary List Vorbis Configurations
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof VorbisApi
   */
  public list(queryParameters?: VorbisAudioConfigurationListQueryParams | ((q: VorbisAudioConfigurationListQueryParamsBuilder) => VorbisAudioConfigurationListQueryParamsBuilder)): Promise<PaginationResponse<VorbisAudioConfiguration>> {
    let queryParams: VorbisAudioConfigurationListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new VorbisAudioConfigurationListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<VorbisAudioConfiguration>>('/encoding/configurations/audio/vorbis', {}, queryParams).then((response) => {
      return new PaginationResponse<VorbisAudioConfiguration>(response, VorbisAudioConfiguration);;
    });
  }
}
