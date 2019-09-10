import {map, mapArray} from '../common/Mapper';
import ResourceLimit from './ResourceLimit';
import ResourceType from './ResourceType';

/**
 * @export
 * @class ResourceLimitContainer
 */
export class ResourceLimitContainer {
  /**
   * @type {ResourceType}
   * @memberof ResourceLimitContainer
   */
  public resource?: ResourceType;

  /**
   * @type {ResourceLimit[]}
   * @memberof ResourceLimitContainer
   */
  public limits?: ResourceLimit[];

  constructor(obj?: Partial<ResourceLimitContainer>) {
    if(!obj) {
      return;
    }
    this.resource = map(obj.resource);
    this.limits = mapArray(obj.limits, ResourceLimit);
  }
}

export default ResourceLimitContainer;

