import {map} from '../common/Mapper';
import Link from './Link';
import Message from './Message';

/**
 * @export
 * @class ResponseErrorData
 */
export default class ResponseErrorData {
  constructor(obj: any) {
    this.code = map(obj.code);
    this.message = map(obj.message);
    this.developerMessage = map(obj.developerMessage);
    this.links = map<Link>(obj.links, Link);
    this.details = map<Message>(obj.details, Message);
  }

  /**
   * Contains an error code as defined in https://bitmovin.com/encoding-documentation/bitmovin-api/#/introduction/api-error-codes 
   * @type {number}
   * @memberof ResponseErrorData
   */
  public code: number;
  /**
   * General error message
   * @type {string}
   * @memberof ResponseErrorData
   */
  public message: string;
  /**
   * More detailed message meant for developers
   * @type {string}
   * @memberof ResponseErrorData
   */
  public developerMessage: string;
  /**
   * collection of links to webpages containing further information on the topic
   * @type {Array<Link>}
   * @memberof ResponseErrorData
   */
  public links?: Array<Link>;
  /**
   * collection of messages containing more detailed information on the cause of the error
   * @type {Array<Message>}
   * @memberof ResponseErrorData
   */
  public details?: Array<Message>;
}
