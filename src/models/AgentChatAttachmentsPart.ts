import {map, mapArray} from '../common/Mapper';
import AgentChatAttachmentsData from './AgentChatAttachmentsData';
import AgentChatMessagePart from './AgentChatMessagePart';
import AgentChatMessagePartType from './AgentChatMessagePartType';

/**
 * @export
 * @class AgentChatAttachmentsPart
 */
export class AgentChatAttachmentsPart extends AgentChatMessagePart {
  /**
   * Discriminator property for AgentChatMessagePart
   * @type {string}
   * @memberof AgentChatAttachmentsPart
   */
  public readonly type: AgentChatMessagePartType = AgentChatMessagePartType.DATA_ATTACHMENTS;

  /**
   * Attachment payload (required)
   * @type {AgentChatAttachmentsData}
   * @memberof AgentChatAttachmentsPart
   */
  public data?: AgentChatAttachmentsData;

  constructor(obj?: Partial<AgentChatAttachmentsPart>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.data = map(obj.data, AgentChatAttachmentsData);
  }
}

export default AgentChatAttachmentsPart;

