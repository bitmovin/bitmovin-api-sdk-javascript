import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class StreamsContentProtectionResponse
 */
export class StreamsContentProtectionResponse {
  /**
   * The identifier of the streams content protection entity
   * @type {string}
   * @memberof StreamsContentProtectionResponse
   */
  public id?: string;

  /**
   * The list of allowed domains
   * @type {string[]}
   * @memberof StreamsContentProtectionResponse
   */
  public allowedDomains?: string[];

  /**
   * Controls if requests to content protected streams without referer header should be allowed or denied
   * @type {boolean}
   * @memberof StreamsContentProtectionResponse
   */
  public allowNoReferer?: boolean;

  constructor(obj?: Partial<StreamsContentProtectionResponse>) {
    if(!obj) {
      return;
    }
    this.id = map(obj.id);
    this.allowedDomains = mapArray(obj.allowedDomains);
    this.allowNoReferer = map(obj.allowNoReferer);
  }
}

export default StreamsContentProtectionResponse;

