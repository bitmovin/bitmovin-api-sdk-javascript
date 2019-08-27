import Input from './Input';

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
  public type: 'RTMP' = 'RTMP';

  constructor(obj: Partial<RtmpInput>) {
    super(obj);

  }
}

export default RtmpInput;

