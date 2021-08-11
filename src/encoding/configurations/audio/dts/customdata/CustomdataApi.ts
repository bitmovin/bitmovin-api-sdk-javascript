import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import {map, mapArray} from '../../../../../common/Mapper';
import CustomData from '../../../../../models/CustomData';

/**
 * CustomdataApi - object-oriented interface
 * @export
 * @class CustomdataApi
 * @extends {BaseAPI}
 */
export default class CustomdataApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary DTS Codec Configuration Custom Data
   * @param {string} configurationId Id of the codec configuration
   * @throws {BitmovinError}
   * @memberof CustomdataApi
   */
  public get(configurationId: string): Promise<CustomData> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.get<CustomData>('/encoding/configurations/audio/dts/{configuration_id}/customData', pathParamMap).then((response) => {
      return map(response, CustomData);
    });
  }
}
