import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class InputFactorCodec
 */
export class InputFactorCodec {
  /**
   * @type {string}
   * @memberof InputFactorCodec
   */
  public value?: string;

  /**
   * @type {number}
   * @memberof InputFactorCodec
   */
  public factor?: number;

  constructor(obj?: Partial<InputFactorCodec>) {
    if(!obj) {
      return;
    }
    this.value = map(obj.value);
    this.factor = map(obj.factor);
  }
}

export default InputFactorCodec;

