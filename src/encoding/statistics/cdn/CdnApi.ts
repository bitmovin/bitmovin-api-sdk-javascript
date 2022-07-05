import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import UsageApi from './usage/UsageApi';

/**
 * CdnApi - object-oriented interface
 * @export
 * @class CdnApi
 * @extends {BaseAPI}
 */
export default class CdnApi extends BaseAPI {
  public usage: UsageApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.usage = new UsageApi(configuration);
  }
}
