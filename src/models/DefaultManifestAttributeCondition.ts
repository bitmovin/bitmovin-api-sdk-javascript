import {map, mapArray} from '../common/Mapper';
import ConditionOperator from './ConditionOperator';
import ConditionType from './ConditionType';
import DefaultManifestCondition from './DefaultManifestCondition';

/**
 * @export
 * @class DefaultManifestAttributeCondition
 */
export class DefaultManifestAttributeCondition extends DefaultManifestCondition {
  /**
   * Discriminator property for DefaultManifestCondition
   * @type {string}
   * @memberof DefaultManifestAttributeCondition
   */
  public readonly type: ConditionType = ConditionType.CONDITION;

  /**
   * The attribute that should be used for the evaluation: - audio.codec - audio.language - audio.bitrate - subtitle.format - subtitle.language - video.height - video.width - video.codec - video.bitrate - drm.type - muxing.type (required)
   * @type {string}
   * @memberof DefaultManifestAttributeCondition
   */
  public attribute?: string;

  /**
   * The operator that should be used for the evaluation (required)
   * @type {ConditionOperator}
   * @memberof DefaultManifestAttributeCondition
   */
  public operator?: ConditionOperator;

  /**
   * The value that should be used for comparison. Valid values depend on the attribute: - audio.codec (Enum; e.g., AAC, MP3, OPUS) - audio.language (String) - audio.bitrate (Integer) - subtitle.format (Enum; e.g., WEBVTT) - subtitle.language (String) - video.height (Integer) - video.width (Integer) - video.codec (Enum; e.g., AV1, H264, VP9) - video.bitrate (Integer) - drm.type (Enum; NoDrm, Cenc, CencWidevine, CencPlayReady, CencMarlin, CencFairPlay, Aes128, ClearKey, PrimeTime, Widevine, PlayReady, Marlin, FairPlay) - muxing.type (Enum; e.g., FMP4, MP4) (required)
   * @type {string}
   * @memberof DefaultManifestAttributeCondition
   */
  public value?: string;

  constructor(obj?: Partial<DefaultManifestAttributeCondition>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.attribute = map(obj.attribute);
    this.operator = map(obj.operator);
    this.value = map(obj.value);
  }
}

export default DefaultManifestAttributeCondition;

