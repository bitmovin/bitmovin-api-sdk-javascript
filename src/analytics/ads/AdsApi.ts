import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import {map, mapArray} from '../../common/Mapper';
import QueriesApi from './queries/QueriesApi';

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
