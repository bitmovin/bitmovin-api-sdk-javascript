import {map, mapArray} from '../common/Mapper';
import Id3Tag from './Id3Tag';
import Id3TagPositionMode from './Id3TagPositionMode';
import Id3TagType from './Id3TagType';

/**
 * @export
 * @class PlaintextId3Tag
 */
export class PlaintextId3Tag extends Id3Tag {
  /**
   * Discriminator property for Id3Tag
   * @type {string}
   * @memberof PlaintextId3Tag
   */
  public readonly type: Id3TagType = Id3TagType.PLAIN_TEXT;

  /**
   * Plain Text Data (required)
   * @type {string}
   * @memberof PlaintextId3Tag
   */
  public text?: string;

  /**
   * 4 character long Frame ID (required)
   * @type {string}
   * @memberof PlaintextId3Tag
   */
  public frameId?: string;

  constructor(obj?: Partial<PlaintextId3Tag>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.text = map(obj.text);
    this.frameId = map(obj.frameId);
  }
}

export default PlaintextId3Tag;

