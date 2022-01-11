import {BaseAPI} from '../../../../../../../common/BaseAPI';
import Configuration from '../../../../../../../common/Configuration';
import {map, mapArray} from '../../../../../../../common/Mapper';
import DashRepresentationTypeResponse from '../../../../../../../models/DashRepresentationTypeResponse';
import {DashRepresentationTypeResponseGetQueryParams, DashRepresentationTypeResponseGetQueryParamsBuilder} from './DashRepresentationTypeResponseGetQueryParams';

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
   * @summary Get DASH representation type
   * @param {string} manifestId Id of the manifest
   * @param {string} periodId Id of the period
   * @param {string} adaptationsetId Id of the adaptation set
   * @param {string} representationId Id of the representation
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof TypeApi
   */
  public get(manifestId: string, periodId: string, adaptationsetId: string, representationId: string, queryParameters?: DashRepresentationTypeResponseGetQueryParams | ((q: DashRepresentationTypeResponseGetQueryParamsBuilder) => DashRepresentationTypeResponseGetQueryParamsBuilder)): Promise<DashRepresentationTypeResponse> {
    const pathParamMap = {
      manifest_id: manifestId,
      period_id: periodId,
      adaptationset_id: adaptationsetId,
      representation_id: representationId
    };
    let queryParams: DashRepresentationTypeResponseGetQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new DashRepresentationTypeResponseGetQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<DashRepresentationTypeResponse>('/encoding/manifests/dash/{manifest_id}/periods/{period_id}/adaptationsets/{adaptationset_id}/representations/{representation_id}/type', pathParamMap, queryParams).then((response) => {
      return map(response, DashRepresentationTypeResponse);
    });
  }
}
