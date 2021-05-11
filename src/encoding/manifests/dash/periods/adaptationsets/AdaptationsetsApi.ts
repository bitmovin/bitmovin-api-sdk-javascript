import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import {map, mapArray} from '../../../../../common/Mapper';
import AudioApi from './audio/AudioApi';
import VideoApi from './video/VideoApi';
import SubtitleApi from './subtitle/SubtitleApi';
import ImageApi from './image/ImageApi';
import RepresentationsApi from './representations/RepresentationsApi';
import ContentprotectionApi from './contentprotection/ContentprotectionApi';

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
  public image: ImageApi;
  public representations: RepresentationsApi;
  public contentprotection: ContentprotectionApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.audio = new AudioApi(configuration);
    this.video = new VideoApi(configuration);
    this.subtitle = new SubtitleApi(configuration);
    this.image = new ImageApi(configuration);
    this.representations = new RepresentationsApi(configuration);
    this.contentprotection = new ContentprotectionApi(configuration);
  }
}
