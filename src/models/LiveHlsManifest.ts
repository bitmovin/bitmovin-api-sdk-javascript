import {map, mapArray} from '../common/Mapper';
import ProgramDateTimeSettings from './ProgramDateTimeSettings';

/**
 * @export
 * @class LiveHlsManifest
 */
export class LiveHlsManifest {
  /**
   * HLS manifest id (required)
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

  /**
   * Configuration for the EXT-X-PROGRAM-DATETIME tag
   * @type {ProgramDateTimeSettings}
   * @memberof LiveHlsManifest
   */
  public programDateTimeSettings?: ProgramDateTimeSettings;

  constructor(obj?: Partial<LiveHlsManifest>) {
    if(!obj) {
      return;
    }
    this.manifestId = map(obj.manifestId);
    this.timeshift = map(obj.timeshift);
    this.liveEdgeOffset = map(obj.liveEdgeOffset);
    this.insertProgramDateTime = map(obj.insertProgramDateTime);
    this.programDateTimeSettings = map(obj.programDateTimeSettings, ProgramDateTimeSettings);
  }
}

export default LiveHlsManifest;

