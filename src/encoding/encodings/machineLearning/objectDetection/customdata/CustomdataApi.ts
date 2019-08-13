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
   * @summary Get the custom data of an object detection configuration
   * @param {string} encodingId Id of the encoding
   * @param {string} objectDetectionId Id of the object detection configuration
   * @throws {RequiredError}
   * @memberof CustomdataApi
   */
  public get(encodingId: string, objectDetectionId: string): Promise<CustomData> {
    const pathParamMap = {
      encoding_id: encodingId,
      object_detection_id: objectDetectionId
    };
    return this.restClient.get<CustomData>('/encoding/encodings/{encoding_id}/machine-learning/object-detection/{object_detection_id}/customData', pathParamMap).then((response) => {
      return new CustomData(response);
    });
  }
}
