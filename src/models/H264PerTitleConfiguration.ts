import {map} from '../common/Mapper';
import AutoRepresentation from './AutoRepresentation';
import PerTitleConfiguration from './PerTitleConfiguration';
import PerTitleFixedResolutionAndBitrateConfiguration from './PerTitleFixedResolutionAndBitrateConfiguration';

/**
 * @export
 * @class H264PerTitleConfiguration
 */
export class H264PerTitleConfiguration extends PerTitleConfiguration {
  /**
   * Desired target quality of the highest representation expressed as CRF value
   * @type {number}
   * @memberof H264PerTitleConfiguration
   */
  public targetQualityCrf?: number;

  /**
   * This factor is used to calculate the minBitrate of the codec configuration for the generated representations as a multiple of the targetBitrate
   * @type {number}
   * @memberof H264PerTitleConfiguration
   */
  public codecMinBitrateFactor?: number;

  /**
   * This factor is used to calculate the maxBitrate of the codec configuration for the generated representations as a multiple of the targetBitrate
   * @type {number}
   * @memberof H264PerTitleConfiguration
   */
  public codecMaxBitrateFactor?: number;

  /**
   * This factor is used to calculate the bufsize of the codec configuration for the generated representations as a multiple of the targetBitrate
   * @type {number}
   * @memberof H264PerTitleConfiguration
   */
  public codecBufsizeFactor?: number;

  constructor(obj: Partial<H264PerTitleConfiguration>) {
    super(obj);

    this.targetQualityCrf = obj.targetQualityCrf;
    this.codecMinBitrateFactor = obj.codecMinBitrateFactor;
    this.codecMaxBitrateFactor = obj.codecMaxBitrateFactor;
    this.codecBufsizeFactor = obj.codecBufsizeFactor;
  }
}

export default H264PerTitleConfiguration;

