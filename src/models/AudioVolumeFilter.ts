import {map, mapArray} from '../common/Mapper';
import AudioVolumeUnit from './AudioVolumeUnit';
import Filter from './Filter';
import FilterType from './FilterType';

/**
 * @export
 * @class AudioVolumeFilter
 */
export class AudioVolumeFilter extends Filter {
  /**
   * Discriminator property for Filter
   * @type {string}
   * @memberof AudioVolumeFilter
   */
  public type: FilterType.AUDIO_VOLUME = FilterType.AUDIO_VOLUME;

  /**
   * Audio volume value (required)
   * @type {number}
   * @memberof AudioVolumeFilter
   */
  public volume?: number;

  /**
   * @type {AudioVolumeUnit}
   * @memberof AudioVolumeFilter
   */
  public unit?: AudioVolumeUnit;

  constructor(obj?: Partial<AudioVolumeFilter>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.volume = map(obj.volume);
    this.unit = map(obj.unit);
  }
}

export default AudioVolumeFilter;

