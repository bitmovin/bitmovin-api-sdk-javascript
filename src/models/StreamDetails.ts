import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class StreamDetails
 */
export class StreamDetails {
  /**
   * @type {string}
   * @memberof StreamDetails
   */
  public id?: string;

  /**
   * @type {string}
   * @memberof StreamDetails
   */
  public codec?: string;

  /**
   * @type {number}
   * @memberof StreamDetails
   */
  public duration?: number;

  /**
   * @type {number}
   * @memberof StreamDetails
   */
  public position?: number;

  constructor(obj?: Partial<StreamDetails>) {
    if(!obj) {
      return;
    }
    this.id = map(obj.id);
    this.codec = map(obj.codec);
    this.duration = map(obj.duration);
    this.position = map(obj.position);
  }
}

export default StreamDetails;

