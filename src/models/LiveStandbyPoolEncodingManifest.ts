import {map, mapArray} from '../common/Mapper';
import LiveStandbyPoolEncodingManifestType from './LiveStandbyPoolEncodingManifestType';

/**
 * @export
 * @class LiveStandbyPoolEncodingManifest
 */
export class LiveStandbyPoolEncodingManifest {
  /**
   * URL to the manifest
   * @type {string}
   * @memberof LiveStandbyPoolEncodingManifest
   */
  public url?: string;

  /**
   * ID of the manifest that was created for the encoding
   * @type {string}
   * @memberof LiveStandbyPoolEncodingManifest
   */
  public manifestId?: string;

  /**
   * @type {LiveStandbyPoolEncodingManifestType}
   * @memberof LiveStandbyPoolEncodingManifest
   */
  public type?: LiveStandbyPoolEncodingManifestType;

  constructor(obj?: Partial<LiveStandbyPoolEncodingManifest>) {
    if(!obj) {
      return;
    }
    this.url = map(obj.url);
    this.manifestId = map(obj.manifestId);
    this.type = map(obj.type);
  }
}

export default LiveStandbyPoolEncodingManifest;

