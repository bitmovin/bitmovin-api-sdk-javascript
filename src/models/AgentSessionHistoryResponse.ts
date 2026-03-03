import {map, mapArray} from '../common/Mapper';
import AgentChatMessage from './AgentChatMessage';

/**
 * @export
 * @class AgentSessionHistoryResponse
 */
export class AgentSessionHistoryResponse {
  /**
   * Session ID (required)
   * @type {string}
   * @memberof AgentSessionHistoryResponse
   */
  public sessionId?: string;

  /**
   * Agent application name (required)
   * @type {string}
   * @memberof AgentSessionHistoryResponse
   */
  public appName?: string;

  /**
   * User ID (required)
   * @type {string}
   * @memberof AgentSessionHistoryResponse
   */
  public userId?: string;

  /**
   * Session title
   * @type {string}
   * @memberof AgentSessionHistoryResponse
   */
  public title?: string;

  /**
   * Session message history (required)
   * @type {AgentChatMessage[]}
   * @memberof AgentSessionHistoryResponse
   */
  public messages?: AgentChatMessage[];

  constructor(obj?: Partial<AgentSessionHistoryResponse>) {
    if(!obj) {
      return;
    }
    this.sessionId = map(obj.sessionId);
    this.appName = map(obj.appName);
    this.userId = map(obj.userId);
    this.title = map(obj.title);
    this.messages = mapArray(obj.messages, AgentChatMessage);
  }
}

export default AgentSessionHistoryResponse;

