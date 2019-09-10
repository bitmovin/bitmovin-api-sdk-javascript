import {map, mapArray} from '../common/Mapper';
import BitmovinResponse from './BitmovinResponse';
import Link from './Link';
import MessageType from './MessageType';

/**
 * @export
 * @class Message
 */
export class Message extends BitmovinResponse {
  /**
   * Message type giving a hint on the importance of the message (log level) (required)
   * @type {MessageType}
   * @memberof Message
   */
  public type?: MessageType;

  /**
   * Message text (required)
   * @type {string}
   * @memberof Message
   */
  public text?: string;

  /**
   * Name of the field to which the message is referring to
   * @type {string}
   * @memberof Message
   */
  public field?: string;

  /**
   * collection of links to webpages containing further information on the topic
   * @type {Link[]}
   * @memberof Message
   */
  public links?: Link[];

  /**
   * Service-specific information
   * @type {any}
   * @memberof Message
   */
  public more?: any;

  /**
   * Timestamp when the message occured
   * @type {Date}
   * @memberof Message
   */
  public date?: Date;

  constructor(obj?: Partial<Message>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.type = map(obj.type);
    this.text = map(obj.text);
    this.field = map(obj.field);
    this.links = mapArray(obj.links, Link);
    this.more = map(obj.more);
    this.date = map(obj.date, Date);
  }
}

export default Message;

