import {map} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';

/**
 * @export
 * @class SmoothManifestContentProtection
 */
export class SmoothManifestContentProtection extends BitmovinResource {
  /**
   * Id of the encoding. (required)
   * @type {string}
   * @memberof SmoothManifestContentProtection
   */
  public encodingId: string;

  /**
   * Id of the muxing. (required)
   * @type {string}
   * @memberof SmoothManifestContentProtection
   */
  public muxingId: string;

  /**
   * Id of the drm. (required)
   * @type {string}
   * @memberof SmoothManifestContentProtection
   */
  public drmId: string;

  constructor(obj: Partial<SmoothManifestContentProtection>) {
    super(obj);
    this.encodingId = map(obj.encodingId);
    this.muxingId = map(obj.muxingId);
    this.drmId = map(obj.drmId);
  }
}

export default SmoothManifestContentProtection;

