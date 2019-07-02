import {map} from '../common/Mapper';
import BitmovinResponse from './BitmovinResponse';
import ObjectDetectionResult from './ObjectDetectionResult';

/**
 * @export
 * @class ObjectDetectionTimestampResult
 */
export class ObjectDetectionTimestampResult extends BitmovinResponse {
  constructor(obj: any) {
    super(obj);
    this.timestamp = map(obj.timestamp);
    this.objects = map<ObjectDetectionResult>(obj.objects, ObjectDetectionResult);
  }

  /**
   * Time in seconds where the object was detected in the video
   * @type {number}
   * @memberof ObjectDetectionTimestampResult
   */
  public timestamp?: number;
  /**
   * Objects detected for the given timestamp
   * @type {Array<ObjectDetectionResult>}
   * @memberof ObjectDetectionTimestampResult
   */
  public objects?: Array<ObjectDetectionResult>;
}

export default ObjectDetectionTimestampResult;

