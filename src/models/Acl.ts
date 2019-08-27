import {map} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';
import Permission from './Permission';
import Policy from './Policy';

/**
 * @export
 * @class Acl
 */
export class Acl extends BitmovinResource {
  /**
   * Resource to define the permission for. (required)
   * @type {string}
   * @memberof Acl
   */
  public resource?: string;

  /**
   * @type {Policy}
   * @memberof Acl
   */
  public policy?: Policy;

  /**
   * Permissions to assign. (required)
   * @type {Permission[]}
   * @memberof Acl
   */
  public permissions?: Permission[];

  constructor(obj: Partial<Acl>) {
    super(obj);

    this.resource = obj.resource;
    this.policy = obj.policy;
    this.permissions = obj.permissions || [];
  }
}

export default Acl;

