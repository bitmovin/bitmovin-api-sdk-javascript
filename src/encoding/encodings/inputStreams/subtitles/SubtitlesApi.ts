import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import DvbTeletextApi from './dvbTeletext/DvbTeletextApi';

/**
 * SubtitlesApi - object-oriented interface
 * @export
 * @class SubtitlesApi
 * @extends {BaseAPI}
 */
export default class SubtitlesApi extends BaseAPI {
  public dvbTeletext: DvbTeletextApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.dvbTeletext = new DvbTeletextApi(configuration);
  }
}
