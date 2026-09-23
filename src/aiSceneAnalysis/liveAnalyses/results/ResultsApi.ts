import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import LatestApi from './latest/LatestApi';

/**
 * ResultsApi - object-oriented interface
 * @export
 * @class ResultsApi
 * @extends {BaseAPI}
 */
export default class ResultsApi extends BaseAPI {
  public latest: LatestApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.latest = new LatestApi(configuration);
  }
}
