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
 * V2 of the default dash manifest is an experimental feature and might be subject to change in the future. 
 * @export
 * @class DashManifestDefault
 */
export class DashManifestDefault extends DashManifest {
  /**
   * The id of the encoding to create a default manifest from. Required: encodingId or periods
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

  /**
   * Adds a period for every item. Required: encodingId or periods
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

