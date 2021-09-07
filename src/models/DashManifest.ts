import {map, mapArray} from '../common/Mapper';
import DashEditionCompatibility from './DashEditionCompatibility';
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
  }
}

export default DashManifest;

