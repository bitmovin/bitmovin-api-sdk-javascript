import {map, mapArray} from '../common/Mapper';
import DolbyDigitalCenterMixLevel from './DolbyDigitalCenterMixLevel';
import DolbyDigitalDownmixingPreferredMode from './DolbyDigitalDownmixingPreferredMode';
import DolbyDigitalSurroundMixLevel from './DolbyDigitalSurroundMixLevel';

/**
 * Downmixing is used to reproduce the complete audio program when the actual decoder outputs do not match the encoded channel layout of the original audio signal.  The process of downmixing takes the information in the channels that do not have corresponding outputs, and mixes this information into the remaining channels. 
 * @export
 * @class DolbyDigitalDownmixing
 */
export class DolbyDigitalDownmixing {
  /**
   * The level shift applied to the C channel when adding to the L and R outputs as a result of downmixing to one Lo/Ro output.
   * @type {DolbyDigitalCenterMixLevel}
   * @memberof DolbyDigitalDownmixing
   */
  public loRoCenterMixLevel?: DolbyDigitalCenterMixLevel;

  /**
   * The level shift applied to the C channel when adding to the L and R outputs as a result of downmixing to one Lt/Rt output.
   * @type {DolbyDigitalCenterMixLevel}
   * @memberof DolbyDigitalDownmixing
   */
  public ltRtCenterMixLevel?: DolbyDigitalCenterMixLevel;

  /**
   * The level shift applied to the surround channels when downmixing to one Lo/Ro output.
   * @type {DolbyDigitalSurroundMixLevel}
   * @memberof DolbyDigitalDownmixing
   */
  public loRoSurroundMixLevel?: DolbyDigitalSurroundMixLevel;

  /**
   * The level shift applied to the surround channels when downmixing to one Lt/Rt output.
   * @type {DolbyDigitalSurroundMixLevel}
   * @memberof DolbyDigitalDownmixing
   */
  public ltRtSurroundMixLevel?: DolbyDigitalSurroundMixLevel;

  /**
   * @type {DolbyDigitalDownmixingPreferredMode}
   * @memberof DolbyDigitalDownmixing
   */
  public preferredMode?: DolbyDigitalDownmixingPreferredMode;

  constructor(obj?: Partial<DolbyDigitalDownmixing>) {
    if(!obj) {
      return;
    }
    this.loRoCenterMixLevel = map(obj.loRoCenterMixLevel);
    this.ltRtCenterMixLevel = map(obj.ltRtCenterMixLevel);
    this.loRoSurroundMixLevel = map(obj.loRoSurroundMixLevel);
    this.ltRtSurroundMixLevel = map(obj.ltRtSurroundMixLevel);
    this.preferredMode = map(obj.preferredMode);
  }
}

export default DolbyDigitalDownmixing;

