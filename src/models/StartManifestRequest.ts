import {map, mapArray} from '../common/Mapper';
import ManifestGenerator from './ManifestGenerator';

/**
 * @export
 * @class StartManifestRequest
 */
export class StartManifestRequest {
  /**
   * Major version of the manifest generator to be used. `V2` is the recommended option and requires the following minimum encoder versions: 2.121.0 for DASH, 2.111.0 for HLS, 2.108.0 for SMOOTH. The default value depends on the sign-up date of your organization. See [documentation](https://developer.bitmovin.com/encoding/docs/manifest-generator-v2) page for a detailed explanation. 
   * @type {ManifestGenerator}
   * @memberof StartManifestRequest
   */
  public manifestGenerator?: ManifestGenerator;

  constructor(obj?: Partial<StartManifestRequest>) {
    if(!obj) {
      return;
    }
    this.manifestGenerator = map(obj.manifestGenerator);
  }
}

export default StartManifestRequest;

