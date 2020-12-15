import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import DvbSubtitleConfiguration from '../../../../models/DvbSubtitleConfiguration';
import SubtitleConfiguration from '../../../../models/SubtitleConfiguration';
import PaginationResponse from '../../../../models/PaginationResponse';
import {DvbSubtitleConfigurationListQueryParams, DvbSubtitleConfigurationListQueryParamsBuilder} from './DvbSubtitleConfigurationListQueryParams';

/**
 * DvbSubtitleApi - object-oriented interface
 * @export
 * @class DvbSubtitleApi
 * @extends {BaseAPI}
 */
export default class DvbSubtitleApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create DVB-SUB subtitle configuration
   * @param {DvbSubtitleConfiguration} dvbSubtitleConfiguration The DVB-SUB subtitle configuration to be created
   * @throws {BitmovinError}
   * @memberof DvbSubtitleApi
   */
  public create(dvbSubtitleConfiguration?: DvbSubtitleConfiguration): Promise<DvbSubtitleConfiguration> {
    return this.restClient.post<DvbSubtitleConfiguration>('/encoding/configurations/subtitles/dvb-subtitle', {}, dvbSubtitleConfiguration).then((response) => {
      return map(response, DvbSubtitleConfiguration);
    });
  }

  /**
   * @summary Delete DVB-SUB subtitle configuration
   * @param {string} configurationId Id of the subtitle configuration
   * @throws {BitmovinError}
   * @memberof DvbSubtitleApi
   */
  public delete(configurationId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/configurations/subtitles/dvb-subtitle/{configuration_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary DVB-SUB subtitle configuration details
   * @param {string} configurationId Id of the codec configuration
   * @throws {BitmovinError}
   * @memberof DvbSubtitleApi
   */
  public get(configurationId: string): Promise<DvbSubtitleConfiguration> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.get<DvbSubtitleConfiguration>('/encoding/configurations/subtitles/dvb-subtitle/{configuration_id}', pathParamMap).then((response) => {
      return map(response, DvbSubtitleConfiguration);
    });
  }

  /**
   * @summary List DVB-SUB subtitle configurations
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof DvbSubtitleApi
   */
  public list(queryParameters?: DvbSubtitleConfigurationListQueryParams | ((q: DvbSubtitleConfigurationListQueryParamsBuilder) => DvbSubtitleConfigurationListQueryParamsBuilder)): Promise<PaginationResponse<DvbSubtitleConfiguration>> {
    let queryParams: DvbSubtitleConfigurationListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new DvbSubtitleConfigurationListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<DvbSubtitleConfiguration>>('/encoding/configurations/subtitles/dvb-subtitle', {}, queryParams).then((response) => {
      return new PaginationResponse<DvbSubtitleConfiguration>(response, DvbSubtitleConfiguration);
    });
  }
}
