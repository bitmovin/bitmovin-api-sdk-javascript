import {map, mapArray} from '../common/Mapper';
import AdaptationSetType from './AdaptationSetType';

/**
 * @export
 * @class AdaptationSetTypeResponse
 */
export class AdaptationSetTypeResponse {
  /**
   * The type of the adaptation set
   * @type {AdaptationSetType}
   * @memberof AdaptationSetTypeResponse
   */
  public type?: AdaptationSetType;

  constructor(obj?: Partial<AdaptationSetTypeResponse>) {
    if(!obj) {
      return;
    }
    this.type = map(obj.type);
  }
}

export default AdaptationSetTypeResponse;

