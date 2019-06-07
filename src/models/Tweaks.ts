import {map} from '../common/Mapper';
import AudioVideoSyncMode from './AudioVideoSyncMode';

/**
 * @export
 * @class Tweaks
 */
export class Tweaks {
  constructor(obj: any) {
    this.audioVideoSyncMode = map(obj.audioVideoSyncMode);
  }

  /**
   * Defines special audio video sync handling
   * @type {AudioVideoSyncMode}
   * @memberof Tweaks
   */
  public audioVideoSyncMode?: AudioVideoSyncMode;
}

export default Tweaks;

