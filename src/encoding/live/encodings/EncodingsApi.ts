import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import ActionsApi from './actions/ActionsApi';
import DnsMappingsApi from './dnsMappings/DnsMappingsApi';

/**
 * EncodingsApi - object-oriented interface
 * @export
 * @class EncodingsApi
 * @extends {BaseAPI}
 */
export default class EncodingsApi extends BaseAPI {
  public actions: ActionsApi;
  public dnsMappings: DnsMappingsApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.actions = new ActionsApi(configuration);
    this.dnsMappings = new DnsMappingsApi(configuration);
  }
}
