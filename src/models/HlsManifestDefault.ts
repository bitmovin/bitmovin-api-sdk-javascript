import {map, mapArray} from '../common/Mapper';
import ChannelsAttributeForAudio from './ChannelsAttributeForAudio';
import EncodingOutput from './EncodingOutput';
import HlsManifest from './HlsManifest';
import HlsManifestDefaultVersion from './HlsManifestDefaultVersion';
import HlsTargetDurationRoundingMode from './HlsTargetDurationRoundingMode';
import HlsVersion from './HlsVersion';
import ManifestType from './ManifestType';
import Status from './Status';

/**
 * @export
 * @class HlsManifestDefault
 */
export class HlsManifestDefault extends HlsManifest {
  /**
   * The id of the encoding to create a default manifest for (required)
   * @type {string}
   * @memberof HlsManifestDefault
   */
  public encodingId?: string;

  /**
   * Currently not in use
   * @type {HlsManifestDefaultVersion}
   * @memberof HlsManifestDefault
   */
  public version?: HlsManifestDefaultVersion;

  constructor(obj?: Partial<HlsManifestDefault>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.encodingId = map(obj.encodingId);
    this.version = map(obj.version);
  }
}

export default HlsManifestDefault;

