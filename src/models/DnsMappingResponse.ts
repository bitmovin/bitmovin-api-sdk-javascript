import {map, mapArray} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';

/**
 * @export
 * @class DnsMappingResponse
 */
export class DnsMappingResponse extends BitmovinResource {
  /**
   * Subdomain used for the DNS mapping
   * @type {string}
   * @memberof DnsMappingResponse
   */
  public subdomain?: string;

  /**
   * Resolved hostname for the DNS mapping
   * @type {string}
   * @memberof DnsMappingResponse
   */
  public hostname?: string;

  /**
   * ID of the encoding this DNS mapping belongs to
   * @type {string}
   * @memberof DnsMappingResponse
   */
  public encodingId?: string;

  /**
   * IP address that the hostname resolves to
   * @type {string}
   * @memberof DnsMappingResponse
   */
  public ip?: string;

  constructor(obj?: Partial<DnsMappingResponse>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.subdomain = map(obj.subdomain);
    this.hostname = map(obj.hostname);
    this.encodingId = map(obj.encodingId);
    this.ip = map(obj.ip);
  }
}

export default DnsMappingResponse;

