import {BaseAPI} from '../common/BaseAPI';
import Configuration from '../common/Configuration';
import ErrorDefinitionsApi from './errorDefinitions/ErrorDefinitionsApi';
import {getType, map} from '../common/Mapper';

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
