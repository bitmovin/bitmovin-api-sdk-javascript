import {map} from '../common/Mapper';
import Input from './Input';

/**
 * @export
 * @class AzureInput
 */
export class AzureInput extends Input {
  constructor(obj: any) {
    super(obj);
    this.accountName = map(obj.accountName);
    this.accountKey = map(obj.accountKey);
    this.container = map(obj.container);
  }

  /**
   * Azure Account Name (required)
   * @type {string}
   * @memberof AzureInput
   */
  public accountName: string;
  /**
   * Azure Account Key (required)
   * @type {string}
   * @memberof AzureInput
   */
  public accountKey: string;
  /**
   * Name of the bucket (required)
   * @type {string}
   * @memberof AzureInput
   */
  public container: string;
}

export default AzureInput;

