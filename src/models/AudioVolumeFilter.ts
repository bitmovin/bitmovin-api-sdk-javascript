import {map} from '../common/Mapper';
import AudioVolumeUnit from './AudioVolumeUnit';
import Filter from './Filter';

/**
 * @export
 * @class AudioVolumeFilter
 */
export class AudioVolumeFilter extends Filter {
  /**
   * Audio volume value (required)
   * @type {number}
   * @memberof AudioVolumeFilter
   */
  public volume: number;

  /**
   * @type {AudioVolumeUnit}
   * @memberof AudioVolumeFilter
   */
  public unit: AudioVolumeUnit;

  constructor(obj: Partial<AudioVolumeFilter>) {
    super(obj);
    this.volume = map(obj.volume);
    this.unit = map(obj.unit);
  }
}

export default AudioVolumeFilter;

