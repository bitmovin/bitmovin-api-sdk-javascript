import {map, mapArray} from '../common/Mapper';
import AclEntry from './AclEntry';
import Output from './Output';
import OutputType from './OutputType';

/**
 * @export
 * @class AzureOutput
 */
export class AzureOutput extends Output {
  /**
   * Discriminator property for Output
   * @type {string}
   * @memberof AzureOutput
   */
  public readonly type: OutputType = OutputType.AZURE;

  /**
   * Azure Account Name (required)
   * @type {string}
   * @memberof AzureOutput
   */
  public accountName?: string;

  /**
   * Azure Account Key (required)
   * @type {string}
   * @memberof AzureOutput
   */
  public accountKey?: string;

  /**
   * Name of the bucket (required)
   * @type {string}
   * @memberof AzureOutput
   */
  public container?: string;

  constructor(obj?: Partial<AzureOutput>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.accountName = map(obj.accountName);
    this.accountKey = map(obj.accountKey);
    this.container = map(obj.container);
  }
}

export default AzureOutput;

