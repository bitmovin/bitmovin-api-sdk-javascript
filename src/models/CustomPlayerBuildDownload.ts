import {map} from '../common/Mapper';

/**
 * Custom player download information
 * @export
 * @class CustomPlayerBuildDownload
 */
export class CustomPlayerBuildDownload {
  constructor(obj: any) {
    this.downloadLink = map(obj.downloadLink);
    this.expiresAt = map(obj.expiresAt, Date);
  }

  /**
   * The link to download the custom built player
   * @type {string}
   * @memberof CustomPlayerBuildDownload
   */
  public downloadLink: string;
  /**
   * Until this date the download link is valid and can be downloaded.
   * @type {Date}
   * @memberof CustomPlayerBuildDownload
   */
  public expiresAt: Date;
}

export default CustomPlayerBuildDownload;

