import {map} from '../common/Mapper';
import Id3Tag from './Id3Tag';
import Id3TagPositionMode from './Id3TagPositionMode';

/**
 * @export
 * @class PlaintextId3Tag
 */
export class PlaintextId3Tag extends Id3Tag {
  /**
   * Plain Text Data (required)
   * @type {string}
   * @memberof PlaintextId3Tag
   */
  public text: string;

  /**
   * 4 character long Frame ID (required)
   * @type {string}
   * @memberof PlaintextId3Tag
   */
  public frameId: string;

  constructor(obj: Partial<PlaintextId3Tag>) {
    super(obj);
    this.text = map(obj.text);
    this.frameId = map(obj.frameId);
  }
}

export default PlaintextId3Tag;

