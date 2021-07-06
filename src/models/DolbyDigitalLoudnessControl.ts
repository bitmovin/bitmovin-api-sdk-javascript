import {map, mapArray} from '../common/Mapper';
import DolbyDigitalDialogueIntelligence from './DolbyDigitalDialogueIntelligence';
import DolbyDigitalLoudnessControlMode from './DolbyDigitalLoudnessControlMode';
import DolbyDigitalLoudnessControlRegulationType from './DolbyDigitalLoudnessControlRegulationType';

/**
 * @export
 * @class DolbyDigitalLoudnessControl
 */
export class DolbyDigitalLoudnessControl {
  /**
   * Dialogue Normalization value to be set on the bitstream metadata. Required if the mode is `PASSTHROUGH`, or if the mode is `CORRECTION` and regulationType is `MANUAL`. For all other combinations dialnorm must not be set.
   * @type {number}
   * @memberof DolbyDigitalLoudnessControl
   */
  public dialnorm?: number;

  /**
   * This may only be set if the mode is `PASSTHROUGH`, or if the mode is `CORRECTION` and regulationType is `MANUAL`. For all other combinations dialogueIntelligence must not be set.
   * @type {DolbyDigitalDialogueIntelligence}
   * @memberof DolbyDigitalLoudnessControl
   */
  public dialogueIntelligence?: DolbyDigitalDialogueIntelligence;

  /**
   * @type {DolbyDigitalLoudnessControlMode}
   * @memberof DolbyDigitalLoudnessControl
   */
  public mode?: DolbyDigitalLoudnessControlMode;

  /**
   * The peak value in dB to use for loudness correction. This may only be set if the mode is `PASSTHROUGH`, or if the mode is `CORRECTION` and regulationType is `MANUAL`. For all other combinations peakLimit must not be set.
   * @type {number}
   * @memberof DolbyDigitalLoudnessControl
   */
  public peakLimit?: number;

  /**
   * This is only allowed if the mode is CORRECTION. <table> <tr><th colspan=4 align=\"left\"> Predefined values for each regulation type: </th></tr> <tr><td> Regulation Type </td><td> EBU R128 </td><td> ATSC A/85 Fixed </td><td> ATSC A/85 Agile</td></tr> <tr><td> Limit Mode </td><td> `True Peak` </td><td> `True Peak` </td><td> `True Peak` </td></tr> <tr><td> Correction Mode </td><td> `PCM Normalization` </td><td> `PCM Normalization` </td><td> `Metadata Update` </td></tr> <tr><td> Peak Limit </td><td> `–3 dBTP` </td><td> `–2 dBTP` </td><td> `N/A` </td></tr> <tr><td> Dialogue Intelligence </td><td> `Off` </td><td> `On` </td><td> `On` </td></tr> <tr><td> Meter Mode </td><td> `ITU-R BS.1770-3` </td><td> `ITU-R BS.1770-3` </td><td> `ITU-R BS.1770-3` </td></tr> <tr><td> Speech Threshold </td><td> `20` </td><td> `20` </td><td> `20` </td></tr> <tr><td> Dialogue Normalization </td><td> `-23 dB` </td><td> `-24 dB` </td><td> `Set to measured loudness` </td></tr> </table> 
   * @type {DolbyDigitalLoudnessControlRegulationType}
   * @memberof DolbyDigitalLoudnessControl
   */
  public regulationType?: DolbyDigitalLoudnessControlRegulationType;

  constructor(obj?: Partial<DolbyDigitalLoudnessControl>) {
    if(!obj) {
      return;
    }
    this.dialnorm = map(obj.dialnorm);
    this.dialogueIntelligence = map(obj.dialogueIntelligence);
    this.mode = map(obj.mode);
    this.peakLimit = map(obj.peakLimit);
    this.regulationType = map(obj.regulationType);
  }
}

export default DolbyDigitalLoudnessControl;

