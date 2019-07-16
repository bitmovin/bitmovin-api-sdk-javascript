import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import SmoothManifestContentProtection from '../../../../models/SmoothManifestContentProtection';
import PaginationResponse from '../../../../models/PaginationResponse';
import { SmoothManifestContentProtectionListQueryParams, SmoothManifestContentProtectionListQueryParamsBuilder } from './SmoothManifestContentProtectionListQueryParams';

/**
 * ContentprotectionApi - object-oriented interface
 * @export
 * @class ContentprotectionApi
 * @extends {BaseAPI}
 */
export default class ContentprotectionApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Add Content Protection to Smooth Streaming
   * @param {string} manifestId Id of the Smooth Streaming manifest.
   * @param {SmoothManifestContentProtection} smoothManifestContentProtection The Content Protection to be added
   * @throws {RequiredError}
   * @memberof ContentprotectionApi
   */
  public create(manifestId: string, smoothManifestContentProtection?: SmoothManifestContentProtection): Promise<SmoothManifestContentProtection> {
    const pathParamMap = {
      manifest_id: manifestId
    };
    return this.restClient.post<SmoothManifestContentProtection>('/encoding/manifests/smooth/{manifest_id}/contentprotection', pathParamMap, smoothManifestContentProtection).then((response) => {
      return new SmoothManifestContentProtection(response);
    });
  }

  /**
   * @summary Delete Content Protection of Smooth Streaming
   * @param {string} manifestId Id of the Smooth Streaming manifest.
   * @param {string} protectionId Id of the content protection.
   * @throws {RequiredError}
   * @memberof ContentprotectionApi
   */
  public delete(manifestId: string, protectionId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      manifest_id: manifestId,
      protection_id: protectionId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/manifests/smooth/{manifest_id}/contentprotection/{protection_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary Content Protection of Smooth Streaming Representation Details
   * @param {string} manifestId Id of the Smooth Streaming manifest.
   * @param {string} protectionId Id of the content protection.
   * @throws {RequiredError}
   * @memberof ContentprotectionApi
   */
  public get(manifestId: string, protectionId: string): Promise<SmoothManifestContentProtection> {
    const pathParamMap = {
      manifest_id: manifestId,
      protection_id: protectionId
    };
    return this.restClient.get<SmoothManifestContentProtection>('/encoding/manifests/smooth/{manifest_id}/contentprotection/{protection_id}', pathParamMap).then((response) => {
      return new SmoothManifestContentProtection(response);
    });
  }

  /**
   * @summary List Content Protection of Smooth Streaming
   * @param {string} manifestId Id of the Smooth Streaming manifest.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof ContentprotectionApi
   */
  public list(manifestId: string, queryParameters?: SmoothManifestContentProtectionListQueryParams | ((q: SmoothManifestContentProtectionListQueryParamsBuilder) => SmoothManifestContentProtectionListQueryParamsBuilder)): Promise<PaginationResponse<SmoothManifestContentProtection>> {
    const pathParamMap = {
      manifest_id: manifestId
    };
    let queryParams: SmoothManifestContentProtectionListQueryParams = {};
    if (typeof queryParameters === 'function') {
        queryParams = queryParameters(new SmoothManifestContentProtectionListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
        queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<SmoothManifestContentProtection>>('/encoding/manifests/smooth/{manifest_id}/contentprotection', pathParamMap, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<SmoothManifestContentProtection>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new SmoothManifestContentProtection(i));
      }
      return paginationResponse;
    });
  }
}
