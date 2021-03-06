import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class ReuploadSettings
 */
export class ReuploadSettings {
  /**
   * Interval in seconds to reupload the DASH manifest. Valid values are either `null` to never reupload the dash manifest or at least `30`.
   * @type {number}
   * @memberof ReuploadSettings
   */
  public dashManifestInterval?: number;

  /**
   * Interval in seconds to reupload the HLS master file. Valid values are either `0` to never reupload the hls manifest or at least `30`. This is currently not used, as the master file will always be uploaded when one of the playlist files has changed.
   * @type {number}
   * @memberof ReuploadSettings
   */
  public hlsManifestInterval?: number;

  /**
   * The interval in seconds to reupload the init file for segmented muxings, e.g. fMP4, WebM. Valid values are either `null` to never reupload the init file for segmented muxings or at least `30`.
   * @type {number}
   * @memberof ReuploadSettings
   */
  public muxingInitFileInterval?: number;

  constructor(obj?: Partial<ReuploadSettings>) {
    if(!obj) {
      return;
    }
    this.dashManifestInterval = map(obj.dashManifestInterval);
    this.hlsManifestInterval = map(obj.hlsManifestInterval);
    this.muxingInitFileInterval = map(obj.muxingInitFileInterval);
  }
}

export default ReuploadSettings;

