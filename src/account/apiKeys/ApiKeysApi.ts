import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import AccountApiKey from '../../models/AccountApiKey';
import BitmovinResponse from '../../models/BitmovinResponse';
import PaginationResponse from '../../models/PaginationResponse';

/**
 * ApiKeysApi - object-oriented interface
 * @export
 * @class ApiKeysApi
 * @extends {BaseAPI}
 */
export default class ApiKeysApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Create Api Key
   * @throws {RequiredError}
   * @memberof ApiKeysApi
   */
  public create(): Promise<AccountApiKey> {
    return this.restClient.post<AccountApiKey>('/account/api-keys', {}).then((response) => {
      return new AccountApiKey(response);
    });
  }

  /**
   * @summary Delete Api Key
   * @param {string} apiKeyId Id of the api key
   * @throws {RequiredError}
   * @memberof ApiKeysApi
   */
  public delete(apiKeyId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      api_key_id: apiKeyId
    };
    return this.restClient.delete<BitmovinResponse>('/account/api-keys/{api_key_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary Get Api Key
   * @param {string} apiKeyId Id of the api key
   * @throws {RequiredError}
   * @memberof ApiKeysApi
   */
  public get(apiKeyId: string): Promise<AccountApiKey> {
    const pathParamMap = {
      api_key_id: apiKeyId
    };
    return this.restClient.get<AccountApiKey>('/account/api-keys/{api_key_id}', pathParamMap).then((response) => {
      return new AccountApiKey(response);
    });
  }

  /**
   * @summary List Api Keys
   * @throws {RequiredError}
   * @memberof ApiKeysApi
   */
  public list(): Promise<PaginationResponse<AccountApiKey>> {
    return this.restClient.get<PaginationResponse<AccountApiKey>>('/account/api-keys', {}).then((response) => {
      return new PaginationResponse<AccountApiKey>(response, AccountApiKey);;
    });
  }
}
