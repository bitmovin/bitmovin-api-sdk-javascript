/**
 * @export
 * @enum {string}
 */
export enum AgentChatDynamicToolState {
  INPUT_STREAMING = 'input-streaming',
  INPUT_AVAILABLE = 'input-available',
  OUTPUT_AVAILABLE = 'output-available',
  OUTPUT_ERROR = 'output-error'
}

export default AgentChatDynamicToolState;

