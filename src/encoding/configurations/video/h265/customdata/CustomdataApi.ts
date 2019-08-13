import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import CustomData from '../../../../../models/CustomData';
import {getType, map} from '../../../../../common/Mapper';

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
   * @summary H265/HEVC Codec Configuration Custom Data
   * @param {string} configurationId Id of the codec configuration
   * @throws {RequiredError}
   * @memberof CustomdataApi
   */
  public get(configurationId: string): Promise<CustomData> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.get<CustomData>('/encoding/configurations/video/h265/{configuration_id}/customData', pathParamMap).then((response) => {
      return new CustomData(response);
    });
  }
}
