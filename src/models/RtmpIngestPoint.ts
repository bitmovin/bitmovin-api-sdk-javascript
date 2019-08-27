import {map} from '../common/Mapper';

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

  constructor(obj: Partial<RtmpIngestPoint>) {

    this.applicationName = obj.applicationName;
    this.streamKey = obj.streamKey;
  }
}

export default RtmpIngestPoint;

