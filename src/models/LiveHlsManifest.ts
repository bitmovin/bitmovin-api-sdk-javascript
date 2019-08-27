import {map} from '../common/Mapper';

/**
 * @export
 * @class LiveHlsManifest
 */
export class LiveHlsManifest {
  /**
   * Hls manifest ids (required)
   * @type {string}
   * @memberof LiveHlsManifest
   */
  public manifestId?: string;

  /**
   * Timeshift in seconds
   * @type {number}
   * @memberof LiveHlsManifest
   */
  public timeshift?: number;

  /**
   * Live edge offset in seconds
   * @type {number}
   * @memberof LiveHlsManifest
   */
  public liveEdgeOffset?: number;

  /**
   * Specifies if the EXT-X-PROGRAM-DATETIME tag will be included
   * @type {boolean}
   * @memberof LiveHlsManifest
   */
  public insertProgramDateTime?: boolean;

  constructor(obj: Partial<LiveHlsManifest>) {

    this.manifestId = obj.manifestId;
    this.timeshift = obj.timeshift;
    this.liveEdgeOffset = obj.liveEdgeOffset;
    this.insertProgramDateTime = obj.insertProgramDateTime;
  }
}

export default LiveHlsManifest;

