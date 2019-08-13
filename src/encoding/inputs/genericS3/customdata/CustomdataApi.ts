import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import CustomData from '../../../../models/CustomData';
import {getType, map} from '../../../../common/Mapper';

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
   * @summary Generic S3 Input Custom Data
   * @param {string} inputId Id of the input
   * @throws {RequiredError}
   * @memberof CustomdataApi
   */
  public get(inputId: string): Promise<CustomData> {
    const pathParamMap = {
      input_id: inputId
    };
    return this.restClient.get<CustomData>('/encoding/inputs/generic-s3/{input_id}/customData', pathParamMap).then((response) => {
      return new CustomData(response);
    });
  }
}
