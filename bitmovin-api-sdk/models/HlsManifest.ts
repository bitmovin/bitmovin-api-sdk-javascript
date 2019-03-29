import {map} from '../common/Mapper';
import EncodingOutput from './EncodingOutput';
import HlsVersion from './HlsVersion';
import Manifest from './Manifest';
import ManifestType from './ManifestType';

/**
 * @export
 * @class HlsManifest
 */
export default class HlsManifest extends Manifest {
  constructor(obj: any) {
    super(obj);
    this.manifestName = map(obj.manifestName);
    this.hlsMediaPlaylistVersion = map(obj.hlsMediaPlaylistVersion);
    this.hlsMasterPlaylistVersion = map(obj.hlsMasterPlaylistVersion);
  }

  /**
   * The filename of your manifest
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
}
