import {map} from '../common/Mapper';
import CodecConfigType from './CodecConfigType';

/**
 * @export
 * @class CodecConfigTypeResponse
 */
export class CodecConfigTypeResponse {
  /**
   * The type of the codec config
   * @type {CodecConfigType}
   * @memberof CodecConfigTypeResponse
   */
  public type?: CodecConfigType;

  constructor(obj: Partial<CodecConfigTypeResponse>) {

    this.type = obj.type;
  }
}

export default CodecConfigTypeResponse;

