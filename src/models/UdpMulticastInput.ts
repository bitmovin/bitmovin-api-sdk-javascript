import {map, mapArray} from '../common/Mapper';
import Input from './Input';
import InputType from './InputType';

/**
 * @export
 * @class UdpMulticastInput
 */
export class UdpMulticastInput extends Input {
  /**
   * Discriminator property for Input
   * @type {string}
   * @memberof UdpMulticastInput
   */
  public type: InputType.UDP_MULTICAST = InputType.UDP_MULTICAST;

  /**
   * Host name or IP address to use (required)
   * @type {string}
   * @memberof UdpMulticastInput
   */
  public host?: string;

  /**
   * Port to use (required)
   * @type {number}
   * @memberof UdpMulticastInput
   */
  public port?: number;

  constructor(obj?: Partial<UdpMulticastInput>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.host = map(obj.host);
    this.port = map(obj.port);
  }
}

export default UdpMulticastInput;

