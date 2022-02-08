import {map, mapArray} from '../common/Mapper';
import Av1PerTitleConfiguration from './Av1PerTitleConfiguration';
import H264PerTitleConfiguration from './H264PerTitleConfiguration';
import H265PerTitleConfiguration from './H265PerTitleConfiguration';
import Vp9PerTitleConfiguration from './Vp9PerTitleConfiguration';

/**
 * @export
 * @class PerTitle
 */
export class PerTitle {
  /**
   * Per-Title configuration for H264
   * @type {H264PerTitleConfiguration}
   * @memberof PerTitle
   */
  public h264Configuration?: H264PerTitleConfiguration;

  /**
   * Per-Title configuration for H265
   * @type {H265PerTitleConfiguration}
   * @memberof PerTitle
   */
  public h265Configuration?: H265PerTitleConfiguration;

  /**
   * Per-Title configuration for VP9
   * @type {Vp9PerTitleConfiguration}
   * @memberof PerTitle
   */
  public vp9Configuration?: Vp9PerTitleConfiguration;

  /**
   * Per-Title configuration for AV1
   * @type {Av1PerTitleConfiguration}
   * @memberof PerTitle
   */
  public av1Configuration?: Av1PerTitleConfiguration;

  constructor(obj?: Partial<PerTitle>) {
    if(!obj) {
      return;
    }
    this.h264Configuration = map(obj.h264Configuration, H264PerTitleConfiguration);
    this.h265Configuration = map(obj.h265Configuration, H265PerTitleConfiguration);
    this.vp9Configuration = map(obj.vp9Configuration, Vp9PerTitleConfiguration);
    this.av1Configuration = map(obj.av1Configuration, Av1PerTitleConfiguration);
  }
}

export default PerTitle;

