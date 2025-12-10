import {map, mapArray} from '../common/Mapper';

/**
 * Details about user info from rtmp ingest.
 * @export
 * @class RtmpUserIngestInfo
 */
export class RtmpUserIngestInfo {
  /**
   * Client public IP address.
   * @type {string}
   * @memberof RtmpUserIngestInfo
   */
  public address?: string;

  /**
   * RTMP application name.
   * @type {string}
   * @memberof RtmpUserIngestInfo
   */
  public app?: string;

  /**
   * Client stream key.
   * @type {string}
   * @memberof RtmpUserIngestInfo
   */
  public streamKey?: string;

  /**
   * Flash version string / encoder identity.
   * @type {string}
   * @memberof RtmpUserIngestInfo
   */
  public flashVersion?: string;

  /**
   * Session/client connection ID.
   * @type {string}
   * @memberof RtmpUserIngestInfo
   */
  public clientId?: string;

  /**
   * Server action.
   * @type {string}
   * @memberof RtmpUserIngestInfo
   */
  public eventType?: string;

  constructor(obj?: Partial<RtmpUserIngestInfo>) {
    if(!obj) {
      return;
    }
    this.address = map(obj.address);
    this.app = map(obj.app);
    this.streamKey = map(obj.streamKey);
    this.flashVersion = map(obj.flashVersion);
    this.clientId = map(obj.clientId);
    this.eventType = map(obj.eventType);
  }
}

export default RtmpUserIngestInfo;

