import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import {map, mapArray} from '../../common/Mapper';
import JobsApi from './jobs/JobsApi';

/**
 * SimpleApi - object-oriented interface
 * @export
 * @class SimpleApi
 * @extends {BaseAPI}
 */
export default class SimpleApi extends BaseAPI {
  public jobs: JobsApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.jobs = new JobsApi(configuration);
  }
}
