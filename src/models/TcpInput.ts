import Input from './Input';

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
  public type: 'TCP' = 'TCP';

  constructor(obj: Partial<TcpInput>) {
    super(obj);

  }
}

export default TcpInput;

