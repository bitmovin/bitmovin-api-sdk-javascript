import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class EncodingOutputPathsDashManifest
 */
export class EncodingOutputPathsDashManifest {
  /**
   * Id of the dash manifest
   * @type {string}
   * @memberof EncodingOutputPathsDashManifest
   */
  public id?: string;

  /**
   * Path to the dash manifest on the given output
   * @type {string}
   * @memberof EncodingOutputPathsDashManifest
   */
  public path?: string;

  constructor(obj?: Partial<EncodingOutputPathsDashManifest>) {
    if(!obj) {
      return;
    }
    this.id = map(obj.id);
    this.path = map(obj.path);
  }
}

export default EncodingOutputPathsDashManifest;

