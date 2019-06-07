import {map} from '../common/Mapper';
import Id3Tag from './Id3Tag';
import Id3TagPositionMode from './Id3TagPositionMode';

/**
 * @export
 * @class PlaintextId3Tag
 */
export class PlaintextId3Tag extends Id3Tag {
  constructor(obj: any) {
    super(obj);
    this.text = map(obj.text);
    this.frameId = map(obj.frameId);
  }

  /**
   * Plain Text Data
   * @type {string}
   * @memberof PlaintextId3Tag
   */
  public text: string;
  /**
   * 4 character long Frame ID
   * @type {string}
   * @memberof PlaintextId3Tag
   */
  public frameId: string;
}

export default PlaintextId3Tag;

