import {map, mapArray} from '../common/Mapper';
import Input from './Input';
import InputType from './InputType';

/**
 * @export
 * @class AzureInput
 */
export class AzureInput extends Input {
  /**
   * Discriminator property for Input
   * @type {string}
   * @memberof AzureInput
   */
  public readonly type: InputType = InputType.AZURE;

  /**
   * Azure Account Name (required)
   * @type {string}
   * @memberof AzureInput
   */
  public accountName?: string;

  /**
   * Azure Account Key (required)
   * @type {string}
   * @memberof AzureInput
   */
  public accountKey?: string;

  /**
   * Name of the bucket (required)
   * @type {string}
   * @memberof AzureInput
   */
  public container?: string;

  constructor(obj?: Partial<AzureInput>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.accountName = map(obj.accountName);
    this.accountKey = map(obj.accountKey);
    this.container = map(obj.container);
  }
}

export default AzureInput;

