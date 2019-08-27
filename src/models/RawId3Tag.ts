import {map} from '../common/Mapper';
import Id3Tag from './Id3Tag';
import Id3TagPositionMode from './Id3TagPositionMode';

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
  public type: 'RAW' = 'RAW';

  /**
   * Base64 Encoded Data (required)
   * @type {string}
   * @memberof RawId3Tag
   */
  public bytes?: string;

  constructor(obj: Partial<RawId3Tag>) {
    super(obj);

    this.bytes = obj.bytes;
  }
}

export default RawId3Tag;

