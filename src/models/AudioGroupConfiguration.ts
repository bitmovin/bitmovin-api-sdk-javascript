import {map} from '../common/Mapper';
import AudioGroup from './AudioGroup';
import VariantStreamDroppingMode from './VariantStreamDroppingMode';

/**
 * @export
 * @class AudioGroupConfiguration
 */
export class AudioGroupConfiguration {
  constructor(obj: any) {
    this.droppingMode = map(obj.droppingMode);
    this.groups = map<AudioGroup>(obj.groups, AudioGroup);
  }

  /**
   * Dropping mode (required)
   * @type {VariantStreamDroppingMode}
   * @memberof AudioGroupConfiguration
   */
  public droppingMode: VariantStreamDroppingMode;
  /**
   * Audio groups (required)
   * @type {Array<AudioGroup>}
   * @memberof AudioGroupConfiguration
   */
  public groups: Array<AudioGroup>;
}

export default AudioGroupConfiguration;

