import {BaseAPI} from '../../../../../../../common/BaseAPI';
import Configuration from '../../../../../../../common/Configuration';
import {map, mapArray} from '../../../../../../../common/Mapper';
import BitmovinResponse from '../../../../../../../models/BitmovinResponse';
import SpriteRepresentation from '../../../../../../../models/SpriteRepresentation';
import PaginationResponse from '../../../../../../../models/PaginationResponse';
import {SpriteRepresentationListQueryParams, SpriteRepresentationListQueryParamsBuilder} from './SpriteRepresentationListQueryParams';

/**
 * SpriteApi - object-oriented interface
 * @export
 * @class SpriteApi
 * @extends {BaseAPI}
 */
export default class SpriteApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Add Sprite Representation
   * @param {string} manifestId Id of the manifest
   * @param {string} periodId Id of the period
   * @param {string} adaptationsetId Id of the image adaptation set
   * @param {SpriteRepresentation} spriteRepresentation The Sprite representation to be added to the adaptation set. Note that the adaptation set has to be an image adaptation set.  Only supported for sprites generated with encoder version &#x60;2.76.0&#x60; or above. 
   * @throws {BitmovinError}
   * @memberof SpriteApi
   */
  public create(manifestId: string, periodId: string, adaptationsetId: string, spriteRepresentation?: SpriteRepresentation): Promise<SpriteRepresentation> {
    const pathParamMap = {
      manifest_id: manifestId,
      period_id: periodId,
      adaptationset_id: adaptationsetId
    };
    return this.restClient.post<SpriteRepresentation>('/encoding/manifests/dash/{manifest_id}/periods/{period_id}/adaptationsets/{adaptationset_id}/representations/sprite', pathParamMap, spriteRepresentation).then((response) => {
      return map(response, SpriteRepresentation);
    });
  }

  /**
   * @summary Delete Sprite Representation
   * @param {string} manifestId Id of the manifest
   * @param {string} periodId Id of the period
   * @param {string} adaptationsetId Id of the adaptation set
   * @param {string} representationId Id of the Sprite representation to be deleted
   * @throws {BitmovinError}
   * @memberof SpriteApi
   */
  public delete(manifestId: string, periodId: string, adaptationsetId: string, representationId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      manifest_id: manifestId,
      period_id: periodId,
      adaptationset_id: adaptationsetId,
      representation_id: representationId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/manifests/dash/{manifest_id}/periods/{period_id}/adaptationsets/{adaptationset_id}/representations/sprite/{representation_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Sprite Representation Details
   * @param {string} manifestId Id of the manifest
   * @param {string} periodId Id of the period
   * @param {string} adaptationsetId Id of the adaptation set
   * @param {string} representationId Id of the Sprite representation
   * @throws {BitmovinError}
   * @memberof SpriteApi
   */
  public get(manifestId: string, periodId: string, adaptationsetId: string, representationId: string): Promise<SpriteRepresentation> {
    const pathParamMap = {
      manifest_id: manifestId,
      period_id: periodId,
      adaptationset_id: adaptationsetId,
      representation_id: representationId
    };
    return this.restClient.get<SpriteRepresentation>('/encoding/manifests/dash/{manifest_id}/periods/{period_id}/adaptationsets/{adaptationset_id}/representations/sprite/{representation_id}', pathParamMap).then((response) => {
      return map(response, SpriteRepresentation);
    });
  }

  /**
   * @summary List all Sprite Representations
   * @param {string} manifestId Id of the manifest
   * @param {string} periodId Id of the period
   * @param {string} adaptationsetId Id of the adaptation set
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof SpriteApi
   */
  public list(manifestId: string, periodId: string, adaptationsetId: string, queryParameters?: SpriteRepresentationListQueryParams | ((q: SpriteRepresentationListQueryParamsBuilder) => SpriteRepresentationListQueryParamsBuilder)): Promise<PaginationResponse<SpriteRepresentation>> {
    const pathParamMap = {
      manifest_id: manifestId,
      period_id: periodId,
      adaptationset_id: adaptationsetId
    };
    let queryParams: SpriteRepresentationListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new SpriteRepresentationListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<SpriteRepresentation>>('/encoding/manifests/dash/{manifest_id}/periods/{period_id}/adaptationsets/{adaptationset_id}/representations/sprite', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<SpriteRepresentation>(response, SpriteRepresentation);
    });
  }
}
