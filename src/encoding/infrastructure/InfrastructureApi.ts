import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import {map, mapArray} from '../../common/Mapper';
import KubernetesApi from './kubernetes/KubernetesApi';
import AwsApi from './aws/AwsApi';
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
  public kubernetes: KubernetesApi;
  public aws: AwsApi;
  public azure: AzureApi;
  public gce: GceApi;
  public prewarmedEncoderPools: PrewarmedEncoderPoolsApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.kubernetes = new KubernetesApi(configuration);
    this.aws = new AwsApi(configuration);
    this.azure = new AzureApi(configuration);
    this.gce = new GceApi(configuration);
    this.prewarmedEncoderPools = new PrewarmedEncoderPoolsApi(configuration);
  }
}
