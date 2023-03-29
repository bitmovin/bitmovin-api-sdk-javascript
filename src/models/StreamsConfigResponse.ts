import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class StreamsConfigResponse
 */
export class StreamsConfigResponse {
  /**
   * The identifier of the stream config
   * @type {string}
   * @memberof StreamsConfigResponse
   */
  public id?: string;

  /**
   * UUID of the associated organization
   * @type {string}
   * @memberof StreamsConfigResponse
   */
  public orgId?: string;

  /**
   * Player style config
   * @type {any}
   * @memberof StreamsConfigResponse
   */
  public playerStyle?: any;

  constructor(obj?: Partial<StreamsConfigResponse>) {
    if(!obj) {
      return;
    }
    this.id = map(obj.id);
    this.orgId = map(obj.orgId);
    this.playerStyle = map(obj.playerStyle);
  }
}

export default StreamsConfigResponse;

