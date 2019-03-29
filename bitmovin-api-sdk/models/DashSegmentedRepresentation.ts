import {map} from '../common/Mapper';
import DashMuxingType from './DashMuxingType';
import DashRepresentation from './DashRepresentation';

/**
 * @export
 * @class DashSegmentedRepresentation
 */
export default class DashSegmentedRepresentation extends DashRepresentation {
  constructor(obj: any) {
    super(obj);
    this.type = map(obj.type);
    this.segmentPath = map(obj.segmentPath);
    this.startSegmentNumber = map(obj.startSegmentNumber);
    this.endSegmentNumber = map(obj.endSegmentNumber);
    this.startKeyframeId = map(obj.startKeyframeId);
    this.endKeyframeId = map(obj.endKeyframeId);
  }

  /**
   * @type {DashMuxingType}
   * @memberof DashSegmentedRepresentation
   */
  public type: DashMuxingType;
  /**
   * Path to segments
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
