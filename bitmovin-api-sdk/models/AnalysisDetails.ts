import {map} from '../common/Mapper';
import AudioStreamDetails from './AudioStreamDetails';
import MetaStreamDetails from './MetaStreamDetails';
import SubtitleStreamDetails from './SubtitleStreamDetails';
import VideoStreamDetails from './VideoStreamDetails';

/**
 * @export
 * @class AnalysisDetails
 */
export default class AnalysisDetails {
  constructor(obj: any) {
    this.videoStreams = map<VideoStreamDetails>(obj.videoStreams, VideoStreamDetails);
    this.audioStreams = map<AudioStreamDetails>(obj.audioStreams, AudioStreamDetails);
    this.metaStreams = map<MetaStreamDetails>(obj.metaStreams, MetaStreamDetails);
    this.subtitleStreams = map<SubtitleStreamDetails>(obj.subtitleStreams, SubtitleStreamDetails);
  }

  /**
   * @type {Array<VideoStreamDetails>}
   * @memberof AnalysisDetails
   */
  public videoStreams?: Array<VideoStreamDetails>;
  /**
   * @type {Array<AudioStreamDetails>}
   * @memberof AnalysisDetails
   */
  public audioStreams?: Array<AudioStreamDetails>;
  /**
   * @type {Array<MetaStreamDetails>}
   * @memberof AnalysisDetails
   */
  public metaStreams?: Array<MetaStreamDetails>;
  /**
   * @type {Array<SubtitleStreamDetails>}
   * @memberof AnalysisDetails
   */
  public subtitleStreams?: Array<SubtitleStreamDetails>;
}
