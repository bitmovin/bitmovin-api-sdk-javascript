import {map, mapArray} from '../common/Mapper';
import AgentChatAttachment from './AgentChatAttachment';

/**
 * @export
 * @class AgentChatAttachmentsData
 */
export class AgentChatAttachmentsData {
  /**
   * Attachment list (required)
   * @type {AgentChatAttachment[]}
   * @memberof AgentChatAttachmentsData
   */
  public attachments?: AgentChatAttachment[];

  constructor(obj?: Partial<AgentChatAttachmentsData>) {
    if(!obj) {
      return;
    }
    this.attachments = mapArray(obj.attachments, AgentChatAttachment);
  }
}

export default AgentChatAttachmentsData;

