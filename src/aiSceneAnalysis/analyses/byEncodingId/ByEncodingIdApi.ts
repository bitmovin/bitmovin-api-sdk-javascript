import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import DetailsApi from './details/DetailsApi';

/**
 * ByEncodingIdApi - object-oriented interface
 * @export
 * @class ByEncodingIdApi
 * @extends {BaseAPI}
 */
export default class ByEncodingIdApi extends BaseAPI {
  public details: DetailsApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.details = new DetailsApi(configuration);
  }
}
