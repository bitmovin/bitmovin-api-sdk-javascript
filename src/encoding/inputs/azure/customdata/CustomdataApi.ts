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
   * @summary Azure Custom Data
   * @param {string} inputId Id of the input
   * @throws {BitmovinError}
   * @memberof CustomdataApi
   */
  public get(inputId: string): Promise<CustomData> {
    const pathParamMap = {
      input_id: inputId
    };
    return this.restClient.get<CustomData>('/encoding/inputs/azure/{input_id}/customData', pathParamMap).then((response) => {
      return map(response, CustomData);
    });
  }
}
