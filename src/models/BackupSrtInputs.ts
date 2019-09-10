import {map, mapArray} from '../common/Mapper';
import SrtInput from './SrtInput';

/**
 * @export
 * @class BackupSrtInputs
 */
export class BackupSrtInputs {
  /**
   * When there is no input signal present for this number of seconds, the encoder will switch to the next input
   * @type {number}
   * @memberof BackupSrtInputs
   */
  public delayThreshold?: number;

  /**
   * @type {SrtInput[]}
   * @memberof BackupSrtInputs
   */
  public srtInputs?: SrtInput[];

  constructor(obj?: Partial<BackupSrtInputs>) {
    if(!obj) {
      return;
    }
    this.delayThreshold = map(obj.delayThreshold);
    this.srtInputs = mapArray(obj.srtInputs, SrtInput);
  }
}

export default BackupSrtInputs;

