import {map} from '../common/Mapper';
import Input from './Input';

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
  public type: 'AZURE' = 'AZURE';

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

  constructor(obj: Partial<AzureInput>) {
    super(obj);

    this.accountName = obj.accountName;
    this.accountKey = obj.accountKey;
    this.container = obj.container;
  }
}

export default AzureInput;

