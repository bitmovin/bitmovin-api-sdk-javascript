import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
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
   * @summary Create Smooth Streaming Manifest Default
   * @param {SmoothManifestDefault} [smoothManifestDefault]
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public create(smoothManifestDefault?: SmoothManifestDefault): Promise<SmoothManifestDefault> {
    return this.restClient.post<SmoothManifestDefault>('/encoding/manifests/smooth/default', {}, smoothManifestDefault).then((response) => {
      return new SmoothManifestDefault(response);
    });
  }
}
