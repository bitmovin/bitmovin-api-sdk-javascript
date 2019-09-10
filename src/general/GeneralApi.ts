import {BaseAPI} from '../common/BaseAPI';
import Configuration from '../common/Configuration';
import {map, mapArray} from '../common/Mapper';
import ErrorDefinitionsApi from './errorDefinitions/ErrorDefinitionsApi';

/**
 * GeneralApi - object-oriented interface
 * @export
 * @class GeneralApi
 * @extends {BaseAPI}
 */
export default class GeneralApi extends BaseAPI {
  public errorDefinitions: ErrorDefinitionsApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.errorDefinitions = new ErrorDefinitionsApi(configuration);
  }
}
