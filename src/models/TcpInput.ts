import Input from './Input';
import InputType from './InputType';

/**
 * @export
 * @class TcpInput
 */
export class TcpInput extends Input {
  /**
   * Discriminator property for Input
   * @type {string}
   * @memberof TcpInput
   */
  public readonly type: InputType = InputType.TCP;

  constructor(obj?: Partial<TcpInput>) {
    super(obj);
    if(!obj) {
      return;
    }
  }
}

export default TcpInput;

