import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import {map, mapArray} from '../../common/Mapper';
import SessionsApi from './sessions/SessionsApi';

/**
 * AisaApi - object-oriented interface
 * @export
 * @class AisaApi
 * @extends {BaseAPI}
 */
export default class AisaApi extends BaseAPI {
  public sessions: SessionsApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.sessions = new SessionsApi(configuration);
  }
}
