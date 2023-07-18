import {map, mapArray} from '../common/Mapper';
import LiveOptionsType from './LiveOptionsType';

/**
 * @export
 * @class LiveEncodingOptionsStatistics
 */
export class LiveEncodingOptionsStatistics {
  /**
   * The ID of the encoding (required)
   * @type {string}
   * @memberof LiveEncodingOptionsStatistics
   */
  public encodingId?: string;

  /**
   * Live option units used (required)
   * @type {number}
   * @memberof LiveEncodingOptionsStatistics
   */
  public unitsUsed?: number;

  /**
   * @type {LiveOptionsType}
   * @memberof LiveEncodingOptionsStatistics
   */
  public type?: LiveOptionsType;

  constructor(obj?: Partial<LiveEncodingOptionsStatistics>) {
    if(!obj) {
      return;
    }
    this.encodingId = map(obj.encodingId);
    this.unitsUsed = map(obj.unitsUsed);
    this.type = map(obj.type);
  }
}

export default LiveEncodingOptionsStatistics;

