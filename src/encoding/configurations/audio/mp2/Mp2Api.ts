import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import Mp2AudioConfiguration from '../../../../models/Mp2AudioConfiguration';

/**
 * Mp2Api - object-oriented interface
 * @export
 * @class Mp2Api
 * @extends {BaseAPI}
 */
export default class Mp2Api extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create MP2 Codec Configuration
   * @param {Mp2AudioConfiguration} mp2AudioConfiguration The MP2 Codec Configuration to be created
   * @throws {BitmovinError}
   * @memberof Mp2Api
   */
  public create(mp2AudioConfiguration?: Mp2AudioConfiguration): Promise<Mp2AudioConfiguration> {
    return this.restClient.post<Mp2AudioConfiguration>('/encoding/configurations/audio/mp2', {}, mp2AudioConfiguration).then((response) => {
      return map(response, Mp2AudioConfiguration);
    });
  }

  /**
   * @summary Delete MP2 Codec Configuration
   * @param {string} configurationId Id of the codec configuration
   * @throws {BitmovinError}
   * @memberof Mp2Api
   */
  public delete(configurationId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/configurations/audio/mp2/{configuration_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary MP2 Codec Configuration Details
   * @param {string} configurationId Id of the codec configuration
   * @throws {BitmovinError}
   * @memberof Mp2Api
   */
  public get(configurationId: string): Promise<Mp2AudioConfiguration> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.get<Mp2AudioConfiguration>('/encoding/configurations/audio/mp2/{configuration_id}', pathParamMap).then((response) => {
      return map(response, Mp2AudioConfiguration);
    });
  }
}
