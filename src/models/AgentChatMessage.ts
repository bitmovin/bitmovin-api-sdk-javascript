import {map, mapArray} from '../common/Mapper';
import AgentChatMessagePart from './AgentChatMessagePart';

/**
 * @export
 * @class AgentChatMessage
 */
export class AgentChatMessage {
  /**
   * Message ID (required)
   * @type {string}
   * @memberof AgentChatMessage
   */
  public id?: string;

  /**
   * Message role (required)
   * @type {string}
   * @memberof AgentChatMessage
   */
  public role?: string;

  /**
   * Message parts (required)
   * @type {AgentChatMessagePart[]}
   * @memberof AgentChatMessage
   */
  public parts?: AgentChatMessagePart[];

  constructor(obj?: Partial<AgentChatMessage>) {
    if(!obj) {
      return;
    }
    this.id = map(obj.id);
    this.role = map(obj.role);
    this.parts = mapArray(obj.parts, AgentChatMessagePart);
  }
}

export default AgentChatMessage;

