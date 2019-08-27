import {map} from '../common/Mapper';

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

  constructor(obj: Partial<StreamDetails>) {

    this.id = obj.id;
    this.codec = obj.codec;
    this.duration = obj.duration;
    this.position = obj.position;
  }
}

export default StreamDetails;

