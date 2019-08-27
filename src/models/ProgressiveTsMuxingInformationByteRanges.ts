import {map} from '../common/Mapper';

/**
 * @export
 * @class ProgressiveTsMuxingInformationByteRanges
 */
export class ProgressiveTsMuxingInformationByteRanges {
  /**
   * Number of the segment (starting at 0) (required)
   * @type {number}
   * @memberof ProgressiveTsMuxingInformationByteRanges
   */
  public segmentNumber?: number;

  /**
   * The position of the first byte of the segment
   * @type {number}
   * @memberof ProgressiveTsMuxingInformationByteRanges
   */
  public startBytes?: number;

  /**
   * The position of the last byte of the segment
   * @type {number}
   * @memberof ProgressiveTsMuxingInformationByteRanges
   */
  public endBytes?: number;

  /**
   * The duration of the segment in seconds
   * @type {number}
   * @memberof ProgressiveTsMuxingInformationByteRanges
   */
  public duration?: number;

  constructor(obj: Partial<ProgressiveTsMuxingInformationByteRanges>) {

    this.segmentNumber = obj.segmentNumber;
    this.startBytes = obj.startBytes;
    this.endBytes = obj.endBytes;
    this.duration = obj.duration;
  }
}

export default ProgressiveTsMuxingInformationByteRanges;

