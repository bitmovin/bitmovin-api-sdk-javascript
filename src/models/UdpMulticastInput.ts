import {map} from '../common/Mapper';
import Input from './Input';

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
  public type: 'UDP_MULTICAST' = 'UDP_MULTICAST';

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

  constructor(obj: Partial<UdpMulticastInput>) {
    super(obj);

    this.host = obj.host;
    this.port = obj.port;
  }
}

export default UdpMulticastInput;

