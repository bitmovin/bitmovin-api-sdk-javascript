import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class AgentSessionResponse
 */
export class AgentSessionResponse {
  /**
   * Session ID (required)
   * @type {string}
   * @memberof AgentSessionResponse
   */
  public sessionId?: string;

  /**
   * Agent application name (required)
   * @type {string}
   * @memberof AgentSessionResponse
   */
  public appName?: string;

  /**
   * User ID (required)
   * @type {string}
   * @memberof AgentSessionResponse
   */
  public userId?: string;

  constructor(obj?: Partial<AgentSessionResponse>) {
    if(!obj) {
      return;
    }
    this.sessionId = map(obj.sessionId);
    this.appName = map(obj.appName);
    this.userId = map(obj.userId);
  }
}

export default AgentSessionResponse;

