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
export default class DashManifest extends Manifest {
  constructor(obj: any) {
    super(obj);
    this.profile = map(obj.profile);
    this.manifestName = map(obj.manifestName);
    this.namespaces = map<XmlNamespace>(obj.namespaces, XmlNamespace);
    this.utcTimings = map<UtcTiming>(obj.utcTimings, UtcTiming);
  }

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
   * @type {Array<XmlNamespace>}
   * @memberof DashManifest
   */
  public namespaces?: Array<XmlNamespace>;
  /**
   * List of UTC Timings to use for live streaming
   * @type {Array<UtcTiming>}
   * @memberof DashManifest
   */
  public utcTimings?: Array<UtcTiming>;
}
