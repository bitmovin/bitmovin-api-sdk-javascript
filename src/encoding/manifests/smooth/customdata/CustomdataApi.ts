import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import CustomData from '../../../../models/CustomData';

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
   * @summary Smooth Streaming Manifest Custom Data
   * @param {string} manifestId UUID of the Smooth Streaming manifest
   * @throws {BitmovinError}
   * @memberof CustomdataApi
   */
  public get(manifestId: string): Promise<CustomData> {
    const pathParamMap = {
      manifest_id: manifestId
    };
    return this.restClient.get<CustomData>('/encoding/manifests/smooth/{manifest_id}/customData', pathParamMap).then((response) => {
      return map(response, CustomData);
    });
  }
}
