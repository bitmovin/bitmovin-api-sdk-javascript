import {map, mapArray} from '../common/Mapper';
import ManifestGenerator from './ManifestGenerator';

/**
 * @export
 * @class StartManifestRequest
 */
export class StartManifestRequest {
  /**
   * Version of the manifest generation engine to be used. The `V2` option is currently only supported for manifests including resources from a single encoding and is only valid in combination with encoder versions >=  `2.108.0`.
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

