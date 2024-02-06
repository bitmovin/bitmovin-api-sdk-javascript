import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import DvbSubtitleApi from './dvbSubtitle/DvbSubtitleApi';

/**
 * SubtitlesApi - object-oriented interface
 * @export
 * @class SubtitlesApi
 * @extends {BaseAPI}
 */
export default class SubtitlesApi extends BaseAPI {
  public dvbSubtitle: DvbSubtitleApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.dvbSubtitle = new DvbSubtitleApi(configuration);
  }
}
