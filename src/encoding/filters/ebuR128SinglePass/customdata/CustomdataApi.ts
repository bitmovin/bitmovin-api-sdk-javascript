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
   * @summary EBU R128 Single Pass Filter Custom Data
   * @param {string} filterId Id of the EBU R128 Single Pass filter.
   * @throws {BitmovinError}
   * @memberof CustomdataApi
   */
  public get(filterId: string): Promise<CustomData> {
    const pathParamMap = {
      filter_id: filterId
    };
    return this.restClient.get<CustomData>('/encoding/filters/ebu-r128-single-pass/{filter_id}/customData', pathParamMap).then((response) => {
      return map(response, CustomData);
    });
  }
}
