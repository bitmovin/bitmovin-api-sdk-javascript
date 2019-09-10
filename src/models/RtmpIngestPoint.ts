import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class RtmpIngestPoint
 */
export class RtmpIngestPoint {
  /**
   * The name of the application where the ingest is streamed to. This has to be unique for each ingest point (required)
   * @type {string}
   * @memberof RtmpIngestPoint
   */
  public applicationName?: string;

  /**
   * The stream key for the backup input (required)
   * @type {string}
   * @memberof RtmpIngestPoint
   */
  public streamKey?: string;

  constructor(obj?: Partial<RtmpIngestPoint>) {
    if(!obj) {
      return;
    }
    this.applicationName = map(obj.applicationName);
    this.streamKey = map(obj.streamKey);
  }
}

export default RtmpIngestPoint;

