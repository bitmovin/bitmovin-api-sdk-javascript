import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class InputFactorBitrate
 */
export class InputFactorBitrate {
  /**
   * @type {number}
   * @memberof InputFactorBitrate
   */
  public value?: number;

  /**
   * @type {number}
   * @memberof InputFactorBitrate
   */
  public factor?: number;

  constructor(obj?: Partial<InputFactorBitrate>) {
    if(!obj) {
      return;
    }
    this.value = map(obj.value);
    this.factor = map(obj.factor);
  }
}

export default InputFactorBitrate;

