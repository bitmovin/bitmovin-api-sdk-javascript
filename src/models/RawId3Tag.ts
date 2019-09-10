import {map, mapArray} from '../common/Mapper';
import Id3Tag from './Id3Tag';
import Id3TagPositionMode from './Id3TagPositionMode';
import Id3TagType from './Id3TagType';

/**
 * @export
 * @class RawId3Tag
 */
export class RawId3Tag extends Id3Tag {
  /**
   * Discriminator property for Id3Tag
   * @type {string}
   * @memberof RawId3Tag
   */
  public type: Id3TagType.RAW = Id3TagType.RAW;

  /**
   * Base64 Encoded Data (required)
   * @type {string}
   * @memberof RawId3Tag
   */
  public bytes?: string;

  constructor(obj?: Partial<RawId3Tag>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.bytes = map(obj.bytes);
  }
}

export default RawId3Tag;

