import {map} from '../common/Mapper';
import BitmovinResponse from './BitmovinResponse';
import ObjectDetectionBoundingBox from './ObjectDetectionBoundingBox';

/**
 * @export
 * @class ObjectDetectionResult
 */
export class ObjectDetectionResult extends BitmovinResponse {
  /**
   * Name of the object that has been detected (in English)
   * @type {string}
   * @memberof ObjectDetectionResult
   */
  public detectedObject?: string;

  /**
   * Time in seconds where the object was detected in the video
   * @type {number}
   * @memberof ObjectDetectionResult
   */
  public timestamp?: number;

  /**
   * A number between 0 and 1 indicating the confidence of the detection
   * @type {number}
   * @memberof ObjectDetectionResult
   */
  public score?: number;

  /**
   * A box indicating the position and size of the detected object within the frame
   * @type {ObjectDetectionBoundingBox}
   * @memberof ObjectDetectionResult
   */
  public boundingBox?: ObjectDetectionBoundingBox;

  constructor(obj: Partial<ObjectDetectionResult>) {
    super(obj);
    this.detectedObject = map(obj.detectedObject);
    this.timestamp = map(obj.timestamp);
    this.score = map(obj.score);
    this.boundingBox = map<ObjectDetectionBoundingBox>(obj.boundingBox, ObjectDetectionBoundingBox);
  }
}

export default ObjectDetectionResult;

