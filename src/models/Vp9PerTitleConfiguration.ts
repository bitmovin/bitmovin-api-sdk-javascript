import {map, mapArray} from '../common/Mapper';
import AutoRepresentation from './AutoRepresentation';
import PerTitleConfiguration from './PerTitleConfiguration';
import PerTitleFixedResolutionAndBitrateConfiguration from './PerTitleFixedResolutionAndBitrateConfiguration';

/**
 * @export
 * @class Vp9PerTitleConfiguration
 */
export class Vp9PerTitleConfiguration extends PerTitleConfiguration {
  /**
   * Desired target quality of the highest representation expressed as CRF value
   * @type {number}
   * @memberof Vp9PerTitleConfiguration
   */
  public targetQualityCrf?: number;

  constructor(obj?: Partial<Vp9PerTitleConfiguration>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.targetQualityCrf = map(obj.targetQualityCrf);
  }
}

export default Vp9PerTitleConfiguration;

