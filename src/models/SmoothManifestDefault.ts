import {map, mapArray} from '../common/Mapper';
import EncodingOutput from './EncodingOutput';
import ManifestType from './ManifestType';
import SmoothManifestDefaultVersion from './SmoothManifestDefaultVersion';
import SmoothStreamingManifest from './SmoothStreamingManifest';
import Status from './Status';

/**
 * @export
 * @class SmoothManifestDefault
 */
export class SmoothManifestDefault extends SmoothStreamingManifest {
  /**
   * The id of the encoding to create a default manifest from. (required)
   * @type {string}
   * @memberof SmoothManifestDefault
   */
  public encodingId?: string;

  /**
   * Specifies the algorithm that determines which output of the given encoding is included into the manifest. Note that this is not related to the \"manifestGenerator\" version of the \"Start\" request.
   * @type {SmoothManifestDefaultVersion}
   * @memberof SmoothManifestDefault
   */
  public version?: SmoothManifestDefaultVersion;

  constructor(obj?: Partial<SmoothManifestDefault>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.encodingId = map(obj.encodingId);
    this.version = map(obj.version);
  }
}

export default SmoothManifestDefault;

