import {map, mapArray} from '../common/Mapper';
import AgentChatMessagePart from './AgentChatMessagePart';
import AgentChatMessagePartType from './AgentChatMessagePartType';

/**
 * @export
 * @class AgentChatTextPart
 */
export class AgentChatTextPart extends AgentChatMessagePart {
  /**
   * Discriminator property for AgentChatMessagePart
   * @type {string}
   * @memberof AgentChatTextPart
   */
  public readonly type: AgentChatMessagePartType = AgentChatMessagePartType.TEXT;

  /**
   * Text message content (required)
   * @type {string}
   * @memberof AgentChatTextPart
   */
  public text?: string;

  constructor(obj?: Partial<AgentChatTextPart>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.text = map(obj.text);
  }
}

export default AgentChatTextPart;

