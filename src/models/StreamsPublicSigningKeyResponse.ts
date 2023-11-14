import {map, mapArray} from '../common/Mapper';
import StreamsPublicSigningKey from './StreamsPublicSigningKey';

/**
 * @export
 * @class StreamsPublicSigningKeyResponse
 */
export class StreamsPublicSigningKeyResponse {
  /**
   * @type {StreamsPublicSigningKey[]}
   * @memberof StreamsPublicSigningKeyResponse
   */
  public publicKeys?: StreamsPublicSigningKey[];

  constructor(obj?: Partial<StreamsPublicSigningKeyResponse>) {
    if(!obj) {
      return;
    }
    this.publicKeys = mapArray(obj.publicKeys, StreamsPublicSigningKey);
  }
}

export default StreamsPublicSigningKeyResponse;

