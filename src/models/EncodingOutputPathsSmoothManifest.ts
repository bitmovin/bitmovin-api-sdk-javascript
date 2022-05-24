import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class EncodingOutputPathsSmoothManifest
 */
export class EncodingOutputPathsSmoothManifest {
  /**
   * Id of the Smooth manifest
   * @type {string}
   * @memberof EncodingOutputPathsSmoothManifest
   */
  public id?: string;

  /**
   * Path to the client manifest of the Smooth manifest on the given output
   * @type {string}
   * @memberof EncodingOutputPathsSmoothManifest
   */
  public clientManifestPath?: string;

  /**
   * Path to the server manifest of the Smooth manifest on the given output
   * @type {string}
   * @memberof EncodingOutputPathsSmoothManifest
   */
  public serverManifestPath?: string;

  constructor(obj?: Partial<EncodingOutputPathsSmoothManifest>) {
    if(!obj) {
      return;
    }
    this.id = map(obj.id);
    this.clientManifestPath = map(obj.clientManifestPath);
    this.serverManifestPath = map(obj.serverManifestPath);
  }
}

export default EncodingOutputPathsSmoothManifest;

