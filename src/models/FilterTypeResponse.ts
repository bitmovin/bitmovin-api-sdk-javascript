import {map, mapArray} from '../common/Mapper';
import FilterType from './FilterType';

/**
 * @export
 * @class FilterTypeResponse
 */
export class FilterTypeResponse {
  /**
   * The type of the filter
   * @type {FilterType}
   * @memberof FilterTypeResponse
   */
  public type?: FilterType;

  constructor(obj?: Partial<FilterTypeResponse>) {
    if(!obj) {
      return;
    }
    this.type = map(obj.type);
  }
}

export default FilterTypeResponse;

