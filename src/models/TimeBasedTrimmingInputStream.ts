import {map, mapArray} from '../common/Mapper';
import InputStream from './InputStream';
import InputStreamType from './InputStreamType';

/**
 * @export
 * @class TimeBasedTrimmingInputStream
 */
export class TimeBasedTrimmingInputStream extends InputStream {
  /**
   * Discriminator property for InputStream
   * @type {string}
   * @memberof TimeBasedTrimmingInputStream
   */
  public type: InputStreamType.TRIMMING_TIME_BASED = InputStreamType.TRIMMING_TIME_BASED;

  /**
   * The id of the ingest input stream that should be trimmed
   * @type {string}
   * @memberof TimeBasedTrimmingInputStream
   */
  public inputStreamId?: string;

  /**
   * Defines the offset in seconds at which the encoding should start, beginning at 0. The frame indicated by this value will be included in the encoding
   * @type {number}
   * @memberof TimeBasedTrimmingInputStream
   */
  public offset?: number;

  /**
   * Defines how many seconds of the input will be encoded. Not defining or setting it to null indicates that the remaining input (considering offset) will be encoded.
   * @type {number}
   * @memberof TimeBasedTrimmingInputStream
   */
  public duration?: number;

  constructor(obj?: Partial<TimeBasedTrimmingInputStream>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.inputStreamId = map(obj.inputStreamId);
    this.offset = map(obj.offset);
    this.duration = map(obj.duration);
  }
}

export default TimeBasedTrimmingInputStream;

