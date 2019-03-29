import {map} from '../common/Mapper';
import Id3Tag from './Id3Tag';
import Id3TagPositionMode from './Id3TagPositionMode';

/**
 * @export
 * @class FrameIdId3Tag
 */
export default class FrameIdId3Tag extends Id3Tag {
  constructor(obj: any) {
    super(obj);
    this.bytes = map(obj.bytes);
    this.frameId = map(obj.frameId);
  }

  /**
   * Base64 Encoded Data
   * @type {string}
   * @memberof FrameIdId3Tag
   */
  public bytes: string;
  /**
   * 4 character long Frame ID
   * @type {string}
   * @memberof FrameIdId3Tag
   */
  public frameId: string;
}
