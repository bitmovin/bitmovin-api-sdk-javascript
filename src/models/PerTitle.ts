import {map} from '../common/Mapper';
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

  constructor(obj: Partial<PerTitle>) {

    this.h264Configuration = map<H264PerTitleConfiguration>(obj.h264Configuration, H264PerTitleConfiguration);
    this.h265Configuration = map<H265PerTitleConfiguration>(obj.h265Configuration, H265PerTitleConfiguration);
    this.vp9Configuration = map<Vp9PerTitleConfiguration>(obj.vp9Configuration, Vp9PerTitleConfiguration);
  }
}

export default PerTitle;

