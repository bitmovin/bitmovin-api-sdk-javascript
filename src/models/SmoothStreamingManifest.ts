import {map} from '../common/Mapper';
import EncodingOutput from './EncodingOutput';
import Manifest from './Manifest';
import ManifestType from './ManifestType';

/**
 * @export
 * @class SmoothStreamingManifest
 */
export class SmoothStreamingManifest extends Manifest {
  /**
   * Filename of the server manifest
   * @type {string}
   * @memberof SmoothStreamingManifest
   */
  public serverManifestName?: string;

  /**
   * Filename of the client manifest
   * @type {string}
   * @memberof SmoothStreamingManifest
   */
  public clientManifestName?: string;

  constructor(obj: Partial<SmoothStreamingManifest>) {
    super(obj);
    this.serverManifestName = map(obj.serverManifestName);
    this.clientManifestName = map(obj.clientManifestName);
  }
}

export default SmoothStreamingManifest;

