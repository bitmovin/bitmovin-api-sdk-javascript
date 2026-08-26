import {map, mapArray} from '../common/Mapper';

/**
 * MSL5 publishing-side authentication. When enabled, the encoder sends HTTP Digest Authentication headers with every segment upload.  When `enabled` is `true`, `username` and `password` are required; the API rejects the request otherwise. When `enabled` is `false` (or this object is omitted), credentials are ignored. 
 * @export
 * @class MslPublishingAuthentication
 */
export class MslPublishingAuthentication {
  /**
   * Whether HTTP Digest publishing authentication is enabled. (required)
   * @type {boolean}
   * @memberof MslPublishingAuthentication
   */
  public enabled?: boolean;

  /**
   * HTTP Digest username for publishing MSL5 segments. Required when `enabled` is `true`. 
   * @type {string}
   * @memberof MslPublishingAuthentication
   */
  public username?: string;

  /**
   * HTTP Digest password for publishing MSL5 segments. Required when `enabled` is `true`. 
   * @type {string}
   * @memberof MslPublishingAuthentication
   */
  public password?: string;

  constructor(obj?: Partial<MslPublishingAuthentication>) {
    if(!obj) {
      return;
    }
    this.enabled = map(obj.enabled);
    this.username = map(obj.username);
    this.password = map(obj.password);
  }
}

export default MslPublishingAuthentication;

