import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import DvbSubtitleApi from './dvbSubtitle/DvbSubtitleApi';
import WebvttApi from './webvtt/WebvttApi';

/**
 * SubtitlesApi - object-oriented interface
 * @export
 * @class SubtitlesApi
 * @extends {BaseAPI}
 */
export default class SubtitlesApi extends BaseAPI {
  public dvbSubtitle: DvbSubtitleApi;
  public webvtt: WebvttApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.dvbSubtitle = new DvbSubtitleApi(configuration);
    this.webvtt = new WebvttApi(configuration);
  }
}
