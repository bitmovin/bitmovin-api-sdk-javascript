import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class DnsMappingRequest
 */
export class DnsMappingRequest {
  /**
   * Subdomain used for the DNS mapping. It can only contain lowercase letters, numbers and dashes (-). It can be at most 63 characters long (required)
   * @type {string}
   * @memberof DnsMappingRequest
   */
  public subdomain?: string;

  /**
   * Optional name for the DNS mapping
   * @type {string}
   * @memberof DnsMappingRequest
   */
  public name?: string;

  /**
   * Optional description for the DNS mapping
   * @type {string}
   * @memberof DnsMappingRequest
   */
  public description?: string;

  constructor(obj?: Partial<DnsMappingRequest>) {
    if(!obj) {
      return;
    }
    this.subdomain = map(obj.subdomain);
    this.name = map(obj.name);
    this.description = map(obj.description);
  }
}

export default DnsMappingRequest;

