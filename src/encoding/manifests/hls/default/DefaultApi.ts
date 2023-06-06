import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import HlsManifestDefault from '../../../../models/HlsManifestDefault';

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
   * @summary Create Default HLS Manifest
   * @param {HlsManifestDefault} hlsManifestDefault A Default Manifest is the easiest way to create a manifest file. Its contents will be configured automatically, depending on what output your encoding creates (muxings, thumbnails, sprites, subtitles, DRM information). If you need more control, create a Custom Manifest resource instead. See [documentation](https://developer.bitmovin.com/encoding/docs/default-vs-custom-manifest) page for a comparison
   * @throws {BitmovinError}
   * @memberof DefaultApi
   */
  public create(hlsManifestDefault?: HlsManifestDefault): Promise<HlsManifestDefault> {
    return this.restClient.post<HlsManifestDefault>('/encoding/manifests/hls/default', {}, hlsManifestDefault).then((response) => {
      return map(response, HlsManifestDefault);
    });
  }
}
