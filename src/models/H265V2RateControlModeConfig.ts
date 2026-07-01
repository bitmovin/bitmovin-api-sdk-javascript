import {map, mapArray} from '../common/Mapper';
import H265V2ConstantBitrateModeConfig from './H265V2ConstantBitrateModeConfig';
import H265V2PerceptualQualityModeConfig from './H265V2PerceptualQualityModeConfig';
import H265V2RateControlModeConfigType from './H265V2RateControlModeConfigType';

export type H265V2RateControlModeConfigUnion =
  H265V2PerceptualQualityModeConfig |
  H265V2ConstantBitrateModeConfig;

/**
 * Rate control mode configuration. Use H265V2PerceptualQualityModeConfig for PQP mode or H265V2ConstantBitrateModeConfig for CBR mode.
 * @export
 * @class H265V2RateControlModeConfig
 */
export class H265V2RateControlModeConfig {
  protected static readonly _discriminatorName = 'type';
  protected static readonly _discriminatorMapping: { [key: string]: string; } = {
    "PERCEPTUAL_QUALITY_MODE": 'H265V2PerceptualQualityModeConfig',
    "CONSTANT_BITRATE_MODE": 'H265V2ConstantBitrateModeConfig'
  };

  /**
   * @type {H265V2RateControlModeConfigType}
   * @memberof H265V2RateControlModeConfig
   */
  public type?: H265V2RateControlModeConfigType;

  constructor(obj?: Partial<H265V2RateControlModeConfig>) {
    if(!obj) {
      return;
    }
    this.type = map(obj.type);
  }
}

export default H265V2RateControlModeConfig;

