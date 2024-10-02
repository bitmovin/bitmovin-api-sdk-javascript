import {map, mapArray} from '../common/Mapper';
import AutoRepresentation from './AutoRepresentation';
import PerTitleFixedResolutionAndBitrateConfiguration from './PerTitleFixedResolutionAndBitrateConfiguration';

/**
 * @export
 * @class PerTitleConfiguration
 */
export class PerTitleConfiguration {
  /**
   * The minimum bitrate that will be used by the Per-Title algorithm.
   * @type {number}
   * @memberof PerTitleConfiguration
   */
  public minBitrate?: number;

  /**
   * The maximum bitrate that will be used by the Per-Title algorithm. It will not generate any rendition with a higher bitrate.
   * @type {number}
   * @memberof PerTitleConfiguration
   */
  public maxBitrate?: number;

  /**
   * The minimum ratio between the bitrates of generated renditions, e.g. if the first bitrate is 240,000, a minimum ratio of 1.5 will require the next higher bitrate to be at least 360,000
   * @type {number}
   * @memberof PerTitleConfiguration
   */
  public minBitrateStepSize?: number;

  /**
   * The maximum ratio between the bitrates of neighbouring renditions, e.g., if the first bitrate is 240,000, a maximum ratio of 1.5 will require the next higher bitrate to be at most 360,000
   * @type {number}
   * @memberof PerTitleConfiguration
   */
  public maxBitrateStepSize?: number;

  /**
   * @type {AutoRepresentation}
   * @memberof PerTitleConfiguration
   */
  public autoRepresentations?: AutoRepresentation;

  /**
   * Will modify the assumed complexity for the Per-Title algorithm (> 0.0). Values higher than 1 will increase complexity and thus select smaller resolutions for given bitrates. This will also result in a higher bitrate for the top rendition. Values lower than 1 will decrease assumed complexity and thus select higher resolutions for given bitrates and also decrease the bitrate of the top rendition
   * @type {number}
   * @memberof PerTitleConfiguration
   */
  public complexityFactor?: number;

  /**
   * Additional configuration for fixed resolution and bitrate templates
   * @type {PerTitleFixedResolutionAndBitrateConfiguration}
   * @memberof PerTitleConfiguration
   */
  public fixedResolutionAndBitrateConfiguration?: PerTitleFixedResolutionAndBitrateConfiguration;

  /**
   * Desired target quality of the highest representation expressed as CRF value
   * @type {number}
   * @memberof PerTitleConfiguration
   */
  public targetQualityCrf?: number;

  /**
   * This factor influences the resolution selection of the per-title algorithm. The default value is 0.0. negative values will lead to results where the algorithm will choose lower resolutions for given bitrates. A positive value will result in higher resolutions to be selected. The range of the factor is -5.0 to +5.0. Please note that changing this factor might also lead to slightly different bitrate selection by the algorithm.
   * @type {number}
   * @memberof PerTitleConfiguration
   */
  public resolutionScaleFactor?: number;

  constructor(obj?: Partial<PerTitleConfiguration>) {
    if(!obj) {
      return;
    }
    this.minBitrate = map(obj.minBitrate);
    this.maxBitrate = map(obj.maxBitrate);
    this.minBitrateStepSize = map(obj.minBitrateStepSize);
    this.maxBitrateStepSize = map(obj.maxBitrateStepSize);
    this.autoRepresentations = map(obj.autoRepresentations, AutoRepresentation);
    this.complexityFactor = map(obj.complexityFactor);
    this.fixedResolutionAndBitrateConfiguration = map(obj.fixedResolutionAndBitrateConfiguration, PerTitleFixedResolutionAndBitrateConfiguration);
    this.targetQualityCrf = map(obj.targetQualityCrf);
    this.resolutionScaleFactor = map(obj.resolutionScaleFactor);
  }
}

export default PerTitleConfiguration;

