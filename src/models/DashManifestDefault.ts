import {map, mapArray} from '../common/Mapper';
import DashEditionCompatibility from './DashEditionCompatibility';
import DashManifest from './DashManifest';
import DashManifestDefaultVersion from './DashManifestDefaultVersion';
import DashProfile from './DashProfile';
import DefaultDashManifestPeriod from './DefaultDashManifestPeriod';
import EncodingOutput from './EncodingOutput';
import ManifestType from './ManifestType';
import Status from './Status';
import UtcTiming from './UtcTiming';
import XmlNamespace from './XmlNamespace';

/**
 * @export
 * @class DashManifestDefault
 */
export class DashManifestDefault extends DashManifest {
  /**
   * The id of the encoding to create a default manifest for. Either \"encodingId\" or \"periods\" is required.
   * @type {string}
   * @memberof DashManifestDefault
   */
  public encodingId?: string;

  /**
   * Specifies the algorithm that determines which output of the given encoding is included into the manifest. Note that this is not related to the \"manifestGenerator\" version of the \"Start\" request.
   * @type {DashManifestDefaultVersion}
   * @memberof DashManifestDefault
   */
  public version?: DashManifestDefaultVersion;

  /**
   * Adds a period for every item. Can only be used when setting \"version\" to \"V2\". Either \"periods\" or \"encodingId\" is required.
   * @type {DefaultDashManifestPeriod[]}
   * @memberof DashManifestDefault
   */
  public periods?: DefaultDashManifestPeriod[];

  constructor(obj?: Partial<DashManifestDefault>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.encodingId = map(obj.encodingId);
    this.version = map(obj.version);
    this.periods = mapArray(obj.periods, DefaultDashManifestPeriod);
  }
}

export default DashManifestDefault;

