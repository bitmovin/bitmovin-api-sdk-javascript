import {map, mapArray} from '../common/Mapper';
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
   * HVS-based perceptual encoding mode (0:off 1:cudqp 2:+quant).
   * @type {number}
   * @memberof H265V2PerceptualQualityModeConfig
   */
  public percept?: number;

  /**
   * Overall strength of perceptual model (0.0-1.0).
   * @type {number}
   * @memberof H265V2PerceptualQualityModeConfig
   */
  public percStr?: number;

  /**
   * Strength of penalties from perceptual model (0.0-1.0).
   * @type {number}
   * @memberof H265V2PerceptualQualityModeConfig
   */
  public percPenaltyStr?: number;

  /**
   * Knee point of penalty strength modulation (0.0-1.0).
   * @type {number}
   * @memberof H265V2PerceptualQualityModeConfig
   */
  public percPenaltyKnee?: number;

  /**
   * Strength of temporal component of perceptual model (0.0-1.0).
   * @type {number}
   * @memberof H265V2PerceptualQualityModeConfig
   */
  public percTemporalStr?: number;

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
    this.percept = map(obj.percept);
    this.percStr = map(obj.percStr);
    this.percPenaltyStr = map(obj.percPenaltyStr);
    this.percPenaltyKnee = map(obj.percPenaltyKnee);
    this.percTemporalStr = map(obj.percTemporalStr);
    this.pixelPerDegree = map(obj.pixelPerDegree);
  }
}

export default H265V2PerceptualQualityModeConfig;

