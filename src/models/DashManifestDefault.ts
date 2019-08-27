import {map} from '../common/Mapper';
import DashManifest from './DashManifest';
import DashManifestDefaultVersion from './DashManifestDefaultVersion';
import DashProfile from './DashProfile';
import EncodingOutput from './EncodingOutput';
import ManifestType from './ManifestType';
import UtcTiming from './UtcTiming';
import XmlNamespace from './XmlNamespace';

/**
 * @export
 * @class DashManifestDefault
 */
export class DashManifestDefault extends DashManifest {
  /**
   * The id of the encoding to create a default manifest from (required)
   * @type {string}
   * @memberof DashManifestDefault
   */
  public encodingId?: string;

  /**
   * The version of the default manifest generator
   * @type {DashManifestDefaultVersion}
   * @memberof DashManifestDefault
   */
  public version?: DashManifestDefaultVersion;

  constructor(obj: Partial<DashManifestDefault>) {
    super(obj);

    this.encodingId = obj.encodingId;
    this.version = obj.version;
  }
}

export default DashManifestDefault;

