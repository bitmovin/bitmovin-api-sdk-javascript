import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import ActionsApi from './actions/ActionsApi';
import EncodingsApi from './encodings/EncodingsApi';
import LogsApi from './logs/LogsApi';
import BitmovinResponse from '../../../models/BitmovinResponse';
import LiveStandbyPoolDetails from '../../../models/LiveStandbyPoolDetails';
import LiveStandbyPoolRequest from '../../../models/LiveStandbyPoolRequest';
import LiveStandbyPoolResponse from '../../../models/LiveStandbyPoolResponse';
import LiveStandbyPoolUpdate from '../../../models/LiveStandbyPoolUpdate';
import PaginationResponse from '../../../models/PaginationResponse';

/**
 * StandbyPoolsApi - object-oriented interface
 * @export
 * @class StandbyPoolsApi
 * @extends {BaseAPI}
 */
export default class StandbyPoolsApi extends BaseAPI {
  public actions: ActionsApi;
  public encodings: EncodingsApi;
  public logs: LogsApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.actions = new ActionsApi(configuration);
    this.encodings = new EncodingsApi(configuration);
    this.logs = new LogsApi(configuration);
  }

  /**
   * @summary Create new standby pool
   * @param {LiveStandbyPoolRequest} liveStandbyPoolRequest The pool to be created
   * @throws {BitmovinError}
   * @memberof StandbyPoolsApi
   */
  public create(liveStandbyPoolRequest?: LiveStandbyPoolRequest): Promise<LiveStandbyPoolDetails> {
    return this.restClient.post<LiveStandbyPoolDetails>('/encoding/live/standby-pools', {}, liveStandbyPoolRequest).then((response) => {
      return map(response, LiveStandbyPoolDetails);
    });
  }

  /**
   * @summary Delete standby pool by id
   * @param {string} poolId Id of the standby pool
   * @throws {BitmovinError}
   * @memberof StandbyPoolsApi
   */
  public delete(poolId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      pool_id: poolId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/live/standby-pools/{pool_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Get details of a standby pool by id
   * @param {string} poolId Id of the standby pool
   * @throws {BitmovinError}
   * @memberof StandbyPoolsApi
   */
  public get(poolId: string): Promise<LiveStandbyPoolDetails> {
    const pathParamMap = {
      pool_id: poolId
    };
    return this.restClient.get<LiveStandbyPoolDetails>('/encoding/live/standby-pools/{pool_id}', pathParamMap).then((response) => {
      return map(response, LiveStandbyPoolDetails);
    });
  }

  /**
   * @summary List Standby pools
   * @throws {BitmovinError}
   * @memberof StandbyPoolsApi
   */
  public list(): Promise<PaginationResponse<LiveStandbyPoolResponse>> {
    return this.restClient.get<PaginationResponse<LiveStandbyPoolResponse>>('/encoding/live/standby-pools', {}).then((response) => {
      return new PaginationResponse<LiveStandbyPoolResponse>(response, LiveStandbyPoolResponse);
    });
  }

  /**
   * @summary Partially update standby pool by id
   * @param {string} poolId Id of the standby pool
   * @param {LiveStandbyPoolUpdate} liveStandbyPoolUpdate The updated standby pool object.
   * @throws {BitmovinError}
   * @memberof StandbyPoolsApi
   */
  public patch(poolId: string, liveStandbyPoolUpdate?: LiveStandbyPoolUpdate): Promise<LiveStandbyPoolDetails> {
    const pathParamMap = {
      pool_id: poolId
    };
    return this.restClient.patch<LiveStandbyPoolDetails>('/encoding/live/standby-pools/{pool_id}', pathParamMap, liveStandbyPoolUpdate).then((response) => {
      return map(response, LiveStandbyPoolDetails);
    });
  }
}
