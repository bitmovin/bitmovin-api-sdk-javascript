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
   * Live edge offset in seconds. New segments are held back for this duration (rounded up to whole segments) before they are added to the HLS playlist, and are always added in order. This adds the same amount of latency, but a segment that arrives late by up to this duration does not interrupt the playlist. A segment that arrives later than that stops the playlist from updating until it arrives. If it does not arrive at all, a placeholder segment is added in its place once a few newer segments are available. If set to 0, segments are added as soon as they are available. A late segment is then skipped and inserted into the playlist later, which can make players skip or repeat content. We recommend a value of at least 2 segment durations. 
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

