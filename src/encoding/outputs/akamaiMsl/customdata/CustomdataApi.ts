import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
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
   * @summary Akamai MSL Output Custom Data
   * @param {string} outputId Id of the output
   * @throws {RequiredError}
   * @memberof CustomdataApi
   */
  public get(outputId: string): Promise<CustomData> {
    const pathParamMap = {
      output_id: outputId
    };
    return this.restClient.get<CustomData>('/encoding/outputs/akamai-msl/{output_id}/customData', pathParamMap).then((response) => {
      return new CustomData(response);
    });
  }
}
