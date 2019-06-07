import {map} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';
import FrameIdId3Tag from './FrameIdId3Tag';
import Id3TagPositionMode from './Id3TagPositionMode';
import PlaintextId3Tag from './PlaintextId3Tag';
import RawId3Tag from './RawId3Tag';

/**
 * @export
 * @class Id3Tag
 */
export class Id3Tag extends BitmovinResource {
  constructor(obj: any) {
    super(obj);
    this.positionMode = map(obj.positionMode);
    this.frame = map(obj.frame);
    this.time = map(obj.time);
  }

  /**
   * @type {Id3TagPositionMode}
   * @memberof Id3Tag
   */
  public positionMode?: Id3TagPositionMode;
  /**
   * Frame number at which the Tag should be inserted
   * @type {number}
   * @memberof Id3Tag
   */
  public frame?: number;
  /**
   * Time in seconds where the Tag should be inserted
   * @type {number}
   * @memberof Id3Tag
   */
  public time?: number;
}

export default Id3Tag;

