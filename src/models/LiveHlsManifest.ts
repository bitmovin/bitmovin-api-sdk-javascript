import {map, mapArray} from '../common/Mapper';
import HlsManifestAdMarkerSettings from './HlsManifestAdMarkerSettings';
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
   * Timeshift in seconds. We recommend to use a timeshift value not greater than 3 hours (10800.0 seconds). Longer values could negatively impact the manifest update frequency. 
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

  /**
   * Configuration for tags related to ad markers (e.g. Scte35)
   * @type {HlsManifestAdMarkerSettings}
   * @memberof LiveHlsManifest
   */
  public adMarkerSettings?: HlsManifestAdMarkerSettings;

  constructor(obj?: Partial<LiveHlsManifest>) {
    if(!obj) {
      return;
    }
    this.manifestId = map(obj.manifestId);
    this.timeshift = map(obj.timeshift);
    this.liveEdgeOffset = map(obj.liveEdgeOffset);
    this.insertProgramDateTime = map(obj.insertProgramDateTime);
    this.programDateTimeSettings = map(obj.programDateTimeSettings, ProgramDateTimeSettings);
    this.adMarkerSettings = map(obj.adMarkerSettings, HlsManifestAdMarkerSettings);
  }
}

export default LiveHlsManifest;

