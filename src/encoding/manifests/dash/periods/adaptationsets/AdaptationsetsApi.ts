import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import AudioApi from './audio/AudioApi';
import VideoApi from './video/VideoApi';
import SubtitleApi from './subtitle/SubtitleApi';
import RepresentationsApi from './representations/RepresentationsApi';
import ContentprotectionApi from './contentprotection/ContentprotectionApi';
import {getType, map} from '../../../../../common/Mapper';

/**
 * AdaptationsetsApi - object-oriented interface
 * @export
 * @class AdaptationsetsApi
 * @extends {BaseAPI}
 */
export default class AdaptationsetsApi extends BaseAPI {
  public audio: AudioApi;
  public video: VideoApi;
  public subtitle: SubtitleApi;
  public representations: RepresentationsApi;
  public contentprotection: ContentprotectionApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.audio = new AudioApi(configuration);
    this.video = new VideoApi(configuration);
    this.subtitle = new SubtitleApi(configuration);
    this.representations = new RepresentationsApi(configuration);
    this.contentprotection = new ContentprotectionApi(configuration);
  }
}
