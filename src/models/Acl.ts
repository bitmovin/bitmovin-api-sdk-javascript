import {map} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';
import Permission from './Permission';
import Policy from './Policy';

/**
 * @export
 * @class Acl
 */
export class Acl extends BitmovinResource {
  constructor(obj: any) {
    super(obj);
    this.resource = map(obj.resource);
    this.policy = map(obj.policy);
    this.permissions = map(obj.permissions);
  }

  /**
   * Resource to define the permission for.
   * @type {string}
   * @memberof Acl
   */
  public resource: string;
  /**
   * @type {Policy}
   * @memberof Acl
   */
  public policy: Policy;
  /**
   * Permissions to assign.
   * @type {Array<Permission>}
   * @memberof Acl
   */
  public permissions: Array<Permission>;
}

export default Acl;

