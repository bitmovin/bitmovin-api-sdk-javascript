import {map, mapArray} from '../common/Mapper';
import DolbyLoudnessContentForm from './DolbyLoudnessContentForm';
import DolbyLoudnessDialogueIntelligence from './DolbyLoudnessDialogueIntelligence';
import Filter from './Filter';
import FilterType from './FilterType';

/**
 * @export
 * @class DolbyLoudnessFilter
 */
export class DolbyLoudnessFilter extends Filter {
  /**
   * Discriminator property for Filter
   * @type {string}
   * @memberof DolbyLoudnessFilter
   */
  public readonly type: FilterType = FilterType.DOLBY_LOUDNESS;

  /**
   * The target integrated loudness the audio should be corrected to. Range is from '-31' to '-8'. Default value is '-24'. Value is measured in LKFS (Loudness, K-weighted, relative to Full Scale).
   * @type {number}
   * @memberof DolbyLoudnessFilter
   */
  public targetLoudness?: number;

  /**
   * The maximum true-peak level the corrected audio may reach. Range is from '-8.0' to '-0.1'. Default value is '-2.0'. Values are measured in dBTP (dB True Peak). Note that the maximum true peak level must be set at least 6 dB above the target loudness.
   * @type {number}
   * @memberof DolbyLoudnessFilter
   */
  public maximumTruePeakLevel?: number;

  /**
   * Whether to use the Dolby Dialogue Intelligence feature, which identifies and analyzes dialogue segments within the audio as a basis for speech gating. Default value is 'ENABLED'.
   * @type {DolbyLoudnessDialogueIntelligence}
   * @memberof DolbyLoudnessFilter
   */
  public dialogueIntelligence?: DolbyLoudnessDialogueIntelligence;

  /**
   * The percentage of speech that must be detected within the audio before the dialogue loudness is used as the basis for loudness correction. Range is from '0' to '100'. Default value is '20'. This is only applied when dialogueIntelligence is 'ENABLED', as it selects between speech-gated and un-gated loudness measurement.
   * @type {number}
   * @memberof DolbyLoudnessFilter
   */
  public speechDetectionThreshold?: number;

  /**
   * The form of the content, used to optimize the loudness measurement gating. Content longer than 3 minutes (180 seconds) is considered long-form, shorter content is considered short-form. Default value is 'AUTO_DETECT'.
   * @type {DolbyLoudnessContentForm}
   * @memberof DolbyLoudnessFilter
   */
  public contentForm?: DolbyLoudnessContentForm;

  constructor(obj?: Partial<DolbyLoudnessFilter>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.targetLoudness = map(obj.targetLoudness);
    this.maximumTruePeakLevel = map(obj.maximumTruePeakLevel);
    this.dialogueIntelligence = map(obj.dialogueIntelligence);
    this.speechDetectionThreshold = map(obj.speechDetectionThreshold);
    this.contentForm = map(obj.contentForm);
  }
}

export default DolbyLoudnessFilter;

