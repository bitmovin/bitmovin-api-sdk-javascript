import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class StreamsAdConfigAd
 */
export class StreamsAdConfigAd {
  /**
   * @type {string}
   * @memberof StreamsAdConfigAd
   */
  public position?: string;

  /**
   * @type {string}
   * @memberof StreamsAdConfigAd
   */
  public url?: string;

  /**
   * @type {string}
   * @memberof StreamsAdConfigAd
   */
  public type?: string;

  constructor(obj?: Partial<StreamsAdConfigAd>) {
    if(!obj) {
      return;
    }
    this.position = map(obj.position);
    this.url = map(obj.url);
    this.type = map(obj.type);
  }
}

export default StreamsAdConfigAd;

