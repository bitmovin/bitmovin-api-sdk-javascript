import {map} from '../common/Mapper';
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

  constructor(obj: Partial<InputStreamTypeResponse>) {

    this.type = obj.type;
  }
}

export default InputStreamTypeResponse;

