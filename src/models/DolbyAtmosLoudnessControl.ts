import {map, mapArray} from '../common/Mapper';
import DolbyAtmosDialogueIntelligence from './DolbyAtmosDialogueIntelligence';
import DolbyAtmosMeteringMode from './DolbyAtmosMeteringMode';

/**
 * @export
 * @class DolbyAtmosLoudnessControl
 */
export class DolbyAtmosLoudnessControl {
  /**
   * Algorithm to be used for measuring loudness. Recommended value is \"ITU_R_BS_1770_4\" (required)
   * @type {DolbyAtmosMeteringMode}
   * @memberof DolbyAtmosLoudnessControl
   */
  public meteringMode?: DolbyAtmosMeteringMode;

  /**
   * Whether to use the Dialogue Intelligence feature, which identifies and analyzes dialogue segments within audio as a basis for speech gating. Must not be \"DISABLED\" for meteringMode \"ITU-R BS.1770-1\" or \"Leq (A)\", otherwise recommended value is \"ENABLED\" (required)
   * @type {DolbyAtmosDialogueIntelligence}
   * @memberof DolbyAtmosLoudnessControl
   */
  public dialogueIntelligence?: DolbyAtmosDialogueIntelligence;

  /**
   * Specifies the percentage of speech that must be detected in the metered content before using the measured speech loudness as the overall program loudness. Given as an integer percentage between 0 and 100 (0% to 100%). Recommended value is 15 (required)
   * @type {number}
   * @memberof DolbyAtmosLoudnessControl
   */
  public speechThreshold?: number;

  constructor(obj?: Partial<DolbyAtmosLoudnessControl>) {
    if(!obj) {
      return;
    }
    this.meteringMode = map(obj.meteringMode);
    this.dialogueIntelligence = map(obj.dialogueIntelligence);
    this.speechThreshold = map(obj.speechThreshold);
  }
}

export default DolbyAtmosLoudnessControl;

