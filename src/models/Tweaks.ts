import {map, mapArray} from '../common/Mapper';
import AudioVideoSyncMode from './AudioVideoSyncMode';

/**
 * @export
 * @class Tweaks
 */
export class Tweaks {
  /**
   * Different modes for syncing the start and end of audio input streams with the video inputs. This feature does not work with Dolby Digital (Plus) or Dolby Atmos.
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

