import {map} from '../common/Mapper';
import FilterType from './FilterType';

/**
 * @export
 * @class FilterTypeResponse
 */
export class FilterTypeResponse {
  constructor(obj: any) {
    this.type = map(obj.type);
  }

  /**
   * The type of the filter
   * @type {FilterType}
   * @memberof FilterTypeResponse
   */
  public type?: FilterType;
}

export default FilterTypeResponse;

