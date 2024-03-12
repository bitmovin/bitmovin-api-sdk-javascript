import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class StreamsDomainRestrictionResponse
 */
export class StreamsDomainRestrictionResponse {
  /**
   * The identifier of the streams domain restriction entity
   * @type {string}
   * @memberof StreamsDomainRestrictionResponse
   */
  public id?: string;

  /**
   * The list of allowed domains
   * @type {string[]}
   * @memberof StreamsDomainRestrictionResponse
   */
  public allowedDomains?: string[];

  /**
   * Controls if requests to domain restricted streams without referer header should be allowed or denied
   * @type {boolean}
   * @memberof StreamsDomainRestrictionResponse
   */
  public allowNoReferer?: boolean;

  /**
   * Controls if Stream is accessible via sharing URL or not
   * @type {boolean}
   * @memberof StreamsDomainRestrictionResponse
   */
  public allowShare?: boolean;

  constructor(obj?: Partial<StreamsDomainRestrictionResponse>) {
    if(!obj) {
      return;
    }
    this.id = map(obj.id);
    this.allowedDomains = mapArray(obj.allowedDomains);
    this.allowNoReferer = map(obj.allowNoReferer);
    this.allowShare = map(obj.allowShare);
  }
}

export default StreamsDomainRestrictionResponse;

