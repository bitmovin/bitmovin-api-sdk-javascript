import {map, mapArray} from '../common/Mapper';

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

  constructor(obj?: Partial<CustomPlayerBuildDownload>) {
    if(!obj) {
      return;
    }
    this.downloadLink = map(obj.downloadLink);
    this.expiresAt = map(obj.expiresAt, Date);
  }
}

export default CustomPlayerBuildDownload;

