import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import FilterTypeResponse from '../../../models/FilterTypeResponse';

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
   * @summary Get Filter Type
   * @param {string} filterId Id of the filter
   * @throws {BitmovinError}
   * @memberof TypeApi
   */
  public get(filterId: string): Promise<FilterTypeResponse> {
    const pathParamMap = {
      filter_id: filterId
    };
    return this.restClient.get<FilterTypeResponse>('/encoding/filters/{filter_id}/type', pathParamMap).then((response) => {
      return map(response, FilterTypeResponse);
    });
  }
}
