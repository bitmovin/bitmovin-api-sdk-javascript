import {map} from '../common/Mapper';
import AclEntry from './AclEntry';
import Output from './Output';

/**
 * @export
 * @class AzureOutput
 */
export class AzureOutput extends Output {
  constructor(obj: any) {
    super(obj);
    this.accountName = map(obj.accountName);
    this.accountKey = map(obj.accountKey);
    this.container = map(obj.container);
  }

  /**
   * Azure Account Name (required)
   * @type {string}
   * @memberof AzureOutput
   */
  public accountName: string;
  /**
   * Azure Account Key (required)
   * @type {string}
   * @memberof AzureOutput
   */
  public accountKey: string;
  /**
   * Name of the bucket (required)
   * @type {string}
   * @memberof AzureOutput
   */
  public container: string;
}

export default AzureOutput;

