import {map} from '../common/Mapper';
import Id3Tag from './Id3Tag';
import Id3TagPositionMode from './Id3TagPositionMode';

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
  public type: 'FRAME_ID' = 'FRAME_ID';

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

  constructor(obj: Partial<FrameIdId3Tag>) {
    super(obj);

    this.bytes = obj.bytes;
    this.frameId = obj.frameId;
  }
}

export default FrameIdId3Tag;

