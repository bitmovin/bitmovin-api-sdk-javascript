import {map, mapArray} from '../common/Mapper';
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
  public droppingMode?: VariantStreamDroppingMode;

  /**
   * Audio groups (required)
   * @type {AudioGroup[]}
   * @memberof AudioGroupConfiguration
   */
  public groups?: AudioGroup[];

  constructor(obj?: Partial<AudioGroupConfiguration>) {
    if(!obj) {
      return;
    }
    this.droppingMode = map(obj.droppingMode);
    this.groups = mapArray(obj.groups, AudioGroup);
  }
}

export default AudioGroupConfiguration;

