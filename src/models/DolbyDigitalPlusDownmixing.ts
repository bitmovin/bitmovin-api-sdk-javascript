import {map, mapArray} from '../common/Mapper';
import DolbyDigitalPlusCenterMixLevel from './DolbyDigitalPlusCenterMixLevel';
import DolbyDigitalPlusDownmixingPreferredMode from './DolbyDigitalPlusDownmixingPreferredMode';
import DolbyDigitalPlusSurroundMixLevel from './DolbyDigitalPlusSurroundMixLevel';

/**
 * Downmixing is used to reproduce the complete audio program when the actual decoder outputs do not match the encoded channel layout of the original audio signal.  The process of downmixing takes the information in the channels that do not have corresponding outputs, and mixes this information into the remaining channels. 
 * @export
 * @class DolbyDigitalPlusDownmixing
 */
export class DolbyDigitalPlusDownmixing {
  /**
   * The level shift applied to the C channel when adding to the L and R outputs as a result of downmixing to one Lo/Ro output.
   * @type {DolbyDigitalPlusCenterMixLevel}
   * @memberof DolbyDigitalPlusDownmixing
   */
  public loRoCenterMixLevel?: DolbyDigitalPlusCenterMixLevel;

  /**
   * The level shift applied to the C channel when adding to the L and R outputs as a result of downmixing to one Lt/Rt output.
   * @type {DolbyDigitalPlusCenterMixLevel}
   * @memberof DolbyDigitalPlusDownmixing
   */
  public ltRtCenterMixLevel?: DolbyDigitalPlusCenterMixLevel;

  /**
   * The level shift applied to the surround channels when downmixing to one Lo/Ro output.
   * @type {DolbyDigitalPlusSurroundMixLevel}
   * @memberof DolbyDigitalPlusDownmixing
   */
  public loRoSurroundMixLevel?: DolbyDigitalPlusSurroundMixLevel;

  /**
   * The level shift applied to the surround channels when downmixing to one Lt/Rt output.
   * @type {DolbyDigitalPlusSurroundMixLevel}
   * @memberof DolbyDigitalPlusDownmixing
   */
  public ltRtSurroundMixLevel?: DolbyDigitalPlusSurroundMixLevel;

  /**
   * @type {DolbyDigitalPlusDownmixingPreferredMode}
   * @memberof DolbyDigitalPlusDownmixing
   */
  public preferredMode?: DolbyDigitalPlusDownmixingPreferredMode;

  constructor(obj?: Partial<DolbyDigitalPlusDownmixing>) {
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

export default DolbyDigitalPlusDownmixing;

