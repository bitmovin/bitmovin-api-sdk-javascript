import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import DetailsApi from './details/DetailsApi';
import LanguagesApi from './languages/LanguagesApi';
import AdPlacementsApi from './adPlacements/AdPlacementsApi';

/**
 * ByEncodingIdApi - object-oriented interface
 * @export
 * @class ByEncodingIdApi
 * @extends {BaseAPI}
 */
export default class ByEncodingIdApi extends BaseAPI {
  public details: DetailsApi;
  public languages: LanguagesApi;
  public adPlacements: AdPlacementsApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.details = new DetailsApi(configuration);
    this.languages = new LanguagesApi(configuration);
    this.adPlacements = new AdPlacementsApi(configuration);
  }
}
