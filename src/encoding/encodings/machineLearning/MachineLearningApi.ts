import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import ObjectDetectionApi from './objectDetection/ObjectDetectionApi';
import {getType, map} from '../../../common/Mapper';

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
