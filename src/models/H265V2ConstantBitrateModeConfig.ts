import {map, mapArray} from '../common/Mapper';
import H265V2RateControlModeConfig from './H265V2RateControlModeConfig';
import H265V2RateControlModeConfigType from './H265V2RateControlModeConfigType';

/**
 * @export
 * @class H265V2ConstantBitrateModeConfig
 */
export class H265V2ConstantBitrateModeConfig extends H265V2RateControlModeConfig {
  /**
   * Discriminator property for H265V2RateControlModeConfig
   * @type {string}
   * @memberof H265V2ConstantBitrateModeConfig
   */
  public readonly type: H265V2RateControlModeConfigType = H265V2RateControlModeConfigType.CONSTANT_BITRATE_MODE;

  /**
   * Enable filler data for constant bitrate mode.
   * @type {boolean}
   * @memberof H265V2ConstantBitrateModeConfig
   */
  public fillerdata?: boolean;

  constructor(obj?: Partial<H265V2ConstantBitrateModeConfig>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.fillerdata = map(obj.fillerdata);
  }
}

export default H265V2ConstantBitrateModeConfig;

