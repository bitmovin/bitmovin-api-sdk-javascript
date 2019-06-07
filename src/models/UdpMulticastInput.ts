import {map} from '../common/Mapper';
import Input from './Input';

/**
 * @export
 * @class UdpMulticastInput
 */
export class UdpMulticastInput extends Input {
  constructor(obj: any) {
    super(obj);
    this.host = map(obj.host);
    this.port = map(obj.port);
  }

  /**
   * Host name or IP address to use
   * @type {string}
   * @memberof UdpMulticastInput
   */
  public host: string;
  /**
   * Port to use
   * @type {number}
   * @memberof UdpMulticastInput
   */
  public port: number;
}

export default UdpMulticastInput;

