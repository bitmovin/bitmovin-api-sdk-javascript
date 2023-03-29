import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class StreamsConfigUpdateRequest
 */
export class StreamsConfigUpdateRequest {
  /**
   * Player style config (required)
   * @type {any}
   * @memberof StreamsConfigUpdateRequest
   */
  public playerStyle?: any;

  constructor(obj?: Partial<StreamsConfigUpdateRequest>) {
    if(!obj) {
      return;
    }
    this.playerStyle = map(obj.playerStyle);
  }
}

export default StreamsConfigUpdateRequest;

