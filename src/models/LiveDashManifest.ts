import {map, mapArray} from '../common/Mapper';
import AvailabilityStartTimeMode from './AvailabilityStartTimeMode';
import DashManifestAdMarkerSettings from './DashManifestAdMarkerSettings';

/**
 * @export
 * @class LiveDashManifest
 */
export class LiveDashManifest {
  /**
   * Dash manifest id (required)
   * @type {string}
   * @memberof LiveDashManifest
   */
  public manifestId?: string;

  /**
   * Timeshift in seconds
   * @type {number}
   * @memberof LiveDashManifest
   */
  public timeshift?: number;

  /**
   * Live edge offset in seconds
   * @type {number}
   * @memberof LiveDashManifest
   */
  public liveEdgeOffset?: number;

  /**
   * The suggestedPresentationDelay to be set in the DASH manifest. If nothing is set, no value will be set.
   * @type {number}
   * @memberof LiveDashManifest
   */
  public suggestedPresentationDelay?: number;

  /**
   * The minimumUpdatePeriod to be set in the DASH manifest. If nothing is set, the segment duration will be set.
   * @type {number}
   * @memberof LiveDashManifest
   */
  public minimumUpdatePeriod?: number;

  /**
   * The mode to trigger the availabilityStartTime initialization.
   * @type {AvailabilityStartTimeMode}
   * @memberof LiveDashManifest
   */
  public availabilityStartTimeMode?: AvailabilityStartTimeMode;

  /**
   * @type {DashManifestAdMarkerSettings}
   * @memberof LiveDashManifest
   */
  public adMarkerSettings?: DashManifestAdMarkerSettings;

  constructor(obj?: Partial<LiveDashManifest>) {
    if(!obj) {
      return;
    }
    this.manifestId = map(obj.manifestId);
    this.timeshift = map(obj.timeshift);
    this.liveEdgeOffset = map(obj.liveEdgeOffset);
    this.suggestedPresentationDelay = map(obj.suggestedPresentationDelay);
    this.minimumUpdatePeriod = map(obj.minimumUpdatePeriod);
    this.availabilityStartTimeMode = map(obj.availabilityStartTimeMode);
    this.adMarkerSettings = map(obj.adMarkerSettings, DashManifestAdMarkerSettings);
  }
}

export default LiveDashManifest;

