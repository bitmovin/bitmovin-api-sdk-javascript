import AutoRepresentation from './AutoRepresentation';
import PerTitleConfiguration from './PerTitleConfiguration';
import PerTitleFixedResolutionAndBitrateConfiguration from './PerTitleFixedResolutionAndBitrateConfiguration';

/**
 * @export
 * @class Vp9PerTitleConfiguration
 */
export class Vp9PerTitleConfiguration extends PerTitleConfiguration {
  constructor(obj?: Partial<Vp9PerTitleConfiguration>) {
    super(obj);
    if(!obj) {
      return;
    }
  }
}

export default Vp9PerTitleConfiguration;

