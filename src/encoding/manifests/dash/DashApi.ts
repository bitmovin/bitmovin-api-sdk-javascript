import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import DefaultApi from './default/DefaultApi';
import CustomdataApi from './customdata/CustomdataApi';
import PeriodsApi from './periods/PeriodsApi';
import BitmovinResponse from '../../../models/BitmovinResponse';
import DashManifest from '../../../models/DashManifest';
import Task from '../../../models/Task';
import PaginationResponse from '../../../models/PaginationResponse';
import {DashManifestListQueryParams, DashManifestListQueryParamsBuilder} from './DashManifestListQueryParams';
import {getType, map} from '../../../common/Mapper';

/**
 * DashApi - object-oriented interface
 * @export
 * @class DashApi
 * @extends {BaseAPI}
 */
export default class DashApi extends BaseAPI {
  public default: DefaultApi;
  public customdata: CustomdataApi;
  public periods: PeriodsApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.default = new DefaultApi(configuration);
    this.customdata = new CustomdataApi(configuration);
    this.periods = new PeriodsApi(configuration);
  }

  /**
   * @summary Create DASH Manifest
   * @param {DashManifest} dashManifest The DASH manifest to be created
   * @throws {RequiredError}
   * @memberof DashApi
   */
  public create(dashManifest?: DashManifest): Promise<DashManifest> {
    return this.restClient.post<DashManifest>('/encoding/manifests/dash', {}, dashManifest).then((response) => {
      return new DashManifest(response);
    });
  }

  /**
   * @summary Delete DASH Manifest
   * @param {string} manifestId UUID of the DASH manifest to be deleted
   * @throws {RequiredError}
   * @memberof DashApi
   */
  public delete(manifestId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      manifest_id: manifestId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/manifests/dash/{manifest_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary DASH Manifest Details
   * @param {string} manifestId UUID of the dash manifest
   * @throws {RequiredError}
   * @memberof DashApi
   */
  public get(manifestId: string): Promise<DashManifest> {
    const pathParamMap = {
      manifest_id: manifestId
    };
    return this.restClient.get<DashManifest>('/encoding/manifests/dash/{manifest_id}', pathParamMap).then((response) => {
      return new DashManifest(response);
    });
  }

  /**
   * @summary List DASH Manifests
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof DashApi
   */
  public list(queryParameters?: DashManifestListQueryParams | ((q: DashManifestListQueryParamsBuilder) => DashManifestListQueryParamsBuilder)): Promise<PaginationResponse<DashManifest>> {
    let queryParams: DashManifestListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new DashManifestListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<DashManifest>>('/encoding/manifests/dash', {}, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<DashManifest>(response);
      if (Array.isArray(paginationResponse.items)) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new DashManifest(i));
      }
      return paginationResponse;
    });
  }

  /**
   * @summary Start DASH Manifest Creation
   * @param {string} manifestId Id of the DASH manifest.
   * @throws {RequiredError}
   * @memberof DashApi
   */
  public start(manifestId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      manifest_id: manifestId
    };
    return this.restClient.post<BitmovinResponse>('/encoding/manifests/dash/{manifest_id}/start', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary DASH Manifest Creation Status
   * @param {string} manifestId Id of the DASH manifest.
   * @throws {RequiredError}
   * @memberof DashApi
   */
  public status(manifestId: string): Promise<Task> {
    const pathParamMap = {
      manifest_id: manifestId
    };
    return this.restClient.get<Task>('/encoding/manifests/dash/{manifest_id}/status', pathParamMap).then((response) => {
      return new Task(response);
    });
  }

  /**
   * @summary Stop DASH Manifest Creation
   * @param {string} manifestId Id of the DASH manifest.
   * @throws {RequiredError}
   * @memberof DashApi
   */
  public stop(manifestId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      manifest_id: manifestId
    };
    return this.restClient.post<BitmovinResponse>('/encoding/manifests/dash/{manifest_id}/stop', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }
}
