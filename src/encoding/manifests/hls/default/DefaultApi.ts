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
   * @summary Create HLS Manifest Default
   * @param {HlsManifestDefault} hlsManifestDefault The HLS Manifest to be created
   * @throws {BitmovinError}
   * @memberof DefaultApi
   */
  public create(hlsManifestDefault?: HlsManifestDefault): Promise<HlsManifestDefault> {
    return this.restClient.post<HlsManifestDefault>('/encoding/manifests/hls/default', {}, hlsManifestDefault).then((response) => {
      return map(response, HlsManifestDefault);
    });
  }
}
