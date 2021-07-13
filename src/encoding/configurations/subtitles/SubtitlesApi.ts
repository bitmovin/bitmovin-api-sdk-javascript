import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import DvbSubtitleApi from './dvbSubtitle/DvbSubtitleApi';
import WebvttApi from './webvtt/WebvttApi';
import ImscApi from './imsc/ImscApi';

/**
 * SubtitlesApi - object-oriented interface
 * @export
 * @class SubtitlesApi
 * @extends {BaseAPI}
 */
export default class SubtitlesApi extends BaseAPI {
  public dvbSubtitle: DvbSubtitleApi;
  public webvtt: WebvttApi;
  public imsc: ImscApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.dvbSubtitle = new DvbSubtitleApi(configuration);
    this.webvtt = new WebvttApi(configuration);
    this.imsc = new ImscApi(configuration);
  }
}
