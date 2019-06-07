import {map} from '../common/Mapper';
import AudioVolumeUnit from './AudioVolumeUnit';
import Filter from './Filter';

/**
 * @export
 * @class AudioVolumeFilter
 */
export class AudioVolumeFilter extends Filter {
  constructor(obj: any) {
    super(obj);
    this.volume = map(obj.volume);
    this.unit = map(obj.unit);
  }

  /**
   * Audio volume value
   * @type {number}
   * @memberof AudioVolumeFilter
   */
  public volume: number;
  /**
   * @type {AudioVolumeUnit}
   * @memberof AudioVolumeFilter
   */
  public unit: AudioVolumeUnit;
}

export default AudioVolumeFilter;

