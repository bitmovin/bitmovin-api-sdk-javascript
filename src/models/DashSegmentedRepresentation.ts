import {map} from '../common/Mapper';
import DashRepresentation from './DashRepresentation';
import DashRepresentationType from './DashRepresentationType';
import DashRepresentationTypeMode from './DashRepresentationTypeMode';

/**
 * @export
 * @class DashSegmentedRepresentation
 */
export class DashSegmentedRepresentation extends DashRepresentation {
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
   * Id of the Keyframe to start with
   * @type {string}
   * @memberof DashSegmentedRepresentation
   */
  public startKeyframeId?: string;

  /**
   * Id of the Keyframe to end with
   * @type {string}
   * @memberof DashSegmentedRepresentation
   */
  public endKeyframeId?: string;

  constructor(obj: Partial<DashSegmentedRepresentation>) {
    super(obj);

    this.type = obj.type;
    this.mode = obj.mode;
    this.segmentPath = obj.segmentPath;
    this.startSegmentNumber = obj.startSegmentNumber;
    this.endSegmentNumber = obj.endSegmentNumber;
    this.startKeyframeId = obj.startKeyframeId;
    this.endKeyframeId = obj.endKeyframeId;
  }
}

export default DashSegmentedRepresentation;

