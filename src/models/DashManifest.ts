import {map, mapArray} from '../common/Mapper';
import DashEditionCompatibility from './DashEditionCompatibility';
import DashISO8601TimestampFormat from './DashISO8601TimestampFormat';
import DashProfile from './DashProfile';
import EncodingOutput from './EncodingOutput';
import Manifest from './Manifest';
import ManifestType from './ManifestType';
import Status from './Status';
import UtcTiming from './UtcTiming';
import XmlNamespace from './XmlNamespace';

/**
 * @export
 * @class DashManifest
 */
export class DashManifest extends Manifest {
  /**
   * Determines if segmented or progressive representations can appear in the manifest
   * @type {DashProfile}
   * @memberof DashManifest
   */
  public profile?: DashProfile;

  /**
   * The filename of your manifest
   * @type {string}
   * @memberof DashManifest
   */
  public manifestName?: string;

  /**
   * List of additional XML namespaces to add to the DASH Manifest
   * @type {XmlNamespace[]}
   * @memberof DashManifest
   */
  public namespaces?: XmlNamespace[];

  /**
   * List of UTC Timings to use for live streaming
   * @type {UtcTiming[]}
   * @memberof DashManifest
   */
  public utcTimings?: UtcTiming[];

  /**
   * The manifest compatibility with the standard DASH Edition.
   * @type {DashEditionCompatibility}
   * @memberof DashManifest
   */
  public dashEditionCompatibility?: DashEditionCompatibility;

  /**
   * Determines how timestamps should appear in the manifest
   * @type {DashISO8601TimestampFormat}
   * @memberof DashManifest
   */
  public iso8601TimestampFormat?: DashISO8601TimestampFormat;

  /**
   * The minimum buffer time in seconds that the client should maintain to ensure uninterrupted playback. Default is 2 seconds. Note: For VOD ON_DEMAND dash manifests, the default value may differ from 2.0 seconds if not explicitly set. 
   * @type {number}
   * @memberof DashManifest
   */
  public minBufferTime?: number;

  constructor(obj?: Partial<DashManifest>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.profile = map(obj.profile);
    this.manifestName = map(obj.manifestName);
    this.namespaces = mapArray(obj.namespaces, XmlNamespace);
    this.utcTimings = mapArray(obj.utcTimings, UtcTiming);
    this.dashEditionCompatibility = map(obj.dashEditionCompatibility);
    this.iso8601TimestampFormat = map(obj.iso8601TimestampFormat);
    this.minBufferTime = map(obj.minBufferTime);
  }
}

export default DashManifest;

