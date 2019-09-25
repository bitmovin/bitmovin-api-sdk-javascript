import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import FilterType from '../../../models/FilterType';

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
  public get(filterId: string): Promise<FilterType> {
    const pathParamMap = {
      filter_id: filterId
    };
    return this.restClient.get<FilterType>('/encoding/filters/{filter_id}/type', pathParamMap).then((response) => {
      return map(response);
    });
  }
}
