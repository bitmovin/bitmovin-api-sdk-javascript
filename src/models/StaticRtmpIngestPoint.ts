import {map, mapArray} from '../common/Mapper';
import StreamKeyConfiguration from './StreamKeyConfiguration';

/**
 * @export
 * @class StaticRtmpIngestPoint
 */
export class StaticRtmpIngestPoint {
  /**
   * The ID of the created static rtmp ingest point 
   * @type {string}
   * @memberof StaticRtmpIngestPoint
   */
  public id?: string;

  /**
   * Name of the ingest point. This can be helpful for easier identifying your ingest points 
   * @type {string}
   * @memberof StaticRtmpIngestPoint
   */
  public name?: string;

  /**
   * @type {StreamKeyConfiguration}
   * @memberof StaticRtmpIngestPoint
   */
  public streamKeyConfiguration?: StreamKeyConfiguration;

  constructor(obj?: Partial<StaticRtmpIngestPoint>) {
    if(!obj) {
      return;
    }
    this.id = map(obj.id);
    this.name = map(obj.name);
    this.streamKeyConfiguration = map(obj.streamKeyConfiguration, StreamKeyConfiguration);
  }
}

export default StaticRtmpIngestPoint;

