import Input from './Input';
import InputType from './InputType';

/**
 * @export
 * @class RtmpInput
 */
export class RtmpInput extends Input {
  /**
   * Discriminator property for Input
   * @type {string}
   * @memberof RtmpInput
   */
  public readonly type: InputType = InputType.RTMP;

  constructor(obj?: Partial<RtmpInput>) {
    super(obj);
    if(!obj) {
      return;
    }
  }
}

export default RtmpInput;

