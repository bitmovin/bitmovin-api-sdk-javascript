import {map} from '../common/Mapper';
import BitmovinResponse from './BitmovinResponse';

/**
 * @export
 * @class PlayerChannel
 */
export default class PlayerChannel extends BitmovinResponse {
  constructor(obj: any) {
    super(obj);
    this.name = map(obj.name);
  }

  /**
   * Name of the resource
   * @type {string}
   * @memberof PlayerChannel
   */
  public name?: string;
}
