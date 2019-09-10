import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import {map, mapArray} from '../../common/Mapper';
import AccountInformation from '../../models/AccountInformation';

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
   * @throws {BitmovinError}
   * @memberof InformationApi
   */
  public get(): Promise<AccountInformation> {
    return this.restClient.get<AccountInformation>('/account/information', {}).then((response) => {
      return map(response, AccountInformation);
    });
  }
}
