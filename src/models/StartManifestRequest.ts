import {map, mapArray} from '../common/Mapper';
import ManifestGenerator from './ManifestGenerator';

/**
 * @export
 * @class StartManifestRequest
 */
export class StartManifestRequest {
  /**
   * Sets the version of the manifest generation engine. The `V2` option is currently only supported for manifests including resources from a single encoding and is only valid in combination with encoder versions >=  `2.108.0`.
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

