import {map} from '../common/Mapper';
import BasicInputStream from './BasicInputStream';

/**
 * @export
 * @class TimecodeTrackTrimmingInputStream
 */
export default class TimecodeTrackTrimmingInputStream extends BasicInputStream {
  constructor(obj: any) {
    super(obj);
    this.inputStreamId = map(obj.inputStreamId);
    this.startTimeCode = map(obj.startTimeCode);
    this.endTimeCode = map(obj.endTimeCode);
  }

  /**
   * The id of the ingest input stream that should be trimmed
   * @type {string}
   * @memberof TimecodeTrackTrimmingInputStream
   */
  public inputStreamId?: string;
  /**
   * Defines the timecode, in SMPTE-12M format, of the frame from which the encoding should start. The frame indicated by this value will be included in the encoding
   * @type {string}
   * @memberof TimecodeTrackTrimmingInputStream
   */
  public startTimeCode?: string;
  /**
   * Defines the timecode, in SMPTE-12M format, of the frame at which the encoding should stop. The frame indicated by this value will be included in the encoding
   * @type {string}
   * @memberof TimecodeTrackTrimmingInputStream
   */
  public endTimeCode?: string;
}
