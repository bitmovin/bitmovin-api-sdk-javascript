import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import ObjectDetectionApi from './objectDetection/ObjectDetectionApi';

/**
 * MachineLearningApi - object-oriented interface
 * @export
 * @class MachineLearningApi
 * @extends {BaseAPI}
 */
export default class MachineLearningApi extends BaseAPI {
  public objectDetection: ObjectDetectionApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.objectDetection = new ObjectDetectionApi(configuration);
  }
}
