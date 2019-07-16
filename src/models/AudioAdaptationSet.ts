import {map} from '../common/Mapper';
import Accessibility from './Accessibility';
import AdaptationSet from './AdaptationSet';
import AdaptationSetRole from './AdaptationSetRole';
import CustomAttribute from './CustomAttribute';

/**
 * @export
 * @class AudioAdaptationSet
 */
export class AudioAdaptationSet extends AdaptationSet {
  /**
   * ISO 639-1 (Alpha-2) code identifying the language of the audio adaptation set (required)
   * @type {string}
   * @memberof AudioAdaptationSet
   */
  public lang: string;

  constructor(obj: Partial<AudioAdaptationSet>) {
    super(obj);
    this.lang = map(obj.lang);
  }
}

export default AudioAdaptationSet;

