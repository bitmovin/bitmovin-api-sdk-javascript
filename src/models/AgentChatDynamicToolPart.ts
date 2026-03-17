import {map, mapArray} from '../common/Mapper';
import AgentChatDynamicToolState from './AgentChatDynamicToolState';
import AgentChatMessagePart from './AgentChatMessagePart';
import AgentChatMessagePartType from './AgentChatMessagePartType';

/**
 * @export
 * @class AgentChatDynamicToolPart
 */
export class AgentChatDynamicToolPart extends AgentChatMessagePart {
  /**
   * Discriminator property for AgentChatMessagePart
   * @type {string}
   * @memberof AgentChatDynamicToolPart
   */
  public readonly type: AgentChatMessagePartType = AgentChatMessagePartType.DYNAMIC_TOOL;

  /**
   * Tool name (required)
   * @type {string}
   * @memberof AgentChatDynamicToolPart
   */
  public toolName?: string;

  /**
   * Tool call identifier (required)
   * @type {string}
   * @memberof AgentChatDynamicToolPart
   */
  public toolCallId?: string;

  /**
   * Tool invocation lifecycle state (required)
   * @type {AgentChatDynamicToolState}
   * @memberof AgentChatDynamicToolPart
   */
  public state?: AgentChatDynamicToolState;

  /**
   * Tool input payload.
   * @type {{ [key: string]: any; }}
   * @memberof AgentChatDynamicToolPart
   */
  public input?: { [key: string]: any; };

  /**
   * Tool output payload.
   * @type {{ [key: string]: any; }}
   * @memberof AgentChatDynamicToolPart
   */
  public output?: { [key: string]: any; };

  /**
   * Error text for failed tool completion.
   * @type {string}
   * @memberof AgentChatDynamicToolPart
   */
  public errorText?: string;

  constructor(obj?: Partial<AgentChatDynamicToolPart>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.toolName = map(obj.toolName);
    this.toolCallId = map(obj.toolCallId);
    this.state = map(obj.state);
    this.input = map(obj.input);
    this.output = map(obj.output);
    this.errorText = map(obj.errorText);
  }
}

export default AgentChatDynamicToolPart;

