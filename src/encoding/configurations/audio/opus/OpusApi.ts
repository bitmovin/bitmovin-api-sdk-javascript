import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import OpusAudioConfiguration from '../../../../models/OpusAudioConfiguration';
import PaginationResponse from '../../../../models/PaginationResponse';
import { OpusAudioConfigurationListQueryParams, OpusAudioConfigurationListQueryParamsBuilder } from './OpusAudioConfigurationListQueryParams';

/**
 * OpusApi - object-oriented interface
 * @export
 * @class OpusApi
 * @extends {BaseAPI}
 */
export default class OpusApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create Opus Codec Configuration
   * @param {OpusAudioConfiguration} opusAudioConfiguration The Opus Codec Configuration to be created
   * @throws {RequiredError}
   * @memberof OpusApi
   */
  public create(opusAudioConfiguration?: OpusAudioConfiguration): Promise<OpusAudioConfiguration> {
    return this.restClient.post<OpusAudioConfiguration>('/encoding/configurations/audio/opus', {}, opusAudioConfiguration).then((response) => {
      return new OpusAudioConfiguration(response);
    });
  }

  /**
   * @summary Delete Opus Codec Configuration
   * @param {string} configurationId Id of the codec configuration
   * @throws {RequiredError}
   * @memberof OpusApi
   */
  public delete(configurationId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/configurations/audio/opus/{configuration_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary Opus Codec Configuration Details
   * @param {string} configurationId Id of the codec configuration
   * @throws {RequiredError}
   * @memberof OpusApi
   */
  public get(configurationId: string): Promise<OpusAudioConfiguration> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.get<OpusAudioConfiguration>('/encoding/configurations/audio/opus/{configuration_id}', pathParamMap).then((response) => {
      return new OpusAudioConfiguration(response);
    });
  }

  /**
   * @summary List Opus Configurations
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof OpusApi
   */
  public list(queryParameters?: OpusAudioConfigurationListQueryParams | ((q: OpusAudioConfigurationListQueryParamsBuilder) => OpusAudioConfigurationListQueryParamsBuilder)): Promise<PaginationResponse<OpusAudioConfiguration>> {
    let queryParams: OpusAudioConfigurationListQueryParams = {};
    if (typeof queryParameters === 'function') {
        queryParams = queryParameters(new OpusAudioConfigurationListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
        queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<OpusAudioConfiguration>>('/encoding/configurations/audio/opus', {}, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<OpusAudioConfiguration>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new OpusAudioConfiguration(i));
      }
      return paginationResponse;
    });
  }
}
