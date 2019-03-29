import {map} from '../common/Mapper';

/**
 * @export
 * @class LiveEncoding
 */
export default class LiveEncoding {
  constructor(obj: any) {
    this.streamKey = map(obj.streamKey);
    this.encoderIp = map(obj.encoderIp);
  }

  /**
   * Stream key of the live encoder
   * @type {string}
   * @memberof LiveEncoding
   */
  public streamKey: string;
  /**
   * IP address of the live encoder
   * @type {string}
   * @memberof LiveEncoding
   */
  public encoderIp: string;
}
