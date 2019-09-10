import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import CodecConfigTypeResponse from '../../../models/CodecConfigTypeResponse';

/**
 * TypeApi - object-oriented interface
 * @export
 * @class TypeApi
 * @extends {BaseAPI}
 */
export default class TypeApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Get Codec Configuration Type
   * @param {string} configurationId Id of the codec configuration
   * @throws {BitmovinError}
   * @memberof TypeApi
   */
  public get(configurationId: string): Promise<CodecConfigTypeResponse> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.get<CodecConfigTypeResponse>('/encoding/configurations/{configuration_id}/type', pathParamMap).then((response) => {
      return map(response, CodecConfigTypeResponse);
    });
  }
}
