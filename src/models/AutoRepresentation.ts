import {map} from '../common/Mapper';

/**
 * @export
 * @class AutoRepresentation
 */
export class AutoRepresentation {
  constructor(obj: any) {
    this.adoptConfigurationThreshold = map(obj.adoptConfigurationThreshold);
  }

  /**
   * This is the threshold if the settings of the lower or the upper representation (codec configuration) should be used, when representations are added automatically
   * @type {number}
   * @memberof AutoRepresentation
   */
  public adoptConfigurationThreshold?: number;
}

export default AutoRepresentation;

