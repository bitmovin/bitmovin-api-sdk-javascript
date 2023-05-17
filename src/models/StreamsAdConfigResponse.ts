import {map, mapArray} from '../common/Mapper';
import StreamsAdConfigAd from './StreamsAdConfigAd';

/**
 * @export
 * @class StreamsAdConfigResponse
 */
export class StreamsAdConfigResponse {
  /**
   * The identifier of the streams ad config
   * @type {string}
   * @memberof StreamsAdConfigResponse
   */
  public id?: string;

  /**
   * @type {StreamsAdConfigAd[]}
   * @memberof StreamsAdConfigResponse
   */
  public ads?: StreamsAdConfigAd[];

  constructor(obj?: Partial<StreamsAdConfigResponse>) {
    if(!obj) {
      return;
    }
    this.id = map(obj.id);
    this.ads = mapArray(obj.ads, StreamsAdConfigAd);
  }
}

export default StreamsAdConfigResponse;

