import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import {map, mapArray} from '../../common/Mapper';
import KubernetesApi from './kubernetes/KubernetesApi';
import AwsApi from './aws/AwsApi';
import GceApi from './gce/GceApi';

/**
 * InfrastructureApi - object-oriented interface
 * @export
 * @class InfrastructureApi
 * @extends {BaseAPI}
 */
export default class InfrastructureApi extends BaseAPI {
  public kubernetes: KubernetesApi;
  public aws: AwsApi;
  public gce: GceApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.kubernetes = new KubernetesApi(configuration);
    this.aws = new AwsApi(configuration);
    this.gce = new GceApi(configuration);
  }
}
