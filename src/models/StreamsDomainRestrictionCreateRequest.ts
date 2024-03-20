import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class StreamsDomainRestrictionCreateRequest
 */
export class StreamsDomainRestrictionCreateRequest {
  /**
   * The list of allowed domains (required)
   * @type {string[]}
   * @memberof StreamsDomainRestrictionCreateRequest
   */
  public allowedDomains?: string[];

  /**
   * Controls if requests to domain restricted streams without referer header should be allowed or denied
   * @type {boolean}
   * @memberof StreamsDomainRestrictionCreateRequest
   */
  public allowNoReferer?: boolean;

  /**
   * Controls if Stream is accessible via sharing URL or not
   * @type {boolean}
   * @memberof StreamsDomainRestrictionCreateRequest
   */
  public allowShare?: boolean;

  constructor(obj?: Partial<StreamsDomainRestrictionCreateRequest>) {
    if(!obj) {
      return;
    }
    this.allowedDomains = mapArray(obj.allowedDomains);
    this.allowNoReferer = map(obj.allowNoReferer);
    this.allowShare = map(obj.allowShare);
  }
}

export default StreamsDomainRestrictionCreateRequest;

