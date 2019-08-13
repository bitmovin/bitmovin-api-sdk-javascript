import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import AccountInformation from '../../models/AccountInformation';
import {getType, map} from '../../common/Mapper';

/**
 * InformationApi - object-oriented interface
 * @export
 * @class InformationApi
 * @extends {BaseAPI}
 */
export default class InformationApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Current Account Information
   * @throws {RequiredError}
   * @memberof InformationApi
   */
  public get(): Promise<AccountInformation> {
    return this.restClient.get<AccountInformation>('/account/information', {}).then((response) => {
      return new AccountInformation(response);
    });
  }
}
