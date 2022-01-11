import {map, mapArray} from '../common/Mapper';
import AudioVolumeFormat from './AudioVolumeFormat';
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
  public readonly type: FilterType = FilterType.AUDIO_VOLUME;

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

  /**
   * @type {AudioVolumeFormat}
   * @memberof AudioVolumeFilter
   */
  public format?: AudioVolumeFormat;

  constructor(obj?: Partial<AudioVolumeFilter>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.volume = map(obj.volume);
    this.unit = map(obj.unit);
    this.format = map(obj.format);
  }
}

export default AudioVolumeFilter;

