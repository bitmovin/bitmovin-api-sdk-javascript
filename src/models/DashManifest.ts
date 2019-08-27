import {map} from '../common/Mapper';
import DashProfile from './DashProfile';
import EncodingOutput from './EncodingOutput';
import Manifest from './Manifest';
import ManifestType from './ManifestType';
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

  constructor(obj: Partial<DashManifest>) {
    super(obj);

    this.profile = obj.profile;
    this.manifestName = obj.manifestName;
    this.namespaces = map<XmlNamespace>(obj.namespaces, XmlNamespace) || [];
    this.utcTimings = map<UtcTiming>(obj.utcTimings, UtcTiming) || [];
  }
}

export default DashManifest;

