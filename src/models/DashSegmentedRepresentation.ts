import {map, mapArray} from '../common/Mapper';
import DashMuxingRepresentation from './DashMuxingRepresentation';
import DashRepresentationType from './DashRepresentationType';
import DashRepresentationTypeMode from './DashRepresentationTypeMode';

/**
 * @export
 * @class DashSegmentedRepresentation
 */
export class DashSegmentedRepresentation extends DashMuxingRepresentation {
  /**
   * @type {DashRepresentationType}
   * @memberof DashSegmentedRepresentation
   */
  public type?: DashRepresentationType;

  /**
   * @type {DashRepresentationTypeMode}
   * @memberof DashSegmentedRepresentation
   */
  public mode?: DashRepresentationTypeMode;

  /**
   * Path to segments. Will be used as the representation id if the type is set to TEMPLATE_ADAPTATION_SET (required)
   * @type {string}
   * @memberof DashSegmentedRepresentation
   */
  public segmentPath?: string;

  /**
   * Number of the first segment
   * @type {number}
   * @memberof DashSegmentedRepresentation
   */
  public startSegmentNumber?: number;

  /**
   * Number of the last segment. Default is the last one that was encoded
   * @type {number}
   * @memberof DashSegmentedRepresentation
   */
  public endSegmentNumber?: number;

  /**
   * Id of the keyframe to start with. It takes precedence over startSegmentNumber
   * @type {string}
   * @memberof DashSegmentedRepresentation
   */
  public startKeyframeId?: string;

  /**
   * Id of the keyframe to end with. It takes precedence over endSegmentNumber. The segment containing the end keyframe is not included in the representation.
   * @type {string}
   * @memberof DashSegmentedRepresentation
   */
  public endKeyframeId?: string;

  constructor(obj?: Partial<DashSegmentedRepresentation>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.type = map(obj.type);
    this.mode = map(obj.mode);
    this.segmentPath = map(obj.segmentPath);
    this.startSegmentNumber = map(obj.startSegmentNumber);
    this.endSegmentNumber = map(obj.endSegmentNumber);
    this.startKeyframeId = map(obj.startKeyframeId);
    this.endKeyframeId = map(obj.endKeyframeId);
  }
}

export default DashSegmentedRepresentation;

