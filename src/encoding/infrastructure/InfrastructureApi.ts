import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import {map, mapArray} from '../../common/Mapper';
import AwsApi from './aws/AwsApi';
import StaticIpsApi from './staticIps/StaticIpsApi';
import AzureApi from './azure/AzureApi';
import GceApi from './gce/GceApi';
import PrewarmedEncoderPoolsApi from './prewarmedEncoderPools/PrewarmedEncoderPoolsApi';

/**
 * InfrastructureApi - object-oriented interface
 * @export
 * @class InfrastructureApi
 * @extends {BaseAPI}
 */
export default class InfrastructureApi extends BaseAPI {
  public aws: AwsApi;
  public staticIps: StaticIpsApi;
  public azure: AzureApi;
  public gce: GceApi;
  public prewarmedEncoderPools: PrewarmedEncoderPoolsApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.aws = new AwsApi(configuration);
    this.staticIps = new StaticIpsApi(configuration);
    this.azure = new AzureApi(configuration);
    this.gce = new GceApi(configuration);
    this.prewarmedEncoderPools = new PrewarmedEncoderPoolsApi(configuration);
  }
}
