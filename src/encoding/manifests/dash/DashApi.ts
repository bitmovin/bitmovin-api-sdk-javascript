import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import DefaultApi from './default/DefaultApi';
import CustomdataApi from './customdata/CustomdataApi';
import PeriodsApi from './periods/PeriodsApi';
import BitmovinResponse from '../../../models/BitmovinResponse';
import DashManifest from '../../../models/DashManifest';
import StartManifestRequest from '../../../models/StartManifestRequest';
import Task from '../../../models/Task';
import PaginationResponse from '../../../models/PaginationResponse';
import {DashManifestListQueryParams, DashManifestListQueryParamsBuilder} from './DashManifestListQueryParams';

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
   * @summary Create Custom DASH Manifest
   * @param {DashManifest} dashManifest A Custom DASH Manifest gives you full control over its contents. Add Periods, Adaptation Sets, Representations, Content Protections or Custom XML Elements via the respective endpoints. If you need a simpler solution, create a Default Manifest instead. See TODO: link
   * @throws {BitmovinError}
   * @memberof DashApi
   */
  public create(dashManifest?: DashManifest): Promise<DashManifest> {
    return this.restClient.post<DashManifest>('/encoding/manifests/dash', {}, dashManifest).then((response) => {
      return map(response, DashManifest);
    });
  }

  /**
   * @summary Delete DASH Manifest
   * @param {string} manifestId UUID of the DASH Manifest to be deleted
   * @throws {BitmovinError}
   * @memberof DashApi
   */
  public delete(manifestId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      manifest_id: manifestId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/manifests/dash/{manifest_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary DASH Manifest Details
   * @param {string} manifestId UUID of the DASH Manifest
   * @throws {BitmovinError}
   * @memberof DashApi
   */
  public get(manifestId: string): Promise<DashManifest> {
    const pathParamMap = {
      manifest_id: manifestId
    };
    return this.restClient.get<DashManifest>('/encoding/manifests/dash/{manifest_id}', pathParamMap).then((response) => {
      return map(response, DashManifest);
    });
  }

  /**
   * @summary Manifest Start Details
   * @param {string} manifestId Id of the manifest
   * @throws {BitmovinError}
   * @memberof DashApi
   */
  public getStartRequest(manifestId: string): Promise<StartManifestRequest> {
    const pathParamMap = {
      manifest_id: manifestId
    };
    return this.restClient.get<StartManifestRequest>('/encoding/manifests/dash/{manifest_id}/start', pathParamMap).then((response) => {
      return map(response, StartManifestRequest);
    });
  }

  /**
   * @summary List DASH Manifests
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
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
      return new PaginationResponse<DashManifest>(response, DashManifest);
    });
  }

  /**
   * @summary Start DASH Manifest Creation
   * @param {string} manifestId Id of the DASH Manifest.
   * @param {StartManifestRequest} [startManifestRequest] Manifest Startup Options
   * @throws {BitmovinError}
   * @memberof DashApi
   */
  public start(manifestId: string, startManifestRequest?: StartManifestRequest): Promise<BitmovinResponse> {
    const pathParamMap = {
      manifest_id: manifestId
    };
    return this.restClient.post<BitmovinResponse>('/encoding/manifests/dash/{manifest_id}/start', pathParamMap, startManifestRequest).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary DASH Manifest Creation Status
   * @param {string} manifestId Id of the DASH Manifest.
   * @throws {BitmovinError}
   * @memberof DashApi
   */
  public status(manifestId: string): Promise<Task> {
    const pathParamMap = {
      manifest_id: manifestId
    };
    return this.restClient.get<Task>('/encoding/manifests/dash/{manifest_id}/status', pathParamMap).then((response) => {
      return map(response, Task);
    });
  }

  /**
   * @summary Stop DASH Manifest Creation
   * @param {string} manifestId Id of the DASH Manifest.
   * @throws {BitmovinError}
   * @memberof DashApi
   */
  public stop(manifestId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      manifest_id: manifestId
    };
    return this.restClient.post<BitmovinResponse>('/encoding/manifests/dash/{manifest_id}/stop', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }
}
