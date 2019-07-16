import {map} from '../common/Mapper';
import EncodingOutput from './EncodingOutput';
import HlsManifest from './HlsManifest';
import HlsManifestDefaultVersion from './HlsManifestDefaultVersion';
import HlsVersion from './HlsVersion';
import ManifestType from './ManifestType';

/**
 * @export
 * @class HlsManifestDefault
 */
export class HlsManifestDefault extends HlsManifest {
  /**
   * The id of the encoding to create a default manifest from (required)
   * @type {string}
   * @memberof HlsManifestDefault
   */
  public encodingId: string;

  /**
   * The version of the default manifest generator
   * @type {HlsManifestDefaultVersion}
   * @memberof HlsManifestDefault
   */
  public version?: HlsManifestDefaultVersion;

  constructor(obj: Partial<HlsManifestDefault>) {
    super(obj);
    this.encodingId = map(obj.encodingId);
    this.version = map(obj.version);
  }
}

export default HlsManifestDefault;

