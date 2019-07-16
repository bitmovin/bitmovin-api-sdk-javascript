export class BitmovinError extends Error {
  private developerMessage?: string;
  private requestId?: string;
  private errorCode?: number;
  private httpStatusCode: number;
  private details: any;

  constructor(message: string, httpStatusCode: number, developerMessage?: string, requestId?: string, errorCode?: number, details?: any) {
    super(message);
    this.name = 'BitmovinError';
    this.httpStatusCode = httpStatusCode;
    this.developerMessage = developerMessage;
    this.requestId = requestId;
    this.errorCode = errorCode;
    this.details = details;

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
