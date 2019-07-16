import {map} from '../common/Mapper';

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
  public priority: number;

  constructor(obj: Partial<ReprioritizeEncodingRequest>) {
    this.priority = map(obj.priority);
  }
}

export default ReprioritizeEncodingRequest;

