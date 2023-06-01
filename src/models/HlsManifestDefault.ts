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
   * The id of the encoding to create a default manifest from. (required)
   * @type {string}
   * @memberof HlsManifestDefault
   */
  public encodingId?: string;

  /**
   * Specifies the algorithm that determines which output of the given encoding is included into the manifest. Note that this is not related to the \"manifestGenerator\" version of the \"Start\" request.
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

