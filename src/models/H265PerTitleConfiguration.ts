import {map, mapArray} from '../common/Mapper';
import AutoRepresentation from './AutoRepresentation';
import PerTitleConfiguration from './PerTitleConfiguration';
import PerTitleFixedResolutionAndBitrateConfiguration from './PerTitleFixedResolutionAndBitrateConfiguration';

/**
 * @export
 * @class H265PerTitleConfiguration
 */
export class H265PerTitleConfiguration extends PerTitleConfiguration {
  /**
   * This factor is used to calculate the minBitrate of the codec configuration for the generated representations as a multiple of the targetBitrate
   * @type {number}
   * @memberof H265PerTitleConfiguration
   */
  public codecMinBitrateFactor?: number;

  /**
   * This factor is used to calculate the maxBitrate of the codec configuration for the generated representations as a multiple of the targetBitrate
   * @type {number}
   * @memberof H265PerTitleConfiguration
   */
  public codecMaxBitrateFactor?: number;

  /**
   * This factor is used to calculate the bufsize of the codec configuration for the generated representations as a multiple of the targetBitrate
   * @type {number}
   * @memberof H265PerTitleConfiguration
   */
  public codecBufsizeFactor?: number;

  /**
   * Desired target quality of the highest representation expressed as CRF value
   * @type {number}
   * @memberof H265PerTitleConfiguration
   */
  public targetQualityCrf?: number;

  constructor(obj?: Partial<H265PerTitleConfiguration>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.codecMinBitrateFactor = map(obj.codecMinBitrateFactor);
    this.codecMaxBitrateFactor = map(obj.codecMaxBitrateFactor);
    this.codecBufsizeFactor = map(obj.codecBufsizeFactor);
    this.targetQualityCrf = map(obj.targetQualityCrf);
  }
}

export default H265PerTitleConfiguration;

