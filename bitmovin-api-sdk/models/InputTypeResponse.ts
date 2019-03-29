import {map} from '../common/Mapper';
import InputType from './InputType';

/**
 * @export
 * @class InputTypeResponse
 */
export default class InputTypeResponse {
  constructor(obj: any) {
    this.type = map(obj.type);
  }

  /**
   * The type of the input
   * @type {InputType}
   * @memberof InputTypeResponse
   */
  public type?: InputType;
}
