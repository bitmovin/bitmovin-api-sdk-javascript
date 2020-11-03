import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import {map, mapArray} from '../../common/Mapper';
import RulesApi from './rules/RulesApi';
import IncidentsApi from './incidents/IncidentsApi';

/**
 * AlertingApi - object-oriented interface
 * @export
 * @class AlertingApi
 * @extends {BaseAPI}
 */
export default class AlertingApi extends BaseAPI {
  public rules: RulesApi;
  public incidents: IncidentsApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.rules = new RulesApi(configuration);
    this.incidents = new IncidentsApi(configuration);
  }
}
