import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
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
   * @summary Create HLS Manifest Default
   * @param {HlsManifestDefault} [hlsManifestDefault]
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public create(hlsManifestDefault?: HlsManifestDefault): Promise<HlsManifestDefault> {
    return this.restClient.post<HlsManifestDefault>('/encoding/manifests/hls/default', {}, hlsManifestDefault).then((response) => {
      return new HlsManifestDefault(response);
    });
  }
}
