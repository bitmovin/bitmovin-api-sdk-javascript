import {map, mapArray} from '../common/Mapper';
import Id3Tag from './Id3Tag';
import Id3TagPositionMode from './Id3TagPositionMode';
import Id3TagType from './Id3TagType';

/**
 * @export
 * @class FrameIdId3Tag
 */
export class FrameIdId3Tag extends Id3Tag {
  /**
   * Discriminator property for Id3Tag
   * @type {string}
   * @memberof FrameIdId3Tag
   */
  public readonly type: Id3TagType = Id3TagType.FRAME_ID;

  /**
   * Base64 Encoded Data (required)
   * @type {string}
   * @memberof FrameIdId3Tag
   */
  public bytes?: string;

  /**
   * 4 character long Frame ID (required)
   * @type {string}
   * @memberof FrameIdId3Tag
   */
  public frameId?: string;

  constructor(obj?: Partial<FrameIdId3Tag>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.bytes = map(obj.bytes);
    this.frameId = map(obj.frameId);
  }
}

export default FrameIdId3Tag;

