import Input from './Input';

/**
 * @export
 * @class UdpInput
 */
export class UdpInput extends Input {
  /**
   * Discriminator property for Input
   * @type {string}
   * @memberof UdpInput
   */
  public type: 'UDP' = 'UDP';

  constructor(obj: Partial<UdpInput>) {
    super(obj);

  }
}

export default UdpInput;

