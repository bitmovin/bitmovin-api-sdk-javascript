import {map, mapArray} from '../common/Mapper';
import BitmovinResponse from './BitmovinResponse';
import ObjectDetectionResult from './ObjectDetectionResult';

/**
 * @export
 * @class ObjectDetectionTimestampResult
 */
export class ObjectDetectionTimestampResult extends BitmovinResponse {
  /**
   * Time in seconds where the object was detected in the video
   * @type {number}
   * @memberof ObjectDetectionTimestampResult
   */
  public timestamp?: number;

  /**
   * Objects detected for the given timestamp
   * @type {ObjectDetectionResult[]}
   * @memberof ObjectDetectionTimestampResult
   */
  public objects?: ObjectDetectionResult[];

  constructor(obj?: Partial<ObjectDetectionTimestampResult>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.timestamp = map(obj.timestamp);
    this.objects = mapArray(obj.objects, ObjectDetectionResult);
  }
}

export default ObjectDetectionTimestampResult;

