import AgentChatAttachmentsPart from './AgentChatAttachmentsPart';
import AgentChatDynamicToolPart from './AgentChatDynamicToolPart';
import AgentChatMessagePartType from './AgentChatMessagePartType';
import AgentChatTextPart from './AgentChatTextPart';

export type AgentChatMessagePartUnion =
  AgentChatTextPart |
  AgentChatAttachmentsPart |
  AgentChatDynamicToolPart;

/**
 * @export
 * @class AgentChatMessagePart
 */
export class AgentChatMessagePart {
  protected static readonly _discriminatorName = 'type';
  protected static readonly _discriminatorMapping: { [key: string]: string; } = {
    "text": 'AgentChatTextPart',
    "data-attachments": 'AgentChatAttachmentsPart',
    "dynamic-tool": 'AgentChatDynamicToolPart'
  };

  constructor(obj?: Partial<AgentChatMessagePart>) {
    if(!obj) {
      return;
    }
  }
}

export default AgentChatMessagePart;

