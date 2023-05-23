import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import {map, mapArray} from '../../common/Mapper';
import EncodingsApi from './encodings/EncodingsApi';

/**
 * HistoryApi - object-oriented interface
 * @export
 * @class HistoryApi
 * @extends {BaseAPI}
 */
export default class HistoryApi extends BaseAPI {
  public encodings: EncodingsApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.encodings = new EncodingsApi(configuration);
  }
}
