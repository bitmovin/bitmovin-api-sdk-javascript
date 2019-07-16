import {map} from '../common/Mapper';
import Link from './Link';
import Message from './Message';

/**
 * @export
 * @class ResponseErrorData
 */
export class ResponseErrorData {
  /**
   * Contains an error code as defined in https://bitmovin.com/encoding-documentation/bitmovin-api/#/introduction/api-error-codes (required)
   * @type {number}
   * @memberof ResponseErrorData
   */
  public code: number;

  /**
   * General error message (required)
   * @type {string}
   * @memberof ResponseErrorData
   */
  public message: string;

  /**
   * More detailed message meant for developers (required)
   * @type {string}
   * @memberof ResponseErrorData
   */
  public developerMessage: string;

  /**
   * collection of links to webpages containing further information on the topic
   * @type {Link[]}
   * @memberof ResponseErrorData
   */
  public links?: Link[];

  /**
   * collection of messages containing more detailed information on the cause of the error
   * @type {Message[]}
   * @memberof ResponseErrorData
   */
  public details?: Message[];

  constructor(obj: Partial<ResponseErrorData>) {
    this.code = map(obj.code);
    this.message = map(obj.message);
    this.developerMessage = map(obj.developerMessage);
    this.links = map<Link>(obj.links, Link);
    this.details = map<Message>(obj.details, Message);
  }
}

export default ResponseErrorData;

