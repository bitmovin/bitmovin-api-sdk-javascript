import {map} from '../common/Mapper';
import EncodingOutput from './EncodingOutput';
import HlsVersion from './HlsVersion';
import Manifest from './Manifest';
import ManifestType from './ManifestType';

/**
 * @export
 * @class HlsManifest
 */
export class HlsManifest extends Manifest {
  /**
   * The filename of your manifest (required)
   * @type {string}
   * @memberof HlsManifest
   */
  public manifestName: string;

  /**
   * If this is set, the EXT-X-VERSION tags of the Media Playlists are set to the provided version
   * @type {HlsVersion}
   * @memberof HlsManifest
   */
  public hlsMediaPlaylistVersion?: HlsVersion;

  /**
   * If this is set, the EXT-X-VERSION tag of the Master Playlist is set to the provided version
   * @type {HlsVersion}
   * @memberof HlsManifest
   */
  public hlsMasterPlaylistVersion?: HlsVersion;

  constructor(obj: Partial<HlsManifest>) {
    super(obj);
    this.manifestName = map(obj.manifestName);
    this.hlsMediaPlaylistVersion = map(obj.hlsMediaPlaylistVersion);
    this.hlsMasterPlaylistVersion = map(obj.hlsMasterPlaylistVersion);
  }
}

export default HlsManifest;

