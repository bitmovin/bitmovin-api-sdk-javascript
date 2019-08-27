import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import WebvttApi from './webvtt/WebvttApi';

/**
 * SubtitlesApi - object-oriented interface
 * @export
 * @class SubtitlesApi
 * @extends {BaseAPI}
 */
export default class SubtitlesApi extends BaseAPI {
  public webvtt: WebvttApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.webvtt = new WebvttApi(configuration);
  }
}
