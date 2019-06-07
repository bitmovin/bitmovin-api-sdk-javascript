import {map} from '../common/Mapper';
import BitmovinResponse from './BitmovinResponse';

/**
 * @export
 * @class Period
 */
export class Period extends BitmovinResponse {
  constructor(obj: any) {
    super(obj);
    this.start = map(obj.start);
    this.duration = map(obj.duration);
  }

  /**
   * Starting time in seconds
   * @type {number}
   * @memberof Period
   */
  public start?: number;
  /**
   * Duration in seconds
   * @type {number}
   * @memberof Period
   */
  public duration?: number;
}

export default Period;

