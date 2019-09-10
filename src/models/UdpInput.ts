import Input from './Input';
import InputType from './InputType';

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
  public type: InputType.UDP = InputType.UDP;

  constructor(obj?: Partial<UdpInput>) {
    super(obj);
    if(!obj) {
      return;
    }
  }
}

export default UdpInput;

