import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import {map, mapArray} from '../../common/Mapper';
import CodecCompatibilityApi from './codecCompatibility/CodecCompatibilityApi';

/**
 * TestingApi - object-oriented interface
 * @export
 * @class TestingApi
 * @extends {BaseAPI}
 */
export default class TestingApi extends BaseAPI {
  public codecCompatibility: CodecCompatibilityApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.codecCompatibility = new CodecCompatibilityApi(configuration);
  }
}
