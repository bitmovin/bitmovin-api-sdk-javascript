import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import {map, mapArray} from '../../common/Mapper';
import StreamsPublicSigningKeyResponse from '../../models/StreamsPublicSigningKeyResponse';
import StreamsSigningKeyResponse from '../../models/StreamsSigningKeyResponse';

/**
 * SigningKeysApi - object-oriented interface
 * @export
 * @class SigningKeysApi
 * @extends {BaseAPI}
 */
export default class SigningKeysApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Create new signing-key
   * @throws {BitmovinError}
   * @memberof SigningKeysApi
   */
  public create(): Promise<StreamsSigningKeyResponse> {
    return this.restClient.post<StreamsSigningKeyResponse>('/streams/signing-keys', {}).then((response) => {
      return map(response, StreamsSigningKeyResponse);
    });
  }

  /**
   * @summary Delete signing-key
   * @param {string} keyId Id of the signing key.
   * @throws {BitmovinError}
   * @memberof SigningKeysApi
   */
  public delete(keyId: string): Promise<Response> {
    const pathParamMap = {
      key_id: keyId
    };
    return this.restClient.delete<Response>('/streams/signing-keys/{key_id}', pathParamMap).then((response) => {
      return map(response, );
    });
  }

  /**
   * @summary Get list of public signing key ids
   * @throws {BitmovinError}
   * @memberof SigningKeysApi
   */
  public get(): Promise<StreamsPublicSigningKeyResponse> {
    return this.restClient.get<StreamsPublicSigningKeyResponse>('/streams/signing-keys', {}).then((response) => {
      return map(response, StreamsPublicSigningKeyResponse);
    });
  }
}
