import {map, mapArray} from '../common/Mapper';
import Drm from './Drm';
import DrmType from './DrmType';
import EncodingOutput from './EncodingOutput';
import SpekeDrmProvider from './SpekeDrmProvider';

/**
 * @export
 * @class SpekeDrm
 */
export class SpekeDrm extends Drm {
  /**
   * Discriminator property for Drm
   * @type {string}
   * @memberof SpekeDrm
   */
  public type: DrmType.SPEKE = DrmType.SPEKE;

  /**
   * Unique Identifier of the content, will be generated if not set
   * @type {string}
   * @memberof SpekeDrm
   */
  public contentId?: string;

  /**
   * Optional key identifier, will be generated if not set. For SPEKE DRM Configurations with the same contentId and kid the key provider will provide the same keys. 
   * @type {string}
   * @memberof SpekeDrm
   */
  public kid?: string;

  /**
   * 16 byte initialization vector represented by a 32-character text string. It is mandatory if systemIds contains AES128 or FairPlay. 
   * @type {string}
   * @memberof SpekeDrm
   */
  public iv?: string;

  /**
   * Key provider configuration for SPEKE (required)
   * @type {SpekeDrmProvider}
   * @memberof SpekeDrm
   */
  public provider?: SpekeDrmProvider;

  /**
   * DRM system identifier of the content protection scheme. At minimum one is expected. Not all systemIds are currently supported, support depends on the muxing type.  Relates to SPEKE implementation. See https://dashif.org/identifiers/content_protection/ (required)
   * @type {string[]}
   * @memberof SpekeDrm
   */
  public systemIds?: string[];

  constructor(obj?: Partial<SpekeDrm>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.contentId = map(obj.contentId);
    this.kid = map(obj.kid);
    this.iv = map(obj.iv);
    this.provider = map(obj.provider, SpekeDrmProvider);
    this.systemIds = mapArray(obj.systemIds);
  }
}

export default SpekeDrm;

