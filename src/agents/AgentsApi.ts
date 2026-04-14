import {BaseAPI} from '../common/BaseAPI';
import Configuration from '../common/Configuration';
import {map, mapArray} from '../common/Mapper';
import AisaApi from './aisa/AisaApi';
import AssistantApi from './assistant/AssistantApi';

/**
 * AgentsApi - object-oriented interface
 * @export
 * @class AgentsApi
 * @extends {BaseAPI}
 */
export default class AgentsApi extends BaseAPI {
  public aisa: AisaApi;
  public assistant: AssistantApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.aisa = new AisaApi(configuration);
    this.assistant = new AssistantApi(configuration);
  }
}
