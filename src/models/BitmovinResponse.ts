import {map} from '../common/Mapper';

/**
 * @export
 * @class BitmovinResponse
 */
export class BitmovinResponse {
  /**
   * Id of the resource (required)
   * @type {string}
   * @memberof BitmovinResponse
   */
  public id?: string;

  constructor(obj: Partial<BitmovinResponse>) {
    this.id = map(obj.id);
  }
}

export default BitmovinResponse;

