import {map} from '../common/Mapper';
import InputStream from './InputStream';

/**
 * @export
 * @class H264PictureTimingTrimmingInputStream
 */
export default class H264PictureTimingTrimmingInputStream extends InputStream {
  constructor(obj: any) {
    super(obj);
    this.inputStreamId = map(obj.inputStreamId);
    this.startPicTiming = map(obj.startPicTiming);
    this.endPicTiming = map(obj.endPicTiming);
  }

  /**
   * The id of the ingest input stream that should be trimmed
   * @type {string}
   * @memberof H264PictureTimingTrimmingInputStream
   */
  public inputStreamId?: string;
  /**
   * Defines the H264 SEI picture timing, as specified in ISO/IEC 14496-10:2008, of the frame from which the encoding should start. The frame indicated by this value will be included in the encoding
   * @type {string}
   * @memberof H264PictureTimingTrimmingInputStream
   */
  public startPicTiming?: string;
  /**
   * Defines the H264 SEI picture timing, as specified in ISO/IEC 14496-10:2008, of the frame at which the encoding should stop. The frame indicated by this value will be included in the encoding
   * @type {string}
   * @memberof H264PictureTimingTrimmingInputStream
   */
  public endPicTiming?: string;
}
