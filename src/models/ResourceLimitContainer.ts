import {map} from '../common/Mapper';
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

  constructor(obj: Partial<ResourceLimitContainer>) {

    this.resource = obj.resource;
    this.limits = map<ResourceLimit>(obj.limits, ResourceLimit) || [];
  }
}

export default ResourceLimitContainer;

