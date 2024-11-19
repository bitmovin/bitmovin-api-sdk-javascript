import {map, mapArray} from '../common/Mapper';
import LiveStandbyPoolResponse from './LiveStandbyPoolResponse';
import LiveStandbyPoolStatus from './LiveStandbyPoolStatus';

/**
 * @export
 * @class LiveStandbyPoolDetails
 */
export class LiveStandbyPoolDetails extends LiveStandbyPoolResponse {
  /**
   * Base64 encoded template used to start the encodings in the pool
   * @type {string}
   * @memberof LiveStandbyPoolDetails
   */
  public encodingTemplate?: string;

  constructor(obj?: Partial<LiveStandbyPoolDetails>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.encodingTemplate = map(obj.encodingTemplate);
  }
}

export default LiveStandbyPoolDetails;

