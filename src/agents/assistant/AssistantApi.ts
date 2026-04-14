import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import {map, mapArray} from '../../common/Mapper';
import SessionsApi from './sessions/SessionsApi';

/**
 * AssistantApi - object-oriented interface
 * @export
 * @class AssistantApi
 * @extends {BaseAPI}
 */
export default class AssistantApi extends BaseAPI {
  public sessions: SessionsApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.sessions = new SessionsApi(configuration);
  }
}
