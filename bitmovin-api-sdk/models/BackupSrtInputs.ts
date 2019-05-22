import {map} from '../common/Mapper';
import SrtInput from './SrtInput';

/**
 * @export
 * @class BackupSrtInputs
 */
export default class BackupSrtInputs {
  constructor(obj: any) {
    this.delayThreshold = map(obj.delayThreshold);
    this.srtInputs = map<SrtInput>(obj.srtInputs, SrtInput);
  }

  /**
   * When there is no input signal present for this number of seconds, the encoder will switch to the next input
   * @type {number}
   * @memberof BackupSrtInputs
   */
  public delayThreshold?: number;
  /**
   * @type {Array<SrtInput>}
   * @memberof BackupSrtInputs
   */
  public srtInputs: Array<SrtInput>;
}
