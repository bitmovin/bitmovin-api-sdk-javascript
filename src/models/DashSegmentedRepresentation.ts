import {map} from '../common/Mapper';
import DashRepresentation from './DashRepresentation';
import DashRepresentationType from './DashRepresentationType';
import DashRepresentationTypeMode from './DashRepresentationTypeMode';

/**
 * @export
 * @class DashSegmentedRepresentation
 */
export class DashSegmentedRepresentation extends DashRepresentation {
  constructor(obj: any) {
    super(obj);
    this.type = map(obj.type);
    this.mode = map(obj.mode);
    this.segmentPath = map(obj.segmentPath);
    this.startSegmentNumber = map(obj.startSegmentNumber);
    this.endSegmentNumber = map(obj.endSegmentNumber);
    this.startKeyframeId = map(obj.startKeyframeId);
    this.endKeyframeId = map(obj.endKeyframeId);
  }

  /**
   * @type {DashRepresentationType}
   * @memberof DashSegmentedRepresentation
   */
  public type: DashRepresentationType;
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
  public segmentPath: string;
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
}

export default DashSegmentedRepresentation;

