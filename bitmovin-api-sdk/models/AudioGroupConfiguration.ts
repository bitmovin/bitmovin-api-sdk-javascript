import {map} from '../common/Mapper';
import AudioGroup from './AudioGroup';
import VariantStreamDroppingMode from './VariantStreamDroppingMode';

/**
 * @export
 * @class AudioGroupConfiguration
 */
export default class AudioGroupConfiguration {
  constructor(obj: any) {
    this.droppingMode = map(obj.droppingMode);
    this.groups = map<AudioGroup>(obj.groups, AudioGroup);
  }

  /**
   * Dropping mode
   * @type {VariantStreamDroppingMode}
   * @memberof AudioGroupConfiguration
   */
  public droppingMode: VariantStreamDroppingMode;
  /**
   * Audio groups
   * @type {Array<AudioGroup>}
   * @memberof AudioGroupConfiguration
   */
  public groups: Array<AudioGroup>;
}
