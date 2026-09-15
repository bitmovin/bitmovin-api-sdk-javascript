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
   * Desired target quality of the highest representation expressed as a CRF value. If not set, it is derived from the content, starting from 34 for SDR content of at most FullHD and at most 30 fps; HFR (more than 30 fps) reduces it by 2; a resolution above FullHD reduces it by 2; HDR10 or HLG reduces it by 2; and Dolby Vision reduces it by 4 instead of the HDR10 reduction. These reductions are cumulative, so the lowest derived value is 26, for Dolby Vision 4K at 60 fps.
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

