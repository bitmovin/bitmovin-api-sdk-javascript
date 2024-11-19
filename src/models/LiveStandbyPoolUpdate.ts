import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class LiveStandbyPoolUpdate
 */
export class LiveStandbyPoolUpdate {
  /**
   * Number of instances to keep ready for streaming while the pool is running
   * @type {number}
   * @memberof LiveStandbyPoolUpdate
   */
  public targetPoolSize?: number;

  /**
   * Base64 encoded template used to start the encodings in the pool
   * @type {string}
   * @memberof LiveStandbyPoolUpdate
   */
  public encodingTemplate?: string;

  constructor(obj?: Partial<LiveStandbyPoolUpdate>) {
    if(!obj) {
      return;
    }
    this.targetPoolSize = map(obj.targetPoolSize);
    this.encodingTemplate = map(obj.encodingTemplate);
  }
}

export default LiveStandbyPoolUpdate;

