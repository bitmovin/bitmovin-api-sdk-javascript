import {map} from '../common/Mapper';

/**
 * @export
 * @class Trimming
 */
export class Trimming {
  constructor(obj: any) {
    this.offset = map(obj.offset);
    this.duration = map(obj.duration);
    this.ignoreDurationIfInputTooShort = map(obj.ignoreDurationIfInputTooShort);
    this.startPicTiming = map(obj.startPicTiming);
    this.endPicTiming = map(obj.endPicTiming);
  }

  /**
   * Defines the offset in seconds from which the encoding should start, beginning at 0.
   * @type {number}
   * @memberof Trimming
   */
  public offset?: number;
  /**
   * Defines how many seconds from the input will be encoded.
   * @type {number}
   * @memberof Trimming
   */
  public duration?: number;
  /**
   * If set, \"duration\" will be interpreted as a maximum and not cause an error if the input is too short
   * @type {boolean}
   * @memberof Trimming
   */
  public ignoreDurationIfInputTooShort?: boolean;
  /**
   * Defines the H264 picture timing of the first frame from which the encoding should start. Any defined offset or duration in seconds will be ignored.
   * @type {string}
   * @memberof Trimming
   */
  public startPicTiming?: string;
  /**
   * Defines the H264 picture timing of the last frame, that will be included in the encoding. Any defined offset or duration in seconds will be ignored.
   * @type {string}
   * @memberof Trimming
   */
  public endPicTiming?: string;
}

export default Trimming;

