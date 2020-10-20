import {map, mapArray} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';

/**
 * @export
 * @class AzureAccount
 */
export class AzureAccount extends BitmovinResource {
  /**
   * Your Azure Subscription ID (The ID of your subscription where you intend to run the Encoding VMs) (required)
   * @type {string}
   * @memberof AzureAccount
   */
  public subscriptionId?: string;

  /**
   * The name of the resource group where you intend to run the Encoding VMs (required)
   * @type {string}
   * @memberof AzureAccount
   */
  public resourceGroupId?: string;

  /**
   * The ID of your Active Directory where your subscription runs in (required)
   * @type {string}
   * @memberof AzureAccount
   */
  public tenantId?: string;

  constructor(obj?: Partial<AzureAccount>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.subscriptionId = map(obj.subscriptionId);
    this.resourceGroupId = map(obj.resourceGroupId);
    this.tenantId = map(obj.tenantId);
  }
}

export default AzureAccount;

