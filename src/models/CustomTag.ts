import {map} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';
import PositionMode from './PositionMode';

/**
 * @export
 * @class CustomTag
 */
export class CustomTag extends BitmovinResource {
  /**
   * The positioning mode that should be used when inserting the placement opportunity (required)
   * @type {PositionMode}
   * @memberof CustomTag
   */
  public positionMode?: PositionMode;

  /**
   * Id of keyframe where the custom tag should be inserted. Required, when KEYFRAME is selected as position mode.
   * @type {string}
   * @memberof CustomTag
   */
  public keyframeId?: string;

  /**
   * Time in seconds where the custom tag should be inserted. Required, when TIME is selected as position mode.
   * @type {number}
   * @memberof CustomTag
   */
  public time?: number;

  /**
   * The custom tag will be inserted before the specified segment. Required, when SEGMENT is selected as position mode.
   * @type {number}
   * @memberof CustomTag
   */
  public segment?: number;

  /**
   * The data to be contained in the custom tag. (required)
   * @type {string}
   * @memberof CustomTag
   */
  public data?: string;

  constructor(obj: Partial<CustomTag>) {
    super(obj);

    this.positionMode = obj.positionMode;
    this.keyframeId = obj.keyframeId;
    this.time = obj.time;
    this.segment = obj.segment;
    this.data = obj.data;
  }
}

export default CustomTag;

