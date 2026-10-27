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
   * Live edge offset in seconds. How it is applied depends on the type of the segmented representations in the manifest. For `TIMELINE` representations, new segments are held back for this duration (rounded up to whole segments) before they are added to the SegmentTimeline, and are always added in order. This adds the same amount of latency, but a segment that arrives late by up to this duration does not interrupt the manifest. A segment that arrives later than that stops the SegmentTimeline from updating until it arrives. If it does not arrive at all, a placeholder segment is added in its place once a few newer segments are available. If set to 0, segments are added as soon as they are available, still in order. For `TEMPLATE` representations, the `availabilityStartTime` is set this many seconds later, so players request each segment this much later. Late segments do not change the manifest; a player that requests a segment before it is uploaded gets an error. Segments are also kept in the manifest for this duration on top of the timeshift. We recommend a value of at least 2 segment durations. 
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

