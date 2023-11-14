import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class StreamsSigningKeyResponse
 */
export class StreamsSigningKeyResponse {
  /**
   * base64-encoded PEM file of the private key
   * @type {string}
   * @memberof StreamsSigningKeyResponse
   */
  public privateKey?: string;

  /**
   * The unique identifier of the key
   * @type {string}
   * @memberof StreamsSigningKeyResponse
   */
  public keyId?: string;

  /**
   * @type {string}
   * @memberof StreamsSigningKeyResponse
   */
  public message?: string;

  constructor(obj?: Partial<StreamsSigningKeyResponse>) {
    if(!obj) {
      return;
    }
    this.privateKey = map(obj.privateKey);
    this.keyId = map(obj.keyId);
    this.message = map(obj.message);
  }
}

export default StreamsSigningKeyResponse;

