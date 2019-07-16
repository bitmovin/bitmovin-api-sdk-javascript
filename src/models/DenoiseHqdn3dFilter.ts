import {map} from '../common/Mapper';
import Filter from './Filter';

/**
 * @export
 * @class DenoiseHqdn3dFilter
 */
export class DenoiseHqdn3dFilter extends Filter {
  /**
   * A non-negative floating point number which specifies spatial luma strength. It defaults to 4.0.
   * @type {number}
   * @memberof DenoiseHqdn3dFilter
   */
  public lumaSpatial?: number;

  /**
   * A non-negative floating point number which specifies spatial chroma strength. It defaults to 3.0*luma_spatial/4.0.
   * @type {number}
   * @memberof DenoiseHqdn3dFilter
   */
  public chromaSpatial?: number;

  /**
   * A floating point number which specifies luma temporal strength. It defaults to 6.0*luma_spatial/4.0.
   * @type {number}
   * @memberof DenoiseHqdn3dFilter
   */
  public lumaTmp?: number;

  /**
   * A floating point number which specifies chroma temporal strength. It defaults to luma_tmp*chroma_spatial/luma_spatial.
   * @type {number}
   * @memberof DenoiseHqdn3dFilter
   */
  public chromaTmp?: number;

  constructor(obj: Partial<DenoiseHqdn3dFilter>) {
    super(obj);
    this.lumaSpatial = map(obj.lumaSpatial);
    this.chromaSpatial = map(obj.chromaSpatial);
    this.lumaTmp = map(obj.lumaTmp);
    this.chromaTmp = map(obj.chromaTmp);
  }
}

export default DenoiseHqdn3dFilter;

