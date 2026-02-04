import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import LiveStandbyPoolAcquireEncoding from '../../../../models/LiveStandbyPoolAcquireEncoding';
import LiveStandbyPoolEncoding from '../../../../models/LiveStandbyPoolEncoding';

/**
 * ActionsApi - object-oriented interface
 * @export
 * @class ActionsApi
 * @extends {BaseAPI}
 */
export default class ActionsApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Acquire an encoding from a standby pool
   * @param {string} poolId Id of the standby pool
   * @param {LiveStandbyPoolAcquireEncoding} [liveStandbyPoolAcquireEncoding] The optionally provided payload for acquiring an encoding
   * @throws {BitmovinError}
   * @memberof ActionsApi
   */
  public acquireEncoding(poolId: string, liveStandbyPoolAcquireEncoding?: LiveStandbyPoolAcquireEncoding): Promise<LiveStandbyPoolEncoding> {
    const pathParamMap = {
      pool_id: poolId
    };
    return this.restClient.post<LiveStandbyPoolEncoding>('/encoding/live/standby-pools/{pool_id}/actions/acquire-encoding', pathParamMap, liveStandbyPoolAcquireEncoding).then((response) => {
      return map(response, LiveStandbyPoolEncoding);
    });
  }

  /**
   * @summary Delete error encodings from the standby pool
   * @param {string} poolId Id of the standby pool
   * @throws {BitmovinError}
   * @memberof ActionsApi
   */
  public deleteErrorEncodings(poolId: string): Promise<LiveStandbyPoolEncoding> {
    const pathParamMap = {
      pool_id: poolId
    };
    return this.restClient.post<LiveStandbyPoolEncoding>('/encoding/live/standby-pools/{pool_id}/actions/delete-error-encodings', pathParamMap).then((response) => {
      return map(response, LiveStandbyPoolEncoding);
    });
  }
}
