import {map} from '../common/Mapper';
import AudioGroup from './AudioGroup';
import VariantStreamDroppingMode from './VariantStreamDroppingMode';

/**
 * @export
 * @class AudioGroupConfiguration
 */
export class AudioGroupConfiguration {
  /**
   * Dropping mode (required)
   * @type {VariantStreamDroppingMode}
   * @memberof AudioGroupConfiguration
   */
  public droppingMode: VariantStreamDroppingMode;

  /**
   * Audio groups (required)
   * @type {AudioGroup[]}
   * @memberof AudioGroupConfiguration
   */
  public groups: AudioGroup[];

  constructor(obj: Partial<AudioGroupConfiguration>) {
    this.droppingMode = map(obj.droppingMode);
    this.groups = map<AudioGroup>(obj.groups, AudioGroup);
  }
}

export default AudioGroupConfiguration;

