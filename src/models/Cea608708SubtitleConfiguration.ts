import {map, mapArray} from '../common/Mapper';
import PassthroughMode from './PassthroughMode';

/**
 * @export
 * @class Cea608708SubtitleConfiguration
 */
export class Cea608708SubtitleConfiguration {
  /**
   * If enabled, CEA 608 an CEA 708 subtitles will be copied from the input video stream to the output video stream. Note: This does not work, if the output framerate is different than the input framerate (except doubling the framerate with deinterlacing per field)
   * @type {boolean}
   * @memberof Cea608708SubtitleConfiguration
   */
  public passthroughActivated?: boolean;

  /**
   * @type {PassthroughMode}
   * @memberof Cea608708SubtitleConfiguration
   */
  public passthroughMode?: PassthroughMode;

  constructor(obj?: Partial<Cea608708SubtitleConfiguration>) {
    if(!obj) {
      return;
    }
    this.passthroughActivated = map(obj.passthroughActivated);
    this.passthroughMode = map(obj.passthroughMode);
  }
}

export default Cea608708SubtitleConfiguration;

