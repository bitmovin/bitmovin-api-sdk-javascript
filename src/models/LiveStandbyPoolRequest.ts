import {map, mapArray} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';

/**
 * @export
 * @class LiveStandbyPoolRequest
 */
export class LiveStandbyPoolRequest extends BitmovinResource {
  /**
   * Number of instances to keep ready for streaming while the pool is running (required)
   * @type {number}
   * @memberof LiveStandbyPoolRequest
   */
  public targetPoolSize?: number;

  /**
   * Base64 encoded template used to start the encodings in the pool (required)
   * @type {string}
   * @memberof LiveStandbyPoolRequest
   */
  public encodingTemplate?: string;

  constructor(obj?: Partial<LiveStandbyPoolRequest>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.targetPoolSize = map(obj.targetPoolSize);
    this.encodingTemplate = map(obj.encodingTemplate);
  }
}

export default LiveStandbyPoolRequest;

