import {map, mapArray} from '../common/Mapper';
import Webhook from './Webhook';
import WebhookHttpMethod from './WebhookHttpMethod';
import WebhookSignature from './WebhookSignature';

/**
 * @export
 * @class LiveEncodingHeartbeatWebhook
 */
export class LiveEncodingHeartbeatWebhook extends Webhook {
  /**
   * The interval of the heartbeat in seconds.
   * @type {number}
   * @memberof LiveEncodingHeartbeatWebhook
   */
  public interval?: number;

  constructor(obj?: Partial<LiveEncodingHeartbeatWebhook>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.interval = map(obj.interval);
  }
}

export default LiveEncodingHeartbeatWebhook;

