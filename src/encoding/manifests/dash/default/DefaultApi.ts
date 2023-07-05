import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
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
   * @summary Create Default DASH Manifest
   * @param {DashManifestDefault} dashManifestDefault The Default DASH Manifest to be created.
   * @throws {BitmovinError}
   * @memberof DefaultApi
   */
  public create(dashManifestDefault?: DashManifestDefault): Promise<DashManifestDefault> {
    return this.restClient.post<DashManifestDefault>('/encoding/manifests/dash/default', {}, dashManifestDefault).then((response) => {
      return map(response, DashManifestDefault);
    });
  }
}
