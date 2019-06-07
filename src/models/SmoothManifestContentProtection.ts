import {map} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';

/**
 * @export
 * @class SmoothManifestContentProtection
 */
export class SmoothManifestContentProtection extends BitmovinResource {
  constructor(obj: any) {
    super(obj);
    this.encodingId = map(obj.encodingId);
    this.muxingId = map(obj.muxingId);
    this.drmId = map(obj.drmId);
  }

  /**
   * Id of the encoding.
   * @type {string}
   * @memberof SmoothManifestContentProtection
   */
  public encodingId: string;
  /**
   * Id of the muxing.
   * @type {string}
   * @memberof SmoothManifestContentProtection
   */
  public muxingId: string;
  /**
   * Id of the drm.
   * @type {string}
   * @memberof SmoothManifestContentProtection
   */
  public drmId: string;
}

export default SmoothManifestContentProtection;

