import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import {map, mapArray} from '../../common/Mapper';
import StreamsConfigResponse from '../../models/StreamsConfigResponse';
import StreamsConfigUpdateRequest from '../../models/StreamsConfigUpdateRequest';

/**
 * ConfigsApi - object-oriented interface
 * @export
 * @class ConfigsApi
 * @extends {BaseAPI}
 */
export default class ConfigsApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Update stream config by id
   * @param {string} configId Id of the stream config.
   * @param {StreamsConfigUpdateRequest} streamsConfigUpdateRequest The updated stream config object.
   * @throws {BitmovinError}
   * @memberof ConfigsApi
   */
  public patchStreamConfig(configId: string, streamsConfigUpdateRequest?: StreamsConfigUpdateRequest): Promise<StreamsConfigResponse> {
    const pathParamMap = {
      config_id: configId
    };
    return this.restClient.patch<StreamsConfigResponse>('/streams/configs/{config_id}', pathParamMap, streamsConfigUpdateRequest).then((response) => {
      return map(response, StreamsConfigResponse);
    });
  }
}
