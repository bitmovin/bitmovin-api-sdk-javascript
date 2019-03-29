import {map} from '../common/Mapper';

/**
 * @export
 * @class ReuploadSettings
 */
export default class ReuploadSettings {
  constructor(obj: any) {
    this.dashManifestInterval = map(obj.dashManifestInterval);
    this.hlsManifestInterval = map(obj.hlsManifestInterval);
    this.muxingInitFileInterval = map(obj.muxingInitFileInterval);
  }

  /**
   * Interval in seconds to reupload the DASH manifest (minimum value: 30)
   * @type {number}
   * @memberof ReuploadSettings
   */
  public dashManifestInterval?: number;
  /**
   * Interval in seconds to reupload the HLS master file. This is currently not used, as the master file will always be uploaded when one of the playlist files has changed (minimum value: 30)
   * @type {number}
   * @memberof ReuploadSettings
   */
  public hlsManifestInterval?: number;
  /**
   * The interval in seconds to reupload the init file for segmented muxings (e.g. fMP4, WebM) (minimum value: 30)
   * @type {number}
   * @memberof ReuploadSettings
   */
  public muxingInitFileInterval?: number;
}
