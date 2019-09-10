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
   * @summary Interlace Filter Custom Data
   * @param {string} filterId Id of the Interlace Filter
   * @throws {BitmovinError}
   * @memberof CustomdataApi
   */
  public get(filterId: string): Promise<CustomData> {
    const pathParamMap = {
      filter_id: filterId
    };
    return this.restClient.get<CustomData>('/encoding/filters/interlace/{filter_id}/customData', pathParamMap).then((response) => {
      return map(response, CustomData);
    });
  }
}
