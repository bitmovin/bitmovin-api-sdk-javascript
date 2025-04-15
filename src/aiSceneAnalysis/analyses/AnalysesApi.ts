import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import {map, mapArray} from '../../common/Mapper';
import ByEncodingIdApi from './byEncodingId/ByEncodingIdApi';

/**
 * AnalysesApi - object-oriented interface
 * @export
 * @class AnalysesApi
 * @extends {BaseAPI}
 */
export default class AnalysesApi extends BaseAPI {
  public byEncodingId: ByEncodingIdApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.byEncodingId = new ByEncodingIdApi(configuration);
  }
}
