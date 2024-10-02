import AutoRepresentation from './AutoRepresentation';
import PerTitleConfiguration from './PerTitleConfiguration';
import PerTitleFixedResolutionAndBitrateConfiguration from './PerTitleFixedResolutionAndBitrateConfiguration';

/**
 * @export
 * @class Av1PerTitleConfiguration
 */
export class Av1PerTitleConfiguration extends PerTitleConfiguration {
  constructor(obj?: Partial<Av1PerTitleConfiguration>) {
    super(obj);
    if(!obj) {
      return;
    }
  }
}

export default Av1PerTitleConfiguration;

