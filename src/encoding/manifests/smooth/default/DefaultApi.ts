import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import SmoothManifestDefault from '../../../../models/SmoothManifestDefault';

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export default class DefaultApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Create Default Smooth Streaming Manifest
   * @param {SmoothManifestDefault} smoothManifestDefault A Default Manifest is the easiest way to create a manifest file. Its contents will be configured automatically, depending on what output your encoding creates (muxings, thumbnails, sprites, subtitles, DRM information). If you need more control, create a Custom Manifest resource instead. See [documentation](https://developer.bitmovin.com/encoding/docs/default-vs-custom-manifest) page for a comparison
   * @throws {BitmovinError}
   * @memberof DefaultApi
   */
  public create(smoothManifestDefault?: SmoothManifestDefault): Promise<SmoothManifestDefault> {
    return this.restClient.post<SmoothManifestDefault>('/encoding/manifests/smooth/default', {}, smoothManifestDefault).then((response) => {
      return map(response, SmoothManifestDefault);
    });
  }
}
