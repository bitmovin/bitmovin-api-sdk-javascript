import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import ManifestTypeResponse from '../../../models/ManifestTypeResponse';

/**
 * TypeApi - object-oriented interface
 * @export
 * @class TypeApi
 * @extends {BaseAPI}
 */
export default class TypeApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Get Manifest Type
   * @param {string} manifestId UUID of the manifest
   * @throws {BitmovinError}
   * @memberof TypeApi
   */
  public get(manifestId: string): Promise<ManifestTypeResponse> {
    const pathParamMap = {
      manifest_id: manifestId
    };
    return this.restClient.get<ManifestTypeResponse>('/encoding/manifests/{manifest_id}/type', pathParamMap).then((response) => {
      return map(response, ManifestTypeResponse);
    });
  }
}
