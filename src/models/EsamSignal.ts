import {map, mapArray} from '../common/Mapper';

/**
 * ESAM signal following the SCTE-250 standard
 * @export
 * @class EsamSignal
 */
export class EsamSignal {
  /**
   * The offset from the matched signal in ISO 8601 duration format, accurate to milliseconds
   * @type {string}
   * @memberof EsamSignal
   */
  public offset?: string;

  /**
   * Base64-encoded SCTE-35 binary data to be inserted into the stream (required)
   * @type {string}
   * @memberof EsamSignal
   */
  public binary?: string;

  /**
   * Interval in ISO 8601 duration format for which the signal should be repeated.  A signal may be specified as repeating when the interval and end attributes are present.  In this case, the signal is executed at the time specified by offset and again at the time  specified by adding interval to offset. This should be continued until reaching the duration  of offset + end. 
   * @type {string}
   * @memberof EsamSignal
   */
  public interval?: string;

  /**
   * End duration in ISO 8601 duration format when a repeated signal should stop being repeated
   * @type {string}
   * @memberof EsamSignal
   */
  public end?: string;

  constructor(obj?: Partial<EsamSignal>) {
    if(!obj) {
      return;
    }
    this.offset = map(obj.offset);
    this.binary = map(obj.binary);
    this.interval = map(obj.interval);
    this.end = map(obj.end);
  }
}

export default EsamSignal;

