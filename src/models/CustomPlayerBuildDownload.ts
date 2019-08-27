import {map} from '../common/Mapper';

/**
 * Custom player download information
 * @export
 * @class CustomPlayerBuildDownload
 */
export class CustomPlayerBuildDownload {
  /**
   * The link to download the custom built player (required)
   * @type {string}
   * @memberof CustomPlayerBuildDownload
   */
  public downloadLink?: string;

  /**
   * Until this date the download link is valid and can be downloaded. (required)
   * @type {Date}
   * @memberof CustomPlayerBuildDownload
   */
  public expiresAt?: Date;

  constructor(obj: Partial<CustomPlayerBuildDownload>) {

    this.downloadLink = obj.downloadLink;
    this.expiresAt = map<Date>(obj.expiresAt, Date);
  }
}

export default CustomPlayerBuildDownload;

