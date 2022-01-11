import {map, mapArray} from '../common/Mapper';
import MuxingType from './MuxingType';

/**
 * @export
 * @class MuxingTypeResponse
 */
export class MuxingTypeResponse {
  /**
   * The type of the Muxing
   * @type {MuxingType}
   * @memberof MuxingTypeResponse
   */
  public type?: MuxingType;

  constructor(obj?: Partial<MuxingTypeResponse>) {
    if(!obj) {
      return;
    }
    this.type = map(obj.type);
  }
}

export default MuxingTypeResponse;

