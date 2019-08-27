import {map} from '../common/Mapper';
import Id3Tag from './Id3Tag';
import Id3TagPositionMode from './Id3TagPositionMode';

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
  public type: 'PLAIN_TEXT' = 'PLAIN_TEXT';

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

  constructor(obj: Partial<PlaintextId3Tag>) {
    super(obj);

    this.text = obj.text;
    this.frameId = obj.frameId;
  }
}

export default PlaintextId3Tag;

