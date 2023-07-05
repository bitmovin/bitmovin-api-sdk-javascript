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
   * @param {SmoothManifestDefault} smoothManifestDefault The Default Smooth Streaming Manifest to be created.
   * @throws {BitmovinError}
   * @memberof DefaultApi
   */
  public create(smoothManifestDefault?: SmoothManifestDefault): Promise<SmoothManifestDefault> {
    return this.restClient.post<SmoothManifestDefault>('/encoding/manifests/smooth/default', {}, smoothManifestDefault).then((response) => {
      return map(response, SmoothManifestDefault);
    });
  }
}
