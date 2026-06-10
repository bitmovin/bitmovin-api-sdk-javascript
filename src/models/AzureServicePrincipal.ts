import {map, mapArray} from '../common/Mapper';

/**
 * Azure service principal credentials for Microsoft Entra ID authentication. This authentication method is usable from encoder version 2.273.0 onwards.
 * @export
 * @class AzureServicePrincipal
 */
export class AzureServicePrincipal {
  /**
   * Tenant ID (Directory ID) of the Azure service principal (required)
   * @type {string}
   * @memberof AzureServicePrincipal
   */
  public tenantId?: string;

  /**
   * Client ID of the Azure service principal (required)
   * @type {string}
   * @memberof AzureServicePrincipal
   */
  public clientId?: string;

  /**
   * Client secret of the Azure service principal
   * @type {string}
   * @memberof AzureServicePrincipal
   */
  public clientSecret?: string;

  /**
   * PEM-encoded client certificate and private key of the Azure service principal. Newline symbols must be preserved.
   * @type {string}
   * @memberof AzureServicePrincipal
   */
  public clientCertificate?: string;

  constructor(obj?: Partial<AzureServicePrincipal>) {
    if(!obj) {
      return;
    }
    this.tenantId = map(obj.tenantId);
    this.clientId = map(obj.clientId);
    this.clientSecret = map(obj.clientSecret);
    this.clientCertificate = map(obj.clientCertificate);
  }
}

export default AzureServicePrincipal;

