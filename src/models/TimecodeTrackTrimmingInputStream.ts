import {map} from '../common/Mapper';
import InputStream from './InputStream';

/**
 * @export
 * @class TimecodeTrackTrimmingInputStream
 */
export class TimecodeTrackTrimmingInputStream extends InputStream {
  /**
   * Discriminator property for InputStream
   * @type {string}
   * @memberof TimecodeTrackTrimmingInputStream
   */
  public type: 'TRIMMING_TIME_CODE_TRACK' = 'TRIMMING_TIME_CODE_TRACK';

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

  constructor(obj: Partial<TimecodeTrackTrimmingInputStream>) {
    super(obj);

    this.inputStreamId = obj.inputStreamId;
    this.startTimeCode = obj.startTimeCode;
    this.endTimeCode = obj.endTimeCode;
  }
}

export default TimecodeTrackTrimmingInputStream;

