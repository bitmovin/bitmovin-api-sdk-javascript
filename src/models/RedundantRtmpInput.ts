import {map, mapArray} from '../common/Mapper';
import Input from './Input';
import InputType from './InputType';
import RtmpIngestPoint from './RtmpIngestPoint';
import StaticRtmpIngestPoint from './StaticRtmpIngestPoint';

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
   * Configuration for ingest points that use a dynamic IP based endpoint to stream to e.g.: rtmp://41.167.11.21/live Either ingestPoints **or** staticIngestPoints can be set 
   * @type {RtmpIngestPoint[]}
   * @memberof RedundantRtmpInput
   */
  public ingestPoints?: RtmpIngestPoint[];

  /**
   * Configuration for static ingest points. These ingest points use a consistent endpoint to stream to e.g.: rtmps://live-ingest.bitmovin.com/live Either ingestPoints **or** staticIngestPoints can be set 
   * @type {StaticRtmpIngestPoint[]}
   * @memberof RedundantRtmpInput
   */
  public staticIngestPoints?: StaticRtmpIngestPoint[];

  constructor(obj?: Partial<RedundantRtmpInput>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.delayThreshold = map(obj.delayThreshold);
    this.ingestPoints = mapArray(obj.ingestPoints, RtmpIngestPoint);
    this.staticIngestPoints = mapArray(obj.staticIngestPoints, StaticRtmpIngestPoint);
  }
}

export default RedundantRtmpInput;

