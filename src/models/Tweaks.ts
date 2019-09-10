import {map, mapArray} from '../common/Mapper';
import AudioVideoSyncMode from './AudioVideoSyncMode';

/**
 * @export
 * @class Tweaks
 */
export class Tweaks {
  /**
   * Defines special audio video sync handling
   * @type {AudioVideoSyncMode}
   * @memberof Tweaks
   */
  public audioVideoSyncMode?: AudioVideoSyncMode;

  constructor(obj?: Partial<Tweaks>) {
    if(!obj) {
      return;
    }
    this.audioVideoSyncMode = map(obj.audioVideoSyncMode);
  }
}

export default Tweaks;

