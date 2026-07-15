import {map, mapArray} from '../common/Mapper';
import H265V2PerceptualEncodingMode from './H265V2PerceptualEncodingMode';
import H265V2RateControlModeConfig from './H265V2RateControlModeConfig';
import H265V2RateControlModeConfigType from './H265V2RateControlModeConfigType';

/**
 * @export
 * @class H265V2PerceptualQualityModeConfig
 */
export class H265V2PerceptualQualityModeConfig extends H265V2RateControlModeConfig {
  /**
   * Discriminator property for H265V2RateControlModeConfig
   * @type {string}
   * @memberof H265V2PerceptualQualityModeConfig
   */
  public readonly type: H265V2RateControlModeConfigType = H265V2RateControlModeConfigType.PERCEPTUAL_QUALITY_MODE;

  /**
   * HVS-based perceptual encoding mode.
   * @type {H265V2PerceptualEncodingMode}
   * @memberof H265V2PerceptualQualityModeConfig
   */
  public perceptualEncodingMode?: H265V2PerceptualEncodingMode;

  /**
   * Overall strength of perceptual model (0.0-1.0).
   * @type {number}
   * @memberof H265V2PerceptualQualityModeConfig
   */
  public perceptualStrength?: number;

  /**
   * Strength of penalties from perceptual model (0.0-1.0).
   * @type {number}
   * @memberof H265V2PerceptualQualityModeConfig
   */
  public perceptualPenaltyStrength?: number;

  /**
   * Knee point of penalty strength modulation (0.0-1.0).
   * @type {number}
   * @memberof H265V2PerceptualQualityModeConfig
   */
  public perceptualPenaltyKnee?: number;

  /**
   * Strength of temporal component of perceptual model (0.0-1.0).
   * @type {number}
   * @memberof H265V2PerceptualQualityModeConfig
   */
  public perceptualTemporalStrength?: number;

  /**
   * Pixels per degree (horizontal), i.e. width / FOV.
   * @type {number}
   * @memberof H265V2PerceptualQualityModeConfig
   */
  public pixelPerDegree?: number;

  constructor(obj?: Partial<H265V2PerceptualQualityModeConfig>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.perceptualEncodingMode = map(obj.perceptualEncodingMode);
    this.perceptualStrength = map(obj.perceptualStrength);
    this.perceptualPenaltyStrength = map(obj.perceptualPenaltyStrength);
    this.perceptualPenaltyKnee = map(obj.perceptualPenaltyKnee);
    this.perceptualTemporalStrength = map(obj.perceptualTemporalStrength);
    this.pixelPerDegree = map(obj.pixelPerDegree);
  }
}

export default H265V2PerceptualQualityModeConfig;

