import {map} from '../common/Mapper';
import PerTitleFixedResolutionAndBitrateConfigurationMode from './PerTitleFixedResolutionAndBitrateConfigurationMode';

/**
 * @export
 * @class PerTitleFixedResolutionAndBitrateConfiguration
 */
export default class PerTitleFixedResolutionAndBitrateConfiguration {
  constructor(obj: any) {
    this.forcedRenditionAboveHighestFixedRepresentation = map(obj.forcedRenditionAboveHighestFixedRepresentation);
    this.forcedRenditionAboveHighestFixedRepresentationFactor = map(obj.forcedRenditionAboveHighestFixedRepresentationFactor);
    this.forcedRenditionAboveHighestFixedRepresentationCalculationMode = map(obj.forcedRenditionAboveHighestFixedRepresentationCalculationMode);
  }

  /**
   * Number of forced renditions above the highest fixed representation (e.g. FIXED_RESOLUTION_AND_BITRATE). Forced renditions will be added, also if the Per-Title algorithm chooses the user defined force rendition to be the highest one.
   * @type {number}
   * @memberof PerTitleFixedResolutionAndBitrateConfiguration
   */
  public forcedRenditionAboveHighestFixedRepresentation?: number;
  /**
   * The factor to calculate the bitrate that will be chosen based on the bitrate of the last FIXED_RESOLUTION.
   * @type {number}
   * @memberof PerTitleFixedResolutionAndBitrateConfiguration
   */
  public forcedRenditionAboveHighestFixedRepresentationFactor?: number;
  /**
   * Mode to calculate the bitrate of the next representation
   * @type {PerTitleFixedResolutionAndBitrateConfigurationMode}
   * @memberof PerTitleFixedResolutionAndBitrateConfiguration
   */
  public forcedRenditionAboveHighestFixedRepresentationCalculationMode?: PerTitleFixedResolutionAndBitrateConfigurationMode;
}
