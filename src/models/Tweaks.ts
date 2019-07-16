import {map} from '../common/Mapper';
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

  constructor(obj: Partial<Tweaks>) {
    this.audioVideoSyncMode = map(obj.audioVideoSyncMode);
  }
}

export default Tweaks;

