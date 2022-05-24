import {map, mapArray} from '../common/Mapper';
import EncodingOutputPathsDashManifest from './EncodingOutputPathsDashManifest';
import EncodingOutputPathsHlsManifest from './EncodingOutputPathsHlsManifest';
import EncodingOutputPathsSmoothManifest from './EncodingOutputPathsSmoothManifest';

/**
 * @export
 * @class EncodingOutputPathsForOutput
 */
export class EncodingOutputPathsForOutput {
  /**
   * Output paths for Dash manifests
   * @type {EncodingOutputPathsDashManifest[]}
   * @memberof EncodingOutputPathsForOutput
   */
  public dashManifests?: EncodingOutputPathsDashManifest[];

  /**
   * Output paths for HLS manifests
   * @type {EncodingOutputPathsHlsManifest[]}
   * @memberof EncodingOutputPathsForOutput
   */
  public hlsManifests?: EncodingOutputPathsHlsManifest[];

  /**
   * Output paths for Smooth manifests
   * @type {EncodingOutputPathsSmoothManifest[]}
   * @memberof EncodingOutputPathsForOutput
   */
  public smoothManifests?: EncodingOutputPathsSmoothManifest[];

  constructor(obj?: Partial<EncodingOutputPathsForOutput>) {
    if(!obj) {
      return;
    }
    this.dashManifests = mapArray(obj.dashManifests, EncodingOutputPathsDashManifest);
    this.hlsManifests = mapArray(obj.hlsManifests, EncodingOutputPathsHlsManifest);
    this.smoothManifests = mapArray(obj.smoothManifests, EncodingOutputPathsSmoothManifest);
  }
}

export default EncodingOutputPathsForOutput;

