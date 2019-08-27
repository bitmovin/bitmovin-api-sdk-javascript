import {map} from '../common/Mapper';
import AudioVolumeUnit from './AudioVolumeUnit';
import Filter from './Filter';

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
  public type: 'AUDIO_VOLUME' = 'AUDIO_VOLUME';

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

  constructor(obj: Partial<AudioVolumeFilter>) {
    super(obj);

    this.volume = obj.volume;
    this.unit = obj.unit;
  }
}

export default AudioVolumeFilter;

