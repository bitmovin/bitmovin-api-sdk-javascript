import {map} from '../common/Mapper';
import Input from './Input';
import RtmpIngestPoint from './RtmpIngestPoint';

/**
 * @export
 * @class RedundantRtmpInput
 */
export default class RedundantRtmpInput extends Input {
  constructor(obj: any) {
    super(obj);
    this.delayThreshold = map(obj.delayThreshold);
    this.ingestPoints = map<RtmpIngestPoint>(obj.ingestPoints, RtmpIngestPoint);
  }

  /**
   * When there is no input signal present and this threshold in seconds is reached it will switch to another ingest point
   * @type {number}
   * @memberof RedundantRtmpInput
   */
  public delayThreshold?: number;
  /**
   * @type {Array<RtmpIngestPoint>}
   * @memberof RedundantRtmpInput
   */
  public ingestPoints: Array<RtmpIngestPoint>;
}
