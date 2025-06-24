import {map, mapArray} from '../common/Mapper';
import Input from './Input';
import InputType from './InputType';

/**
 * @export
 * @class HlsInput
 */
export class HlsInput extends Input {
  /**
   * Discriminator property for Input
   * @type {string}
   * @memberof HlsInput
   */
  public readonly type: InputType = InputType.HLS;

  /**
   * URL of HLS input
   * @type {string}
   * @memberof HlsInput
   */
  public url?: string;

  constructor(obj?: Partial<HlsInput>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.url = map(obj.url);
  }
}

export default HlsInput;

