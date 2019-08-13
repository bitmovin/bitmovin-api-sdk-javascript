import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import QueriesApi from './queries/QueriesApi';
import {getType, map} from '../../common/Mapper';

/**
 * AdsApi - object-oriented interface
 * @export
 * @class AdsApi
 * @extends {BaseAPI}
 */
export default class AdsApi extends BaseAPI {
  public queries: QueriesApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.queries = new QueriesApi(configuration);
  }
}
