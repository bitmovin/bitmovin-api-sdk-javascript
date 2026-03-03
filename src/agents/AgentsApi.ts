import {BaseAPI} from '../common/BaseAPI';
import Configuration from '../common/Configuration';
import {map, mapArray} from '../common/Mapper';
import AisaApi from './aisa/AisaApi';

/**
 * AgentsApi - object-oriented interface
 * @export
 * @class AgentsApi
 * @extends {BaseAPI}
 */
export default class AgentsApi extends BaseAPI {
  public aisa: AisaApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.aisa = new AisaApi(configuration);
  }
}
