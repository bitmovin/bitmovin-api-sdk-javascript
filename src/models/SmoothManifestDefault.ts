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
  constructor(obj: any) {
    super(obj);
    this.encodingId = map(obj.encodingId);
    this.version = map(obj.version);
  }

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
}

export default SmoothManifestDefault;

