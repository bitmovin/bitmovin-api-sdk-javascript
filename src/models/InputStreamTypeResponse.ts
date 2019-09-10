import {map, mapArray} from '../common/Mapper';
import InputStreamType from './InputStreamType';

/**
 * @export
 * @class InputStreamTypeResponse
 */
export class InputStreamTypeResponse {
  /**
   * The type of the input stream
   * @type {InputStreamType}
   * @memberof InputStreamTypeResponse
   */
  public type?: InputStreamType;

  constructor(obj?: Partial<InputStreamTypeResponse>) {
    if(!obj) {
      return;
    }
    this.type = map(obj.type);
  }
}

export default InputStreamTypeResponse;

