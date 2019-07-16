import {map} from '../common/Mapper';
import EncodingOutput from './EncodingOutput';
import ManifestType from './ManifestType';
import SmoothManifestDefaultVersion from './SmoothManifestDefaultVersion';
import SmoothStreamingManifest from './SmoothStreamingManifest';

/**
 * @export
 * @class SmoothManifestDefault
 */
export class SmoothManifestDefault extends SmoothStreamingManifest {
  /**
   * The id of the encoding to create a default manifest from (required)
   * @type {string}
   * @memberof SmoothManifestDefault
   */
  public encodingId: string;

  /**
   * The version of the default manifest generator
   * @type {SmoothManifestDefaultVersion}
   * @memberof SmoothManifestDefault
   */
  public version?: SmoothManifestDefaultVersion;

  constructor(obj: Partial<SmoothManifestDefault>) {
    super(obj);
    this.encodingId = map(obj.encodingId);
    this.version = map(obj.version);
  }
}

export default SmoothManifestDefault;

