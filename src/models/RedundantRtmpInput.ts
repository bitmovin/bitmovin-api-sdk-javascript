import {map, mapArray} from '../common/Mapper';
import Input from './Input';
import InputType from './InputType';
import RtmpIngestPoint from './RtmpIngestPoint';

/**
 * @export
 * @class RedundantRtmpInput
 */
export class RedundantRtmpInput extends Input {
  /**
   * Discriminator property for Input
   * @type {string}
   * @memberof RedundantRtmpInput
   */
  public readonly type: InputType = InputType.REDUNDANT_RTMP;

  /**
   * When there is no input signal present and this threshold in seconds is reached it will switch to another ingest point
   * @type {number}
   * @memberof RedundantRtmpInput
   */
  public delayThreshold?: number;

  /**
   * @type {RtmpIngestPoint[]}
   * @memberof RedundantRtmpInput
   */
  public ingestPoints?: RtmpIngestPoint[];

  constructor(obj?: Partial<RedundantRtmpInput>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.delayThreshold = map(obj.delayThreshold);
    this.ingestPoints = mapArray(obj.ingestPoints, RtmpIngestPoint);
  }
}

export default RedundantRtmpInput;

