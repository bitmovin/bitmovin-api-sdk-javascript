import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class ReprioritizeEncodingRequest
 */
export class ReprioritizeEncodingRequest {
  /**
   * Priority of the Encoding (required)
   * @type {number}
   * @memberof ReprioritizeEncodingRequest
   */
  public priority?: number;

  constructor(obj?: Partial<ReprioritizeEncodingRequest>) {
    if(!obj) {
      return;
    }
    this.priority = map(obj.priority);
  }
}

export default ReprioritizeEncodingRequest;

