import {map} from '../common/Mapper';
import BitmovinResponse from './BitmovinResponse';

/**
 * @export
 * @class ApiKey
 */
export default class ApiKey extends BitmovinResponse {
  constructor(obj: any) {
    super(obj);
    this.keyValue = map(obj.keyValue);
  }

  /**
   * @type {string}
   * @memberof ApiKey
   */
  public keyValue?: string;
}
