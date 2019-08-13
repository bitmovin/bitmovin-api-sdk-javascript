import {map} from '../common/Mapper';

/**
 * @export
 * @class ResourceLimit
 */
export class ResourceLimit {
  /**
   * @type {string}
   * @memberof ResourceLimit
   */
  public name: string;

  /**
   * @type {string}
   * @memberof ResourceLimit
   */
  public value: string;

  /**
   * Specifies the remaining limit value for limits divided to sub-organizations. This property is returned only for parent organizations and only for mentioned limits.
   * @type {string}
   * @memberof ResourceLimit
   */
  public effectiveValue?: string;

  constructor(obj: Partial<ResourceLimit>) {
    this.name = map(obj.name);
    this.value = map(obj.value);
    this.effectiveValue = map(obj.effectiveValue);
  }
}

export default ResourceLimit;

