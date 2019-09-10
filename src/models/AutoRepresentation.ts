import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class AutoRepresentation
 */
export class AutoRepresentation {
  /**
   * This is the threshold if the settings of the lower or the upper representation (codec configuration) should be used, when representations are added automatically
   * @type {number}
   * @memberof AutoRepresentation
   */
  public adoptConfigurationThreshold?: number;

  constructor(obj?: Partial<AutoRepresentation>) {
    if(!obj) {
      return;
    }
    this.adoptConfigurationThreshold = map(obj.adoptConfigurationThreshold);
  }
}

export default AutoRepresentation;

