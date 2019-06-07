import {map} from '../common/Mapper';
import Id3Tag from './Id3Tag';
import Id3TagPositionMode from './Id3TagPositionMode';

/**
 * @export
 * @class RawId3Tag
 */
export class RawId3Tag extends Id3Tag {
  constructor(obj: any) {
    super(obj);
    this.bytes = map(obj.bytes);
  }

  /**
   * Base64 Encoded Data
   * @type {string}
   * @memberof RawId3Tag
   */
  public bytes: string;
}

export default RawId3Tag;

