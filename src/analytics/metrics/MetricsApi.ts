import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import MaxConcurrentviewersApi from './maxConcurrentviewers/MaxConcurrentviewersApi';
import AvgConcurrentviewersApi from './avgConcurrentviewers/AvgConcurrentviewersApi';
import AvgDroppedFramesApi from './avgDroppedFrames/AvgDroppedFramesApi';
import {getType, map} from '../../common/Mapper';

/**
 * MetricsApi - object-oriented interface
 * @export
 * @class MetricsApi
 * @extends {BaseAPI}
 */
export default class MetricsApi extends BaseAPI {
  public maxConcurrentviewers: MaxConcurrentviewersApi;
  public avgConcurrentviewers: AvgConcurrentviewersApi;
  public avgDroppedFrames: AvgDroppedFramesApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.maxConcurrentviewers = new MaxConcurrentviewersApi(configuration);
    this.avgConcurrentviewers = new AvgConcurrentviewersApi(configuration);
    this.avgDroppedFrames = new AvgDroppedFramesApi(configuration);
  }
}
