import {map} from '../common/Mapper';
import RetryHint from './RetryHint';

/**
 * @export
 * @class ErrorDetails
 */
export class ErrorDetails {
  /**
   * Specific error code (required)
   * @type {number}
   * @memberof ErrorDetails
   */
  public code?: number;

  /**
   * Error group name (required)
   * @type {string}
   * @memberof ErrorDetails
   */
  public category?: string;

  /**
   * Detailed error message (required)
   * @type {string}
   * @memberof ErrorDetails
   */
  public text?: string;

  /**
   * Information if the encoding could potentially succeed when retrying. (required)
   * @type {RetryHint}
   * @memberof ErrorDetails
   */
  public retryHint?: RetryHint;

  constructor(obj: Partial<ErrorDetails>) {

    this.code = obj.code;
    this.category = obj.category;
    this.text = obj.text;
    this.retryHint = obj.retryHint;
  }
}

export default ErrorDetails;

