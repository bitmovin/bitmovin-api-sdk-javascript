import {map, mapArray} from '../common/Mapper';
import MediaInfoType from './MediaInfoType';

/**
 * @export
 * @class MediaInfoTypeResponse
 */
export class MediaInfoTypeResponse {
  /**
   * The type of the media-info
   * @type {MediaInfoType}
   * @memberof MediaInfoTypeResponse
   */
  public type?: MediaInfoType;

  constructor(obj?: Partial<MediaInfoTypeResponse>) {
    if(!obj) {
      return;
    }
    this.type = map(obj.type);
  }
}

export default MediaInfoTypeResponse;

