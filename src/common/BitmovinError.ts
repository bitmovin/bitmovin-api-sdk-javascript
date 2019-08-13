import {Link, Message} from '../models';
import {map} from './Mapper';

export class BitmovinError extends Error {
  public details?: Message[];
  public links?: Link[];

  public shortMessage: string;
  public developerMessage?: string;
  public requestId?: string;
  public errorCode?: number;
  public httpStatusCode: number;

  constructor(message: string, httpStatusCode: number, shortMessage: string, developerMessage?: string, requestId?: string, errorCode?: number, details?: Message[], links?: Link[]) {
    super(message);
    this.name = 'BitmovinError';
    this.shortMessage = map(shortMessage);
    this.httpStatusCode = map(httpStatusCode);
    this.developerMessage = map(developerMessage);
    this.requestId = map(requestId);
    this.errorCode = map(errorCode);
    this.details = map<Message>(details, Message);
    this.links = map<Link>(links, Link);

    // Maintain stack trace if possible
    if (typeof (Error as any).captureStackTrace === 'function') {
      (Error as any).captureStackTrace(this, BitmovinError);
    }

    // Fix prototype chain if possible
    if (typeof (Object as any).setPrototypeOf === 'function') {
      (Object as any).setPrototypeOf(this, new.target.prototype);
      return;
    }

    // Fallback to fix prototype chain if possible
    (this as any).__proto__ = new.target.prototype;
  }
}

export default BitmovinError;
