import {map, mapArray} from '../common/Mapper';
import InputType from './InputType';

/**
 * @export
 * @class InputTypeResponse
 */
export class InputTypeResponse {
  /**
   * The type of the input
   * @type {InputType}
   * @memberof InputTypeResponse
   */
  public type?: InputType;

  constructor(obj?: Partial<InputTypeResponse>) {
    if(!obj) {
      return;
    }
    this.type = map(obj.type);
  }
}

export default InputTypeResponse;

