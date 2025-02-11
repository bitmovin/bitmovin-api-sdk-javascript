import {map, mapArray} from '../common/Mapper';
import AutoRepresentation from './AutoRepresentation';
import PerTitleConfiguration from './PerTitleConfiguration';
import PerTitleFixedResolutionAndBitrateConfiguration from './PerTitleFixedResolutionAndBitrateConfiguration';

/**
 * @export
 * @class Av1PerTitleConfiguration
 */
export class Av1PerTitleConfiguration extends PerTitleConfiguration {
  /**
   * Desired target quality of the highest representation expressed as CRF value
   * @type {number}
   * @memberof Av1PerTitleConfiguration
   */
  public targetQualityCrf?: number;

  constructor(obj?: Partial<Av1PerTitleConfiguration>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.targetQualityCrf = map(obj.targetQualityCrf);
  }
}

export default Av1PerTitleConfiguration;

