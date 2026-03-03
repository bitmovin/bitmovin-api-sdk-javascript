import AgentChatAttachmentsPart from './AgentChatAttachmentsPart';
import AgentChatMessagePartType from './AgentChatMessagePartType';
import AgentChatTextPart from './AgentChatTextPart';

export type AgentChatMessagePartUnion =
  AgentChatTextPart |
  AgentChatAttachmentsPart;

/**
 * @export
 * @class AgentChatMessagePart
 */
export class AgentChatMessagePart {
  protected static readonly _discriminatorName = 'type';
  protected static readonly _discriminatorMapping: { [key: string]: string; } = {
    "text": 'AgentChatTextPart',
    "data-attachments": 'AgentChatAttachmentsPart'
  };

  constructor(obj?: Partial<AgentChatMessagePart>) {
    if(!obj) {
      return;
    }
  }
}

export default AgentChatMessagePart;

