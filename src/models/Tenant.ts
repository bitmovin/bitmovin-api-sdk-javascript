import {map} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';

/**
 * @export
 * @class Tenant
 */
export class Tenant extends BitmovinResource {
  /**
   * Email address of the tenant. (required)
   * @type {string}
   * @memberof Tenant
   */
  public eMail?: string;

  constructor(obj: Partial<Tenant>) {
    super(obj);

    this.eMail = obj.eMail;
  }
}

export default Tenant;

