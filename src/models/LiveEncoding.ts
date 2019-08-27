import {map} from '../common/Mapper';

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

  constructor(obj: Partial<LiveEncoding>) {

    this.streamKey = obj.streamKey;
    this.encoderIp = obj.encoderIp;
    this.application = obj.application;
  }
}

export default LiveEncoding;

