import {map} from '../common/Mapper';

/**
 * @export
 * @class ProgressiveTsMuxingInformationByteRanges
 */
export class ProgressiveTsMuxingInformationByteRanges {
  constructor(obj: any) {
    this.segmentNumber = map(obj.segmentNumber);
    this.startBytes = map(obj.startBytes);
    this.endBytes = map(obj.endBytes);
    this.duration = map(obj.duration);
  }

  /**
   * Number of the segment (starting at 0) (required)
   * @type {number}
   * @memberof ProgressiveTsMuxingInformationByteRanges
   */
  public segmentNumber: number;
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
}

export default ProgressiveTsMuxingInformationByteRanges;

