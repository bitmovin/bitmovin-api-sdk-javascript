import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class StreamsDomainRestrictionUpdateRequest
 */
export class StreamsDomainRestrictionUpdateRequest {
  /**
   * The list of allowed domains
   * @type {string[]}
   * @memberof StreamsDomainRestrictionUpdateRequest
   */
  public allowedDomains?: string[];

  /**
   * Controls if requests to domain restricted streams without referer header should be allowed or denied
   * @type {boolean}
   * @memberof StreamsDomainRestrictionUpdateRequest
   */
  public allowNoReferer?: boolean;

  /**
   * Controls if Stream is accessible via sharing URL or not
   * @type {boolean}
   * @memberof StreamsDomainRestrictionUpdateRequest
   */
  public allowShare?: boolean;

  constructor(obj?: Partial<StreamsDomainRestrictionUpdateRequest>) {
    if(!obj) {
      return;
    }
    this.allowedDomains = mapArray(obj.allowedDomains);
    this.allowNoReferer = map(obj.allowNoReferer);
    this.allowShare = map(obj.allowShare);
  }
}

export default StreamsDomainRestrictionUpdateRequest;

