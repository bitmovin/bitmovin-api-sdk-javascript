import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import {map, mapArray} from '../../common/Mapper';
import DomainRestrictionApi from './domainRestriction/DomainRestrictionApi';

/**
 * ConfigApi - object-oriented interface
 * @export
 * @class ConfigApi
 * @extends {BaseAPI}
 */
export default class ConfigApi extends BaseAPI {
  public domainRestriction: DomainRestrictionApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.domainRestriction = new DomainRestrictionApi(configuration);
  }
}
