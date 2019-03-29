import {map} from '../common/Mapper';
import AutoRepresentation from './AutoRepresentation';
import PerTitleConfiguration from './PerTitleConfiguration';
import PerTitleFixedResolutionAndBitrateConfiguration from './PerTitleFixedResolutionAndBitrateConfiguration';

/**
 * @export
 * @class Vp9PerTitleConfiguration
 */
export default class Vp9PerTitleConfiguration extends PerTitleConfiguration {
  constructor(obj: any) {
    super(obj);
    this.targetQualityCrf = map(obj.targetQualityCrf);
  }

  /**
   * Desired target quality of the highest representation expressed as CRF value
   * @type {number}
   * @memberof Vp9PerTitleConfiguration
   */
  public targetQualityCrf?: number;
}
