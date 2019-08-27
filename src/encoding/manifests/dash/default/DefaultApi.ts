import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import DashManifestDefault from '../../../../models/DashManifestDefault';

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
   * @summary Create DASH Manifest Default
   * @param {DashManifestDefault} dashManifestDefault The DASH Manifest Default to be created
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public create(dashManifestDefault?: DashManifestDefault): Promise<DashManifestDefault> {
    return this.restClient.post<DashManifestDefault>('/encoding/manifests/dash/default', {}, dashManifestDefault).then((response) => {
      return new DashManifestDefault(response);
    });
  }
}
