import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class EncodingOutputPathsHlsManifest
 */
export class EncodingOutputPathsHlsManifest {
  /**
   * Id of the HLS manifest
   * @type {string}
   * @memberof EncodingOutputPathsHlsManifest
   */
  public id?: string;

  /**
   * Path to the index file of the HLS manifest on the given output
   * @type {string}
   * @memberof EncodingOutputPathsHlsManifest
   */
  public path?: string;

  constructor(obj?: Partial<EncodingOutputPathsHlsManifest>) {
    if(!obj) {
      return;
    }
    this.id = map(obj.id);
    this.path = map(obj.path);
  }
}

export default EncodingOutputPathsHlsManifest;

