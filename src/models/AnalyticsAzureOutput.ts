import {map, mapArray} from '../common/Mapper';
import AclEntry from './AclEntry';
import AnalyticsOutput from './AnalyticsOutput';
import AnalyticsOutputType from './AnalyticsOutputType';

/**
 * @export
 * @class AnalyticsAzureOutput
 */
export class AnalyticsAzureOutput extends AnalyticsOutput {
  /**
   * Discriminator property for AnalyticsOutput
   * @type {string}
   * @memberof AnalyticsAzureOutput
   */
  public readonly type: AnalyticsOutputType = AnalyticsOutputType.AZURE;

  /**
   * Azure Account Name (required)
   * @type {string}
   * @memberof AnalyticsAzureOutput
   */
  public accountName?: string;

  /**
   * Microsoft Azure Account Access Key with the `Contributor Role` (required)
   * @type {string}
   * @memberof AnalyticsAzureOutput
   */
  public accountKey?: string;

  /**
   * Microsoft Azure container name (required)
   * @type {string}
   * @memberof AnalyticsAzureOutput
   */
  public container?: string;

  constructor(obj?: Partial<AnalyticsAzureOutput>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.accountName = map(obj.accountName);
    this.accountKey = map(obj.accountKey);
    this.container = map(obj.container);
  }
}

export default AnalyticsAzureOutput;

