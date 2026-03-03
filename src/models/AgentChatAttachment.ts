import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class AgentChatAttachment
 */
export class AgentChatAttachment {
  /**
   * Attachment kind (required)
   * @type {string}
   * @memberof AgentChatAttachment
   */
  public kind?: string;

  /**
   * Tool call identifier
   * @type {string}
   * @memberof AgentChatAttachment
   */
  public toolCallId?: string;

  /**
   * Attachment attributes map (required)
   * @type {{ [key: string]: any; }}
   * @memberof AgentChatAttachment
   */
  public attributes?: { [key: string]: any; };

  constructor(obj?: Partial<AgentChatAttachment>) {
    if(!obj) {
      return;
    }
    this.kind = map(obj.kind);
    this.toolCallId = map(obj.toolCallId);
    this.attributes = map(obj.attributes);
  }
}

export default AgentChatAttachment;

