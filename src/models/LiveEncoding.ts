import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class LiveEncoding
 */
export class LiveEncoding {
  /**
   * Stream key of the live encoder (required)
   * @type {string}
   * @memberof LiveEncoding
   */
  public streamKey?: string;

  /**
   * IP address of the live encoder (required)
   * @type {string}
   * @memberof LiveEncoding
   */
  public encoderIp?: string;

  /**
   * This will indicate the application 'live'
   * @type {string}
   * @memberof LiveEncoding
   */
  public application?: string;

  constructor(obj?: Partial<LiveEncoding>) {
    if(!obj) {
      return;
    }
    this.streamKey = map(obj.streamKey);
    this.encoderIp = map(obj.encoderIp);
    this.application = map(obj.application);
  }
}

export default LiveEncoding;

