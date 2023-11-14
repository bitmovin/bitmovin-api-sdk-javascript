import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class StreamsPublicSigningKey
 */
export class StreamsPublicSigningKey {
  /**
   * The unique identifier of the key
   * @type {string}
   * @memberof StreamsPublicSigningKey
   */
  public keyId?: string;

  /**
   * @type {Date}
   * @memberof StreamsPublicSigningKey
   */
  public createdAt?: Date;

  constructor(obj?: Partial<StreamsPublicSigningKey>) {
    if(!obj) {
      return;
    }
    this.keyId = map(obj.keyId);
    this.createdAt = map(obj.createdAt, Date);
  }
}

export default StreamsPublicSigningKey;

