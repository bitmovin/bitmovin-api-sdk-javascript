import {map} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';

/**
 * @export
 * @class Tenant
 */
export class Tenant extends BitmovinResource {
  constructor(obj: any) {
    super(obj);
    this.eMail = map(obj.eMail);
  }

  /**
   * Email address of the tenant. (required)
   * @type {string}
   * @memberof Tenant
   */
  public eMail: string;
}

export default Tenant;

