import {map} from '../common/Mapper';
import MediaInfoType from './MediaInfoType';

/**
 * @export
 * @class MediaInfoTypeResponse
 */
export class MediaInfoTypeResponse {
  constructor(obj: any) {
    this.type = map(obj.type);
  }

  /**
   * The type of the media-info
   * @type {MediaInfoType}
   * @memberof MediaInfoTypeResponse
   */
  public type?: MediaInfoType;
}

export default MediaInfoTypeResponse;

